import {Platform} from 'react-native';
import {scale, verticalScale, ScaledSheet} from 'react-native-size-matters';
import Fonts from 'src/utils/fonts';
import Colors from 'src/utils/theme';

export default ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BACKGROUND_VARIANT_2,
  },
  insideContainer: {
    paddingTop: Platform.OS === 'ios' ? verticalScale(65) : verticalScale(90),
  },
  text: {
    fontSize: scale(34),
    color: Colors.BACKGROUND_SECONDARY_DARK,
    fontFamily: Fonts.Proxima_Nova_Light,
  },
  title: {
    marginRight: scale(40),
  },
  titleSub: {
    fontSize: scale(14),
    color: Colors.BORDER_SILVER,
    fontFamily: Fonts.Proxima_Nova_Regular,
    lineHeight: 25,
  },
  titleSubEmail: {
    fontSize: scale(14),
    color: Colors.BORDER_SILVER,
    fontFamily: Fonts.Proxima_Nova_Regular,
    borderBottomColor: Colors.BORDER_SILVER,
    textDecorationLine: 'underline',
  },
  button: {
    width: '100%',
    marginTop: verticalScale(20),
  },
});
