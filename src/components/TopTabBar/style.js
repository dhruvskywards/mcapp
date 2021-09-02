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
    height: 60,
    backgroundColor: theme.TRANSPARENT,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: scale(15),
  },
  tabview: {
    alignItems: 'center',
    height: verticalScale(60),
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
    paddingHorizontal: scale(13),
    paddingVertical: verticalScale(6),
    borderRadius: scale(15),
  },
});
