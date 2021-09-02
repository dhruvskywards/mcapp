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
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: scale(5),
    borderRadius: scale(60),
  },
  border: {
    borderColor: Colors.THUMBNAIL_BORDER_COLOR,
    borderWidth: 1,
    height: 1,
    flex: 0.5,
    alignSelf: 'center',
  },
  title: {
    fontSize: scale(14),
    color: Colors.BACKGROUND_SECONDARY_DARK,
    fontFamily: Fonts.Proxima_Nova_Light,
    marginTop: verticalScale(50),
  },
  titlePassword: {
    fontSize: scale(12),
    color: Colors.BACKGROUND_SECONDARY_DARK,
    fontFamily: Fonts.Proxima_Nova_Regular,
  },
  titleOr: {
    fontSize: scale(14),
    color: Colors.THUMBNAIL_BORDER_COLOR,
    fontFamily: Fonts.Proxima_Nova_Bold,
    paddingHorizontal: scale(10),
  },
  PhonetitleSub: {
    fontSize: scale(32),
    color: Colors.BACKGROUND_SECONDARY_DARK,
    fontFamily: Fonts.Proxima_Nova_Light,
    marginVertical: verticalScale(25),
  },
  emailtitleSub: {
    fontSize: scale(32),
    color: Colors.BACKGROUND_SECONDARY_DARK,
    fontFamily: Fonts.Proxima_Nova_Light,
    marginTop: verticalScale(5),
  },
  titleTerm: {
    fontSize: scale(14),
    color: Colors.BLACK,
    fontFamily: Fonts.Proxima_Nova_Black,
    alignSelf: 'center',
    marginLeft: scale(12),
  },
  titleTab: {
    fontSize: scale(12),
    color: Colors.WHITE,
    fontFamily: Fonts.Proxima_Nova_Sbold,
  },
  checkBoxView: {
    justifyContent: 'center',
    alignItems: 'center',
    height: scale(30),
    width: scale(30),
    borderRadius: scale(5),
    backgroundColor: Colors.WHITE,
    borderWidth: 1,
    borderColor: Colors.CHECKBOX_BORDER,
  },
  titlePrivacy: {
    fontSize: scale(14),
    color: Colors.BLACK,
    fontFamily: Fonts.Proxima_Nova_Regular,
    lineHeight: scale(24),
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
    lineHeight: scale(24),
  },
  passwordEye: {
    right: scale(20),
  },
  topContainer: {
    marginTop: scale(20),
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
  phoneMenu: {
    paddingHorizontal: scale(15),
    paddingVertical: scale(8),
    borderRadius: scale(30),
  },
  emailMenu: {
    paddingHorizontal: scale(15),
    paddingVertical: scale(8),
    borderRadius: scale(30),
    marginLeft: scale(10),
  },
  textInput: {
    width: '85%',
  },
  barStyle: {
    marginLeft: -scale(5),
    marginRight: -scale(5),
  },
  ProgessbarlebelView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  Progressbarlebel: {
    fontFamily: Fonts.Proxima_Nova_Sbold,
    fontSize: scale(10),
  },
});
