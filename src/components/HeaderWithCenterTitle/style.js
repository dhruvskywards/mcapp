import {scale, verticalScale, ScaledSheet,moderateScale} from 'react-native-size-matters';
import Colors from '../../utils/theme';
import Fonts from '../../utils/fonts';

export default ScaledSheet.create({
  headerContainer: {
    justifyContent: 'space-between',
    flexDirection:'row',
    flex:1,
    marginVertical:verticalScale(25),
    marginHorizontal:scale(15)
   
  },
  headerTitle:{
    flex:1,
   
    alignItems:'center',
    
  },
  headerText:{
  
    fontFamily: Fonts.Proxima_Nova_Bold,
    fontSize: scale(18),
  },
  title: {
    fontSize: scale(14),
    color: Colors.BLACK,
    fontFamily: Fonts.Proxima_Nova_Sbold,
  },
  backButton:{
    justifyContent:'flex-start',
    alignItems:'flex-start'
    
  },
  alignSelf: {
    alignSelf: 'center',
    flex: 0.2,
  },
});
