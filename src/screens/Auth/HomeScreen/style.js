import {Dimensions} from 'react-native';
import {scale, verticalScale, ScaledSheet} from 'react-native-size-matters';
import fonts from 'src/utils/fonts';
import theme from 'src/utils/theme';
let deviceWidth = Dimensions.get('window').width;
let deviceheight = Dimensions.get('window').height;
export default ScaledSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: verticalScale(60),
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: scale(20),
  },
  insideHeader: {
    flex: 0.4,
    alignItems: 'center',
    flexDirection: 'row',
  },
  BlackDiamondContainer: {
    marginLeft: scale(20),
    flexDirection: 'row',
  },
  logoView: {
    flex: 0.2,
    alignItems: 'center',
  },
  MessageView: {
    flex: 0.4,
    alignItems: 'flex-end',
  },
  titleText: {
    fontSize: scale(14),
    color: theme.ICON_COLOR_VARAINT1,
    fontFamily: fonts.Proxima_Nova_Black,
  },
  titleTextBlack: {
    fontSize: scale(15),
    color: theme.BLACK,
    fontFamily: fonts.Proxima_Nova_Regular,
  },
  SubtitleText: {
    fontSize: scale(35),
    color: theme.BACKGROUND_SECONDARY_DARK,
    fontFamily: fonts.Proxima_Nova_Regular,
  },
  modal: {
    height: verticalScale(140),
    width: scale(220),
    alignItems: 'center',
    justifyContent: 'center',
  },
  flashmodel: {
    top: verticalScale(35),
    left: -scale(7),
  },
  DiamondModel: {
    top: verticalScale(35),
    left: -scale(7),
  },
  MessageModel: {
    top: verticalScale(35),
    left: scale(100),
  },
  BottomModel: {
    // position:'absolute',
    top: deviceheight - scale(200),
    width: deviceWidth,
    borderRadius: scale(0),
  },
});
