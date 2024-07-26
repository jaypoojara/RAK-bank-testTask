import React from 'react';
import { render } from '@testing-library/react-native';
import RadioButton from '../RadioButtonnnnnn';


describe('RadioButton Component', () => {
  it('should render correctly when inactive and not selected', () => {
    const { queryByTestId } = render(<RadioButton isActive={false} />);
    expect(queryByTestId('radio-fill')).toBeNull();
  });

  it('should render correctly when active and not selected', () => {
    const { queryByTestId } = render(<RadioButton isActive={false} />);
    expect(queryByTestId('radio-fill')).toBeNull();
  });

  it('should render correctly when inactive and selected', () => {
    const { getByTestId } = render(<RadioButton isActive={true} />);
    expect(getByTestId('radio-fill')).toBeTruthy();
  });

  it('should render correctly when active and selected', () => {
    const { getByTestId } = render(<RadioButton isActive={true} />);
    expect(getByTestId('radio-fill')).toBeTruthy();
  });
});
