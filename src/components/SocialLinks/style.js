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
    padding: scale(15)
  },
  maincontainer: {
    flex: 1,
    backgroundColor: theme.WHITE,
    paddingHorizontal: scale(10),
    marginBottom:scale(50)
  },
  socialCont:{
    marginTop: 10,
    flexDirection: 'row',
    backgroundColor:'#F2F2F2',
    alignItems:'center',
    borderRadius:scale(4),
    justifyContent:'space-between',
    marginLeft:10,
    // height:53,
  },
  socialImg:{
    height:scale(45),
    width:scale(45),
    marginLeft: -20,
    marginTop: 10,
  },
  socialTxt:{
    fontFamily:fonts.Proxima_Nova_Bold,
    fontSize:scale(14),
    marginLeft:scale(10)
  },
  socialLinkImg:{
    height:scale(12),
    width:scale(12),
    marginRight:20
    //alignSelf: 'flex-end'
  },

});
