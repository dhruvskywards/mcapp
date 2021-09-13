import {scale, verticalScale, ScaledSheet} from 'react-native-size-matters';
import fonts from '../../../utils/fonts';
import theme from '../../../utils/theme';

export default ScaledSheet.create({
 
  row: {
    flexDirection: 'row',
  },
 
  container: {
    height: verticalScale(60),
    backgroundColor: theme.IMAGE_BORDER,
    borderRadius: scale(40),
    zIndex: 1,
    marginHorizontal: scale(20),
    paddingHorizontal: scale(10),
    shadowColor: theme.BLACK,
    shadowOffset: {
      width: scale(1),
      height: verticalScale(5),
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 10,
  },
  headercontainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  imageStyle:{
    height: scale(50),
    width: scale(50),
    borderRadius: scale(50) / 2,
    borderColor: theme.IMAGE_BORDER_1,
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
    top: scale(12),
    right: scale(35),
    elevation: scale(10),
   
    justifyContent:'center',
    alignSelf:'center',
    backgroundColor: theme.WHITE,
   },
   textRank:{
     textAlign:'center',
     fontFamily: fonts.Proxima_Nova_Bold,
   },
   viewYou:{
     flexDirection:'column',
     justifyContent:'center',
     marginHorizontal:scale(4)
   },
   textYou:{
    fontFamily: fonts.Proxima_Nova_Sbold,
   },
   titleCount: {
    fontSize: scale(12),
    fontFamily: fonts.Proxima_Nova_Bold,
  },

   viewTopGifter: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center'
  },
});
