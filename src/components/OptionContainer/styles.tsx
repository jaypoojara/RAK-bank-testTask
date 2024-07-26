import { StyleSheet } from 'react-native';
import { colors } from '../../utils/theme';

export const styles = StyleSheet.create({
  optionText: {
    fontSize: 18,
    width: '85%',
  },
  activeOptionTextColor: {
    color: colors.white,
  },
  inActiveOptionTextColor: {
    color: colors.black,
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
  activeOptionContainer: {
    backgroundColor: colors.primary,
  },
  inActiveOptionContainer: {
    backgroundColor: colors.transparent,
  },
});
