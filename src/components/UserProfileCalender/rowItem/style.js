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
    paddingHorizontal: scale(15)
  },
  flatlistItem:{
     // backgroundColor:'lightgrey',
    marginVertical:15,
    height:scale(127),
    borderRadius:scale(10),
    paddingHorizontal:scale(15),
    paddingVertical:scale(10),
    // marginTop:30,
    // flex:1,
    shadowColor: "grey",
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: 1,
    shadowRadius: 4.65,
    elevation: 3,
     backgroundColor: '#fff',

  },
  eventCont:{
    flexDirection:'row',
    // alignItems:'center',
    flex:1,
  },
  eventImgCont:{
    marginTop: scale(-20),
    height: scale(107),
    // borderWidth:1,
    width:scale(89),
    borderRadius:scale(15),
    overflow:'hidden',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    // shadowOpacity: 0.29,
    shadowRadius: 2.65,
    elevation: 3,
  },
  eventImg:{
    height: scale(107),
    width:scale(89),
    // marginTop: scale(-20),
    // borderRadius:15,
    // overflow:'hidden',

  },
  eventTitleTxt:{
    fontFamily:fonts.Proxima_Nova_Bold,
    fontSize:scale(14),
  },
  eventSubTxt:{
    fontFamily:fonts.Proxima_Nova_Regular,
    fontSize:scale(12),
    marginTop:scale(10)
  },
  lvstrmBtn : {
    borderWidth:1,
    borderColor:'#2E2E2E',
    alignSelf:'flex-end',
    borderRadius: scale(10),
    paddingHorizontal:scale(10),
    paddingVertical:3,
  },
  lvstrmBtnTxt:{
    fontFamily:fonts.Proxima_Nova_Sbold,
    fontSize:scale(8),
    color:'#A8A8A8'
  },
  trackBtn : {
    borderWidth:1,
    borderRadius: scale(20),
    paddingHorizontal:scale(10),
    paddingVertical:10,
    width:scale(70),
    backgroundColor: '#000',
    marginBottom:scale(-22),
    marginLeft:scale(10)
  },
  trackBtnTxt:{
    fontFamily:fonts.Proxima_Nova_Sbold,
    fontSize:scale(10),
    alignSelf: 'center',
    color:'#FFF'
  }
});
