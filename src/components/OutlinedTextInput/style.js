import {s, scale, ScaledSheet} from 'react-native-size-matters';
import Fonts from '../../utils/fonts';
import Colors from '../../utils/theme';

export default ScaledSheet.create({
  container: {
    borderRadius: scale(10),
    borderColor: Colors.UNDERLINE_COLOR,
    borderWidth: scale(1),
    paddingVertical: scale(5),
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: 'white',
   
  },
  text: {
    fontFamily: Fonts.Proxima_Nova_Regular,
    fontSize: scale(14),
    height:scale(120),
    color: Colors.TEXT_PRIMARY_NORMAL,
    paddingHorizontal: scale(10),
    flex: 1,
   
  },
});
