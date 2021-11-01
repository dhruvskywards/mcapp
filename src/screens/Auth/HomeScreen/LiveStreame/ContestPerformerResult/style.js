import {
  scale,
  verticalScale,
  moderateScale,
  ScaledSheet,
} from 'react-native-size-matters';
import fonts from 'src/utils/fonts';
import theme from 'src/utils/theme';

export default ScaledSheet.create({
  scrollViewContainer: {
    flex: 1,
  },
  maincontainer: {
    flex: 1,
    backgroundColor: theme.WHITE,
    // padding: moderateScale(20),
  },
  container: {
    padding: moderateScale(20),
    paddingBottom:scale(50),
  },
  titleText: {
    fontSize: scale(18),
    color: theme.WHITE,
    fontFamily: fonts.Proxima_Nova_Sbold,
    alignSelf:'center'
  },
  userCont:{
    flexDirection:'row',
    backgroundColor: '#1D1D1D',
    marginTop:scale(20),
    paddingVertical:scale(15),
    borderRadius: scale(8)
  },
  userDetails:{
    // backgroundColor:'red',
    flexDirection:'row',
    alignItems:'center'
  },
  userImg:{
    height: scale(36),
    width: scale(36),
    borderRadius:scale(18),
    overflow:'hidden',
    resizeMode:'contain',
    marginLeft:15
  },
  userTtlTxt: {
    fontSize: scale(14),
    color: theme.BLACK,
    fontFamily: fonts.Proxima_Nova_Sbold,
  },
  userSubTtlTxt: {
    fontSize: scale(10),
    color: theme.BACKGROUND_SECONDARY_DARK,
    fontFamily: fonts.Proxima_Nova_Sbold,
  },
  userWinCont:{
    alignItems: 'center',
    height:'100%',
    padding:10
  },
  winTxt:{
    fontSize: scale(14),
    color: theme.BLACK,
    fontFamily: fonts.Proxima_Nova_Sbold,
  },
  roundScoreCont:{
    flex:1,
    // backgroundColor: '#1D1D1D',
    marginTop:scale(20),
    paddingBottom:scale(15),
    borderRadius: scale(8),
    overflow: 'hidden',
  },
  roundTxt:{
    fontSize: scale(14),
    color: theme.BLACK,
    fontFamily: fonts.Proxima_Nova_Sbold,
  },

});
