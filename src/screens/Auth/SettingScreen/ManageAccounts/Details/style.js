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
 
  thumbnailView:{
    marginHorizontal:scale(25),
    marginVertical:scale(20)
  },

  textGeneralSettings:{
    fontSize:16,
 
    fontFamily: fonts.Proxima_Nova_Sbold,
    marginHorizontal:scale(25),
    paddingVertical:scale(10)
},

  selectAccountView:{
    
    marginVertical:scale(35)
  },
  selectAccountText:{
    fontFamily: fonts.Proxima_Nova_Sbold,
    fontSize: scale(25),
    
  },
  selectAccountDetails:{
    fontFamily: fonts.Proxima_Nova_Regular,
    fontSize: scale(14),
    lineHeight:scale(20),
    marginVertical:scale(20)
    
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
  flatListStyle:{
    marginHorizontal:scale(20)
  },

  textSelectAccount:{
    fontFamily: fonts.Proxima_Nova_Regular,
    fontSize: scale(16),
    marginLeft:scale(10),
    marginVertical:scale(10)   
  },
  containers: {
    flex: 1,
  },
  noData: {
    fontFamily: fonts.Proxima_Nova_Sbold,
    fontSize: scale(14),
    textAlign: 'center',
    color: theme.BLACK,
  },

});
