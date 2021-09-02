import {
  scale,
  verticalScale,
  moderateScale,
  ScaledSheet,
} from 'react-native-size-matters';
import fonts from 'src/utils/fonts';
import theme from 'src/utils/theme';

export default ScaledSheet.create({
  maincontainer1: {
     flex: 1,
    backgroundColor: '#000',
  },
  container: {
    flex: 1,
    paddingHorizontal: moderateScale(32),
    justifyContent: 'space-evenly',
    marginVertical: verticalScale(60),
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
  splitView:{
    flexDirection:'row',
    height:'50%',

  },
  splitView1:{
    flex:1
  },
  camera:{
    height:'100%',
    width:'50%',
    borderWidth: 1,
  },
  camera1:{
    height:'100%',
    width:'100%',
  },
  topHeader:{
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: 'space-between',
    padding: 10,

  },
  insideHeader: {
    flex: 0.4,
    alignItems: 'center',
    flexDirection: 'row',
  },
  titleText: {
    fontSize: scale(12),
    marginLeft:scale(10),
    color: theme.BACKGROUND_PRIMARY_NORMAL,
    fontFamily: fonts.Proxima_Nova_Regular,
  },
  logoView: {
    flexDirection:'row',
    alignItems: 'center',
  },
  userCont:{
    // flex:1,
    marginTop:20,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
  },
  userContImg:{
    height: 35,
    width: 35,
    // marginRight:20,
    borderRadius: 25,
    borderWidth:2,
    borderColor:'#57FFBC'
  }
});
