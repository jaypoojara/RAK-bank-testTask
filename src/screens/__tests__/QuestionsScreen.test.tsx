import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react-native';
import { IQuestionItem } from '../../interface/questionInterface';
import QuestionsScreen from '../questions';

// Mocking getMaxRiskScore function to return a fixed value for consistency
jest.mock('../../utils/helper.ts', () => ({
  getMaxRiskScore: jest.fn(() => 18), // This is the sum of all option points in the mock data
}));

// Mock Data
const mockQuestions: IQuestionItem[] = [
  {
    key: '1',
    question: 'How would you describe your investment knowledge?',
    options: [
      { key: '1-1', title: 'Novice', points: 1 },
      { key: '1-2', title: 'Intermediate', points: 2 },
      { key: '1-3', title: 'Advanced', points: 3 },
    ],
  },
  {
    key: '2',
    question: 'How long you want to keep the Investment Duration',
    options: [
      { key: '2-1', title: 'Short-term (less than 1 year)', points: 1 },
      { key: '2-2', title: 'Medium-term (1-5 years)', points: 2 },
      { key: '2-3', title: 'Long-term (more than 5 years)', points: 3 },
    ],
  },
  {
    key: '3',
    question: 'How comfortable are you with taking risks?',
    options: [
      { key: '3-1', title: 'Very risk-averse', points: 1 },
      { key: '3-2', title: 'Somewhat risk-averse', points: 2 },
      { key: '3-3', title: 'Neutral Somewhat risk-tolerant', points: 3 },
      { key: '3-4', title: 'Very risk-tolerant', points: 4 },
    ],
  },
  {
    key: '4',
    question: 'What percentage of your income are you willing to invest?',
    options: [
      { key: '4-1', title: 'Less than 10%', points: 1 },
      { key: '4-2', title: '10-25%', points: 2 },
      { key: '4-3', title: '25-50%', points: 3 },
      { key: '4-4', title: 'More than 50%', points: 4 },
    ],
  },
  {
    key: '5',
    question: 'How would you react to a sudden drop in the value of your investments?',
    options: [
      { key: '5-1', title: 'Panic and sell immediately', points: 1 },
      { key: '5-2', title: 'Monitor closely and consider selling', points: 2 },
      { key: '5-3', title: 'Hold and wait for recovery', points: 3 },
      {
        key: '5-4',
        title: 'See it as a buying opportunity and invest more',
        points: 4,
      },
    ],
  },
];

// Mock for useNavigation hook
const mockNavigation = {
  reset: jest.fn(),
};

jest.mock('@react-navigation/native', () => ({
  useNavigation: () => mockNavigation,
}));

describe('QuestionsScreen', () => {
  it('should navigate to Result screen with correct totalScore on Finish button click', () => {
    // Render the QuestionsScreen component
    render(<QuestionsScreen />);

    expect(screen.getByText(mockQuestions[0].question)).toBeTruthy();
    // Select and submit the first question's option
    fireEvent.press(screen.getByText(mockQuestions[0].options[0].title));
    fireEvent.press(screen.getByText('Next')); // Click Next button

    expect(screen.getByText(mockQuestions[1].question)).toBeTruthy();
    // // Select and submit the second question's option
    fireEvent.press(screen.getByText(mockQuestions[1].options[0].title));
    fireEvent.press(screen.getByText('Next')); // Click Next button

    expect(screen.getByText(mockQuestions[2].question)).toBeTruthy();
    // Select and submit the third question's option
    fireEvent.press(screen.getByText(mockQuestions[2].options[0].title));
    fireEvent.press(screen.getByText('Next')); // Click Next button

    expect(screen.getByText(mockQuestions[3].question)).toBeTruthy();
    // Select and submit the fourth question's option
    fireEvent.press(screen.getByText(mockQuestions[3].options[0].title));
    fireEvent.press(screen.getByText('Next')); // Click Next button

    expect(screen.getByText(mockQuestions[4].question)).toBeTruthy();
    // Select and submit the fifth question's option
    fireEvent.press(screen.getByText(mockQuestions[4].options[0].title));
    fireEvent.press(screen.getByText('Finish')); // Click Next button

    // Check if the navigation.reset was called with correct parameters
    expect(mockNavigation.reset).toHaveBeenCalledWith({
      index: 1,
      routes: [
        { name: 'Home' },
        {
          name: 'Result',
          params: { totalScore: 5 }, // sum of selected points
        },
      ],
    });
  });
});
