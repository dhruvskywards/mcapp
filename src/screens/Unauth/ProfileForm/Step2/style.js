import {
  scale,
  verticalScale,
  moderateScale,
  ScaledSheet,
} from 'react-native-size-matters';
import fonts from 'src/utils/fonts';
import Fonts from 'src/utils/fonts';
import theme from 'src/utils/theme';

export default ScaledSheet.create({
  maincontainer: {
    flex: 1,
    backgroundColor: theme.BACKGROUND_VARIANT_2,
  },
  container: {
    flex: 1,
    paddingHorizontal: moderateScale(32),
  },
  imageStyle: {
    height: verticalScale(60),
    width: scale(60),
    resizeMode: 'contain',
    alignSelf: 'center',
    marginVertical: verticalScale(30),
  },
  titleText: {
    fontSize: scale(14),
    color: theme.BLACK,
    fontFamily: Fonts.Proxima_Nova_Regular,
    textAlign: 'center',
  },
  MaintitleText: {
    fontSize: scale(14),
    color: theme.BLACK,
    fontFamily: Fonts.Proxima_Nova_Regular,
    textAlign: 'center',
    marginTop: verticalScale(24),
  },
  SubtitleText: {
    fontSize: scale(14),
    color: theme.BLACK,
    fontFamily: Fonts.Proxima_Nova_Regular,
    textAlign: 'center',
    marginTop: verticalScale(34),
    marginHorizontal: scale(30),
  },
  RadioBtntitleText: {
    fontSize: scale(14),
    color: theme.BLACK,
    fontFamily: Fonts.Proxima_Nova_Regular,
    marginTop: verticalScale(50),
  },
  RadioBtnItemText: {
    fontSize: scale(14),
    color: theme.BLACK,
    fontFamily: Fonts.Proxima_Nova_Regular,
    paddingVertical: verticalScale(10),
  },
  TextBold: {
    fontSize: scale(14),
    color: theme.BLACK,
    fontFamily: Fonts.Proxima_Nova_Regular,
    fontWeight: 'bold',
  },
  Calenderstyle: {
    marginTop: verticalScale(20),
    height: verticalScale(40),
    backgroundColor: theme.WHITE,
    width: '100%',
  },
  dateInput: {
    borderColor: '#ffffff',
    alignItems: 'flex-start',
    paddingHorizontal: scale(15),
    paddingTop: scale(7),
  },
  PlaceHolderText: {
    textAlign: 'left',
    color: theme.BLACK,
    fontFamily: fonts.Proxima_Nova_Regular,
  },
  radiobtn: {
    marginHorizontal: -scale(10),
  },
  button: {
    flex: 1,
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  textInput: {
    top: -verticalScale(34),
    marginLeft: scale(90),
  },
  CustomtextInput: {
    width: '100%',
    height: verticalScale(35),
  },
});
