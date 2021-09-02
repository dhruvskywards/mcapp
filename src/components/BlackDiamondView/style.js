import {scale, ScaledSheet} from 'react-native-size-matters';
import Fonts from '../../utils/fonts';
import Colors from '../../utils/theme';

export default ScaledSheet.create({
  MainContainer: {
    alignItems: 'center',
    flexDirection: 'row',
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
    fontFamily: Fonts.Proxima_Nova_Black,
    fontSize: scale(12),
    color: Colors.ICON_COLOR_VARAINT1,
    marginLeft: scale(7),
  },
});
