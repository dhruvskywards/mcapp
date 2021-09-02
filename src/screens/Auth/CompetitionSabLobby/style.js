import {
  scale,
  verticalScale,
  moderateScale,
  ScaledSheet,
} from 'react-native-size-matters';
import fonts from 'src/utils/fonts';
import theme from '../../../utils/theme';

export default ScaledSheet.create({
  SafeAreaViewContainer: {
    flex: 1,
    // backgroundColor: theme.BACKGROUND_VARAINT_7,
  },
  maincontainer1: {
    flex: 1,
    backgroundColor: '#000',
  },
  scrollViewContainer: {
    flex: 1,
    // backgroundColor: theme.BACKGROUND_VARAINT_7,
  },
  maincontainer: {
    flex: 1,
    // backgroundColor: theme.BACKGROUND_VARAINT_7,
  },
  container: {
    flex: 1,
    paddingHorizontal: moderateScale(32),
    justifyContent: 'space-evenly',
    marginVertical: verticalScale(60),
  },
  titleText: {
    fontSize: scale(14),
    color: theme.BACKGROUND_SECONDARY_DARK,
    fontFamily: fonts.Proxima_Nova_Regular,
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
  reddot: {
    height: scale(13),
    width: scale(13),
    borderRadius: scale(7),
    backgroundColor: theme.LIGHT_RED,
    top: scale(1),
    position: 'absolute',
    left: scale(138),
  },
  topHeader:{
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: 'space-between',
    padding: 10,

  },
  splitCont:{
    position: "absolute", top: 0, right: 0, left: 0, bottom: 0
  },
  insideHeader: {
    flex: 0.4,
    alignItems: 'center',
    flexDirection: 'row',
  },
  titleText1: {
    fontSize: scale(12),
    marginLeft:scale(10),
    color: theme.BACKGROUND_PRIMARY_NORMAL,
    fontFamily: fonts.Proxima_Nova_Regular,
  },
  logoView: {
    flexDirection:'row',
    alignItems: 'center',
  },
  nextRoundTxt:{
    position: "absolute", top: "50%", alignSelf: "center", color: "#FFF"
  },
  userCont:{
    // flex:1,
    marginTop:20,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
  },
  userContImg:{
    height: scale(35),
    width: scale(35),
    // marginRight:20,
    overflow: 'hidden',
    borderRadius: 25,
    borderWidth:2,
    borderColor:'#57FFBC'
  },
  userContImg1:{
    height: scale(35),
    width: scale(35),
    overflow: 'hidden',
    borderRadius: 25,
    borderColor:'grey',
    borderWidth:2,
  },
  pearCont:{
    flexDirection: "row", alignItems: "center", paddingHorizontal: "16%"
  },
  pearImg:{
    height: scale(16),
    width: scale(16),
  },
  pearTxt:{
    marginLeft: scale(10),
    color: "#FFF",
    fontSize: scale(14),
    fontFamily: fonts.Proxima_Nova_Sbold
  },
  splitView:{
    flexDirection:'row',
    height:'50%',
  },
  splitView1:{
    flex:1
  },
  camera:{
    height:'100%',
    width:'50%',
    borderWidth: 1,
  },
  camera1:{
    height:'100%',
    width:'100%',
  },
  signalImg:{
    marginTop:scale(5),
    height:scale(16),
    width:scale(26),
    alignSelf:'center'
  },
  comtCont:{
    flexDirection:'row',
    height:scale(37),
    position:'absolute',
    bottom:5,
    left:10,
    right:10,
    borderRadius:scale(19),
    overflow:'hidden',
    alignItems:'center',
  },
  comtContLeft:{
    flex:1,
    backgroundColor:'#161616',
    flexDirection:"row",
    alignItems:'center',
    height:scale(37),
  },
  comtTxtLeft:{
    marginLeft:scale(10),
    fontSize:scale(9),
    width:'70%',
    color:'#6D6D6D',
    fontFamily: fonts.Proxima_Nova_Sbold
  },
  hintImg:{
    height: scale(25),
    width: scale(25),
    marginLeft: scale(10),
  },
  comtTxtRight:{
    marginLeft:scale(10),
    fontSize:scale(9),
    width:'70%',
    color:'#FFF',
    fontFamily: fonts.Proxima_Nova_Sbold
  },
  comtContRight:{
    flex:1,
    height:scale(37),
    backgroundColor:'#111111',
    flexDirection:"row",alignItems:'center',justifyContent:'space-between'
  },
  commtImg:{
    height: scale(15),
    width: scale(18),
    marginRight: scale(10)
  },
  nextRoundCont:{

  }

});
