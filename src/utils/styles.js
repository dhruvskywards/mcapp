import {scale, verticalScale, ScaledSheet} from 'react-native-size-matters';
import Fonts from './fonts';
import Colors from './theme';

export default ScaledSheet.create({
  container: {
    flex: 1,
  },
  navigationContainer: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  rowContainer: {
    flexDirection: 'row',
  },
  sliderContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoBg: {
    height: verticalScale(50),
    width: scale(80),
    resizeMode: 'contain',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  unAuthtitle: {
    marginVertical: verticalScale(10),
    fontSize: scale(34),
    color: Colors.BACKGROUND_SECONDARY_DARK,
    fontFamily: Fonts.Proxima_Nova_Light,
    lineHeight: 45,
  },
  insideContainer: {
    paddingHorizontal: scale(32),
    paddingVertical: '35%',
    width: '100%',
    flex: 1,
    // justifyContent: 'space-around',
  },
  innerContainerSection: {
    // flex: 1,
    // justifyContent: 'flex-start',
  },
  tabNavigation: {
    height: verticalScale(48),
    borderTopLeftRadius: scale(25),
    borderTopRightRadius: scale(25),
    position: 'absolute',
  },
  flashMsg: {
    width: scale(21),
    height: scale(21),
    marginRight: scale(15),
  },
});
