import {scale, verticalScale, ScaledSheet} from 'react-native-size-matters';
import fonts from '../../../utils/fonts';
import theme from '../../../utils/theme';

export default ScaledSheet.create({
  maincontainer: {
    marginHorizontal: scale(14),
    height: verticalScale(50),
    flexDirection: 'row',
    top: verticalScale(240),
  },
  playBtn: {
    borderColor: theme.WHITE,
    borderWidth: scale(2),
    height: verticalScale(50),
    width: scale(50),
    borderRadius: scale(45),
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: scale(14),
    color: theme.WHITE,
    fontFamily: fonts.Proxima_Nova_Regular,
  },
  sabtitleText: {
    fontSize: scale(10),
    color: theme.WHITE,
    fontFamily: fonts.Proxima_Nova_Light,
  },
  DetailsView: {
    marginLeft: scale(10),
    paddingTop: verticalScale(5),
  },
});
