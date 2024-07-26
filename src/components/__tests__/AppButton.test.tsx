import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import AppButton from '../appButton';

describe('AppButton', () => {
  it('renders correctly with title', () => {
    const {getByText} = render(<AppButton title="Click Me" />);
    expect(getByText('Click Me')).toBeTruthy();
  });

  it('handles press events', () => {
    const onPressMock = jest.fn();
    const {getByText} = render(
      <AppButton title="Click Me" onPress={onPressMock} />,
    );
    fireEvent.press(getByText('Click Me'));
    expect(onPressMock).toHaveBeenCalled();
  });
});
