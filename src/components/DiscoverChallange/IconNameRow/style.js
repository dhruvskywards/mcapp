import {scale, verticalScale, ScaledSheet} from 'react-native-size-matters';
import fonts from '../../../utils/fonts';
import theme from '../../../utils/theme';

export default ScaledSheet.create({
  mainview: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 30,
    
  },

  circleView:{
    height: scale(35),
    width: scale(35),
    borderRadius: scale(35) / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pageContainer: {
    flex: 1, 
    marginLeft: scale(20)
  },
  
  txt: {
    fontSize: scale(20),
    fontFamily: fonts.Proxima_Nova_Sbold,
  },
  txt_1: {
    fontSize: scale(10),
    fontFamily: fonts.Proxima_Nova_Sbold,
    color:theme.TEXT_COMMON_SILVER
  },
  
});
