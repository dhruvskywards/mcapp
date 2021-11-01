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
    bottom: 0,
    height: scale(60),
    backgroundColor: theme.TRANSPARENT,
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: scale(2),
  },
  tabview: {
    alignItems: 'center',
    height: verticalScale(60),
    justifyContent: 'center',
  },
  txt: {
    fontSize: scale(10),
    fontFamily: fonts.Proxima_Nova_Black,
    color: theme.BLACK,
    textTransform: 'uppercase',
  },
  activetab: {
    backgroundColor: theme.BLACK,
  },
  ContainerView: {
    paddingHorizontal: scale(9),
    paddingVertical: verticalScale(6),
    paddingBottom: verticalScale(12),
  },
  border: {
    marginTop: scale(8),
    height: verticalScale(3),
    paddingHorizontal: scale(8),
    borderRadius: scale(5),
  },
});
