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
  facebookView: {
    width: '100%',
    backgroundColor: Colors.FACEBOOK,
    borderRadius: 3,
    height: verticalScale(42),
    paddingHorizontal: scale(14),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: verticalScale(50),
  },
  instagramView: {
    width: '100%',
    borderRadius: 3,
    borderWidth: 1,
    borderColor: Colors.LIGHT_GRAY,
    backgroundColor: Colors.WHITE,
    height: verticalScale(42),
    paddingHorizontal: scale(14),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: verticalScale(10),
  },
  facebook: {
    height: verticalScale(20),
    resizeMode: 'contain',
  },
  text: {
    fontSize: scale(34),
    color: Colors.BACKGROUND_SECONDARY_DARK,
    fontFamily: Fonts.Proxima_Nova_Light,
  },
  rowContainer: {
    flexDirection: 'row',
    marginTop: verticalScale(110),
  },
  border: {
    borderColor: Colors.DISABLED,
    borderWidth: 0.6,
    flex: 0.5,
    alignSelf: 'center',
  },
  link: {
    fontSize: scale(13.6),
    color: Colors.BACKGROUND_SECONDARY_DARK,
    fontFamily: Fonts.Proxima_Nova_Bold,
    marginTop: verticalScale(50),
    textDecorationLine: 'underline',
    lineHeight: scale(20),
  },
  titleOr: {
    fontSize: scale(14),
    color: Colors.THUMBNAIL_BORDER_COLOR,
    fontFamily: Fonts.Proxima_Nova_Bold,
    paddingHorizontal: scale(10),
  },
  titleSub: {
    fontSize: scale(18),
    color: Colors.DISABLED,
    fontFamily: Fonts.Proxima_Nova_Light,
    marginTop: verticalScale(50),
  },
  titleSubEmail: {
    fontSize: scale(14),
    color: Colors.BORDER_SILVER,
    fontFamily: Fonts.Proxima_Nova_Light,
    borderBottomWidth: 1,
    borderBottomColor: Colors.BORDER_SILVER,
  },
  button: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
});
