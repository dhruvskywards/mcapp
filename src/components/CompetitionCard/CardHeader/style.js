import {scale, verticalScale, ScaledSheet} from 'react-native-size-matters';
import fonts from '../../../utils/fonts';
import theme from '../../../utils/theme';

export default ScaledSheet.create({
  maincontainer: {
    marginTop: verticalScale(10),
    height: verticalScale(50),
    flexDirection: 'row',
  },
  profileInfo: {
    flexDirection: 'row',
    marginHorizontal: scale(25),
    paddingVertical: verticalScale(15),
    alignItems: 'center',
  },
  imageview: {
    height: scale(30),
    width: scale(30),
    borderRadius: scale(15),
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
    marginHorizontal: scale(7),
    fontSize: scale(12),
    color: theme.WHITE,
    fontFamily: fonts.Proxima_Nova_Sbold,
  },
});
