import {StyleSheet} from 'react-native';
import {colors} from '../../utils/theme';

export const styles = StyleSheet.create({
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
    color: colors.white,
  },
  descriptionContainer: {
    gap: 15,
  },
  descriptionText: {
    textAlign: 'center',
    paddingHorizontal: 20,
    fontSize: 18,
    color: colors.white,
  },
  speedometerWrapper: {
    paddingBottom: 70,
    alignItems: 'center',
    gap: 30,
    backgroundColor: colors.white,
    shadowColor: colors.black,
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
    color: colors.white,
  },
  buttonContainer: {
    gap: 20,
  },
  btnStyle: {
    backgroundColor: colors.btnColor,
  },
});
