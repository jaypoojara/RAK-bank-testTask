import {StyleProp, TouchableOpacity, View, ViewStyle} from 'react-native';
import React from 'react';
import {TouchableOpacityProps} from 'react-native-gesture-handler';
import {styles} from './styles';

export interface IRadioButtonProps extends TouchableOpacityProps {
  value?: boolean;
  onChange?: (arg: boolean) => void;
  containerStyle?: StyleProp<ViewStyle>;
  fillStyle?: StyleProp<ViewStyle>;
}

const RadioButton = (props: IRadioButtonProps) => {
  const {value = false, onChange} = props;
  return (
    <TouchableOpacity
      testID="radio-button"
      {...props}
      onPress={() => onChange?.(!value)}>
      <View style={[styles.container, props.containerStyle]}>
        {value && (
          <View testID="radio-fill" style={[styles.fill, props.fillStyle]} />
        )}
      </View>
    </TouchableOpacity>
  );
};

export default RadioButton;
