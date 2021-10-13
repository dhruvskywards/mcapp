import {scale, verticalScale, ScaledSheet} from 'react-native-size-matters';
import fonts from '../../../utils/fonts';
import theme from '../../../utils/theme';

export default ScaledSheet.create({
  containerCard:{
    marginLeft: scale(20),
    marginEnd:scale(20),
    marginTop:scale (10),
    marginBottom: scale(3),
    paddingBottom:scale(20),
    borderBottomRightRadius: scale(45),
    borderTopRightRadius: scale(45),
    borderLeftColor: theme.BORDER_LEFT_POINTS,
    borderLeftWidth: 5,
    borderRightWidth: 0,
    borderTopWidth: 0,
    borderBottomWidth: 0,
    shadowColor: theme.BORDER_SHADOW,
    borderTopColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'transparent',
    shadowOpacity: 5,
    shadowRadius: 2.22,
    elevation: 2,
    borderWidth: 1,
    shadowOffset: {
      height: 1,
      width: 0,
    },
},
textRemix:{
  fontFamily: fonts.Proxima_Nova_Bold,
  fontSize:scale(18),
  paddingTop: scale(25), 
  paddingLeft: scale(10) 
},

textStartAt:{
  fontFamily: fonts.Proxima_Nova_Bold,
  fontSize:scale(12),
  paddingTop: scale(10), 
  paddingLeft: scale(10) 
},
textPrice:{
  fontFamily: fonts.Proxima_Nova_Bold,
  fontSize:scale(18),
  paddingTop: scale(10), 
  paddingLeft: scale(8) 
 
},
textDescription:{
  fontFamily: fonts.Proxima_Nova_Regular,
  lineHeight:scale(20),
  paddingTop: scale(20),
  paddingLeft: scale(10),
  paddingRight: scale(20),
  justifyContent:'center'
},

buttonStyle:{
  width:'30%',
  marginLeft: scale(10),
  marginTop:scale(15)
}
});
