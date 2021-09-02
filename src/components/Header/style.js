import {scale, verticalScale, ScaledSheet} from 'react-native-size-matters';
import Colors from '../../utils/theme';
import Fonts from '../../utils/fonts';

export default ScaledSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: verticalScale(20),
    paddingHorizontal: scale(20),
  },
  title: {
    fontSize: scale(14),
    color: Colors.BLACK,
    fontFamily: Fonts.Proxima_Nova_Sbold,
  },
  alignSelf: {
    alignSelf: 'center',
    flex: 0.2,
  },
});
