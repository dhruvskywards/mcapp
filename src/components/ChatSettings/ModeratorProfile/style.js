import {scale, ScaledSheet} from 'react-native-size-matters';
import Fonts from '../../../utils/fonts';
import Colors from '../../../utils/theme';

export default ScaledSheet.create({
  MainContainer: {
    alignItems: 'center',
  },
  DetailsView: {
    marginTop: scale(10),
    alignItems: 'center',
  },
  nameText: {
    fontFamily: Fonts.Proxima_Nova_Sbold,
    fontSize: scale(14),
    color: Colors.BLACK,
  },
  imageView: {
    height: scale(36),
    width: scale(36),
    borderRadius: scale(20),
    backgroundColor: Colors.LIGHT_GRAY,
  },
  typeText: {
    fontFamily: Fonts.Proxima_Nova_Sbold,
    fontSize: scale(10),
    color: Colors.TEXT_VARIANT_2_BlK,
  },
  micImgCont:{
    height: scale(21),
    width: scale(21),
    borderRadius:scale(11),
    backgroundColor: Colors.WHITE,
    position:"absolute",
    top:20,
    right:15,
    justifyContent:'center',alignItems:'center'
  },
  micImg:{
    height: scale(14),
    width: scale(9),
  },
  greenDot:{
    height: scale(9),
    width: scale(9),
    borderRadius:scale(5),
    backgroundColor: '#63FFB1',
    position:"absolute",
    top:0,
    left:10,
    bottom:0
    // justifyContent:'center',alignItems:'center'
  },
  removeText: {
    marginTop: scale(7),
    fontFamily: Fonts.Proxima_Nova_Regular,
    fontSize: scale(10),
    color: '#FF7979',
    borderBottomWidth:0.5,
    borderColor:'#FF7979'
  },
});
