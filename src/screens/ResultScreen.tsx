import {Dimensions, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import RNSpeedometer from 'react-native-speedometer';
import {appStrings, getMaxRiskScore} from '../utils/helper';
import {colors} from '../utils/theme';
import {
  Route,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import AppButton from '../components/AppButton';
import {AppNavigationProps, AppStackParams} from '../../App';

const {width} = Dimensions.get('window');

type ResultRouteProps = RouteProp<AppStackParams, 'Result'>;

const ResultScreen = () => {
  const {params} = useRoute<ResultRouteProps>();
  const navigation = useNavigation<AppNavigationProps>();
  const calculatedRisk = params.totalScore;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titleText}>{appStrings.yourScore}</Text>
      <View style={styles.descriptionContainer}>
        <Text style={styles.descriptionText}>
          {appStrings.scoreDescription}
        </Text>
        <View style={styles.speedometerWrapper}>
          <RNSpeedometer
            minValue={1}
            value={calculatedRisk}
            maxValue={getMaxRiskScore()}
            size={width * 0.8}
            labels={[
              {
                name: 'Low Risk',
                labelColor: '#000',
                activeBarColor: colors.green,
              },
              {
                name: 'Medium Risk',
                labelColor: '#000',
                activeBarColor: colors.yellow,
              },
              {
                name: 'High Risk',
                labelColor: '#000',
                activeBarColor: colors.red,
              },
            ]}
          />
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <Text style={styles.thankYouText}>{appStrings.thankYou}</Text>

        <AppButton
          onPress={() => {
            navigation.goBack();
          }}
          style={styles.btnStyle}
          title="Go to Home"
        />
      </View>
    </SafeAreaView>
  );
};

export default ResultScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 30,
    flex: 1,
    backgroundColor: colors.primary,
    padding: 20,
  },
  titleText: {
    fontSize: 20,
    fontWeight: '900',
    color: '#fff',
  },
  descriptionContainer: {
    gap: 15,
  },
  descriptionText: {
    textAlign: 'center',
    paddingHorizontal: 20,
    fontSize: 18,
    color: '#fff',
  },
  speedometerWrapper: {
    paddingBottom: 70,
    alignItems: 'center',
    gap: 30,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOpacity: 0.2,
    padding: 20,
    elevation: 10,
    margin: 20,
    borderRadius: 5,
    shadowRadius: 5,
  },
  thankYouText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#fff',
  },
  buttonContainer: {
    gap: 20,
  },
  btnStyle: {
    backgroundColor: colors.btnColor,
  },
});
