import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import RadioButton from '../RadioButton';

describe('RadioButton', () => {
  it('renders correctly', () => {
    const {toJSON} = render(<RadioButton />);
    expect(toJSON()).toMatchSnapshot();
  });

  it('shows filled circle when value is true', () => {
    const {getByTestId} = render(<RadioButton value={true} />);
    const fill = getByTestId('radio-fill');
    expect(fill).toBeTruthy();
  });

  it('shows empty circle when value is false', () => {
    const {queryByTestId} = render(<RadioButton value={false} />);
    const fill = queryByTestId('radio-fill');
    expect(fill).toBeNull();
  });

  it('calls onChange when pressed', () => {
    const onChangeMock = jest.fn();
    const {getByTestId} = render(
      <RadioButton value={false} onChange={onChangeMock} />,
    );
    fireEvent.press(getByTestId('radio-button'));
    expect(onChangeMock).toHaveBeenCalledWith(true);
  });

  it('does not call onChange if no onChange prop is provided', () => {
    const {getByTestId} = render(<RadioButton value={false} />);
    fireEvent.press(getByTestId('radio-button'));
  });
});
