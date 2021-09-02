import {scale, ScaledSheet, verticalScale} from 'react-native-size-matters';
import fonts from '../../../../../utils/fonts';
import theme from '../../../../../utils/theme';

export default ScaledSheet.create({
  maincontainer: {
    flex: 1,
    backgroundColor: theme.WHITE,
  },
  container: {
    flex: 1,
    marginBottom: verticalScale(70),
  },
  backgroundColor: {
    backgroundColor: theme.WHITE,
  },
  imageStyle: {
    width: '100%',
  },
  titleText: {
    marginTop: scale(15),
    fontSize: scale(11),
    color: theme.BLACK,
    lineHeight: scale(12),
    fontFamily: fonts.Proxima_Nova_Black,
  },
  insideContainer: {
    paddingHorizontal: scale(32),
    backgroundColor: theme.WHITE,
  },
  ContainText: {
    marginTop: verticalScale(15),
    fontSize: scale(14),
    color: theme.BLACK,
    fontFamily: fonts.Proxima_Nova_Regular,
    lineHeight: scale(20),
  },
  SubtitleText: {
    marginTop: verticalScale(8),
    fontSize: scale(12),
    color: theme.BACKGROUND_SECONDARY_DARK,
    fontFamily: fonts.Proxima_Nova_Regular,
    marginBottom: verticalScale(10),
  },
  Locationstyle: {
    marginTop: verticalScale(5),
    fontSize: scale(12),
    color: theme.BACKGROUND_SECONDARY_DARK,
    fontFamily: fonts.Proxima_Nova_Regular,
    textDecorationLine: 'underline',
  },
  ItemtitleText: {
    marginTop: verticalScale(5),
    fontSize: scale(14),
    color: theme.BACKGROUND_SECONDARY_DARK,
    fontFamily: fonts.Proxima_Nova_Regular,
  },
  FooterButton: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
  },
});
