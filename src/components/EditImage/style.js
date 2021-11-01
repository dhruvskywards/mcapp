import {scale, verticalScale, ScaledSheet} from 'react-native-size-matters';
import fonts from '../../utils/fonts';
import theme from '../../utils/theme';

export default ScaledSheet.create({
  maincontainer: {
    position: 'absolute',
    height: 120,
    alignItems: 'center',
    marginRight: scale(20),
    backgroundColor: theme.BLACK,
    alignSelf: 'center',
    // paddingVertical: verticalScale(15),
  },
  imageContainer: {
    height: scale(60),
    width: scale(60),
    borderRadius: scale(40),
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
  },
  titleText: {
    marginTop: verticalScale(18),
    fontSize: scale(11),
    color: theme.BLACK,
    fontFamily: fonts.Proxima_Nova_Sbold,
  },
  imageView: {
    height: scale(60),
    width: scale(60),
    borderRadius: scale(40),
    backgroundColor: theme.LIGHT_GRAY,
  },
});
