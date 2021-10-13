import {scale, verticalScale, ScaledSheet} from 'react-native-size-matters';
import fonts from '../../../utils/fonts';
import theme from '../../../utils/theme';

export default ScaledSheet.create({
  HeaderCommain:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: scale(5),
    paddingHorizontal: scale(20),
    backgroundColor:theme.TRANSPARENT
  },
  HeadNameCon:{
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: scale(10),
    backgroundColor:theme.TRANSPARENT
  },
  HeadName: { alignItems: 'center', flexDirection: 'column',  paddingLeft: 7 },
  textConnectionValue:{
   
    fontSize: scale(15),
    color: theme.BLACK,
    fontFamily: fonts.Proxima_Nova_Sbold,
  },
  headnamebottom: { paddingTop: 6 ,fontSize: scale(12),fontFamily: fonts.Proxima_Nova_Regular,color:theme.TEXT_PRIMARY_DARK},
  imageView:{
    width: scale(70),
    height: scale(70),
    borderRadius: scale(35),
    borderWidth: 2,
    borderColor: theme.IMAGE_BORDER
  },
  Walletbtncon: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: scale(20),
    backgroundColor:theme.TRANSPARENT
  },
  EditbuttonStyle:{
    alignSelf: 'center',
    paddingHorizontal: scale(20),
    paddingVertical: scale(12),
   
    
  },

  text:{
   
    fontSize: scale(12),
    color: theme.BLACK,
    fontFamily: fonts.Proxima_Nova_Sbold,
  }
});
