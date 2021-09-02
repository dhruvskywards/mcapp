import {scale, verticalScale, ScaledSheet} from 'react-native-size-matters';
import Colors from '../../utils/theme';
import Fonts from '../../utils/fonts';
import theme from '../../utils/theme';

export default ScaledSheet.create({
  mainContainer: {
    height: verticalScale(140),
    width: scale(220),
    backgroundColor: theme.WHITE,
    alignItems: 'center',
    justifyContent: 'space-around',
    borderRadius: scale(15),
    padding: scale(15),
  },
  title: {
    fontSize: scale(14),
    color: Colors.WHITE,
    fontFamily: Fonts.Proxima_Nova_Sbold,
  },
  innerContainer: {
    flexDirection: 'row',
    paddingHorizontal: scale(7),
    alignItems: 'center',
  },
  iconView: {
    height: verticalScale(34),
    width: scale(34),
    borderRadius: scale(20),
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: theme.BLACK,
    width: '90%',
    height: verticalScale(40),
    borderRadius: scale(30),
    alignItems: 'center',
    justifyContent: 'center',
    // marginHorizontal:scale(15)
  },
  details: {
    marginLeft: scale(7),
    fontSize: scale(12),
    color: Colors.BLACK,
    fontFamily: Fonts.Proxima_Nova_Sbold,
  },
  triangle: {
    position: 'absolute',
    top: -8,
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 7,
    borderRightWidth: 7,
    borderBottomWidth: 8,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'white',
  },
});
