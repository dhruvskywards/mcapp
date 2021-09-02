import {scale, verticalScale, ScaledSheet} from 'react-native-size-matters';
import fonts from '../../utils/fonts';
import theme from '../../utils/theme';

export default ScaledSheet.create({
  maincontainer: {
    height: verticalScale(455),
    borderTopLeftRadius: scale(35),
    borderTopRightRadius: scale(35),
  },
  imageview: {
    height: verticalScale(455),
    borderTopLeftRadius: scale(35),
    borderTopRightRadius: scale(35),
  },
  imageContainer: {
    height: scale(40),
    width: scale(40),
    borderRadius: scale(20),
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.2,
  },
  titleText: {
    marginTop: verticalScale(11),
    fontSize: scale(9),
    color: theme.BLACK,
    fontFamily: fonts.Proxima_Nova_Sbold,
  },
  pagination: {
    justifyContent: 'flex-end',
    position: 'absolute',
    top: scale(30),
    right: scale(15),
    alignItems: 'flex-start',
  },
  activeDot: {
    backgroundColor: theme.WHITE,
    width: scale(15),
    height: scale(4),
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3,
  },
  Dot: {
    backgroundColor: theme.TEXT_VARAINT_1,
    width: scale(6),
    height: scale(4),
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3,
  },
});
