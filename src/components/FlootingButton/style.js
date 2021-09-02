import {scale, ScaledSheet, verticalScale} from 'react-native-size-matters';
import Fonts from '../../utils/fonts';
import Colors from '../../utils/theme';

export default ScaledSheet.create({
  MainContainer: {
    marginHorizontal: scale(18),
    flexDirection: 'row',
    alignItems: 'center',
    height: verticalScale(60),
    backgroundColor: Colors.WHITE,
    borderRadius: scale(30),
    shadowColor: Colors.BLACK,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.8,
    shadowRadius: scale(5),
    elevation: 20,
    paddingHorizontal: scale(25),
    justifyContent: 'space-between',
  },
  buttonContainer: {
    alignItems: 'center',
    borderRadius: scale(25),
    justifyContent: 'center',
    height: verticalScale(35),
    width: scale(100),
  },
  buttonText: {
    fontFamily: Fonts.Proxima_Nova_Sbold,
    color: Colors.WHITE,
    fontSize: scale(11),
  },
  TitleText: {
    fontFamily: Fonts.Proxima_Nova_Bold,
    color: Colors.BLACK,
    fontSize: scale(14),
  },
  PrizetagText: {
    fontFamily: Fonts.Proxima_Nova_Bold,
    color: Colors.BLACK,
    fontSize: scale(10),
  },
  digitalstyle: {
    backgroundColor: Colors.TRANSPARENT,
    borderColor: Colors.TRANSPARENT,
    borderWidth: 0,
    fontFamily: Fonts.Pacifico_Regular,
  },
  digitaltextstyle: {
    color: '#000',
    margin: -scale(25),
  },
  timeLabelstyle: {
    color: '#000',
    fontWeight: 'bold',
  },
  sepratorstyle: {
    color: '#000',
    marginLeft: -scale(10),
    marginRight: -scale(10),
  },
  CountDownView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  yes: {
    fontFamily: Fonts.Proxima_Nova_Bold,
    paddingLeft: scale(5),
    color: Colors.GREEN_VARIANT_3,
    fontSize: scale(10),
  },
  FinishTrue: {
    backgroundColor: Colors.GRAY_VARIANT_1,
  },
  FinishFalse: {
    backgroundColor: Colors.BLACK,
  },
  countdownItem: {
    marginTop: -scale(3),
    marginLeft: -scale(10),
  },
  PrizetagView: {
    flexDirection: 'row',
  },
});
