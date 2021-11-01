import {Dimensions} from 'react-native';

import {scale, verticalScale, ScaledSheet} from 'react-native-size-matters';
import Colors from '../../utils/theme';
import Fonts from '../../utils/fonts';
import theme from '../../utils/theme';

let deviceWidth = Dimensions.get('window').width;

export default ScaledSheet.create({
  mainContainer: {
    position: 'absolute',
    bottom: 0,
    width: deviceWidth,
    marginLeft: -scale(18),
    marginBottom: -scale(18),
    borderRadius: 0,
    backgroundColor: theme.WHITE,
    height: '43%',
    borderTopLeftRadius: scale(20),
    borderTopRightRadius: scale(20),
  },
  title: {
    marginLeft: scale(7),
    fontSize: scale(16),
    color: Colors.BLACK,
    marginVertical: verticalScale(12),
    fontFamily: Fonts.Proxima_Nova_Sbold,
  },
  innerContainer: {
    paddingHorizontal: scale(15),
  },
  iconView: {
    height: verticalScale(34),
    width: scale(34),
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
    fontSize: scale(14),
    color: Colors.BLACK,
    marginVertical: verticalScale(10),
    fontFamily: Fonts.Proxima_Nova_Sbold,
  },
  details: {
    textAlign: 'center',
    marginHorizontal: scale(50),
    fontSize: scale(12),
    color: Colors.GRAY_VARIANT_1,
    fontFamily: Fonts.Proxima_Nova_Sbold,
    marginBottom: scale(50),
  },
  DetailView: {
    marginLeft: scale(20),
    marginVertical: scale(10),
    alignItems: 'flex-start',
  },
  flexDirection: {
    flexDirection: 'row',
  },
});
