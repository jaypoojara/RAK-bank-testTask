import {Button, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import AppButton from '../components/AppButton';
import {AppNavigationProps} from '../../App';
import {appStrings} from '../utils/helper';
import {colors} from '../utils/theme';

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

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  welcomeText: {
    paddingTop: 20,
    fontSize: 20,
    fontWeight: '900',
    textAlign: 'center',
    color: colors.primary,
  },
  descriptionText: {
    fontSize: 20,
    textAlign: 'center',
    paddingHorizontal: 30,
  },
  getStartedContainer: {
    gap: 20,
  },
  getStartedText: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
  tapStartText: {
    fontSize: 12,
    textAlign: 'center',
  },
});
