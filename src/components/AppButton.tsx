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

interface Props extends TouchableOpacityProps {
  title: string;
  style?: StyleProp<ViewStyle>;
}

const AppButton = (props: Props) => {
  const {title, disabled} = props;
  return (
    <TouchableOpacity
      {...props}
      style={[
        styles.container,
        props.style,
        disabled && {backgroundColor: '#A2A2A2'},
      ]}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'blue',
    borderRadius: 10,
    paddingHorizontal: 40,
    paddingVertical: 20,
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: 16,
    fontWeight: '900',
    justifyContent: 'center',
  },
});
