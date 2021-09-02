import {scale, ScaledSheet} from 'react-native-size-matters';
import theme from '../../utils/theme';

export default ScaledSheet.create({
  padding: {
    padding: scale(20),
  },
  container: {
    paddingHorizontal: scale(20),
    backgroundColor: theme.WHITE,
  },
});
