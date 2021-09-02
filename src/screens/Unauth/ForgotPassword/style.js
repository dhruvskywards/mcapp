import {scale, verticalScale, ScaledSheet} from 'react-native-size-matters';
import Fonts from 'src/utils/fonts';
import Colors from 'src/utils/theme';

export default ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BACKGROUND_VARIANT_2,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  insideContainer: {
    paddingHorizontal: scale(32),
    paddingVertical: verticalScale(140),
    width: '100%',
    flex: 1,
    justifyContent: 'space-around',
  },
  text: {
    fontSize: scale(34),
    color: Colors.BACKGROUND_SECONDARY_DARK,
    fontFamily: Fonts.Proxima_Nova_Light,
  },
  title: {
    marginBottom: verticalScale(20),
  },
  titleSub: {
    fontSize: scale(18),
    color: Colors.BACKGROUND_SECONDARY_DARK,
    marginVertical: scale(15),
    fontFamily: Fonts.Proxima_Nova_Light,
  },
  button: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
});
