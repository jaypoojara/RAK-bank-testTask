import {
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import {colors} from '../utils/theme';

interface Props extends TouchableOpacityProps {
  title: string;
  style?: StyleProp<ViewStyle>;
}

const AppButton = (props: Props) => {
  const {title, disabled} = props;
  return (
    <TouchableOpacity
      {...props}
      style={[styles.container, props.style, disabled && styles.disabled]}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    borderRadius: 10,
    paddingHorizontal: 40,
    paddingVertical: 20,
    alignItems: 'center',
  },
  disabled: {
    backgroundColor: '#A2A2A2',
  },
  title: {
    color: 'white',
    fontSize: 16,
    fontWeight: '900',
    justifyContent: 'center',
  },
});
