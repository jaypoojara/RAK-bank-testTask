import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import React from 'react';
import RadioButton, { IRadioButtonProps } from '../radioButton';
import { styles } from './styles';

type OptionButtonProps = TouchableOpacityProps &
  IRadioButtonProps & {
    item: string;
    key: string;
    isActive: boolean;
  };

const OptionContainer = (props: OptionButtonProps) => {
  return (
    <TouchableOpacity
      {...props}
      style={[
        styles.optionItem,
        props.isActive ? styles.activeOptionContainer : styles.inActiveOptionContainer,
      ]}
    >
      <RadioButton value={props.value} isActive={props.isActive} />
      <Text
        style={[
          styles.optionText,
          props.isActive ? styles.activeOptionTextColor : styles.inActiveOptionTextColor,
        ]}
      >
        {props.item}
      </Text>
    </TouchableOpacity>
  );
};

export default OptionContainer;
