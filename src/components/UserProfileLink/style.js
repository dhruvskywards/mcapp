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
    padding: scale(15)
  },
  maincontainer: {
    flex: 1,
    backgroundColor: theme.WHITE,
    paddingHorizontal: scale(15)
  },
  socialCont:{
    flexDirection: 'row',
    backgroundColor:'#F2F2F2'
  },
  socialImg:{
    height:scale(38),
    width:scale(38)
  },
  addTrackCont:{
    flexDirection:'row',
    alignItems:"center",
    marginTop:scale(20)
  },
  addTrackImgCont:{
    height:scale(36),
    width:scale(36),
    borderRadius:scale(18),
    backgroundColor: '#EEEEEE',
    justifyContent:'center',
    alignItems:'center'
  },
  addTrackImg:{
    height:scale(14),
    width:scale(14),
    alignSelf:'center'
  },
  addTrackTxtCont:{
    marginLeft:scale(13)
  },
  trackTitleTxt:{
    fontFamily:fonts.Proxima_Nova_Regular,
    fontSize:scale(14),
  },
  trackSubTitleTxt:{
    fontFamily:fonts.Proxima_Nova_Sbold,
    fontSize:scale(10),
    color:'#747474'
  },
  playView: {
    height: scale(36),
    width: scale(36),
    borderRadius: scale(18),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF7979',
  },
  innerView: {
    height: scale(20),
    width: scale(20),
    borderRadius: scale(10),
    // backgroundColor: theme.TRANSPARENT,
    backgroundColor: '#FF7979',
    borderColor: theme.WHITE,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
