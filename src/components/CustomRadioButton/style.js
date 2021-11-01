import {scale, ScaledSheet} from 'react-native-size-matters';
import Fonts from '../../utils/fonts';
import Colors from '../../utils/theme';

export default ScaledSheet.create({
  MainContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: scale(15),
  },
  DetailsView: {
    marginTop: scale(10),
    alignItems: 'center',
  },
  nameText: {
    fontFamily: Fonts.Proxima_Nova_Regular,
    fontSize: scale(14),
    color: Colors.BLACK,
    marginHorizontal: scale(12),
  },
  imageView: {
    height: scale(36),
    width: scale(36),
    borderRadius: scale(20),
    backgroundColor: Colors.LIGHT_GRAY,
  },
  typeText: {
    fontFamily: Fonts.Proxima_Nova_Sbold,
    fontSize: scale(10),
    color: Colors.TEXT_VARIANT_2_BlK,
  },
  outerview: {
    height: scale(24),
    width: scale(24),
    borderRadius: scale(20),
    borderWidth: scale(0.5),
    backgroundColor: Colors.TRANSPARENT,
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerView: {
    height: scale(8),
    width: scale(8),
    borderRadius: scale(10),
    backgroundColor: Colors.BLACK,
  }
});
