import {
  scale,
  verticalScale,
  moderateScale,
  ScaledSheet,
} from 'react-native-size-matters';
import Fonts from 'src/utils/fonts';
import theme from 'src/utils/theme';

export default ScaledSheet.create({
  maincontainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: theme.COMPTITION_BACKGROUND,
  },
  container: {
    paddingHorizontal: moderateScale(35),
    // justifyContent: 'space-around',
    // marginVertical: verticalScale(60),
  },
  titleText: {
    fontSize: scale(14),
    color: theme.LABEL_COLOR,
    fontFamily: Fonts.Proxima_Nova_Regular,
  },
  titleTextBlack: {
    fontSize: scale(15),
    color: theme.BLACK,
    fontFamily: Fonts.Proxima_Nova_Regular,
  },
  SubtitleText: {
    marginVertical: verticalScale(15),
    fontSize: scale(35),
    color: theme.LABEL_COLOR,
    fontFamily: Fonts.Proxima_Nova_Regular,
  },
  imageStyle: {
    backgroundColor: theme.WHITE,
    alignItems: 'center',
    justifyContent: 'center',
    width: scale(100),
    height: scale(100),
    borderRadius: scale(55),
  },
  actionsheet: {
    height: verticalScale(200),
    paddingHorizontal: scale(15),
    justifyContent: 'space-evenly',
  },
  button: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  devide: {
    marginTop: verticalScale(20),
  },
});
