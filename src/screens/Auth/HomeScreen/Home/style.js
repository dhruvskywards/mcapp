import {scale, ScaledSheet} from 'react-native-size-matters';
import fonts from 'src/utils/fonts';
import theme from 'src/utils/theme';


export default ScaledSheet.create({
  maincontainer: {
    flex: 1,
    backgroundColor: theme.WHITE,
  },
  header: {
    marginHorizontal: scale(26),
  },
  postList: {
    marginBottom: scale(30),
  },
  postView: {
    top: scale(30),
    marginTop: scale(-30),
  },
  titleText: {
    fontSize: scale(14),
    color: theme.BACKGROUND_SECONDARY_DARK,
    fontFamily: fonts.Proxima_Nova_Regular,
  },
  titleTextBlack: {
    fontSize: scale(15),
    color: theme.BLACK,
    fontFamily: fonts.Proxima_Nova_Regular,
  },
  SubtitleText: {
    fontSize: scale(35),
    color: theme.BACKGROUND_SECONDARY_DARK,
    fontFamily: fonts.Proxima_Nova_Regular,
  },
  StoryView: {
    flexDirection: 'row',
    marginHorizontal: scale(18),
    alignItems: 'center',
  },
  ModalContain: {
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    flex: 1,
    paddingTop: 30,
    paddingHorizontal: 15,
    backgroundColor: theme.WHITE,
  },
  SecondCon: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },

  ModalTextCon: {
    alignItems: 'center',
    flexDirection: 'row',
    fontFamily: fonts.Proxima_Nova_Regular,
  },
  ModalText: {
    borderWidth: 0,
    flex: 1,
    fontFamily: fonts.Proxima_Nova_Regular,
    marginLeft: 8,
  },
  searchicon: {marginRight: 5},
  TextStyle: {fontFamily: fonts.Proxima_Nova_Regular, paddingHorizontal: 20},
});
