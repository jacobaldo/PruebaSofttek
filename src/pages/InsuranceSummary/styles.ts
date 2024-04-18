import {StyleSheet} from 'react-native';
import {borderRadius, spacings} from '../../constants/spacings';
import {colors} from '../../constants/colors';
import {fontSizes} from '../../constants/fontSizes';
export const styles = StyleSheet.create({
  container: {flex: 1},
  body: {paddingHorizontal: spacings.s3},
  title: {
    marginVertical: spacings.s5,
    fontSize: fontSizes.vlarge,
    textAlign: 'center',
    fontWeight: '700',
  },
  InsuranceCard: {
    backgroundColor: colors.white,
    borderRadius: borderRadius.r5,
    padding: spacings.s4,
    shadowColor: colors.shadow,
    width: '100%',
    shadowOffset: {
      width: 0,
      height: 11,
    },
    shadowOpacity: 0.57,
    shadowRadius: 15.19,
    elevation: 23,
    marginBottom: spacings.s3,
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: spacings.s2,
    paddingBottom: spacings.s3,
    borderBottomWidth: 1,
    borderBottomColor: colors.progressBG,
  },
  imagePersons: {
    width: 24,
    height: 20,
  },
  name: {
    fontWeight: '700',
    fontSize: 20,
    marginStart: spacings.s2,
  },
  titleDescription: {
    fontSize: 10,
    textTransform: 'uppercase',
    fontWeight: '900',
  },
  description: {
    marginVertical: spacings.s1,
  },
  textTitle: {
    fontWeight: '700',
    fontSize: fontSizes.small,
    marginVertical: spacings.s0,
  },
  textDesc: {
    fontSize: fontSizes.vsmall,
    marginVertical: spacings.s0,
  },
});
