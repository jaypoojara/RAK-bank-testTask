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
