import {IQuestionItem} from '../interface/questionInterface';

export const getMaxRiskScore = () => {
  const questions: IQuestionItem[] = require('../mock/questions.json');
  return questions.reduce((total, question) => {
    const maxPoints = Math.max(
      ...question.options.map(option => option.points),
    );
    return total + maxPoints;
  }, 0);
};

export const appStrings = {
  description:
    'Answer a few questions about your investment preferences to determine your risk profile. This will help us guide you towards the best options for opening a bank account tailored to your needs.',
  getStarted: 'Ready to get started?',
  tapStart: " Tap 'Start' to begin the questionnaire.",
  yourScore: 'Your Risk Profile Score',
  scoreDescription:
    'Based on your answers, we’ve calculated your risk profile score. This score helps us understand your investment preferences and guide you to the best options for your bank account.',
  thankYou: 'Thank you for completing the questionnaire!',
};
