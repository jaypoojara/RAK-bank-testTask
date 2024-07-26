import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import RNSpeedometer from 'react-native-speedometer';
import {getMaxRiskScore} from '../utils/helper';
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
    <View style={styles.container}>
      <View style={styles.speedometerWrapper}>
        <RNSpeedometer
          minValue={1}
          value={calculatedRisk}
          maxValue={getMaxRiskScore()}
          size={width * 0.9}
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
      <AppButton
        onPress={() => {
          navigation.goBack();
        }}
        title="Go to Home"
      />
    </View>
  );
};

export default ResultScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 30,
    flex: 1,
  },
  speedometerWrapper: {
    paddingBottom: 50,
  },
});
