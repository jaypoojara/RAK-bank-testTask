import { questionaire } from '../mock';

export const getMaxRiskScore = () => {
  return questionaire.reduce((total, question) => {
    const maxPoints = Math.max(...question.options.map((option) => option.points));
    return total + maxPoints;
  }, 0);
};
