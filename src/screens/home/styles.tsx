import {StyleSheet} from 'react-native';
import {colors} from '../../utils/theme';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
    padding: 20,
    backgroundColor: colors.white,
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
