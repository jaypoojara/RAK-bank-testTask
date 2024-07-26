import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useMemo, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import AppButton from '../components/AppButton';
import {IOptionItem, IQuestionItem} from '../interface/questionInterface';
import RadioButton from '../components/RadioButton';
import {getMaxRiskScore} from '../utils/helper';
import {useNavigation} from '@react-navigation/native';
import {AppNavigationProps} from '../../App';

const QuestionsScreen = () => {
  const navigation = useNavigation<AppNavigationProps>();

  const questionaire: IQuestionItem[] = require('../mock/questions.json');
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

  return (
    <SafeAreaView style={{flex: 1, paddingHorizontal: 15, gap: 20}}>
      <View
        style={{
          height: 20,
          width: '100%',
          overflow: 'hidden',
          borderRadius: 4,
          alignItems: 'flex-end',
        }}>
        <Image
          style={{height: '100%', width: '100%'}}
          source={require('../assets/images/riskGradient.png')}
        />
        <View
          style={{
            backgroundColor: 'white',
            height: 20,
            position: 'absolute',
            width: `${getRiskMeter}%`,
          }}
        />
      </View>
      <View
        style={{
          flex: 1,
          gap: 20,
        }}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: '600',
          }}>
          {currentQuestion.question}
        </Text>

        <View style={{gap: 10}}>
          {currentQuestion.options.map((item, index) => {
            return (
              <View
                key={index.toString()}
                style={{
                  flexDirection: 'row',
                  gap: 12,
                  alignItems: 'center',
                }}>
                <RadioButton
                  value={Boolean(
                    answers[currentQuestionIndex]?.key === item.key,
                  )}
                  onChange={() => {
                    setAnswers(prev => {
                      prev[currentQuestionIndex] = item;
                      return [...prev];
                    });
                  }}
                />
                <Text>{item.title}</Text>
              </View>
            );
          })}
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          gap: 40,
        }}>
        <AppButton
          disabled={isFirstQuestion}
          title="Previous"
          style={styles.btnStyle}
          onPress={prevBtnHandler}
        />
        {isLastQuestion ? (
          <AppButton
            title="Finish"
            style={styles.btnStyle}
            onPress={() => {
              //   navigation.navigate('Result', {
              //     calculateTotalPoints: calculateTotalPoints,
              //   });
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
            }}
          />
        ) : (
          <AppButton
            title="Next"
            disabled={!!!answers[currentQuestionIndex]}
            style={styles.btnStyle}
            onPress={nextBtnHandler}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default QuestionsScreen;

const styles = StyleSheet.create({
  btnStyle: {
    flex: 1,
  },
});
