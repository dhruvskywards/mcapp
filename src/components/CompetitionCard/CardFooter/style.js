import {scale, verticalScale, ScaledSheet} from 'react-native-size-matters';
import fonts from '../../../utils/fonts';
import theme from '../../../utils/theme';

export default ScaledSheet.create({
  maincontainer: {
    flexDirection: 'row',
    top: verticalScale(250),
    paddingLeft: scale(14),
    paddingRight: scale(23),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  likeView: {
    height: verticalScale(40),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: verticalScale(5),
    paddingHorizontal: verticalScale(10),
    borderRadius: scale(23),
  },
  messageview: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: scale(10),
  },
  profileInfo: {
    flexDirection: 'row',
    marginHorizontal: scale(25),
    paddingVertical: verticalScale(15),
    alignItems: 'center',
  },
  imageview: {
    height: scale(30),
    width: scale(30),
    borderRadius: scale(15),
  },
  imageContainer: {
    height: scale(18),
    width: scale(18),
  },
  titleText: {
    marginLeft: scale(7),
    fontSize: scale(12),
    color: theme.WHITE,
    fontFamily: fonts.Proxima_Nova_Sbold,
  },
  messageText: {
    marginHorizontal: scale(7),
    fontSize: scale(12),
    color: theme.WHITE,
    fontFamily: fonts.Proxima_Nova_Regular,
  },
  innerView: {flexDirection: 'row'},
  sendicon: {marginLeft: scale(8), top: -scale(3)},
  sendimage: {
    height: scale(23),
    width: scale(23),
  }
});
