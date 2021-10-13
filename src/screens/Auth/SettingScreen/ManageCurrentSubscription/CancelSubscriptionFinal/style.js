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
    flex: 1,
    
   
  },
  maincontainer: {
    flex: 1,
   
    //backgroundColor: theme.BACKGROUND_VARAINT_7,
  },
  headerText:{
    textAlign:'center',
    fontFamily: fonts.Proxima_Nova_Bold,
    fontSize: scale(13),
    marginLeft:scale(15),
    color:theme.POINT_TEXT
  },
  header: {
    marginHorizontal: scale(26),
  },
  titleView:{
   
     paddingTop: scale(30), 
    
  },
  titleViewText:{
    fontFamily: fonts.Proxima_Nova_Sbold,
    fontSize: scale(17),
    marginHorizontal:scale(20),
    marginTop:scale(50)
  },
  paddinTops:{
    fontFamily: fonts.Proxima_Nova_Regular,
    paddingTop: scale(15),
    marginHorizontal:scale(20)
  },
  radiobtn: {
    height: scale(16),
    width: scale(16),
    borderRadius: scale(12),
  },
  titleText: {
    fontSize: scale(14),
   
    fontFamily: fonts.Proxima_Nova_Regular,
    paddingVertical: verticalScale(10),
    marginLeft: scale(10),
  },
  whiteTextInput: {
    borderColor: theme.TEXT_COMMON_SILVER,
    height: scale(120),
    marginTop: scale(50),
    paddingTop: scale(50),
  },
  textInput: {
    color: theme.TEXT_COMMON_SILVER,
    height: scale(120),
    lineHeight: scale(25),
  },

});
