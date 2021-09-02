import {scale, ScaledSheet} from 'react-native-size-matters';
import Fonts from '../../utils/fonts';
import Colors from '../../utils/theme';

export default ScaledSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  CashText: {
    fontFamily: Fonts.Proxima_Nova_Sbold,
    fontSize: scale(18),
    color: Colors.GRAY_VARIANT_1,
  },
  RemixPointText: {
    fontFamily: Fonts.Proxima_Nova_Sbold,
    fontSize: scale(10),
    color: Colors.GRAY_VARIANT_2,
  },
  CombineView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginRight: scale(25),
  },
  Button: {
    paddingVertical: scale(10),
    paddingHorizontal: scale(18),
  },
});
