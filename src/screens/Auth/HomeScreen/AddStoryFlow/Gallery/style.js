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
  imagelistview: {
    marginHorizontal: scale(8),
  },
  imageview: {
    flex: 0.33,
    margin: scale(8),
  },
  imagestyle: {
    height: scale(90),
    width: '100%',
  },
  txt: {
    fontSize: scale(11),
    fontFamily: fonts.Proxima_Nova_Black,
    color: theme.BLACK,
    textTransform: 'uppercase',
  },
  headerView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
  },
  headerinnerview: {
    flexDirection: 'row',
  },
  iconstyle: {
    height: scale(16),
    width: scale(16),
  },
  PickerStyle: {
    width: scale(120),
    borderColor: '#ffffff',
  },
});
