import React from 'react';
import { render } from '@testing-library/react-native';
import RadioButton from '../radioButton';


describe('RadioButton Component', () => {
  it('should render correctly when inactive and not selected', () => {
    const { queryByTestId } = render(<RadioButton value={false} isActive={false} />);
    expect(queryByTestId('radio-fill')).toBeNull();
  });

  it('should render correctly when active and not selected', () => {
    const { queryByTestId } = render(<RadioButton value={false} isActive={true} />);
    expect(queryByTestId('radio-fill')).toBeNull();
  });

  it('should render correctly when inactive and selected', () => {
    const { getByTestId } = render(<RadioButton value={true} isActive={false} />);
    expect(getByTestId('radio-fill')).toBeTruthy();
  });

  it('should render correctly when active and selected', () => {
    const { getByTestId } = render(<RadioButton value={true} isActive={true} />);
    expect(getByTestId('radio-fill')).toBeTruthy();
  });
});
