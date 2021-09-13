import {scale, ScaledSheet} from 'react-native-size-matters';
import theme from '../../../utils/theme';
import fonts from '../../../utils/fonts';
export default ScaledSheet.create({
  Thumbnailnamerowcon: {
    alignItems: 'center',
    flexDirection: 'row',
    fontFamily: 'ProximaNova-Regular',
    paddingTop: scale(20),
  },
  title: {
    flexDirection: 'row',
    backgroundColor: theme.TRANSPARENT,
  },
  TitleAndSubTitleRow: {
    flex: 1,
    marginLeft: 20,
    backgroundColor: theme.TRANSPARENT,
  },
  Thumbnailnamerowcon1: {alignItems: 'center', flexDirection: 'row', flex: 1},

 imageStyle:{
  height: scale(50),
  width: scale(50),
  borderRadius: scale(50) / 2,
  borderColor: theme.IMAGE_BORDER,
  borderWidth: scale(3),
  position: 'relative',
  top: 0,
  left: 0,
 },

 viewRank:{
  //flex: 1,
 // backgroundColor: 'white',
 },
 rankCircle:{
  height: scale(20),
  width: scale(20),
  borderRadius: scale(20),
  position: 'absolute',
  top: scale(-10),
  right: scale(12),
  elevation: scale(10),
 
  justifyContent:'center',
  alignSelf:'center',
  backgroundColor: theme.WHITE,
 },
 textRank:{
  
   textAlign:'center',
   fontFamily: fonts.Proxima_Nova_Bold,
 }
});
