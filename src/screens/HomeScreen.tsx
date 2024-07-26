import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import AppButton from '../components/AppButton';
import {AppNavigationProps} from '../../App';

const HomeScreen = () => {
  const navigation = useNavigation<AppNavigationProps>();

  return (
    <View style={styles.container}>
      <Text>Lets begin</Text>
      <AppButton
        title="Start"
        onPress={() => {
          navigation.navigate('Questions');
        }}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {justifyContent: 'center', alignItems: 'center', flex: 1},
});
