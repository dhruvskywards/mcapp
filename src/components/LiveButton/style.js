import {scale, verticalScale, ScaledSheet} from 'react-native-size-matters';
import fonts from '../../utils/fonts';
import theme from '../../utils/theme';

export default ScaledSheet.create({
  verticalBorder: {
    height: verticalScale(40),
    width: scale(1),
    backgroundColor: theme.SILVER_VARAINT_3_BLK,
    marginHorizontal: scale(5),
  },
  liveView: {
    height: scale(25),
    width: scale(70),
    alignItems: 'center',
    borderRadius: scale(20),
    justifyContent: 'center',
  },
  live: {
    backgroundColor: theme.LIVE_TEXT,
  },
  offline: {
    backgroundColor: theme.WHITE,
  },
  liveText: {
    fontSize: scale(14),
    color: theme.BLACK,
    fontFamily: fonts.Proxima_Nova_Bold,
  },
  row: {
    flexDirection: 'row',
  },
  liveSubText: {
    fontSize: scale(14),
    color: theme.TRACK_SUB_MENU_BLACK,
    fontFamily: fonts.Proxima_Nova_Bold,
    alignSelf: 'center',
    marginRight: scale(10),
    textTransform: 'uppercase',
  },
  container: {
    height: verticalScale(60),
    backgroundColor: theme.WHITE,
    borderRadius: scale(40),
    zIndex: 1,
    marginHorizontal: scale(20),
    paddingHorizontal: scale(10),
    shadowColor: theme.BLACK,
    shadowOffset: {
      width: scale(1),
      height: verticalScale(5),
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 10,
  },
  headercontainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
});
