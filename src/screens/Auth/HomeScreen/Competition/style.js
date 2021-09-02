import {scale, ScaledSheet, verticalScale} from 'react-native-size-matters';
import theme from 'src/utils/theme';
import fonts from 'src/utils/fonts';

export default ScaledSheet.create({
  maincontainer: {
    flex: 1,
    backgroundColor: theme.COMPTITION_BACKGROUND,
    borderTopLeftRadius: scale(40),
    borderTopRightRadius: scale(40),
  },
  container: {
    flex: 1,
  },
  background: {
    marginTop: verticalScale(70),
    backgroundColor: theme.WHITE,
    borderTopLeftRadius: scale(40),
    borderTopRightRadius: scale(40),
    marginBottom: scale(60),
  },
  header: {
    marginHorizontal: scale(26),
  },
  noData: {
    fontFamily: fonts.Proxima_Nova_Sbold,
    fontSize: scale(14),
    textAlign: 'center',
    color: theme.BLACK,
  },
  liveBtnData: {
    alignSelf: 'flex-end',
    bottom: scale(65),
    width: '100%',
  },
  liveBtn: {
    position: 'absolute',
    bottom: scale(65),
    width: '100%',
  },
  CompetitionView: {
    backgroundColor: theme.WHITE,
  },
});
