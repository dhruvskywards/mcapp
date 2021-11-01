import {
  scale,
  verticalScale,
  moderateScale,
  ScaledSheet,
} from 'react-native-size-matters';
import fonts from 'src/utils/fonts';
import theme from 'src/utils/theme';
import Colors from "../../../../utils/theme";

export default ScaledSheet.create({
  scrollViewContainer: {
    flex: 1,
  },
  maincontainer: {
    flex: 1,
    backgroundColor: theme.WHITE,
  },
  BannerView: {
    width: '100%',
  },
  container: {
     flex: 1,
  },
  insideContainer: {
    top: -scale(30),
    borderRadius: scale(30),
    // paddingHorizontal: scale(20),
    padding: scale(20),
  },
  titleText: {
    fontSize: scale(18),
    color: theme.WHITE,
    fontFamily: fonts.Proxima_Nova_Sbold,
  },
  ContestantInfo: {
    flexDirection: 'row',
    flex: 1,
    // justifyContent: 'space-between',
  },
  backDiamond:{
    marginTop:scale(12)
  },
  AudiraiseHandCont:{
    flexDirection: 'row',
    //height: verticalScale(60),
    // backgroundColor: theme.WHITE,
    backgroundColor: theme.WHITE,
    alignItems:'center',
    justifyContent:'space-between',
    borderRadius: scale(40),
    bottom: scale(12),
    width: '90%',
    position:'absolute',
    zIndex: 1,
    marginHorizontal: scale(15),
    padding: scale(10),
    shadowColor: theme.BLACK,
    shadowOffset: {
      width: scale(1),
      height: verticalScale(5),
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 10,
  },
  audiraiseHandBtn:{
    backgroundColor: '#000',
    alignItems:'center',
    paddingHorizontal:scale(10),
    paddingVertical:scale(5),
    justifyContent: 'center',
    borderRadius: scale(20),
    // height: verticalScale(30),
  },
  raiseHandCont:{
    flexDirection: 'row',
    //height: verticalScale(60),
    // backgroundColor: theme.WHITE,
    backgroundColor: theme.WHITE,
    alignItems:'center',
    justifyContent:'space-between',
    borderRadius: scale(40),
    bottom: scale(85),
    width: '90%',
    position:'absolute',
    zIndex: 1,
    marginHorizontal: scale(15),
    padding: scale(15),
    shadowColor: theme.BLACK,
    shadowOffset: {
      width: scale(1),
      height: verticalScale(5),
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 10,
  },
  raiseHandTxt:{
    fontSize: scale(16),
    color: theme.WHITE,
    fontFamily: fonts.Proxima_Nova_Sbold,
  },
  raiseHandBtn:{
    backgroundColor: '#000',
    alignItems:'center',
    paddingHorizontal:scale(10),
    paddingVertical:scale(10),
    justifyContent: 'center',
    borderRadius: scale(20),
    // height: verticalScale(30),
  },
  raiseHandBtnTxt:{
    fontSize: scale(11),
    color: theme.WHITE,
    fontFamily: fonts.Proxima_Nova_Sbold,
  },
  moderatorCont:{
    marginTop: scale(40)
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
});
