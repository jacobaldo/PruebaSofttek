import {StyleSheet} from 'react-native';
import {colors} from '../../constants/colors';
export const styles = StyleSheet.create({
  inactive: {
    borderWidth: 1,
    width: 20,
    height: 20,
    borderRadius: 4,
    borderColor: colors.label,
  },
  imageBackground: {width: 20, height: 20},
});
