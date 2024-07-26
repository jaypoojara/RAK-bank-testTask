import {SafeAreaView, Text, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

import {AppNavigationProps} from '../../../App';
import {appStrings} from '../../utils/constants';
import {styles} from './styles';
import {AppButton} from '../../components';

const HomeScreen = () => {
  const navigation = useNavigation<AppNavigationProps>();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.welcomeText}>Welcome to RAK-bank</Text>
      <View>
        <Text style={styles.descriptionText}>{appStrings.description}</Text>
      </View>

      <View style={styles.getStartedContainer}>
        <View>
          <Text style={styles.getStartedText}>{appStrings.getStarted}</Text>
          <Text style={styles.tapStartText}>{appStrings.tapStart}</Text>
        </View>
        <AppButton
          title="Start"
          onPress={() => {
            navigation.navigate('Questions');
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
