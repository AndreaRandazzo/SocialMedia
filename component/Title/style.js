import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../assets/fonts/helper';
import {scaleFontSize} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  title: {
    color: '#022150',
    fontSize: scaleFontSize(24),
    fontFamily: getFontFamily('Inter', 600),
  },
});

export default style;
