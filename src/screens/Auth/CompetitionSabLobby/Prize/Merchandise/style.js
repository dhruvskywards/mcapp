import {scale, ScaledSheet, verticalScale} from 'react-native-size-matters';
import fonts from '../../../../../utils/fonts';
import theme from '../../../../../utils/theme';

export default ScaledSheet.create({
  maincontainer: {
    flex: 1,
    backgroundColor: theme.WHITE,
  },
  container: {
    flex: 1,
    marginBottom: verticalScale(70),
  },
  backgroundColor: {
    backgroundColor: theme.WHITE,
  },
  imageStyle: {
    width: '100%',
  },
  titleText: {
    paddingHorizontal: scale(32),
    marginTop: scale(15),
    fontSize: scale(11),
    color: theme.BLACK,
    fontFamily: fonts.Proxima_Nova_Black,
  },
  insideContainer: {
    backgroundColor: theme.WHITE,
  },
  ContainText: {
    marginTop: verticalScale(15),
    fontSize: scale(14),
    color: theme.BLACK,
    fontFamily: fonts.Proxima_Nova_Regular,
    lineHeight: scale(20),
  },
  SubtitleText: {
    paddingHorizontal: scale(32),
    marginTop: verticalScale(8),
    marginBottom: verticalScale(10),
    fontSize: scale(12),
    color: theme.BACKGROUND_SECONDARY_DARK,
    fontFamily: fonts.Proxima_Nova_Regular,
  },
  DetailsText: {
    paddingHorizontal: scale(32),
    marginTop: verticalScale(8),
    marginBottom: verticalScale(10),
    fontSize: scale(12),
    color: theme.BACKGROUND_SECONDARY_DARK,
    fontFamily: fonts.Proxima_Nova_Regular,
  },
  ItemtitleText: {
    paddingHorizontal: scale(32),
    marginTop: verticalScale(8),
    marginBottom: verticalScale(10),
    fontSize: scale(16),
    color: theme.BACKGROUND_SECONDARY_DARK,
    fontFamily: fonts.Proxima_Nova_Regular,
  },
  FooterButton: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
  },
  pagination: {
    position: 'absolute',
    top: verticalScale(225),
    justifyContent: 'flex-end',
    right: scale(20),
    alignItems: 'flex-start',
    zIndex: 1000,
  },
  viewBox: {
    paddingHorizontal: 20,
    justifyContent: 'center',
    width: '100%',
    padding: 10,
    alignItems: 'center',
    height: 200,
  },
  activeDot: {
    backgroundColor: theme.SILVER_VARAINT_3_BLK,
    width: scale(5),
    height: scale(5),
    borderRadius: scale(4),
    marginLeft: scale(4),
    marginRight: scale(4),
    marginTop: scale(4),
    marginBottom: scale(4),
  },
  Dot: {
    backgroundColor: theme.GRAY_VARIANT_1,
    width: scale(5),
    height: scale(5),
    borderRadius: scale(4),
    marginLeft: scale(4),
    marginRight: scale(4),
    marginTop: scale(4),
    marginBottom: scale(4),
  },
  swiperStyle: {
    height: verticalScale(200),
  },
  dotContainer: {
    alignItems: 'flex-end',
  },
  slider: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
