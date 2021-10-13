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
  mainView:{
    marginHorizontal: scale(20),
    marginVertical:verticalScale(40)
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
  topContainer: {
    marginTop: scale(20),
  },
  
  textContent:{
    fontFamily: fonts.Proxima_Nova_Bold,
    fontSize: scale(18),
  },
 
  passwordStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: verticalScale(15),
    backgroundColor: theme.WHITE,
    borderRadius: scale(8),
  },
  passwordEye: {
    right: scale(20),
  },
  titlePassword: {
    fontSize: scale(15),
    color: theme.BACKGROUND_SECONDARY_DARK,
    fontFamily: fonts.Proxima_Nova_Regular,
    marginBottom:scale(25),
    marginHorizontal: scale(20),
  },
  textInput: {
    width: '85%',
  },
  barStyle: {
    marginLeft: -scale(5),
    marginRight: -scale(5),
  },
  ProgessbarlebelView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  Progressbarlebel: {
    fontFamily: fonts.Proxima_Nova_Sbold,
    fontSize: scale(10),
  },
  padding: {
    flex:1,
    padding: scale(20),
    width:scale(200),
    marginVertical:scale(200),
    alignSelf:'center',
  
  },

});
