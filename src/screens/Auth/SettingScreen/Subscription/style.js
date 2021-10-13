import {
    scale,
    verticalScale,
    moderateScale,
    ScaledSheet,
  } from 'react-native-size-matters';
  import fonts from 'src/utils/fonts';
  import theme from 'src/utils/theme';

  export default ScaledSheet.create({
    Email: {
      backgroundColor: theme.TRANSPARENT,
      flex: 1,
      marginHorizontal:scale(10),
      marginVertical:scale(15)
    },
    Emaillightcontainer: {
      backgroundColor: theme.TRANSPARENT,
      justifyContent: 'flex-end',
    },
    LoungeCon: {
      backgroundColor: theme.TRANSPARENT,
      marginVertical:scale(15)
      
    },
    LoungeCon1: {
      backgroundColor: theme.TRANSPARENT,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    container: {
      alignItems: 'center',
      backgroundColor: theme.TRANSPARENT,
      justifyContent: 'center',
    },
    headerIcon: {
      justifyContent: 'flex-start',
      top: 5,
    },
    textCon: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: 320,
    },
    textBlack:{
      color:theme.BLACK,
      fontSize: scale(18),
      fontFamily: fonts.Proxima_Nova_Bold,
      textAlign: 'center',
      alignSelf: 'center',
      alignItems:'center'
    },

    subscriptionTitleView:{
      flexDirection: 'row',
      marginTop: scale(20),
      alignItems: 'center',
      justifyContent: 'space-around',
      alignSelf: 'center',
    },
    subscriptionTitleTextMain:{
      textAlign:'center',
      fontFamily: fonts.Proxima_Nova_Bold,
      fontSize: scale(18),

    },

    viewText:{
      flexDirection: 'column',
     
      alignItems: 'center',
      alignSelf: 'center',
    },
    subscriptionSubText:{
      textAlign:'center',
      fontFamily: fonts.Proxima_Nova_Bold,
      fontSize: scale(14),

    },

    subTextView:{
      flex: 1,
      justifyContent: 'space-around',
      alignItems: 'center',
     
      marginVertical:scale(40)
    },

    subMainText:{
      fontFamily: fonts.Proxima_Nova_Sbold,
      fontSize: scale(16),
    },
    SubSecondText:{
      fontFamily: fonts.Proxima_Nova_Regular,
      fontSize: scale(14),
      marginVertical:scale(8)
    },
    supremeSliderMainView:{
      flexDirection: 'row',
      alignItems: 'center',
      textAlign: 'center',
      justifyContent: 'space-around',                  
    },
    priceTextView:{
      fontFamily: fonts.Proxima_Nova_Bold,
      fontSize: scale(20),
      textAlign: 'center',
    },
    detailTextView:{
      textAlign: 'center',
      fontSize: scale(13),
      lineHeight:scale(20),
      marginTop: scale(20),
      marginHorizontal:scale(50),
      fontFamily: fonts.Proxima_Nova_Sbold,
    },

    detail_SubTextView:{
      fontFamily: fonts.Proxima_Nova_Sbold,
      textDecorationLine: 'underline',
      fontSize: scale(16),
    },

    otherSliderView:{
      flexDirection: 'row',
      alignItems: 'center',
      textAlign: 'center',
      justifyContent: 'space-around',
     
    },

    tierTabView:{
      backgroundColor: '#dbdbdb',
      color: '#ffffff',
     borderRadius: scale(50),
      minHeight: scale(50),
      flexDirection: 'row',
      justifyContent: 'space-around',
      padding: scale(10),
      marginTop: scale(30),
      width:'90%',
    },

    tierText:{
      color: '#898989',
      fontSize: scale(18),
      fontFamily: fonts.Proxima_Nova_Bold,
      textAlign: 'center',
      alignSelf: 'center',
      alignItems:'center'
    },

    containers:{
      flex: 1,
      alignItems: 'center',
      alignSelf: 'center',
      justifyContent: 'space-between',
    },

    tierPriceText:{
      fontFamily: fonts.Proxima_Nova_Sbold,
      textAlign: 'center',
      marginTop: '30%',
      fontSize:scale(20)
    },
    tierDetailText:{
      marginHorizontal:scale(40),
      lineHeight:scale(18),
      textAlign: 'center',
      marginVertical: '10%',
      fontFamily: fonts.Proxima_Nova_Sbold,
    },

    tirContainer:{
      flexDirection: 'row',
      alignItems: 'center',
      textAlign: 'center',
      justifyContent: 'space-around',
       marginVertical: '13%',
       
    },
    textContainer:{
      fontFamily: fonts.Proxima_Nova_Regular,
      textDecorationLine: 'underline',
      fontSize: scale(16),
    }
  });