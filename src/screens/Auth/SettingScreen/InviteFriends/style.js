import {
  scale,
  verticalScale,
  moderateScale,
  ScaledSheet,
} from 'react-native-size-matters';
import fonts from 'src/utils/fonts';
import theme from 'src/utils/theme';

export default ScaledSheet.create({

  textGeneralSettings:{
    fontSize:16,
    fontWeight: '800',
    fontFamily: 'ProximaNova-Semibold',
    marginHorizontal:10
},


flexRow:{
    flex:1,
    flexDirection:'row',
    marginVertical:15,
    marginHorizontal:20,
  
},
});
