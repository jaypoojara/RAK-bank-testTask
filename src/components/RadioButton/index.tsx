import { View } from 'react-native';
import React from 'react';
import { styles } from './styles';

export interface IRadioButtonProps {
  isActive?: boolean;
}

const RadioButton = ({ isActive }: IRadioButtonProps) => {
  return (
    <View
      style={[
        styles.container,
        isActive ? styles.activeRadioButtonContainer : styles.inActiveRadioButtonContainer,
      ]}
    >
      {isActive && (
        <View
          testID="radio-fill"
          style={[styles.fill, isActive ? styles.activeRadioFill : styles.inActiveRadioFill]}
        />
      )}
    </View>
  );
};

export default RadioButton;
