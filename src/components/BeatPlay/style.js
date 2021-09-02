import {scale, ScaledSheet, verticalScale} from 'react-native-size-matters';
import Fonts from '../../utils/fonts';
import theme from '../../utils/theme';
import Colors from '../../utils/theme';

export default ScaledSheet.create({
  MainContainer: {
    marginTop: verticalScale(20),
    // backgroundColor: Colors.BACKGROUND_VARAINT_7,
    height: verticalScale(60),
    borderRadius: scale(10),
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: scale(15),
  },
  playView: {
    height: scale(32),
    width: scale(32),
    borderRadius: scale(20),
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerView: {
    height: scale(20),
    width: scale(20),
    borderRadius: scale(10),
    backgroundColor: theme.TRANSPARENT,
    borderColor: theme.WHITE,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  typeText: {
    fontFamily: Fonts.Proxima_Nova_Sbold,
    fontSize: scale(10),
    color: Colors.TEXT_VARIANT_2_BlK,
  },
  buttonContainer: {
    alignItems: 'center',
    borderRadius: scale(20),
    justifyContent: 'center',
    backgroundColor: Colors.BACKGROUND_PRIMARY_DARK,
    height: verticalScale(35),
    flex: 1,
  },
  buttonText: {
    fontFamily: Fonts.Proxima_Nova_Sbold,
    color: Colors.WHITE,
    fontSize: scale(11),
  },
  ContainView: {
    width: '60%',
    marginLeft: scale(10),
  },
  beatName: {
    fontFamily: Fonts.Proxima_Nova_Sbold,
    color: Colors.TEXT_VARIANT_3_BLK,
    fontSize: scale(12),
  },
  votes: {
    fontFamily: Fonts.Proxima_Nova_Sbold,
    color: Colors.TEXT_VARIANT_3,
    fontSize: scale(10),
  },
  VoteView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  space: {
    marginRight: scale(3),
  },
});
