import {Dimensions, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import RNSpeedometer from 'react-native-speedometer';
import {getMaxRiskScore} from '../../utils/helper';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {AppNavigationProps, AppStackParams} from '../../../App';
import {appStrings, riskMeterLabelData} from '../../utils/constants';
import {styles} from './styles';
import {AppButton} from '../../components';

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
            labels={riskMeterLabelData}
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
