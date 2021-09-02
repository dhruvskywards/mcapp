import {scale, ScaledSheet} from 'react-native-size-matters';
import Fonts from '../../utils/fonts';
import Colors from '../../utils/theme';

export default ScaledSheet.create({
  container: {
    flexDirection: 'row',
  },
  buttonTitle: {
    fontFamily: Fonts.Proxima_Nova_Regular,
    fontSize: scale(10),
    textAlign: 'center',
    color: Colors.WHITE,
  },
  buttonContainer: {
    width: '45%',
    alignItems: 'center',
    borderRadius: scale(30),
    marginRight: scale(10),
    fontFamily: 'ProximaNova-Regular',
    paddingVertical: 15,
    backgroundColor: Colors.BACKGROUND_PRIMARY_DARK,
  },
});
