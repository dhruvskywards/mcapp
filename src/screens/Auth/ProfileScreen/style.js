import {
  scale,
  verticalScale,
  moderateScale,
  ScaledSheet,
} from 'react-native-size-matters';
import fonts from 'src/utils/fonts';
import theme from 'src/utils/theme';

export default ScaledSheet.create({
  maincontainer: {
    flex: 1,
    backgroundColor: theme.WHITE,
  },
  mainHeader:{
    padding:scale(10),
     flexDirection:'row',
    // alignItems:"center"
    justifyContent:'space-between'
  },
  backImg:{
    height:scale(24),
    width:scale(24),
  },
  diamondCount:{
    fontFamily:fonts.Proxima_Nova_Regular,
    fontSize:scale(12),
    color:'#BBBBBB',
    marginLeft: scale(5),
  },
  userHeaderCont: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: scale(20),
    // paddingHorizontal: scale(20),
    alignItems: 'center'
  },
  userConnCont:{
    alignItems: 'center',
    // flexDirection: 'column',
    // marginRight: -100,
    // paddingLeft: scale(7)
  },
  userConnTTxt:{
    fontFamily:fonts.Proxima_Nova_Sbold,
    fontSize:scale(14),
    color:'#444444'
  },
  userConnSTTxt:{
    fontFamily:fonts.Proxima_Nova_Regular,
    fontSize:scale(10),
    color:'#444444'
  },
  userImgCont:{
    width: scale(56),
    height:scale(56),
    borderRadius: scale(28),
    borderColor: '#E8E8E8',
    borderWidth: scale(2),
    marginHorizontal:scale(15),
    alignItems:'center',justifyContent: 'center'
  },
  userImg:{
    width: scale(46),
    height:scale(46),
    borderRadius: scale(23),
    backgroundColor: 'lightgrey'
  },
  userCompCont:{

  },
  userSubHeaderCont:{
    marginTop: scale(15),
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: scale(10)
  },
  usernameCont:{
    alignItems: 'center',
    flexDirection: 'row',
  },
  badgeImg:{
    marginLeft:scale(8),
    height:scale(15),
    width:scale(15),
  },
  verLing:{
    height:scale(17),
    borderWidth: 1,
    borderColor: '#E6E6E6',
    marginHorizontal: scale(10)
  },
  profbtnCont:{
    marginTop:scale(20),
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal:scale(30),
    justifyContent:'space-between'
  },
  btnCont:{
    backgroundColor:theme.BLACK,
    borderRadius: 25,
  },
  btnTxt:{
    color:theme.WHITE,
    fontFamily:fonts.Proxima_Nova_Sbold,
    fontSize:scale(10),
    marginVertical: scale(10),
    marginHorizontal:scale(25),
  },
  userSHTxt:{
    fontFamily:fonts.Proxima_Nova_Sbold,
    fontSize:scale(10),
    color:theme.BLACK
  },
  profGalCont:{
    marginTop:scale(25),
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal:scale(45),
     justifyContent:'space-between'
  },
  profGalImg:{
    // marginHorizontal:scale(25),
    height:scale(20),
    width:scale(20),
    tintColor:'grey'
  },
  profGalImg1:{
    // marginHorizontal:scale(25),
    height:scale(20),
    width:scale(20),
     tintColor:'#000'
  },


});
