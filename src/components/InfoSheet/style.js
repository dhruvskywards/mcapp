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
    alignItems: 'center',
    height: '32%',
    borderTopLeftRadius: scale(20),
    borderTopRightRadius: scale(20),
  },
  title: {
    fontSize: scale(14),
    color: Colors.WHITE,
    fontFamily: Fonts.Proxima_Nova_Sbold,
  },
  ButtonText: {
    fontSize: scale(11),
    color: Colors.BLACK,
    fontFamily: Fonts.Proxima_Nova_Sbold,
  },
  innerContainer: {
    marginTop: verticalScale(15),
    flexDirection: 'row',
    paddingHorizontal: scale(7),
    alignItems: 'center',
  },
  iconView: {
    height: verticalScale(34),
    width: scale(34),
    tintColor: theme.BLACK,
  },
  ButtonView: {
    flex: 0.3,
    backgroundColor: theme.BACKGROUND_VARAINT_5,
    height: verticalScale(27),
    borderRadius: scale(15),
    marginHorizontal: scale(5),
    alignItems: 'center',
    justifyContent: 'center',
  },
  titletext: {
    marginLeft: scale(7),
    fontSize: scale(14),
    color: Colors.BLACK,
    fontFamily: Fonts.Proxima_Nova_Regular,
  },
  details: {
    textAlign: 'center',
    marginHorizontal: scale(50),
    fontSize: scale(12),
    color: Colors.GRAY_VARIANT_1,
    fontFamily: Fonts.Proxima_Nova_Sbold,
    marginBottom: scale(50),
  },
  imageView: {
    height: scale(36),
    width: scale(36),
    borderRadius: scale(20),
    backgroundColor: Colors.LIGHT_GRAY,
  },
  HorizontalView: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: verticalScale(20),
  },
  BarView:  {
    marginVertical: verticalScale(25),
    flexDirection: 'row',
    alignItems: 'center',
  },
});
