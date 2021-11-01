import {Dimensions} from 'react-native';
import {scale, ScaledSheet, verticalScale} from 'react-native-size-matters';
import fonts from 'src/utils/fonts';
import theme from 'src/utils/theme';

const deviceheight = Dimensions.get('screen').height;
const devicewidth = Dimensions.get('screen').width;

export default ScaledSheet.create({
  maincontainer: {
    flex: 1,
  },
  imageview: {
    flex: 0.33,
    margin: scale(8),
  },
  imagestyle: {
    height: scale(90),
    width: '100%',
  },
  cameraview: {
    flex: 0.6,
  },
  Editcameraview: {
    flex: 0.7,
  },
  bottomView: {
    flex: 0.4,
    marginTop: -scale(15),
    flexDirection: 'row',
    borderTopLeftRadius: scale(20),
    borderTopRightRadius: scale(20),
    backgroundColor: theme.WHITE,
  },
  EditbottomView: {
    flex: 0.3,
    marginTop: -scale(15),
    borderTopLeftRadius: scale(20),
    borderTopRightRadius: scale(20),
    backgroundColor: theme.WHITE,
  },
  headerView: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  headerinnerview: {
    flex: 0.5,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  txt: {
    fontSize: scale(11),
    fontFamily: fonts.Proxima_Nova_Black,
    color: theme.WHITE,
    textTransform: 'uppercase',
  },
  FilterView: {
    flex: 1,
    paddingLeft: scale(35),
    alignItems: 'center',
  },
  EditView: {
    flex: 1,
    paddingLeft: scale(35),
    alignItems: 'center',
  },
  EditViewHeader: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  title: {
    fontSize: scale(14),
    fontFamily: fonts.Proxima_Nova_Sbold,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  titleview: {
    flex: 0.5,
    marginVertical: verticalScale(15),
  },
  FilterBottom: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
  },
  Filterheader: {
    flexDirection: 'row',
  },
  image: {
    width: 100,
    height: 100,
    marginVertical: 10,
    alignSelf: 'center',
  },
  filterSelector: {
    height: scale(60),
    width: scale(60),
    borderRadius: scale(40),
  },
  filterTitle: {
    marginBottom: verticalScale(11),
    fontSize: scale(11),
    color: theme.BLACK,
    fontFamily: fonts.Proxima_Nova_Sbold,
  },
  imageContainer: {
    height: scale(60),
    width: scale(60),
    borderRadius: scale(40),
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
  },
  filtericon: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: scale(8),
  },
  bgstyle: {
    height: deviceheight / 1.75,
    width: devicewidth,
  },
  Editimagestyle: {
    height: deviceheight / 1.5,
    width: devicewidth,
  },
  StoryHeaderStyle: {
    position: 'absolute',
    backgroundColor: theme.TRANSPARENT,
    top: 0,
    zIndex: 1000,
  },
  EditStoryHeaderStyle: {
    height: scale(20),
  },
  EditBottombtnview: {
    flexDirection: 'row',
    flex: 0.3,
  },
  EditBottombtn: {
    flex: 0.5,
    alignItems: 'center',
    height: scale(50),
    justifyContent: 'center',
  },
  sliderStyle: {
    width: '80%',
    alignSelf: 'center',
  },
  sliderView: {
    flex: 0.7,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
