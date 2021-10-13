import {scale, verticalScale, ScaledSheet} from 'react-native-size-matters';
import fonts from '../../../utils/fonts';
import theme from '../../../utils/theme';

export default ScaledSheet.create({
  flexRow:{
    flex:1,
    flexDirection:'row',
    marginVertical:15,
  
  },

  viewTextRow:{
    flex:1,
    flexDirection:'row',
  },
  textContent:{
    fontSize:scale(14),
    fontFamily: fonts.Proxima_Nova_Sbold,
    flex:1,
  },
  textSubContent:{
    fontSize:scale(14),
    fontFamily: fonts.Proxima_Nova_Sbold,
    flexDirection:'row-reverse',
  },
  iconStyle:{
    marginLeft:scale(10),
    marginVertical:scale(3)
  }
});
