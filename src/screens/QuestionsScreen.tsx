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
import {colors} from '../utils/theme';

const {height} = Dimensions.get('window');

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

  const onRadioBtnChangeHandler = (item: IOptionItem) => {
    setAnswers(prev => {
      prev[currentQuestionIndex] = item;
      return [...prev];
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.riskMeter}>
        <View style={styles.riskMeterContainer}>
          <Image
            style={styles.riskMeterImage}
            source={require('../assets/images/riskGradient.png')}
          />
          <View
            style={[styles.riskMeterOverlay, {width: `${getRiskMeter}%`}]}
          />
        </View>
      </View>
      <View style={styles.questionContainer}>
        <View style={styles.questionCard}>
          <Text style={styles.questionText}>{currentQuestion.question}</Text>
          <View style={styles.optionsContainer}>
            {currentQuestion.options.map((item, index) => {
              return (
                <TouchableOpacity
                  key={index.toString()}
                  onPress={() => onRadioBtnChangeHandler(item)}
                  style={[
                    styles.optionItem,
                    {
                      backgroundColor:
                        answers[currentQuestionIndex] === item
                          ? colors.primary
                          : 'transparent',
                    },
                  ]}>
                  {/* <RadioButton
                    value={Boolean(
                      answers[currentQuestionIndex]?.key === item.key,
                    )}
                    onChange={() => {
                      onRadioBtnChangeHandler(item);
                    }}
                  /> */}
                  <Text
                    style={[
                      styles.optionText,
                      {
                        color:
                          answers[currentQuestionIndex] === item
                            ? 'white'
                            : 'black',
                      },
                    ]}>
                    {item.title}
                  </Text>
                </TouchableOpacity>
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
            onPress={() => {
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
  container: {
    flex: 1,
    paddingHorizontal: 15,
    gap: 90,
    backgroundColor: colors.primary,
  },
  riskMeterContainer: {
    height: 20,
    width: '100%',
    overflow: 'hidden',
    borderRadius: 3,
    alignItems: 'flex-end',
  },
  riskMeterImage: {
    height: '100%',
    width: '100%',
  },
  riskMeterOverlay: {
    backgroundColor: 'white',
    height: 20,
    position: 'absolute',
  },
  questionContainer: {
    flex: 1,
    gap: 40,
  },
  questionCard: {
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOpacity: 0.3,
    padding: 20,
    elevation: 10,
    borderRadius: 10,
    shadowRadius: 10,
    minHeight: height * 0.5,
    gap: 40,
    // justifyContent: 'space-between',
  },
  questionText: {
    fontSize: 20,
    fontWeight: '600',
  },
  optionsContainer: {
    gap: 20,
  },
  optionItem: {
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
    borderColor: colors.primary,
    borderWidth: 1.5,
    padding: 15,
    borderRadius: 8,
  },
  optionText: {
    fontSize: 18,
  },
  navigationButtonsContainer: {
    flexDirection: 'row',
    gap: 40,
  },
  btnStyle: {
    flex: 1,
    backgroundColor: colors.btnColor,
  },
  riskMeter: {
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowOffset: {height: 1, width: 1},
    backgroundColor: '#fff',
    borderRadius: 4,
    borderWidth: 2.5,
    borderColor: '#fff',
    shadowRadius: 5,
  },
});
