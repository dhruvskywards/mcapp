import {scale, ScaledSheet, verticalScale} from 'react-native-size-matters';
import fonts from '../../../../utils/fonts';
import theme from '../../../../utils/theme';

export default ScaledSheet.create({
  maincontainer: {
    flex: 1,
    marginBottom: verticalScale(35),
  },
  maincontainer1: {
    flex: 1,
    backgroundColor: theme.BACKGROUND_VARAINT_7,
  },
  container: {
    flex: 1,
  },
  BannerView: {
    width: '100%',
  },
  titleText: {
    marginTop: scale(30),
    fontSize: scale(16),
    color: theme.BLACK,
    marginBottom: scale(10),
    fontFamily: fonts.Proxima_Nova_Sbold,
  },
  insideContainer: {
    top: -scale(30),
    borderRadius: scale(30),
    paddingHorizontal: scale(20),
  },
  ContainText: {
    marginTop: verticalScale(15),
    fontSize: scale(14),
    color: theme.BLACK,
    fontFamily: fonts.Proxima_Nova_Regular,
    lineHeight: scale(20),
  },
  SubtitleText: {
    fontSize: scale(12),
    color: theme.BLACK,
    fontFamily: fonts.Proxima_Nova_Sbold,
  },
  FooterButton: {
    position: 'absolute',
    width: '100%',
    bottom: verticalScale(40),
  },
  button: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
  },
  ContestantInfo: {
    marginTop: verticalScale(20),
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
  },
  TeamContestantInfo: {
    marginTop: verticalScale(20),
    flexDirection: 'row',
    justifyContent: 'space-around',
    flex: 1,
  },
  BlackDiamondInfo: {
    marginTop: verticalScale(20),
    // marginHorizontal: scale(30),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ViewersInfo: {
    marginTop: verticalScale(20),
    flexDirection: 'row',
    marginHorizontal: scale(20),
    justifyContent: 'space-between',
  },
  MultiUserView: {
    alignItems: 'center',
    marginTop: scale(20),
  },
  multipleBlackdiamondStyle: {
    marginTop: scale(10),
  },
  soundVoteView: {
    backgroundColor: theme.BACKGROUND_VARAINT_7,
    height: verticalScale(60),
    borderRadius: scale(10),
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
  },
  Beat1: {
    backgroundColor: theme.SOUND_BACKGROUND_1,
  },
  Beat2: {
    backgroundColor: theme.SOUND_BACKGROUND_2,
  },
  flexDirection: {
    flexDirection: 'row',
  },
  DetailView: {
    marginLeft: scale(20),
    marginTop: scale(3),
    alignItems: 'flex-start',
  },
  AudienceView: {
    marginVertical: verticalScale(12),
  },
  multipleUserComponentView: {
    marginVertical: scale(15),
    alignItems: 'center',
    marginHorizontal: scale(7),
  },
  afterstartedView: {
    flex: 1,
  },
  compstarted: {
    bottom: verticalScale(80),
  },
  actionsheet: {
    height: verticalScale(200),
    paddingHorizontal: scale(15),
    justifyContent: 'space-evenly',
  },
});
