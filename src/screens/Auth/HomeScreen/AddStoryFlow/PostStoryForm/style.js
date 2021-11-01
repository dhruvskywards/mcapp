import {
  scale,
  verticalScale,
  moderateScale,
  ScaledSheet,
} from 'react-native-size-matters';
import fonts from '../../../../../utils/fonts';
import theme from '../../../../../utils/theme';

export default ScaledSheet.create({
  maincontainer: {
    flex: 1,
    backgroundColor: theme.WHITE,
  },
  container: {
    flex: 1,
    paddingHorizontal: scale(20),
    marginBottom: scale(60),
  },
  titleText: {
    fontSize: scale(14),
    color: theme.BACKGROUND_SECONDARY_DARK,
    fontFamily: fonts.Proxima_Nova_Regular,
  },
  txt: {
    fontSize: scale(12),
    fontFamily: fonts.Proxima_Nova_Black,
    color: theme.BLACK,
    textTransform: 'uppercase',
    marginRight: scale(20),
  },
  SubtitleText: {
    fontSize: scale(18),
    color: theme.BLACK,
    fontFamily: fonts.Proxima_Nova_Bold,
  },
  lebeltext: {
    marginTop: scale(14),
    marginBottom: scale(9),
    fontSize: scale(14),
    color: theme.BLACK,
    fontFamily: fonts.Proxima_Nova_Bold,
  },
  captionView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  ProfileImage: {
    height: scale(36),
    width: scale(36),
    borderRadius: scale(20),
    backgroundColor: theme.LIGHT_GRAY,
  },
  colorView: {
    height: scale(36),
    width: scale(36),
    borderRadius: scale(20),
    backgroundColor: theme.BLACK,
  },
  bottomline: {
    // marginVertical: scale(8),
    height: scale(2),
    backgroundColor: theme.LIGHT_GRAY,
  },
  setupView: {
    marginTop: scale(12),
    marginBottom: scale(18),
  },
  audioView: {
    marginTop: scale(12),
    marginBottom: scale(18),
    backgroundColor: theme.BACKGROUND_VARAINT_8,
    margin: -scale(20),
    paddingHorizontal: scale(20),
    paddingVertical: scale(20),
  },
  Detialstext: {
    fontFamily: fonts.Proxima_Nova_Regular,
    fontSize: scale(14),
    color: theme.BLACK,
    lineHeight: scale(17),
    marginVertical: scale(20),
  },
  Footerbutton: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  button: {
    width: scale(100),
    borderRadius: scale(15),
    backgroundColor: theme.BLACK,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: scale(8),
    marginRight: scale(12),
  },
  btnText: {
    fontSize: scale(10),
    fontFamily: fonts.Proxima_Nova_Sbold,
    color: theme.WHITE,
  },
  AudioBtnView: {
    flexDirection: 'row',
  }
});
