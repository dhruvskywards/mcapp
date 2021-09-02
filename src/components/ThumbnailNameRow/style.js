import {scale, ScaledSheet} from 'react-native-size-matters';
import theme from '../../utils/theme';

export default ScaledSheet.create({
  Thumbnailnamerowcon: {
    alignItems: 'center',
    flexDirection: 'row',
    fontFamily: 'ProximaNova-Regular',
    paddingTop: scale(20),
  },
  title: {
    flexDirection: 'row',
    backgroundColor: theme.TRANSPARENT,
  },
  TitleAndSubTitleRow: {
    flex: 1,
    marginLeft: 20,
    backgroundColor: theme.TRANSPARENT,
  },
  Thumbnailnamerowcon1: {alignItems: 'center', flexDirection: 'row', flex: 1},
});
