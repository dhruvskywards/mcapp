import {scale, ScaledSheet} from 'react-native-size-matters';
import theme from '../../utils/theme';
import Fonts from '../../utils/fonts';
export default ScaledSheet.create({

  mainView:{
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderBottomWidth: scale(1),
  borderBottomColor: theme.UNDERLINE_COLOR,
  marginTop: scale(40),
  paddingBottom:scale(7)
},

texts:{
  fontFamily: Fonts.Proxima_Nova_Bold,
  fontSize: scale(12),
}
});

