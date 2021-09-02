import {
  scale,
  verticalScale,
  moderateScale,
  ScaledSheet,
} from 'react-native-size-matters';
import fonts from 'src/utils/fonts';
import theme from 'src/utils/theme';

export default ScaledSheet.create({
  maincontainer: {
    flex: 1,
    backgroundColor: theme.WHITE,
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
});
