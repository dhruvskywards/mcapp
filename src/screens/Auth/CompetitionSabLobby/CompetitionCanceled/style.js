import {scale, verticalScale, ScaledSheet} from 'react-native-size-matters';
import fonts from '../../../../utils/fonts';
import theme from '../../../../utils/theme';

export default ScaledSheet.create({
  maincontainer: {
    flex: 1,
    backgroundColor: theme.BACKGROUND_VARAINT_2,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    marginTop: verticalScale(70),
    fontSize: scale(17),
    color: theme.BLACK,
    fontFamily: fonts.Proxima_Nova_Bold,
  },
  PrizeTitle: {
    marginTop: verticalScale(25),
    marginHorizontal: scale(42),
    textAlign: 'center',
    fontSize: scale(16),
    color: theme.BLACK,
    fontFamily: fonts.Proxima_Nova_Regular,
  },
  boldText: {
    fontWeight: 'bold',
    fontFamily: fonts.Proxima_Nova_Bold,
    marginTop: 0,
  },
  button: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
});
