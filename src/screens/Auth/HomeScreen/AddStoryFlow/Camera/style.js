import {
  scale,
  verticalScale,
  moderateScale,
  ScaledSheet,
} from 'react-native-size-matters';
import fonts from 'src/utils/fonts';
import theme from 'src/utils/theme';

export default ScaledSheet.create({
  maincontainer: {
    flex: 1,
  },
  cameraview: {
    flex: 0.55,
  },
  capture: {
    height: scale(50),
    width: scale(50),
    borderRadius: scale(30),
    backgroundColor: theme.TRANSPARENT,
    borderColor: theme.BLACK,
    borderWidth: 2.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  captureview: {
    height: scale(41),
    width: scale(41),
    borderRadius: scale(30),
    backgroundColor: theme.BLACK,
  },
  imagestyle: {
    height: scale(90),
    width: '100%',
  },
  bottomView: {
    flex: 0.45,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: '20%',
  },
  headerView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    width: '90%',
  },
  headerinnerview: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  flipiconview: {
    top: scale(105),
    right: scale(75),
    position: 'absolute',
  },
  flipiconstyle: {
    tintColor: theme.BLACK,
    height: scale(20),
    width: scale(25),
  },
});
