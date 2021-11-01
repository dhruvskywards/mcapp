import {
  scale,
  verticalScale,
  moderateScale,
  ScaledSheet,
} from 'react-native-size-matters';
import fonts from 'src/utils/fonts';
import theme from 'src/utils/theme';

export default ScaledSheet.create({
  scrollViewContainer: {
    flex: 1,
  },
  maincontainer: {
    flex: 1,
    backgroundColor: theme.WHITE,
    // padding: moderateScale(20),
  },
  container: {
    padding: moderateScale(20),
    paddingBottom:scale(50),
    borderTopLeftRadius:scale(30),
    borderTopRightRadius:scale(30),
  },
  downloadImg:{
    height:scale(19),
    width:scale(24),
    resizeMode:'contain'
  },
  titleText: {
    fontSize: scale(18),
    color: theme.WHITE,
    fontFamily: fonts.Proxima_Nova_Sbold,
  },
  closeChatCont:{
    flexDirection:'row',
    marginTop:scale(20),
    alignItems:'center',
    justifyContent: 'space-between'
  },
  sliderDurationCont:{
    flexDirection:'row',
    marginTop:scale(20),
    justifyContent:'space-between'
  },
  sliderDurationTxt:{
    color:'#FFF',
    fontSize:scale(8)
  },

  sliderTrack:{
    backgroundColor:'#3E3E3E',
    height:scale(10),
    borderRadius:(10),
  },
  sliderThumb:{
    width: scale(10),
    height: scale(25),
    overflow: 'hidden',
    borderRadius: scale(10),
    backgroundColor: '#FFFFFF'
  },
  closeChtTxt: {
    flex:1,
    width:'100%',
    paddingRight:scale(25),
    fontSize: scale(14),
    color: theme.WHITE,
    fontFamily: fonts.Proxima_Nova_Sbold,
  },

  titleTextBlack: {
    fontSize: scale(15),
    color: theme.BLACK,
    fontFamily: fonts.Proxima_Nova_Regular,
  },
  SubtitleText: {
    fontSize: scale(35),
    color: theme.BACKGROUND_SECONDARY_DARK,
    fontFamily: fonts.Proxima_Nova_Regular,
  },
  prmsnCont:{
    // marginTop: scale(20),
    paddingBottom:scale(30),
    top: -scale(30),
    paddingHorizontal: moderateScale(20),
    borderTopLeftRadius:scale(30),
    borderTopRightRadius:scale(30)
  },
  chatModratorCont:{
    paddingBottom:scale(30),
    top: -scale(30),
    paddingHorizontal: moderateScale(20),
    borderTopLeftRadius:scale(30),
    borderTopRightRadius:scale(30)
  },
  addImgCont:{
    backgroundColor:'white',
    height:scale(21),
    width:scale(21),
    marginRight:scale(10),
    borderRadius:scale(11),
    justifyContent:'center',
    alignItems:'center'
  },
  addImg:{
    resizeMode:'contain'
  },
  chatSpeakersCont:{
    paddingBottom:scale(50),
    top: -scale(50),
    paddingHorizontal: moderateScale(20),
    borderTopLeftRadius:scale(30),
    borderTopRightRadius:scale(30)
  },
  judgeCont:{
    paddingBottom:scale(30),
    top: -scale(40),
    padding: moderateScale(20),
    borderTopLeftRadius:scale(30),
    borderTopRightRadius:scale(30),
    flexDirection: 'row',
    // bottom:0,left:0,right:0,
    // position:'absolute'
  },

});
