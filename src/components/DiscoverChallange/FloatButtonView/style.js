import {scale, verticalScale, ScaledSheet} from 'react-native-size-matters';
import fonts from '../../../utils/fonts';
import theme from '../../../utils/theme';

export default ScaledSheet.create({
  mainview: {
    borderRadius: scale(10),
    borderColor: theme.SILVER_VARAINT_1,
    borderWidth: 1,
    paddingVertical: scale(5),
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    
  },

 
  
});
