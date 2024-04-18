import {StyleSheet} from 'react-native';
import {spacings} from '../../constants/spacings';
import {fontSizes} from '../../constants/fontSizes';
export const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  imageHeader: {
    width: 65,
    height: 31,
  },
  headerEnd: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cell: {
    width: 15,
    height: 15,
  },
  textCell: {
    fontWeight: 'bold',
    marginStart: spacings.s1,
    fontSize: fontSizes.small,
  },
});
