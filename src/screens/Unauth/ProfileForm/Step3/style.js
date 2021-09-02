import {
  scale,
  verticalScale,
  moderateScale,
  ScaledSheet,
} from 'react-native-size-matters';
import Fonts from 'src/utils/fonts';
import theme from 'src/utils/theme';

export default ScaledSheet.create({
  maincontainer: {
    flex: 1,
    flexGrow: 1,
    backgroundColor: '#F9F9F9',
  },
  container: {
    flex: 1,
    paddingHorizontal: moderateScale(32),
  },
  imageStyle: {
    height: verticalScale(50),
    width: scale(50),
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  row: {
    flexDirection: 'row',
    flex: 1,
    alignItems:'center',
  },
  MaintitleText: {
    fontSize: scale(14),
    color: theme.BLACK,
    fontFamily: Fonts.Proxima_Nova_Regular,
    textAlign: 'center',
    marginTop: verticalScale(18),
  },
  SubtitleText: {
    fontSize: scale(14),
    color: theme.BLACK,
    fontFamily: Fonts.Proxima_Nova_Regular,
    textAlign: 'left',
    marginTop: verticalScale(30),
  },
  titleText: {
    fontSize: scale(14),
    color: theme.BLACK,
    fontFamily: Fonts.Proxima_Nova_Regular,
    paddingVertical: verticalScale(10),
    marginLeft: scale(10),
  },
  titleTextBold: {
    fontSize: scale(14),
    color: theme.BLACK,
    fontFamily: Fonts.Proxima_Nova_Regular,
    fontWeight: 'bold',
  },
  button: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  border: {
    height: scale(22),
    width: scale(22),
    borderRadius: scale(20),
    borderColor: theme.BLACK,
    borderWidth: 1,
    backgroundColor: theme.TRANSPARENT,
    alignItems: 'center',
    justifyContent: 'center',
  },
  // radiobtn: {
  //   marginHorizontal: -scale(5),
  // },
  radiobtn: {
    height: scale(16),
    width: scale(16),
    borderRadius: scale(12),
  },
  ScroolView: {
    marginVertical: verticalScale(10),
    marginBottom: verticalScale(55),
  },
});
