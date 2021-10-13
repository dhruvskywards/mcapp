import {
  scale,
  verticalScale,
  moderateScale,
  ScaledSheet,
} from 'react-native-size-matters';
import fonts from 'src/utils/fonts';
import theme from 'src/utils/theme';

export default ScaledSheet.create({

  scrollContainer:{
    flex: 1,
    marginHorizontal:scale(20)
   
  },
  maincontainer: {
    flex: 1,
   
    //backgroundColor: theme.BACKGROUND_VARAINT_7,
  },
  headerText:{
    textAlign:'center',
    fontFamily: fonts.Proxima_Nova_Bold,
    fontSize: scale(13),
    marginLeft:scale(15),
    color:theme.POINT_TEXT
  },
  header: {
    marginHorizontal: scale(26),
  },
  titleView:{
    flex:1, 
    flexDirection: 'row',
     paddingTop: scale(30), 
     justifyContent: 'center',
     alignItems: 'center',
  },
  titleViewText:{
    fontFamily: fonts.Proxima_Nova_Bold,
    fontSize: scale(17),
  },
  autoRenewView:{
    flex:1, 
    flexDirection: 'row',
    
     justifyContent: 'center',
     alignItems: 'center',
  },
  autoRenewText:{
    fontFamily: fonts.Proxima_Nova_Sbold, 
    fontSize: scale(13),
    flex:1,
    textAlign:'right',
    paddingRight:scale(3),
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft:scale(10)
  },
  IconStyle:{
    position:'absolute',
    left:scale(5),
    right:scale(5),
    top:scale(5),
    bottom:scale(5)
  },
  containerStyles:{
    marginTop:scale(50)
  },
  paymentView:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical:scale(8)
  },
  textBold:{
    fontFamily: fonts.Proxima_Nova_Bold,
  },
  imageView:{
    resizeMode: 'contain', 
    width: scale(80),
    height: scale(50)
  },
  padding: {
    padding: scale(20),
    width:scale(150),
    marginTop:scale(20)
  },
  textCancelSubscription:{
    textDecorationLine: 'underline', 
    marginTop: scale(30),
    fontFamily: fonts.Proxima_Nova_Regular,
  }

});
