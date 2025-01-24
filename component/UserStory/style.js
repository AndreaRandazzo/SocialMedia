import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../assets/fonts/helper';

const style = StyleSheet.create({
  storyContainer: {
    marginRight: 20,
  },
  firstName: {
    color: '#022150',
    fontFamily: getFontFamily('Inter', 500),
    fontSize: 14,
    marginTop: 8,
    textAlign: 'center',
  },
});

export default style;
