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
 sheduleBtn : {
    borderWidth:1,
    borderRadius: scale(20),
    marginHorizontal:'30%',
    paddingVertical:10,
    marginVertical:scale(15),
    backgroundColor: '#000',

  },
  sheduleBtnTxt:{
    fontFamily:fonts.Proxima_Nova_Sbold,
    fontSize:scale(10),
    alignSelf: 'center',
    color:'#FFF'
  }

});
