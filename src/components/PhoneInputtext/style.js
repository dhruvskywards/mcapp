import {Platform} from 'react-native';
import {scale, ScaledSheet} from 'react-native-size-matters';
import Fonts from '../../utils/fonts';
import Colors from '../../utils/theme';

export default ScaledSheet.create({
  containerStyle: {
    height: Platform.OS === 'ios' ? scale(33) : scale(50),
    width: '100%',
  },
  textContainerStyle: {
    height: Platform.OS === 'ios' ? scale(31) : scale(45),
    backgroundColor: Colors.WHITE,
    paddingHorizontal: 0,
    marginTop: Platform.OS === 'ios' ? null : scale(4),
  },
  textInputStyle: {
    height: Platform.OS === 'ios' ? scale(31) : scale(45),
    fontFamily: Fonts.Proxima_Nova_Light,
    fontSize: scale(14),
  },
  codeTextStyle: {
    fontFamily: Fonts.Proxima_Nova_Light,
    fontSize: scale(14),
    marginLeft: scale(5),
  },
  countryPickerButtonStyle: {
    width: scale(65),
    backgroundColor: Colors.BLACK,
    borderTopLeftRadius: scale(12),
    borderBottomLeftRadius: scale(12),
    paddingHorizontal: scale(5),
  },
});
