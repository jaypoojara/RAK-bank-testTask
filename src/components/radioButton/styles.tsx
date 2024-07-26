import {StyleSheet} from 'react-native';
import {colors} from '../../utils/theme';

export const styles = StyleSheet.create({
  container: {
    height: 30,
    width: 30,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fill: {
    height: '80%',
    width: '80%',
    borderRadius: 5,
    backgroundColor: colors.primary,
  },
});
