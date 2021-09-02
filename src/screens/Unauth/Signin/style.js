import {scale, verticalScale, ScaledSheet} from 'react-native-size-matters';
import Fonts from 'src/utils/fonts';
import Colors from 'src/utils/theme';

export default ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BACKGROUND_VARIANT_2,
    // alignItems: 'center',
    // justifyContent: 'center',
    // paddingHorizontal: scale(32)
  },
  insideContainer: {
    paddingHorizontal: scale(32),
    paddingVertical: verticalScale(140),
    width: '100%',
    flex: 1,
    justifyContent: 'space-around',
  },
  text: {
    fontSize: scale(34),
    color: Colors.BACKGROUND_SECONDARY_DARK,
    fontFamily: Fonts.Proxima_Nova_Light,
  },
  title: {
    marginVertical: verticalScale(15),
    fontSize: scale(34),
    color: Colors.BACKGROUND_SECONDARY_DARK,
    marginBottom: scale(10),
    fontFamily: Fonts.Proxima_Nova_Light,
  },
  titleSub: {
    fontSize: scale(18),
    color: Colors.BACKGROUND_SECONDARY_DARK,
    marginBottom: scale(15),
    fontFamily: Fonts.Proxima_Nova_Light,
  },
  appleBtn: {
    backgroundColor: 'black',
    height: 50,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 3,
    marginTop: verticalScale(30),
    marginBottom: verticalScale(20),
  },
  appleTitle: {
    fontSize: scale(14),
    color: Colors.WHITE,
    fontFamily: Fonts.Proxima_Nova_Regular,
    marginLeft: scale(10),
  },
  footerTitle: {
    fontSize: scale(22),
    color: Colors.BACKGROUND_SECONDARY_DARK,
    fontFamily: Fonts.Proxima_Nova_Light,
  },
  passwordEye: {
    right: scale(20),
  },
  passwordStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: verticalScale(20),
    backgroundColor: Colors.WHITE,
    borderRadius: scale(8),
  },
  button: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  textInput: {
    width: '85%',
  },
});
