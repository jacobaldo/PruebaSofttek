import {StyleSheet} from 'react-native';
import {borderRadius, spacings} from '../../constants/spacings';
import {fontSizes} from '../../constants/fontSizes';
import {colors} from '../../constants/colors';
export const styles = StyleSheet.create({
  container: {flex: 1},
  body: {
    flex: 1,
  },
  containerBody: {paddingHorizontal: spacings.s3, paddingBottom: 64},

  imageBackground: {
    width: '80%',
    height: '70%',
    position: 'absolute',
    end: 0,
  },
  imageBackgroundBottom: {
    width: '80%',
    height: '70%',
    position: 'absolute',
    bottom: 0,
  },

  gradient: {
    padding: spacings.s0,
    borderRadius: borderRadius.r1,
    width: 150,
    alignItems: 'center',
  },
  textGradrient: {fontSize: fontSizes.vmsmall, fontWeight: '700'},
  textDescription: {
    fontSize: fontSizes.vsmall,
    fontWeight: '700',
    marginVertical: spacings.s3,
    lineHeight: 20,
  },
  textGradrientTitle: {
    fontSize: 35,
    fontWeight: '700',
    color: colors.primary,
  },
  cardHeader: {
    flexDirection: 'row',
    paddingVertical: spacings.s3,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: colors.devider,
  },
  imageHome: {
    width: 136,
    height: 160,
    borderRadius: borderRadius.r4m,
  },
  containerCard: {
    flex: 1,
    marginEnd: spacings.s3,
  },
  labelInput: {
    fontWeight: '400',
    fontSize: fontSizes.vmsmall,
    color: colors.label,
    marginBottom: spacings.s1,
  },
  containerInput: {
    borderWidth: 1,
    borderColor: colors.label,
    borderRadius: borderRadius.r1,
    paddingHorizontal: spacings.s2,
    marginBottom: spacings.s2,
    flexDirection: 'row',
  },
  input: {marginVertical: spacings.s1},
  inputText: {
    fontSize: fontSizes.small,
    fontWeight: '400',
  },
  dropDronw: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingEnd: spacings.s2,
    marginEnd: spacings.s2,
    borderRightWidth: 1,
    borderColor: colors.label,
  },
  dropDronwText: {
    fontWeight: '400',
    fontSize: fontSizes.small,
    paddingEnd: spacings.s5,
  },
  iconDown: {
    width: 20,
    height: 20,
  },
  containerCheck: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: spacings.s1,
  },
  descCheck: {
    fontWeight: '400',
    fontSize: fontSizes.vsmall,
    marginStart: spacings.s2,
  },
  link: {
    fontWeight: '600',
    textDecorationLine: 'underline',
    marginVertical: spacings.s3,
    color: colors.primary,
  },
  footer: {
    backgroundColor: colors.primary,
    alignItems: 'center',
    paddingHorizontal: spacings.s3,
  },
  imageFooter: {
    width: 138,
    height: 20,
  },
  containerImage: {
    borderBottomWidth: 1,
    borderBottomColor: colors.deviderBlack,
    paddingVertical: spacings.s3,
    width: '100%',
    alignItems: 'center',
  },
  footerText: {
    padding: spacings.s3,
    color: colors.white,
    fontWeight: '400',
  },
});
