import {Dimensions} from 'react-native';

import {scale, verticalScale, ScaledSheet} from 'react-native-size-matters';
import Colors from '../../utils/theme';
import Fonts from '../../utils/fonts';
import theme from '../../utils/theme';

let deviceWidth = Dimensions.get('window').width;

export default ScaledSheet.create({
  mainContainer: {
    backgroundColor: theme.WHITE,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderTopLeftRadius: scale(20),
    borderTopRightRadius: scale(20),
  },
  title: {
    fontSize: scale(14),
    color: Colors.WHITE,
    fontFamily: Fonts.Proxima_Nova_Sbold,
  },
  innerContainer: {
    marginTop: scale(18),
    flexDirection: 'row',
    paddingHorizontal: scale(7),
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconView: {
    height: verticalScale(34),
    width: scale(34),
    borderRadius: scale(20),
    tintColor: theme.BLACK,
  },
  button: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  // button: {
  //   backgroundColor: theme.BLACK,
  //   width: '100%',
  //   height: verticalScale(40),
  //   borderRadius: scale(30),
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  titletext: {
    marginLeft: scale(7),
    fontSize: scale(12),
    color: Colors.BLACK,
    fontFamily: Fonts.Proxima_Nova_Sbold,
  },
  details: {
    marginTop: scale(20),
    textAlign: 'center',
    marginHorizontal: scale(50),
    fontSize: scale(12),
    color: Colors.BLACK,
    fontFamily: Fonts.Proxima_Nova_Sbold,
  },
  RateView: {
    marginBottom: scale(60),
  },
});
