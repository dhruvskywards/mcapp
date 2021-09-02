import {scale, ScaledSheet, verticalScale} from 'react-native-size-matters';
import Fonts from '../../utils/fonts';
import Colors from '../../utils/theme';

export default ScaledSheet.create({
  MainContainer: {
    alignItems: 'center',
    // backgroundColor: '#000',
  },
  DetailsView: {
    justifyContent: 'center',
    marginTop: verticalScale(10),
    alignItems: 'center',
    borderRadius: scale(10),
    paddingHorizontal: scale(7),
    paddingVertical: verticalScale(3),
    borderWidth: 1,
  },
  nameText: {
    fontFamily: Fonts.Proxima_Nova_Sbold,
    fontSize: scale(8),
    color: Colors.BLACK,
  },
  imageView: {
    height: scale(36),
    right: -scale(18),
    width: scale(36),
    borderRadius: scale(20),
    backgroundColor: Colors.LIGHT_GRAY,
    borderColor: Colors.WHITE,
    borderWidth: 2,
    zIndex: 100,
  },
  secondimage: {
    height: scale(36),
    width: scale(36),
    borderRadius: scale(20),
    backgroundColor: Colors.LIGHT_GRAY,
    borderColor: Colors.WHITE,
    borderWidth: 2,
    zIndex: 50,
  },
  ThirdImage: {
    left: -scale(18),
    height: scale(36),
    width: scale(36),
    borderRadius: scale(20),
    backgroundColor: Colors.LIGHT_RED,
    borderColor: Colors.WHITE,
    borderWidth: 2,
  },
  typeText: {
    fontFamily: Fonts.Proxima_Nova_Sbold,
    fontSize: scale(10),
    color: Colors.TEXT_VARIANT_2_BlK,
  },
  ImageContainer: {
    flexDirection: 'row',
  },
});
