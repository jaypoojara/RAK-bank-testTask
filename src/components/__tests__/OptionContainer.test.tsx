import React from 'react';
import {render} from '@testing-library/react-native';
import OptionContainer from '../OptionContainerrrrrrr';

describe('OptionContainer Component', () => {
  it('should render correctly when inactive and radio button not selected', () => {
    const {getByText, queryByTestId} = render(
      <OptionContainer
        title="Option 1"
        isActive={false}
        key="1"
      />,
    );

    expect(getByText('Option 1')).toBeTruthy();
    expect(queryByTestId('radio-fill')).toBeNull();
  });

  it('should render correctly when active and radio button not selected', () => {
    const {getByText, queryByTestId} = render(
      <OptionContainer title="Option 2" isActive={false} key="2" />,
    );

    expect(getByText('Option 2')).toBeTruthy();
    expect(queryByTestId('radio-fill')).toBeNull();
  });

  it('should render correctly when inactive and radio button selected', () => {
    const {getByText, getByTestId} = render(
      <OptionContainer title="Option 3" isActive={true} key="3" />,
    );

    expect(getByText('Option 3')).toBeTruthy();
    expect(getByTestId('radio-fill')).toBeTruthy();
  });

  it('should render correctly when active and radio button selected', () => {
    const {getByText, getByTestId} = render(
      <OptionContainer title="Option 4" isActive={true} key="4" />,
    );

    expect(getByText('Option 4')).toBeTruthy();
    expect(getByTestId('radio-fill')).toBeTruthy();
  });
});
