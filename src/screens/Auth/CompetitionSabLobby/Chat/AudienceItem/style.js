import {scale, ScaledSheet} from 'react-native-size-matters';
import Fonts from '../../../../../utils/fonts';
import Colors from '../../../../../utils/theme';

export default ScaledSheet.create({
  MainContainer: {
    alignItems: 'center',
  },
  DetailsView: {
    marginTop: scale(10),
    alignItems: 'center',
  },
  nameText: {
    fontFamily: Fonts.Proxima_Nova_Sbold,
    fontSize: scale(14),
    color: Colors.BLACK,
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
});
