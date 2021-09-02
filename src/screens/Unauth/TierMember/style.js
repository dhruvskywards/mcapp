import {scale, verticalScale, ScaledSheet} from 'react-native-size-matters';
import Fonts from 'src/utils/fonts';
import Colors from 'src/utils/theme';

export default ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BACKGROUND_VARIANT_2,
  },
  insideContainer: {
    paddingHorizontal: scale(32),
  },
  text: {
    fontSize: scale(34),
    color: Colors.BACKGROUND_SECONDARY_DARK,
    fontFamily: Fonts.Proxima_Nova_Light,
  },
  button: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  title: {
    fontSize: scale(14),
    color: Colors.BACKGROUND_SECONDARY_DARK,
    fontFamily: Fonts.Proxima_Nova_Light,
    marginTop: verticalScale(50),
  },
  titleSub: {
    fontSize: scale(32),
    color: Colors.BACKGROUND_SECONDARY_DARK,
    fontFamily: Fonts.Proxima_Nova_Light,
    marginVertical: verticalScale(20),
  },
  titlePrivacy: {
    fontSize: scale(14),
    color: Colors.BLACK,
    fontFamily: Fonts.Proxima_Nova_Regular,
    marginVertical: verticalScale(20),
  },
  privacyView: {
    marginTop: verticalScale(40),
    flexDirection: 'row',
    marginBottom: verticalScale(20),
  },
  titlePrivacyBorder: {
    fontSize: scale(14),
    color: Colors.BLACK,
    fontFamily: Fonts.Proxima_Nova_Regular,
    textDecorationLine: 'underline',
    marginVertical: verticalScale(20),
  },
});
