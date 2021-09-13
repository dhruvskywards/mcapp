import {
  scale,
  verticalScale,
  moderateScale,
  ScaledSheet,
} from 'react-native-size-matters';
import fonts from 'src/utils/fonts';
import theme from 'src/utils/theme';

export default ScaledSheet.create({
  safeAreaViewContainer: {
    flex:1
  },
  maincontainer: {
    flex: 1,
    backgroundColor: theme.LEADERBOARD_BACKGROUND,
    //borderTopLeftRadius: scale(40),
    //borderTopRightRadius: scale(40),
  },
  background: {
    marginTop: verticalScale(15),
    marginHorizontal:scale(20),
    marginBottom: scale(60),
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
    fontSize: scale(20),
    fontFamily: fonts.Proxima_Nova_Bold,
    marginHorizontal:scale(20),
  },
  background: {
    marginTop: verticalScale(15),
    marginHorizontal:scale(20),
    marginBottom: scale(60),
  },
  buttonStyle:{
    paddingHorizontal:scale(10),
    paddingVertical:scale(10),
    fontFamily: fonts.Proxima_Nova_Regular,
  },
  liveBtn: {
    position: 'absolute',
    bottom: scale(80),
    width: '100%',
  },

  floatButtonView:{
    position: 'absolute',
    right: scale(10),
    bottom: scale(54),
    left: scale(10),
    flexDirection: 'row',
    zIndex: 1,
    height: scale(61),
    alignItems: 'center',
    padding: scale(10),
    marginTop: scale(20),
    backgroundColor: theme.WHITE,
    borderRadius: 50,
    shadowColor: theme.BLACK,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 8,
  },

  containerStyles:{
    paddingVertical:0,
    borderRadius: scale(40),
    backgroundColor: theme.TEXT_PRIMARY_DARK,
    borderWidth: 0,
    paddingHorizontal: scale(10),
    flex: 1,
  },
  SurfaceIcon: {
    marginLeft: scale(8),
    marginRight:scale(4),
    paddingVertical: scale(40),
  },
  row: {
    flexDirection: 'row',
  },
  liveSubText: {
    fontSize: scale(14),
    color: theme.TRACK_SUB_MENU_BLACK,
    fontFamily: fonts.Proxima_Nova_Bold,
    alignSelf: 'center',
    marginRight: scale(10),
    textTransform: 'uppercase',
  },
});
