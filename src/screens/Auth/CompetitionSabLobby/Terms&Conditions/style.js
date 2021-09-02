import {scale, ScaledSheet, verticalScale} from 'react-native-size-matters';
import fonts from 'src/utils/fonts';
import theme from 'src/utils/theme';
import Colors from "../../../../utils/theme";
import Fonts from "../../../../utils/fonts";

export default ScaledSheet.create({
  maincontainer: {
    flex: 1,
    backgroundColor: theme.WHITE,
  },
  container: {
    flex: 1,
  },
  titleText: {
    marginTop: scale(18),
    fontSize: scale(16),
    color: theme.BLACK,
    fontFamily: fonts.Proxima_Nova_Sbold,
  },
  imageStyle: {
    width: '100%',
  },
  insideContainer: {
    top: -scale(30),
    borderRadius: scale(30),
    alignItems: 'center',
    paddingHorizontal: scale(20),
    backgroundColor: theme.WHITE,
    marginBottom: verticalScale(40),
  },
  ContainText: {
    marginTop: verticalScale(18),
    fontSize: scale(14),
    color: theme.BLACK,
    fontFamily: fonts.Proxima_Nova_Regular,
    lineHeight: scale(20),
  },
  SubtitleText: {
    fontSize: scale(35),
    color: theme.BACKGROUND_SECONDARY_DARK,
    fontFamily: fonts.Proxima_Nova_Regular,
  },
  FooterButton: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
  },
  FooterButton1: {
    bottom: 0,
    position: 'absolute',
    width: '100%',
    alignItems: 'center',
    borderTopLeftRadius: scale(20),
    borderTopRightRadius: scale(20),
    paddingVertical: verticalScale(16),
    backgroundColor: Colors.BLACK,
    height:70
  },
  buttonTitle: {
    fontFamily: Fonts.Proxima_Nova_Sbold,
    fontSize: scale(15),
    textAlign: 'center',
    color: Colors.WHITE,
  },
});
