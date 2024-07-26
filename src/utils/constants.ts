import { colors } from './theme';

export const appStrings = {
  welcome: 'Welcome to RAK-bank',
  description:
    'Answer a few questions about your investment preferences to determine your risk profile. This will help us guide you towards the best options for opening a bank account tailored to your needs.',
  getStarted: 'Ready to get started?',
  tapStart: " Tap 'Start' to begin the questionnaire.",
  yourScore: 'Your Risk Profile Score',
  scoreDescription:
    'Based on your answers, we’ve calculated your risk profile score. This score helps us understand your investment preferences and guide you to the best options for your bank account.',
  thankYou: 'Thank you for completing the questionnaire!',
  goToHome: 'Go to Home',
};

export const riskMeterLabelData = [
  {
    name: 'Low Risk',
    labelColor: colors.black,
    activeBarColor: colors.green,
  },
  {
    name: 'Medium Risk',
    labelColor: colors.black,
    activeBarColor: colors.yellow,
  },
  {
    name: 'High Risk',
    labelColor: colors.black,
    activeBarColor: colors.red,
  },
];
