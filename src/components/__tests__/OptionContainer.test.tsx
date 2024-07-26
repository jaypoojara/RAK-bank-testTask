import React from 'react';
import {render} from '@testing-library/react-native';
import OptionContainer from '../optionContainer';

describe('OptionContainer Component', () => {
  it('should render correctly when inactive and radio button not selected', () => {
    const {getByText, queryByTestId} = render(
      <OptionContainer
        item="Option 1"
        isActive={false}
        value={false}
        key="1"
      />,
    );

    expect(getByText('Option 1')).toBeTruthy();
    expect(queryByTestId('radio-fill')).toBeNull();
  });

  it('should render correctly when active and radio button not selected', () => {
    const {getByText, queryByTestId} = render(
      <OptionContainer item="Option 2" isActive={true} value={false} key="2" />,
    );

    expect(getByText('Option 2')).toBeTruthy();
    expect(queryByTestId('radio-fill')).toBeNull();
  });

  it('should render correctly when inactive and radio button selected', () => {
    const {getByText, getByTestId} = render(
      <OptionContainer item="Option 3" isActive={false} value={true} key="3" />,
    );

    expect(getByText('Option 3')).toBeTruthy();
    expect(getByTestId('radio-fill')).toBeTruthy();
  });

  it('should render correctly when active and radio button selected', () => {
    const {getByText, getByTestId} = render(
      <OptionContainer item="Option 4" isActive={true} value={true} key="4" />,
    );

    expect(getByText('Option 4')).toBeTruthy();
    expect(getByTestId('radio-fill')).toBeTruthy();
  });
});
