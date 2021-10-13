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
  headerMain:{
    flexDirection:'row',
    flex:1,
    marginVertical:verticalScale(10),
    marginHorizontal:moderateScale(10)
  },
  backButton:{
    justifyContent:'flex-start',
    alignItems:'flex-start'
    
  },
  headerTitle:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    
  },
  headerText:{
   
    textAlign:'center',
    fontFamily: fonts.Proxima_Nova_Bold,
    fontSize: scale(18),
  },
  maincontainer: {
    //flex: 1,
    //backgroundColor: theme.BACKGROUND_VARAINT_7,
  },
  container: {
    flex: 1,
    backgroundColor:theme.WHITE,
  
    
    borderTopLeftRadius: scale(25),
    borderTopRightRadius: scale(25),
    marginVertical: verticalScale(20),
    marginHorizontal:moderateScale(10)
  },
  viewStyle:{
    paddingHorizontal:scale(20),
    paddingVertical:scale(18)
  },

  headerText:{
    fontFamily: fonts.Proxima_Nova_Bold,
    fontSize: scale(22),
    marginBottom:scale(10)
  },

  flexRow:{
    flex:1,
    flexDirection:'row',
    marginVertical:scale(10),
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

  containers: {
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0, 0.5)',
    flex: 1,
    justifyContent: 'center',
    paddingVertical: scale(20),
  },
  innerContainer: {
    backgroundColor: '#fff',
    borderRadius: scale(4),
    padding: scale(16),
    width: '95%',
  },
  ModalStyle: {
    margin: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ModelInnerStyle: {
    height: verticalScale(290),
    width: '100%',
    position: 'absolute',
    backgroundColor: theme.WHITE,
    bottom: 0,
    borderTopLeftRadius: scale(15),
    borderTopRightRadius: scale(15),
    padding: scale(20),
  },
  textInput: {
    top: -verticalScale(20),
    marginLeft: scale(100),
  },
  CustomtextInput: {
    width: '100%',
    height: verticalScale(35),
    borderRadius:5,
    borderColor:theme.BLACK,
    borderWidth:2,
  },
  textViewCountry:{
    paddingHorizontal:scale(10),
    lineHeight:scale(50),
    flex:1
  },
  searchSection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:scale(30),
    marginVertical:scale(10),
    backgroundColor: theme.BACKGROUND_VARAINT_7,
},
searchIcon: {
    padding:scale(10),
},
input: {
    flex: 1,
    paddingTop: scale(8),
    paddingRight: scale(8),
    paddingBottom: scale(8),
    
    borderRadius:scale(30),
    backgroundColor:theme.BACKGROUND_VARAINT_7,
    
},

modelTitleText:{
  fontSize:scale(16),
  fontFamily: fonts.Proxima_Nova_Bold,
},

modelTextItem:{
  fontSize:scale(14),
  fontFamily: fonts.Proxima_Nova_Regular,
  marginVertical:scale(10)
}
 
});
