import { StyleProp, Text, TouchableOpacity, TouchableOpacityProps, ViewStyle } from 'react-native';
import React from 'react';
import { styles } from './styles';

interface Props extends TouchableOpacityProps {
  title: string;
  style?: StyleProp<ViewStyle>;
}

const AppButton = ({ title, disabled, style, ...touchableOpacityProps }: Props) => {
  return (
    <TouchableOpacity
      {...touchableOpacityProps}
      style={[styles.container, style, disabled && styles.disabled]}
    >
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default AppButton;
