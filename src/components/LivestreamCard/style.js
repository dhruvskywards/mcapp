import {scale, verticalScale, ScaledSheet} from 'react-native-size-matters';
import fonts from '../../utils/fonts';
import theme from '../../utils/theme';

export default ScaledSheet.create({
  container: {
    height: verticalScale(400),
    width: '100%',
    backgroundColor: theme.WHITE,
    borderTopLeftRadius: scale(40),
    borderTopRightRadius: scale(40),
  },
  image: {
    backgroundColor: '#f2f2f2',
    height: verticalScale(215),
    borderTopLeftRadius: scale(40),
    borderTopRightRadius: scale(40),
    resizeMode: 'cover',
  },
  titleTextBlack: {
    fontSize: scale(14),
    color: theme.BLACK,
    fontFamily: fonts.Proxima_Nova_Regular,
  },
  SubtitleText: {
    fontSize: scale(10),
    color: theme.BLACK,
    fontFamily: fonts.Proxima_Nova_Sbold,
    marginVertical: scale(10),
  },
  mapText: {
    fontSize: scale(10),
    color: theme.TEXT_VARAINT_1,
    fontFamily: fonts.Proxima_Nova_Sbold,
    textTransform: 'uppercase',
  },
  mapContainer: {
    flexDirection: 'row',
  },
  bottomView: {
    top: -scale(40),
    backgroundColor: theme.WHITE,
    borderTopLeftRadius: scale(40),
    borderTopRightRadius: scale(40),
    bottom: 0,
    width: '100%',
    paddingHorizontal: scale(25),
    paddingVertical: verticalScale(15),
  },
  profileInfo: {
    flexDirection: 'row',
    paddingVertical: verticalScale(15),
    alignItems: 'center',
  },
  headercontainer: {
    height: verticalScale(50),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  mapView: {
    backgroundColor: theme.WHITE,
    borderColor: theme.BLACK,
    borderWidth: scale(1),
    paddingHorizontal: scale(8),
    paddingVertical: verticalScale(3),
    borderRadius: scale(20),
    marginRight: scale(5),
    marginBottom: scale(10),
  },
  moreIcon: {
    alignSelf: 'center',
  },
  titleText: {
    marginHorizontal: scale(7),
    fontSize: scale(12),
    color: theme.BLACK,
    fontFamily: fonts.Proxima_Nova_Sbold,
  },
  imageview: {
    height: scale(30),
    width: scale(30),
    borderRadius: scale(18),
  },
  verifiedImage: {
    tintColor: theme.BLACK,
  },
  FooterView: {
    flexDirection: 'row',
  },
  PrizeView: {
    backgroundColor: theme.GRAY_VARIANT_2,
    flexDirection: 'row',
    borderRadius: scale(30),
    paddingHorizontal: scale(15),
    alignItems: 'center',
    flex: 0.4,
    marginRight: scale(10),
    justifyContent: 'center',
  },
  ModelInnerStyle: {
    height: verticalScale(290),
    width: '100%',
    position: 'absolute',
    backgroundColor: theme.WHITE,
    bottom: 0,
    borderTopLeftRadius: scale(15),
    borderTopRightRadius: scale(15),
    padding: scale(20),
  },
  ModalStyle: {
    margin: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ModalTitle: {
    fontSize: scale(14),
    color: theme.BLACK,
    fontFamily: fonts.Proxima_Nova_Black,
  },
  ModalContainText: {
    fontSize: scale(13),
    color: theme.BLACK,
    fontFamily: fonts.Proxima_Nova_Sbold,
    marginVertical: verticalScale(20),
  },
  Or: {
    fontSize: scale(10),
    color: theme.BLACK,
    fontFamily: fonts.Proxima_Nova_Sbold,
  },
  lebel: {
    fontSize: scale(10),
    color: theme.BLACK,
    fontFamily: fonts.Proxima_Nova_Sbold,
    marginLeft: scale(5),
  },
  ModalBtnView: {
    flexDirection: 'row',
    // marginBottom: scale(5),
  },
  padding: {
    flex: 0.5,
    paddingHorizontal: scale(7),
    marginHorizontal: scale(5),
  },
  innerComp: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: scale(3),
  },
  JoinBtn: {
    flex: 0.3,
    paddingHorizontal: scale(7),
  },
});
