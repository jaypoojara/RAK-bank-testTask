import { StyleProp, Text, TouchableOpacity, TouchableOpacityProps, ViewStyle } from 'react-native';
import React from 'react';
import { styles } from './styles';

interface Props extends TouchableOpacityProps {
  title: string;
  style?: StyleProp<ViewStyle>;
}

const AppButton = (props: Props) => {
  const { title, disabled } = props;
  return (
    <TouchableOpacity
      {...props}
      style={[styles.container, props.style, disabled && styles.disabled]}
    >
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default AppButton;
