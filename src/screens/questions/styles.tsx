import {DimensionValue, Dimensions, StyleSheet} from 'react-native';
import {colors} from '../../utils/theme';

const {height} = Dimensions.get('window');
export const styles = (width?: DimensionValue) =>
  StyleSheet.create({
    contentStyle: {
      paddingHorizontal: 15,
      flex: 1,
      gap: 90,
    },
    container: {
      flex: 1,
      paddingHorizontal: 15,
      gap: 90,
      backgroundColor: colors.primary,
      paddingVertical: 10,
    },
    riskMeterContainer: {
      height: 20,
      width: '100%',
      overflow: 'hidden',
      borderRadius: 3,
      alignItems: 'flex-end',
    },
    riskMeterImage: {
      height: '100%',
      width: '100%',
    },
    riskMeterOverlay: {
      backgroundColor: colors.white,
      height: 20,
      position: 'absolute',
      width: width,
    },
    questionContainer: {
      flex: 1,
      gap: 40,
    },
    questionCard: {
      backgroundColor: colors.white,
      shadowColor: colors.black,
      shadowOpacity: 0.3,
      padding: 20,
      elevation: 10,
      borderRadius: 10,
      shadowRadius: 10,
      minHeight: height * 0.5,
      gap: 40,
    },
    questionText: {
      fontSize: 20,
      fontWeight: '600',
    },
    optionsContainer: {
      gap: 20,
    },
    optionItem: {
      flexDirection: 'row',
      gap: 12,
      alignItems: 'center',
      borderColor: colors.primary,
      borderWidth: 1.5,
      padding: 15,
      borderRadius: 8,
    },

    navigationButtonsContainer: {
      flexDirection: 'row',
      gap: 40,
    },
    btnStyle: {
      flex: 1,
      backgroundColor: colors.btnColor,
    },
    riskMeter: {
      shadowColor: colors.black,
      shadowOpacity: 0.15,
      shadowOffset: {height: 1, width: 1},
      backgroundColor: colors.white,
      borderRadius: 4,
      borderWidth: 2.5,
      borderColor: colors.white,
      shadowRadius: 5,
    },
  });
