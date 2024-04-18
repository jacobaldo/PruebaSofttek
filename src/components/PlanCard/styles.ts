import {Dimensions, StyleSheet} from 'react-native';
import {borderRadius, spacings} from '../../constants/spacings';
import {colors} from '../../constants/colors';
import {fontSizes} from '../../constants/fontSizes';
export const styles = StyleSheet.create({
  InsuranceCards: {
    backgroundColor: colors.white,
    borderRadius: borderRadius.r5,
    paddingHorizontal: spacings.s4,
    paddingTop: spacings.s5,
    marginEnd: spacings.s3,
    shadowColor: colors.shadow,
    width: Dimensions.get('window').width * 0.8,
    shadowOffset: {
      width: 0,
      height: 11,
    },
    shadowOpacity: 0.57,
    shadowRadius: 15.19,
    elevation: 23,
    marginBottom: spacings.s3,
  },
  recomended: {height: 30},
  contRecomended: {
    backgroundColor: '#7DF0BA',
    borderRadius: 16,
    paddingVertical: spacings.s0,
    width: 170,
  },
  scrollDescription: {height: 350, marginBottom: spacings.s2},
  textRecomended: {
    textAlign: 'center',
    fontWeight: '900',
  },
  imageHeader: {width: 52, height: 48},
  containerText: {
    flex: 1,
  },
  header: {flexDirection: 'row'},
  title: {fontWeight: '900', fontSize: 20},
  textName: {
    fontWeight: '900',
    fontSize: fontSizes.medium,
    lineHeight: 32,
    height: 70,
  },
  costo: {
    textTransform: 'uppercase',
    color: '#7981B2',
    fontSize: fontSizes.vmsmall,
    marginTop: spacings.s3,
  },
  price: {
    fontWeight: '900',
    fontSize: fontSizes.default,
    lineHeight: 28,
    marginTop: spacings.s1,
    marginBottom: spacings.s3,
  },
  description: {
    fontWeight: '500',
    fontSize: fontSizes.small,
    lineHeight: 28,
    marginStart: spacings.s2,
  },
  body: {
    borderTopWidth: 1,
    borderTopColor: colors.progressBG,
    paddingVertical: spacings.s3,
  },
  point: {
    width: 10,
    height: 10,
    marginTop: spacings.s1,
    backgroundColor: colors.primary,
    borderRadius: borderRadius.r4,
  },
  rowDescription: {
    flexDirection: 'row',
    padding: spacings.s3,
  },
});
