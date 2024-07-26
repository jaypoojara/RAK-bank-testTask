import { Image, Text, View, SafeAreaView } from 'react-native';
import React, { useMemo, useState } from 'react';

import { IOptionItem } from '../../interface/questionInterface';
import { getMaxRiskScore } from '../../utils/helper';
import { useNavigation } from '@react-navigation/native';
import { AppNavigationProps } from '../../../App';
import { Images } from '../../assets/Imagesssss';
import { getStyles } from './styles';
import { AppButton, OptionContainer } from '../../components';
import { questionaire } from '../../mock';

const QuestionsScreen = () => {
  const navigation = useNavigation<AppNavigationProps>();

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [answers, setAnswers] = useState<IOptionItem[]>([]);

  const isLastQuestion = currentQuestionIndex === questionaire.length - 1;
  const isFirstQuestion = currentQuestionIndex === 0;

  const nextBtnHandler = () => {
    setCurrentQuestionIndex((prev) => prev + 1);
  };

  const prevBtnHandler = () => {
    setCurrentQuestionIndex((prev) => prev - 1);
  };

  const onRadioBtnChangeHandler = (item: IOptionItem) => {
    setAnswers((prev) => {
      prev[currentQuestionIndex] = item;
      return [...prev];
    });
  };

  const resetNavigationAndNavigate = () => {
    navigation.reset({
      index: 1,
      routes: [
        { name: 'Home' },
        {
          name: 'Result',
          params: {
            totalScore: calculateTotalPoints,
          },
        },
      ],
    });
  };

  const currentQuestion = useMemo(() => {
    return questionaire[currentQuestionIndex];
  }, [currentQuestionIndex]);

  const calculateTotalPoints = useMemo(() => {
    return answers.reduce((total, answer) => (total += answer.points), 0);
  }, [answers]);

  const riskMeter = useMemo(() => {
    return 100 - (calculateTotalPoints / getMaxRiskScore()) * 100;
  }, [calculateTotalPoints]);

  const styles = useMemo(() => {
    return getStyles({ riskMeterWidth: `${riskMeter}%` });
  }, [riskMeter]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentStyle}>
        <View style={styles.riskMeter}>
          <View style={styles.riskMeterContainer}>
            <Image style={styles.riskMeterImage} source={Images.riskGradient} />
            <View style={styles.riskMeterOverlay} />
          </View>
        </View>
        <View style={styles.questionContainer}>
          <View style={styles.questionCard}>
            <Text style={styles.questionText}>{currentQuestion.question}</Text>
            <View style={styles.optionsContainer}>
              {currentQuestion.options.map((item) => {
                return (
                  <OptionContainer
                    title={item.title}
                    key={item.key}
                    onPress={() => {
                      onRadioBtnChangeHandler(item);
                    }}
                    isActive={answers?.[currentQuestionIndex]?.key === item.key}
                  />
                );
              })}
            </View>
          </View>
        </View>
        <View style={styles.navigationButtonsContainer}>
          <AppButton
            disabled={isFirstQuestion}
            title="Back"
            style={styles.btnStyle}
            onPress={prevBtnHandler}
          />
          {isLastQuestion ? (
            <AppButton
              title="Finish"
              style={styles.btnStyle}
              onPress={resetNavigationAndNavigate}
            />
          ) : (
            <AppButton
              title="Next"
              disabled={!answers[currentQuestionIndex]}
              style={styles.btnStyle}
              onPress={nextBtnHandler}
            />
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default QuestionsScreen;
