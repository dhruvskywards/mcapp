import {scale, verticalScale, ScaledSheet} from 'react-native-size-matters';
import fonts from '../../utils/fonts';
import theme from '../../utils/theme';

export default ScaledSheet.create({
  maincontainer: {
    // flex: 1,
    alignItems: 'center',
    marginRight: scale(27),
    paddingVertical: verticalScale(15),
    height: scale(80),
    width: scale(40),
  },
  imageContainer: {
    height: scale(40),
    width: scale(40),
    borderRadius: scale(20),
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    marginTop: verticalScale(11),
    fontSize: scale(9),
    color: theme.BLACK,
    fontFamily: fonts.Proxima_Nova_Sbold,
  },
});
