import {
  scale,
  verticalScale,
  moderateScale,
  ScaledSheet,
} from 'react-native-size-matters';
import fonts from 'src/utils/fonts';
import theme from 'src/utils/theme';
import Colors from "../../utils/theme";

export default ScaledSheet.create({
  scrollViewContainer: {
    flex: 1,
  },
  maincontainer: {
    flex: 1,
    backgroundColor: theme.WHITE,
  },


});
