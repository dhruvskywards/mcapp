import {
  scale,
  verticalScale,
  moderateScale,
  ScaledSheet,
} from 'react-native-size-matters';
import fonts from 'src/utils/fonts';
import theme from 'src/utils/theme';

export default ScaledSheet.create({

  scrollContainer:{
   
  },
  textTitle:{
    fontFamily: fonts.Proxima_Nova_Sbold,
    fontSize: scale(30),
    lineHeight:scale(30),
    marginHorizontal:scale(20)
  },

  rateMcText:{
    fontFamily: fonts.Proxima_Nova_Regular,
    fontSize: scale(15),
   
  },

  viewMCText:{
    marginHorizontal:scale(20),
    marginVertical:scale(25)
  }
});
