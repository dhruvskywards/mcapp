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
    backgroundColor: theme.BACKGROUND_VARAINT_7,
  },
  maincontainer: {
    //flex: 1,
    //backgroundColor: theme.BACKGROUND_VARAINT_7,
  },
  headerText:{
    textAlign:'center',
    fontFamily: fonts.Proxima_Nova_Bold,
    fontSize: scale(13),
    marginLeft:scale(15),
    color:theme.POINT_TEXT
  },
  selectAccountView:{
    marginHorizontal:scale(25),
    marginVertical:scale(35)
  },
  selectAccountText:{
    fontFamily: fonts.Proxima_Nova_Sbold,
    fontSize: scale(18),
    
  },
  header: {
    marginHorizontal: scale(26),
  },
  container: {
    flex: 1,
  },
  noData: {
    fontFamily: fonts.Proxima_Nova_Sbold,
    fontSize: scale(14),
    textAlign: 'center',
    color: theme.BLACK,
  },
  flatListView:{
    marginHorizontal:scale(10)
  },
  padding: {
    padding: scale(20),
  },
});
