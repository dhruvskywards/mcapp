import {
  scale,
  verticalScale,
  moderateScale,
  ScaledSheet,
} from 'react-native-size-matters';
import fonts from 'src/utils/fonts';
import theme from 'src/utils/theme';
import { Dimensions } from "react-native";
const { height } = Dimensions.get('window');
export default ScaledSheet.create({
  maincontainer: {
    flex:1,
    backgroundColor: theme.BACKGROUND_SECONDARY_DARK,
  },
  backgroundVideo: {
    alignItems: 'stretch',
    bottom: 0,
    height: height,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
  },
  adsCont: {
    flexDirection: 'row',
    marginTop: scale(10),
    paddingHorizontal:scale(15),
  },
  adslogo: {
    borderRadius: scale(30),
    height: scale(45),
    //marginLeft: scale(15),
    overflow: 'hidden',
    width: scale(45),
  },
  adslogoImg: {
    height: '100%',
    width: '100%',
  },
  adsTxt: {
    justifyContent: 'center',
    marginLeft: scale(10),
  },
  adstitleText: {
    // color: 'white',
    letterSpacing: 1,
    fontSize: scale(14),
    color: theme.WHITE,
    fontFamily: fonts.Proxima_Nova_Sbold,
  },
  adsSubtitleText: {
    fontSize: scale(10),
    color: theme.WHITE,
    fontFamily: fonts.Proxima_Nova_Regular,
    marginTop: scale(2),
  },
  checkImg: {
     flex: 1,
    marginLeft: scale(6),
    marginTop: scale(8),
  },
  nextRoundCont: {
  },
  nextCont: {
    marginRight: scale(4),
    flexDirection: 'row',
     justifyContent: 'space-between',
    alignContent: 'center',
    marginTop: scale(5),
  },
  nextRoundTxt: {
    color: 'white',
    fontSize:scale(10),
    fontFamily: fonts.Proxima_Nova_Sbold,
    marginTop: scale(6),
  },
  sponsoredBtn: {
    alignItems: 'center',
    borderColor: 'gray',
    borderRadius: scale(10),
    borderWidth: 1,
    paddingHorizontal: scale(10),
    paddingVertical: scale(2),
  },
  sponsoredBtnTxt: {
    color: 'gray',
    fontSize: scale(8),
    fontFamily: fonts.Proxima_Nova_Sbold,
  },
  sponsoredCont: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    marginRight: scale(5),
    marginTop:scale(5)
  },
  footerBtnCont:{
     flex: 1,
    justifyContent:'flex-end',
    // bottom:0,
    // position:'absolute',
    // right:0,left:0,
  },
  footerBtn:{
    alignItems: 'center',
    borderTopLeftRadius: scale(20),
    borderTopRightRadius: scale(20),
    backgroundColor: '#FF4E00',
    paddingVertical: scale(15),
  },
  footerBtnTxt:{
    fontFamily: fonts.Proxima_Nova_Sbold,
    fontSize: scale(14),
    color: theme.WHITE,
  }
});
