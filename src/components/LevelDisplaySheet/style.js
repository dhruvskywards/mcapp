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
    height: '40%',
    borderTopLeftRadius: scale(20),
    borderTopRightRadius: scale(20),
    paddingHorizontal: scale(50),
    justifyContent: 'center',
  },
  title: {
    fontSize: scale(14),
    color: Colors.BLACK,
    fontFamily: Fonts.Proxima_Nova_Sbold,
  },
  HeaderView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: verticalScale(10),
  },
  FooterView: {
    marginTop: verticalScale(20),
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: verticalScale(10),
  },
  BlackDiamondView: {
    flex: 0.5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  levelView: {
    flex: 0.5,
    alignItems: 'flex-end',
  },
  button: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  HorizontalView: {
    flex: 0.75,
    alignItems: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  ButtonView: {
    backgroundColor: theme.BLACK,
    height: verticalScale(27),
    borderRadius: scale(15),
    marginHorizontal: scale(5),
    alignItems: 'center',
    justifyContent: 'center',
  },
  titletext: {
    marginLeft: scale(7),
    fontSize: scale(12),
    color: Colors.GRAY_VARIANT_1,
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
  ButtonText: {
    fontSize: scale(11),
    color: Colors.WHITE,
    fontFamily: Fonts.Proxima_Nova_Sbold,
    marginHorizontal: scale(15),
  },
});
