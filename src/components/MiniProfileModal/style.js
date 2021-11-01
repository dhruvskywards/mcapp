import {scale, verticalScale, ScaledSheet} from 'react-native-size-matters';
import Colors from '../../utils/theme';
import Fonts from '../../utils/fonts';
import theme from '../../utils/theme';

export default ScaledSheet.create({
  mainContainer: {
    // height: verticalScale(140),
    // width: scale(220),
    // backgroundColor: theme.WHITE,
    // alignItems: 'center',
    // justifyContent: 'space-around',
    // borderRadius: scale(15),
    // padding: scale(15),

    height: verticalScale(270),
    width: '100%',
    position: 'absolute',
    backgroundColor: theme.WHITE,
    bottom: 0,
    borderTopLeftRadius: scale(15),
    borderTopRightRadius: scale(15),
  
  },
  title: {
    fontSize: scale(14),
    marginRight:scale(3),
    fontFamily: Fonts.Proxima_Nova_Bold,
  },
  titleCount: {
    fontSize: scale(14),
    fontFamily: Fonts.Proxima_Nova_Bold,
  },
  buttonStyle:{
    paddingHorizontal:scale(25),
    paddingVertical:scale(15),
    justifyContent:'center',
    marginTop:scale(40),
    fontFamily: Fonts.Proxima_Nova_Regular,
  },
  innerContainer: {
  padding:scale(15)
   
  },
  miniProfileView: {
    flexDirection: 'row',
  
    alignItems: 'center',
  },
  iconView: {
    paddingHorizontal:scale(15),
    paddingTop:scale(10)
  },
  button: {
    backgroundColor: theme.BLACK,
    width: '90%',
    height: verticalScale(40),
    borderRadius: scale(30),
    alignItems: 'center',
    justifyContent: 'center',
    // marginHorizontal:scale(15)
  },
  details: {
    marginLeft: scale(7),
    fontSize: scale(12),
    color: Colors.BLACK,
    fontFamily: Fonts.Proxima_Nova_Sbold,
  },
  triangle: {
    position: 'absolute',
    top: -8,
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 7,
    borderRightWidth: 7,
    borderBottomWidth: 8,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'white',
  },
});
