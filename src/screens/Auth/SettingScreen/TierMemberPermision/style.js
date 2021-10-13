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
  maincontainer: {
    flex: 1,
    //backgroundColor: theme.BACKGROUND_VARAINT_7,
  },

  flatListStyle:{
    marginHorizontal:scale(20),
    marginBottom:scale(60)
  },
  button: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
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
    backgroundColor:theme.BACKGROUND_VARAINT_7,
    borderTopLeftRadius: scale(35),
    borderTopRightRadius: scale(35),
    flex: 1,
  },
  padding: {
    padding: scale(20),
  },
  containers:{
    backgroundColor: theme.WHITE,
  },
  viewStyle:{
    paddingHorizontal:scale(20),
    paddingVertical:scale(18)
  },
  
 generalText:{
  flex: 1,
    fontFamily: fonts.Proxima_Nova_Bold,
    fontSize: scale(22),
    marginBottom:scale(10)
  },
  textContent:{
    fontSize:scale(14),
 
    fontFamily: fonts.Proxima_Nova_Sbold,
    flex:1,  
   
   },
   IconStyle:{
    position:'absolute',
    left:scale(5),
    right:scale(5),
    top:scale(5),
    bottom:scale(5)
  },
  flexRow:{
    flex:1,
    flexDirection:'row',
    marginVertical:scale(20),  
},
  noData: {
    fontFamily: fonts.Proxima_Nova_Sbold,
    fontSize: scale(14),
    textAlign: 'center',
    color: theme.BLACK,
  },

  selectAccountView:{
    marginHorizontal:scale(25),
    marginVertical:scale(25),
    alignSelf:'center'
  },
  selectAccountText:{
    fontFamily: fonts.Proxima_Nova_Sbold,
    fontSize: scale(20),
    
  },

  viewAddAccount:{
    flex:1,
    flexDirection:'row',
    marginHorizontal:scale(15),
    
  },
  ModalContain: {
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    flex: 1,
    paddingTop: 30,
    paddingHorizontal: 15,
    backgroundColor: theme.WHITE,
  },

  serachLine:{
    alignSelf: 'center',
    width: scale(40),
    height: 2,
    backgroundColor: theme.BACKGROUND_VARAINT_5,
    borderRadius: 8,
  },
  SecondCon: {
    marginTop:scale(20),
    marginHorizontal:scale(8)
  },
  input: {
    flex: 1,
    paddingTop: scale(10),
    paddingRight: scale(10),
    paddingBottom: scale(10),
    paddingLeft: scale(10),
    fontFamily: fonts.Proxima_Nova_Regular,
    borderRadius:30,
    backgroundColor:theme.BACKGROUND_VARAINT_5,
    
},
searchIcon: {
  padding: scale(10),
},
  searchSection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:30,
    backgroundColor: theme.BACKGROUND_VARAINT_5,
},

  textSelectAccount:{
    fontFamily: fonts.Proxima_Nova_Regular,
    fontSize: scale(16),
    marginLeft:scale(10),
    marginVertical:scale(10)   
  },

  ModalContain: {
    backgroundColor:theme.WHITE,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    flex: 1,
    paddingHorizontal: scale(10),
    paddingVertical: scale(8),
  },

  noImageView:{
    width: 50,
    height: 50,
    borderRadius: 35,
    borderColor: '#DBDBDB',
    borderWidth: 2,
  },

  permissionRow:{
    flex:1,
    flexDirection:'row',
    marginVertical:scale(15),
    marginHorizontal:scale(20),
  
  },

  containePermissionSettings:{
     marginTop:scale(-15),
     borderTopLeftRadius: scale(35),
     borderTopRightRadius: scale(35),
     overflow: 'hidden',  
     
  },

  permissionText:{
    flex: 1,
      fontFamily: fonts.Proxima_Nova_Bold,
      fontSize: scale(22),
      marginHorizontal:scale(15),
      marginTop:scale(30)
    },

    noImageView:{
      width:scale(50),
      height: scale(50),
      borderRadius:scale(35),
      borderColor: theme.IMAGE_BORDER,
      borderWidth: 2,
    },

    moderatorNameText:{
      width:100,
      textAlign:'center',
      fontFamily: fonts.Proxima_Nova_Sbold,
      fontSize: scale(14),
    },
    moderatorInterestText:{
      fontSize: scale(12),
    },
    textRemove:{
      textDecorationLine: 'underline',
      fontSize: scale(12),
      fontFamily: fonts.Proxima_Nova_Sbold,
      color:theme.RED
  },
});
