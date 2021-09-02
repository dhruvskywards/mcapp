import {scale, verticalScale, ScaledSheet} from 'react-native-size-matters';
import Fonts from '../../utils/fonts';
import Colors from '../../utils/theme';

export default ScaledSheet.create({
  buttonTitle: {
    fontFamily: Fonts.Proxima_Nova_Sbold,
    fontSize: scale(15),
    textAlign: 'center',
    color: Colors.WHITE,
  },
  buttonContainer: {
    bottom: 0,
    alignItems: 'center',
    borderTopLeftRadius: scale(20),
    borderTopRightRadius: scale(20),
    fontFamily: 'ProximaNova-Regular',
    paddingVertical: verticalScale(16),
    backgroundColor: Colors.BLACK,
  },
});
