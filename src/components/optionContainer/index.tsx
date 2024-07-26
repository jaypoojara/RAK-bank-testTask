import {
  StyleProp,
  Text,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import React from 'react';
import RadioButton, {IRadioButtonProps} from '../radioButton';
import {IOptionItem} from '../../interface/questionInterface';
import {styles} from './styles';

type OptionButtonProps = TouchableOpacityProps &
  IRadioButtonProps & {
    item: IOptionItem;
    key: string;
    textStyle?: StyleProp<TextStyle>;
  };

const OptionContainer = (props: OptionButtonProps) => {
  return (
    <TouchableOpacity {...props}>
      <RadioButton
        value={props.value}
        onChange={props.onChange}
        fillStyle={props.fillStyle}
        containerStyle={props.containerStyle}
      />
      <Text style={[styles.optionText, props.textStyle]}>
        {props.item.title}
      </Text>
    </TouchableOpacity>
  );
};

export default OptionContainer;
