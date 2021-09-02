import {scale, ScaledSheet, verticalScale} from 'react-native-size-matters';
import Fonts from '../../utils/fonts';
import Colors from '../../utils/theme';

export default ScaledSheet.create({
  buttonTitle: {
    fontFamily: Fonts.Proxima_Nova_Sbold,
    fontSize: scale(12),
    textAlign: 'center',
    color: Colors.WHITE,
  },
  buttonContainer: {
    alignItems: 'center',
    borderRadius: scale(30),
    fontFamily: 'ProximaNova-Regular',
    paddingVertical: verticalScale(13),
    backgroundColor: Colors.BACKGROUND_PRIMARY_DARK,
  },
});
