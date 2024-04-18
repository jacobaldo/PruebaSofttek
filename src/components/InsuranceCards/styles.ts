import {StyleSheet} from 'react-native';
import {borderRadius, spacings} from '../../constants/spacings';
import {colors} from '../../constants/colors';
export const styles = StyleSheet.create({
  InsuranceCards: {
    backgroundColor: colors.white,
    borderRadius: borderRadius.r5,
    paddingHorizontal: spacings.s3,
    paddingVertical: spacings.s2,
    shadowColor: colors.shadow,
    shadowOffset: {
      width: 0,
      height: 11,
    },
    shadowOpacity: 0.57,
    shadowRadius: 15.19,
    elevation: 23,
    marginBottom: spacings.s3,
  },
  check: {alignItems: 'flex-end'},
  header: {flexDirection: 'row', alignItems: 'center'},
  icon: {marginEnd: spacings.s1},
  title: {fontWeight: '900', fontSize: 20},
  description: {
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 20,
    marginVertical: spacings.s2,
  },
  active: {
    borderWidth: 3,
    borderColor: colors.primary,
  },
});
