import {scale, verticalScale, ScaledSheet} from 'react-native-size-matters';
import fonts from '../../utils/fonts';
import theme from '../../utils/theme';

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
    height: scale(65),
    // backgroundColor: theme.BLACK,
    // alignItems: 'center',
    // justifyContent: 'space-between',
    flexDirection: 'row',
    width: '100%',
    marginHorizontal: scale(25),
    marginRight: scale(50),
    paddingRight: scale(30),
  },
  tabview: {
    marginRight: scale(8),
    alignItems: 'center',
    height: verticalScale(65),
    justifyContent: 'center',
  },
  txt: {
    fontSize: scale(10),
    fontFamily: fonts.Proxima_Nova_Sbold,
  },
  activetab: {
    backgroundColor: theme.BLACK,
  },
  ContainerView: {
    paddingHorizontal: scale(15),
    paddingVertical: verticalScale(6),
    borderRadius: scale(15),
  },
});
