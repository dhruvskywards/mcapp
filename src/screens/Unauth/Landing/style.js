import {Platform} from 'react-native';
import {scale, verticalScale, ScaledSheet} from 'react-native-size-matters';
import Fonts from 'src/utils/fonts';
import Colors from 'src/utils/theme';

export default ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  wrapper: {
    // flex:1,
    alignSelf: 'center',
  },
  paginationStyle: {
    justifyContent: 'flex-start',
    position: 'absolute',
    top: '70%',
    left: scale(32),
    alignItems: 'flex-start',
  },
  joinStyle: {
    // justifyContent: 'center',
    position: 'absolute',
    top: '78%',
    left: scale(32),
    // alignItems: 'flex-start',
    // backgroundColor: '#333333',
  },
  logo: {
    // width: scale(75),
  },
  mainImageBackground: {
    flex: 1,
  },
  slideImage: {
    marginTop: '20%',
    height: verticalScale(100),
    width: scale(100),
    resizeMode: 'contain',
    position: 'absolute',
    alignSelf: 'center',
  },
  MainView: {
    flex: 1,
    paddingHorizontal: scale(32),
  },
  slideView: {
    flex: 1,
    paddingHorizontal: scale(32),
  },
  text: {
    marginTop: verticalScale(35),
    fontSize: scale(33),
    lineHeight: verticalScale(36),
    color: Colors.BLACK,
    fontFamily: Fonts.Proxima_Nova_Light,
  },
  landingTitle: {
    fontSize: scale(24),
    color: Colors.BLACK,
    marginTop: verticalScale(50),
    marginBottom: verticalScale(25),
    fontFamily: Fonts.Proxima_Nova_Light,
  },
  subTitle: {
    fontSize: scale(18),
    lineHeight: verticalScale(27),
    color: Colors.BACKGROUND_SECONDARY_DARK,
    fontFamily: Fonts.Proxima_Nova_Light,
  },
  ContainMainView: {
    marginTop: '62%',
  },
  ContainerSlide: {
    position: 'absolute',
    marginTop: '55%',
    paddingLeft: scale(32),
  },
  footerTitle: {
    fontSize: scale(28),
    color: Colors.BLACK,
    fontFamily: Fonts.Proxima_Nova_Light,
  },
  circle: {
    height: Platform.OS === 'ios' ? verticalScale(22) : verticalScale(24),
    width: scale(24),
    borderRadius: verticalScale(500),
    backgroundColor: Colors.ORANGE,
    marginLeft: scale(10),
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  dot: {
    backgroundColor: Colors.LIGHT_GRAY,
    width: scale(11),
    height: scale(7),
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3,
  },
  activeDot: {
    backgroundColor: Colors.BACKGROUND_PRIMARY_DARK,
    width: scale(27),
    height: scale(7),
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3,
  },
});
