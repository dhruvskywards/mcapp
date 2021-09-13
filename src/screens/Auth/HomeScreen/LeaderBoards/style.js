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
    borderTopLeftRadius: scale(40),
    borderTopRightRadius: scale(40),
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
});
