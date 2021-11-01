import { Dimensions } from 'react-native';
import {scale, verticalScale, ScaledSheet} from 'react-native-size-matters';
import fonts from '../../utils/fonts';
import theme from '../../utils/theme';

const deviceWidth= Dimensions.get('screen').width;

export default ScaledSheet.create({
  mainview: {
    height: '100%',
    width: '100%',
    flex: 1,
  },
  pageContainer: {
    flex: 1,
  },
  footerview: {
    bottom: 0,
    height: scale(60),
    backgroundColor: theme.TRANSPARENT,
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
  },
  tabview: {
    width: deviceWidth/2,
    flex: 0.5,
    alignItems: 'center',
    height: verticalScale(60),
    justifyContent: 'center',
  },
  txt: {
    fontSize: scale(14),
    fontFamily: fonts.Proxima_Nova_Sbold,
    textAlign: 'center',
    textTransform: 'uppercase',
    color: theme.BLACK
  },
  activetab: {
    backgroundColor: theme.BLACK,
  },
  ContainerView: {
    flex: 0.5,
  },
  border: {
    marginTop: verticalScale(25),
    height: verticalScale(4),
    width: deviceWidth/2,

  },
});
