import {StyleSheet} from 'react-native';
import {colors} from '../../constants/colors';

export const buttonStyles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    borderRadius: 40,
    padding: 18,
  },
  primary: {
    backgroundColor: colors.primary,
  },
  secondary: {
    backgroundColor: colors.btnSecondary,
  },
  tertiary: {
    backgroundColor: 'transparent',
  },
  default: {
    backgroundColor: colors.devider,
  },
});

export const disabledButtonStyles = StyleSheet.create({
  primary: {
    backgroundColor: colors.devider,
  },
  secondary: {
    backgroundColor: colors.devider,
  },
  default: {
    backgroundColor: colors.devider,
    shadowColor: colors.label,
  },
});

export const disabledTextStyles = StyleSheet.create({
  primary: {
    color: colors.primary,
  },

  secondary: {
    color: colors.primary,
  },

  default: {
    color: colors.primary,
  },
});

export const textStyles = StyleSheet.create({
  text: {
    fontSize: 18,
    letterSpacing: 0.5,
    fontWeight: 'bold',
  },
  primary: {
    color: colors.white,
  },
  secondary: {
    color: colors.white,
  },
  default: {
    color: colors.white,
  },
});
