import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {TouchableOpacityProps} from 'react-native-gesture-handler';

interface IProps extends TouchableOpacityProps {
  value?: boolean;
  onChange?: (arg: boolean) => void;
}

const RadioButton = (props: IProps) => {
  const {value = false, onChange} = props;
  return (
    <TouchableOpacity {...props} onPress={() => onChange?.(!value)}>
      <View
        style={{
          height: 20,
          width: 20,
          borderRadius: 20,
          borderWidth: 2,
          borderColor: 'red',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {value && (
          <View
            style={{
              height: '55%',
              width: '55%',
              borderRadius: 20,
              backgroundColor: 'red',
            }}
          />
        )}
      </View>
    </TouchableOpacity>
  );
};

export default RadioButton;

const styles = StyleSheet.create({});
