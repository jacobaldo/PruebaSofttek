import {StyleSheet} from 'react-native';
import {borderRadius, spacings} from '../../constants/spacings';
import {fontSizes} from '../../constants/fontSizes';
import {colors} from '../../constants/colors';
export const styles = StyleSheet.create({
  container: {flex: 1},
  body: {paddingHorizontal: spacings.s3},
  progress: {
    borderRadius: borderRadius.r4,
    height: 6,
  },
  progressContainter: {
    paddingHorizontal: spacings.s3,
    borderBottomWidth: 1,
    borderColor: colors.progressBG,
  },
  subHeader: {
    paddingVertical: spacings.s3,
    flexDirection: 'row',
    alignItems: 'center',
  },
  progressCont: {
    flex: 1,
  },
  buttomBack: {
    width: 24,
    height: 24,
  },
  textStep: {
    marginHorizontal: spacings.s2,
    textTransform: 'uppercase',
    fontWeight: '900',
    fontSize: fontSizes.vmmsmall,
  },
  welcome: {
    fontSize: 28,
    fontWeight: '700',
    lineHeight: 36,
    letterSpacing: -0.2,
    marginTop: spacings.s3,
  },
  welcomeDesc: {
    fontSize: fontSizes.small,
    fontWeight: '400',
    lineHeight: 28,
    marginVertical: spacings.s2,
  },
  scroll: {
    paddingStart: spacings.s5,
  },
});
