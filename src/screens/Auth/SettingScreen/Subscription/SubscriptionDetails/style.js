import {
    scale,
    verticalScale,
    moderateScale,
    ScaledSheet,
  } from 'react-native-size-matters';
  import fonts from 'src/utils/fonts';
  import theme from 'src/utils/theme';

  export default ScaledSheet.create({
 

  
    container: {
      marginVertical:scale(15)
      // alignItems: 'center',
      // backgroundColor: COLORS.TRANSPARENT,
  },
  
    containerWrap: {
  
      borderBottomRightRadius: 45,
      borderTopColor: theme.TRANSPARENT,
      borderRightColor: theme.TRANSPARENT,
      borderBottomColor: theme.TRANSPARENT,
      borderLeftColor: '#c5c6d0',
      borderLeftWidth: 5,
      borderTopRightRadius: 45,
      borderWidth: 1,
      elevation: 10,
       marginHorizontal:scale(10),
      marginTop:scale(30),
      paddingHorizontal:scale(10),
      paddingVertical:scale(30),
      shadowColor: '#c5c6d0',
      shadowOffset: {
        height: 1,
        width: 0,
      },
      shadowOpacity: 6,
      shadowRadius: 3.22,
    },
  
    horizontalContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    innerListContainer: {
      flexDirection: 'row',
      flex: 1,
     
    },
    listEmpaty: {
      alignItems: 'center',
      alignSelf: 'center',
      backgroundColor: theme.TRANSPARENT,
      borderRadius: 4,
      flex: 0.2,
      height: '50%',
      justifyContent: 'center',
     
    },
    listTextView1: {
      alignSelf:'center',
      flex: 0.9,
      justifyContent: 'flex-start',
     
     
    },
  
    listTextView2: {
      alignItems: 'center',
      alignSelf: 'center',
      backgroundColor: '#7FFFD4',
      borderRadius: 4,
      flex: 0.2,
      height: '40%',
      justifyContent: 'center',
     
    },
  
    mainListContainer: {
     
      borderBottomRightRadius: 2,
      borderColor: '#c5c6d0',
      borderLeftColor: '#c5c6d0',
      borderLeftWidth: 5,
      borderTopRightRadius: 2,
      borderWidth: 1,
      elevation: 8,
      marginEnd: 10,
      marginLeft: 10,
      marginTop: 10,
      shadowColor: '#c5c6d0',
      shadowOffset: {
        height: 1,
        width: 0,
      },
      shadowOpacity: 5,
      shadowRadius: 2.22,
    },
  
    textCon: {
      flexDirection: 'row',
      fontFamily: fonts.Proxima_Nova_Bold,
      justifyContent: 'space-between',
     
  },
  
    valueText: {
      color: theme.LIGHT_GRAY, 
      fontFamily: fonts.Proxima_Nova_Extrabld,
      fontSize: scale(20),
     
    
    },
  valueTexts: {
      color: theme.LIGHT_RED,
      fontFamily: fonts.Proxima_Nova_Extrabld,
      fontSize: scale(20),
    
      
    },

    mainContainer:{
      paddingTop: scale(10),
      flexDirection: 'row',
      alignContent: 'center',
      justifyContent: 'center',
    },

    textTitleMain:{
     
      fontFamily: fonts.Proxima_Nova_Extrabld,
      fontSize:scale(25)
    },
    textStartingAt:{
      marginTop:scale(8),
      fontFamily: fonts.Proxima_Nova_Bold,
      fontSize:scale(14)
    },
    textPrice:{
      marginTop:scale(4),
      fontFamily: fonts.Proxima_Nova_Bold,
      fontSize:scale(20)
    },
    textDetail:{
      marginTop:scale(20),
      fontFamily: fonts.Proxima_Nova_Regular,
      fontSize:scale(14)
    },
    textPrizeValue:{
      marginTop:scale(25),
      fontFamily: fonts.Proxima_Nova_Bold,
      fontSize:scale(15)
    },
    padding: {
      padding: scale(20),
      width:scale(150),
      marginTop:scale(20)
    },
  });