import {StyleSheet} from 'react-native';
import {colors} from '../../utils/theme';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    borderRadius: 10,
    paddingHorizontal: 40,
    paddingVertical: 20,
    alignItems: 'center',
  },
  disabled: {
    backgroundColor: '#A2A2A2',
  },
  title: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '900',
    justifyContent: 'center',
  },
});
