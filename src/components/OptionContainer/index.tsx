import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import React from 'react';
import RadioButton, { IRadioButtonProps } from '../RadioButton';
import { styles } from './styles';

type OptionButtonProps = TouchableOpacityProps &
  IRadioButtonProps & {
    title: string;
  };

const OptionContainer = ({ isActive, title, ...touchableOpacityProps }: OptionButtonProps) => {
  return (
    <TouchableOpacity
      {...touchableOpacityProps}
      style={[
        styles.optionItem,
        isActive ? styles.activeOptionContainer : styles.inActiveOptionContainer,
      ]}
    >
      <RadioButton isActive={isActive} />
      <Text
        style={[
          styles.optionText,
          isActive ? styles.activeOptionTextColor : styles.inActiveOptionTextColor,
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default OptionContainer;
