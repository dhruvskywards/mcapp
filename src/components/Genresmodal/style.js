import {scale, ScaledSheet} from 'react-native-size-matters';
import Fonts from '../../utils/fonts';
import Colors from '../../utils/theme';

export default ScaledSheet.create({
  cancelBtn: {
    position: 'absolute',
    right: -scale(7),
    top: -scale(10),
  },
  container: {
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0, 0.5)',
    flex: 1,
    justifyContent: 'center',
    paddingVertical: scale(20),
  },
  innerContainer: {
    backgroundColor: '#fff',
    borderRadius: scale(4),
    padding: scale(16),
    width: '95%',
  },
  itemContainer: {
    flexDirection: 'row',
  },
  text: {
    marginVertical: scale(10),
    fontSize: scale(12),
    color: Colors.BLACK,
    fontFamily: Fonts.Proxima_Nova_Regular,
  },
});
