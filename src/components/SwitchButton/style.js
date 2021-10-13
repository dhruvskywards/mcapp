import {scale, ScaledSheet, verticalScale} from 'react-native-size-matters';
import Fonts from '../../utils/fonts';
import Colors from '../../utils/theme';

export default ScaledSheet.create({
  selectedView:{
    backgroundColor: Colors.WHITE,
    width: scale(25),
    height: scale(24),
    borderRadius: 22 ,
    
  },
  Switchbtncon: {
    alignItems: 'center',
    alignSelf: 'flex-start',
    backgroundColor: Colors.GREEN_SWITCH,
    borderRadius: 20,
    flexDirection: 'row',
    fontFamily: Fonts.Proxima_Nova_Regular,
    padding: scale(4),
  },


});
