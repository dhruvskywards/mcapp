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
    backgroundColor: theme.BACKGROUND_VARAINT_7,
  },
  maincontainer: {
    //flex: 1,
    //backgroundColor: theme.BACKGROUND_VARAINT_7,
  },

  flatListStyle:{
    marginHorizontal:scale(20)
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
  container: {
    flex: 1,
  },
  noData: {
    fontFamily: fonts.Proxima_Nova_Sbold,
    fontSize: scale(14),
    textAlign: 'center',
    color: theme.BLACK,
  },

  selectAccountView:{
    marginHorizontal:scale(25),
    marginVertical:scale(35)
  },
  selectAccountText:{
    fontFamily: fonts.Proxima_Nova_Sbold,
    fontSize: scale(18),
    
  },

  viewAddAccount:{
    flex:1,
    flexDirection:'row',
    marginHorizontal:scale(15),
    
  },
  ModalContain: {
    height: scale(45),
    width: scale(45),
    borderRadius: scale(25),
    alignItems: 'center',
    justifyContent: 'center',
   
    backgroundColor:theme.BACKGROUD_CIRCLE
  },

  textSelectAccount:{
    fontFamily: fonts.Proxima_Nova_Regular,
    fontSize: scale(16),
    marginLeft:scale(10),
    marginVertical:scale(10)   
  }

});
