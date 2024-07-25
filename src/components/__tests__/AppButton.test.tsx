import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import AppButton from '../AppButton'; // Adjust the import path based on your structure

describe('AppButton', () => {
  it('renders correctly with title', () => {
    const {getByText} = render(<AppButton title="Click Me" />);
    expect(getByText('Click Me')).toBeTruthy();
  });

  //   it('applies custom styles', () => {
  //     const {getByText} = render(
  //       <AppButton title="Click Me" style={{backgroundColor: 'red'}} />,
  //     );
  //     expect(getByText('Click Me')).toHaveStyle({backgroundColor: 'red'});
  //   });

  //   it('shows disabled style when disabled prop is true', () => {
  //     const {getByText} = render(<AppButton title="Click Me" disabled />);
  //     const button = getByText('Click Me').parent;
  //     expect(button).toHaveStyle({backgroundColor: '#A2A2A2'});
  //   });

  it('handles press events', () => {
    const onPressMock = jest.fn();
    const {getByText} = render(
      <AppButton title="Click Me" onPress={onPressMock} />,
    );
    fireEvent.press(getByText('Click Me'));
    expect(onPressMock).toHaveBeenCalled();
  });
});
