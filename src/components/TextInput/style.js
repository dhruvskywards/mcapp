import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';
import Fonts from '../../utils/fonts';
import Colors from '../../utils/theme';

export default StyleSheet.create({
  textInput: {
    height: scale(50),
    backgroundColor: Colors.WHITE,
    width: '100%',
    color:'#000',
    fontSize: scale(14),
    fontFamily: Fonts.Proxima_Nova_Regular,
    paddingLeft: scale(15),
    borderRadius: scale(8),
  },
});
