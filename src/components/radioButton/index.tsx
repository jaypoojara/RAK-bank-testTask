import { TouchableOpacityProps, View } from 'react-native';
import React from 'react';

import { styles } from './styles';

export interface IRadioButtonProps extends TouchableOpacityProps {
  value?: boolean;
  isActive?: boolean;
}

const RadioButton = (props: IRadioButtonProps) => {
  const { value = false, isActive = false } = props;
  return (
    <View
      style={[
        styles.container,
        isActive ? styles.activeRadioButtonContainer : styles.inActiveRadioButtonContainer,
      ]}
    >
      {value && (
        <View
          testID="radio-fill"
          style={[styles.fill, isActive ? styles.activeRadioFill : styles.inActiveRadioFill]}
        />
      )}
    </View>
  );
};

export default RadioButton;
