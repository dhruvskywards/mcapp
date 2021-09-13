import {scale, verticalScale, ScaledSheet} from 'react-native-size-matters';
import fonts from '../../../utils/fonts';
import theme from '../../../utils/theme';

export default ScaledSheet.create({
  mainview: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 30,
   
  },
  DiscoverFilterCon: {
    
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingLeft: scale(10),
    paddingTop: scale(10),
  },

  DiscoverFeatured: { marginLeft:scale(15), marginTop: scale(10),fontFamily: fonts.Proxima_Nova_Sbold, fontSize: scale(20), },
  DisTopbrand: { marginLeft: scale(15) ,fontFamily: fonts.Proxima_Nova_Sbold, fontSize: scale(10),},

 
  pageContainer: {
    flex: 1, 
    marginLeft: scale(20)
  },
  
  
  txt: {
    fontSize: scale(20),
    fontFamily: fonts.Proxima_Nova_Sbold,
  },
  txt_1: {
    fontSize: scale(10),
    fontFamily: fonts.Proxima_Nova_Sbold,
    color:theme.TEXT_COMMON_SILVER
  },
  
});
