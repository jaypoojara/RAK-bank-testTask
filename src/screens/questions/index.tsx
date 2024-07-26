import {Image, Text, View, SafeAreaView} from 'react-native';
import React, {useMemo, useState} from 'react';

import {IOptionItem, IQuestionItem} from '../../interface/questionInterface';
import {getMaxRiskScore} from '../../utils/helper';
import {useNavigation} from '@react-navigation/native';
import {AppNavigationProps} from '../../../App';
import {colors} from '../../utils/theme';
import {riskGradient} from '../../assets/images';
import {mockData} from '../../utils/constants';
import {styles} from './styles';
import {AppButton, OptionContainer} from '../../components';

const QuestionsScreen = () => {
  const navigation = useNavigation<AppNavigationProps>();

  const questionaire: IQuestionItem[] = mockData;
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [answers, setAnswers] = useState<IOptionItem[]>([]);

  const currentQuestion = useMemo(() => {
    return questionaire[currentQuestionIndex];
  }, [currentQuestionIndex]);

  const isLastQuestion = currentQuestionIndex === questionaire.length - 1;
  const isFirstQuestion = currentQuestionIndex === 0;

  const nextBtnHandler = () => {
    setCurrentQuestionIndex(prev => prev + 1);
  };

  const prevBtnHandler = () => {
    setCurrentQuestionIndex(prev => prev - 1);
  };

  const calculateTotalPoints = useMemo(() => {
    return answers.reduce((total, answer) => (total += answer.points), 0);
  }, [answers]);

  const getRiskMeter = useMemo(() => {
    return 100 - (calculateTotalPoints / getMaxRiskScore()) * 100;
  }, [calculateTotalPoints]);

  const onRadioBtnChangeHandler = (item: IOptionItem) => {
    setAnswers(prev => {
      prev[currentQuestionIndex] = item;
      return [...prev];
    });
  };

  const resetNavigationAndNavigate = () => {
    navigation.reset({
      index: 1,
      routes: [
        {name: 'Home'},
        {
          name: 'Result',
          params: {
            totalScore: calculateTotalPoints,
          },
        },
      ],
    });
  };

  return (
    <SafeAreaView style={styles().container}>
      <View style={styles().contentStyle}>
        <View style={styles().riskMeter}>
          <View style={styles().riskMeterContainer}>
            <Image style={styles().riskMeterImage} source={riskGradient} />
            <View style={styles(`${getRiskMeter}%`).riskMeterOverlay} />
          </View>
        </View>
        <View style={styles().questionContainer}>
          <View style={styles().questionCard}>
            <Text style={styles().questionText}>
              {currentQuestion.question}
            </Text>
            <View style={styles().optionsContainer}>
              {currentQuestion.options.map((item, index) => {
                return (
                  <OptionContainer
                    item={item}
                    key={index.toString()}
                    onPress={() => {
                      onRadioBtnChangeHandler(item);
                    }}
                    style={[
                      styles().optionItem,
                      {
                        backgroundColor:
                          answers[currentQuestionIndex] === item
                            ? colors.primary
                            : 'transparent',
                      },
                    ]}
                    value={Boolean(
                      answers[currentQuestionIndex]?.key === item.key,
                    )}
                    onChange={() => {
                      onRadioBtnChangeHandler(item);
                    }}
                    fillStyle={{
                      backgroundColor:
                        answers[currentQuestionIndex]?.key === item.key
                          ? colors.white
                          : colors.primary,
                    }}
                    containerStyle={{
                      borderColor:
                        answers[currentQuestionIndex]?.key === item.key
                          ? colors.white
                          : colors.primary,
                    }}
                    textStyle={{
                      color:
                        answers[currentQuestionIndex] === item
                          ? colors.white
                          : colors.black,
                    }}
                  />
                );
              })}
            </View>
          </View>
        </View>
        <View style={styles().navigationButtonsContainer}>
          <AppButton
            disabled={isFirstQuestion}
            title="Back"
            style={styles().btnStyle}
            onPress={prevBtnHandler}
          />
          {isLastQuestion ? (
            <AppButton
              title="Finish"
              style={styles().btnStyle}
              onPress={resetNavigationAndNavigate}
            />
          ) : (
            <AppButton
              title="Next"
              disabled={!!!answers[currentQuestionIndex]}
              style={styles().btnStyle}
              onPress={nextBtnHandler}
            />
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default QuestionsScreen;
