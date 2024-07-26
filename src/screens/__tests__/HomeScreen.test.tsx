import React from 'react';
import {render, fireEvent, waitFor} from '@testing-library/react-native';
import HomeScreen from '../home';
import {appStrings} from '../../utils/constants';

const mockNavigate = jest.fn();
jest.mock('@react-navigation/native', () => ({
  ...(jest.requireActual('@react-navigation/native') as any),
  useNavigation: () => ({navigate: mockNavigate}),
}));

describe('HomeScreen', () => {
  it('renders correctly', () => {
    const {getByText} = render(<HomeScreen />);
    expect(getByText('Welcome to RAK-bank')).toBeTruthy();
    expect(getByText('Start')).toBeTruthy();
  });

  it('navigates to Questions screen when Start button is pressed', async () => {
    const {getByText} = render(<HomeScreen />);
    const startButton = getByText('Start');
    fireEvent.press(startButton);
    waitFor(() => {
      expect(mockNavigate).toHaveBeenCalled();
    });
  });

  it('displays texts', () => {
    const {getByText} = render(<HomeScreen />);
    expect(getByText(appStrings.description)).toBeTruthy();
    expect(getByText(appStrings.getStarted)).toBeTruthy();
    expect(getByText(appStrings.tapStart)).toBeTruthy();
  });
});
