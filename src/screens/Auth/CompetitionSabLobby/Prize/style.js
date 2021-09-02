import {
  scale,
  verticalScale,
  moderateScale,
  ScaledSheet,
} from 'react-native-size-matters';
import fonts from '../../../../utils/fonts';
import theme from '../../../../utils/theme';

export default ScaledSheet.create({
  scrollViewContainer: {
    flex: 1,
  },
  maincontainer: {
    flex: 1,
    backgroundColor: theme.BACKGROUND_VARAINT_7,
  },
  container: {
    paddingHorizontal: moderateScale(32),
    borderTopLeftRadius: scale(30),
    borderTopRightRadius: scale(30),
    marginTop: verticalScale(60),
    backgroundColor: theme.WHITE,
    paddingVertical: verticalScale(23),
  },
  AudiancePrizecontainer: {
    paddingHorizontal: moderateScale(32),
    backgroundColor: theme.BACKGROUND_VARAINT_7,
    paddingVertical: verticalScale(23),
  },
  offPrizeContainer: {
    backgroundColor: theme.BACKGROUND_VARAINT_7,
    height: scale(100),
    flexDirection: 'row',
    alignItems: 'center',
  },
  evenPrizeContainer: {
    backgroundColor: theme.WHITE,
    height: scale(100),
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleText: {
    fontSize: scale(15),
    color: theme.BLACK,
    fontFamily: fonts.Proxima_Nova_Sbold,
  },
  PrizeTitle: {
    marginLeft: scale(10),
    transform: [{rotate: '270deg'}],
    fontSize: scale(10),
    color: theme.BLACK_VARAINT_4,
    fontFamily: fonts.Proxima_Nova_Bold,
  },
  subtitleText: {
    marginTop: verticalScale(15),
    fontSize: scale(12),
    color: theme.BLACK,
    fontFamily: fonts.Proxima_Nova_Regular,
    lineHeight: scale(20),
  },
});
