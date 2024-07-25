import {
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import {TouchableOpacityProps} from 'react-native-gesture-handler';
import {colors} from '../utils/theme';

interface IProps extends TouchableOpacityProps {
  value?: boolean;
  onChange?: (arg: boolean) => void;
  containerStyle?: StyleProp<ViewStyle>;
  fillStyle?: StyleProp<ViewStyle>;
}

const RadioButton = (props: IProps) => {
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

const styles = StyleSheet.create({
  container: {
    height: 30,
    width: 30,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fill: {
    height: '80%',
    width: '80%',
    borderRadius: 5,
    backgroundColor: colors.primary,
  },
});
