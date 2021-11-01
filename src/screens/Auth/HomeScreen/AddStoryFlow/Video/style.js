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
  imageview: {
    flex: 0.33,
    margin: scale(8),
  },
  imagestyle: {
    height: scale(90),
    width: '100%',
  },
});
