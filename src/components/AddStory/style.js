import {scale, verticalScale, ScaledSheet} from 'react-native-size-matters';
import fonts from '../../utils/fonts';
import theme from '../../utils/theme';

export default ScaledSheet.create({
  maincontainer: {
    // flex: 1,
    alignItems: 'center',
    marginRight: scale(20),
    backgroundColor: theme.WHITE,
    paddingVertical: verticalScale(15),
  },
  imageContainer: {
    height: scale(40),
    width: scale(40),
    borderRadius: scale(20),
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.2,
  },
  titleText: {
    marginTop: verticalScale(11),
    fontSize: scale(9),
    color: theme.BLACK,
    fontFamily: fonts.Proxima_Nova_Sbold,
  },
});
