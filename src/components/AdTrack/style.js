import {
    scale,
    verticalScale,
    moderateScale,
    ScaledSheet,
} from 'react-native-size-matters';
import fonts from 'src/utils/fonts';
import theme from 'src/utils/theme';
import Colors from "../../utils/theme";
import Fonts from "../../utils/fonts";
import {ColorBlend} from "react-native-image-filter-kit";

export default ScaledSheet.create({
    scrollViewContainer: {
        flex: 1,
    },
    maincontainer: {
        flex: 1,
        backgroundColor: theme.WHITE,
        paddingBottom:50
    },
    titleTxt:{
        // marginTop:scale(30),
        fontSize:scale(18),
        fontFamily:fonts.Proxima_Nova_Bold,
        color:'#000000'
    },
    imgCont:{
        height:scale(36),
        width:scale(36),
        resizeMode:'contain',
        backgroundColor:'#DCDCDC',
        borderRadius:scale(18),
        // overflow:'hidden'
    },
    img:{
        height:scale(36),
        width:scale(36),
        resizeMode:'contain',
    },
    thumbimgCont:{
        height:scale(45),
        width:scale(45),
        backgroundColor:'#DCDCDC',
        borderRadius:scale(23),
    },
    thumbimg:{
        height:scale(45),
        width:scale(45),
        resizeMode:'contain',
    },
    subtitleTxt:{
        marginTop:scale(10),
        fontSize:scale(14),
        fontFamily:fonts.Proxima_Nova_Regular,
        color:'#000000'
    },
    radiobtn: {
        marginHorizontal: -scale(10),
    },
    RadioBtnItemText: {
        fontSize: scale(14),
        color: theme.BLACK,
        fontFamily: Fonts.Proxima_Nova_Regular,
        paddingVertical: verticalScale(10),
    },
    uploadCont:{
        backgroundColor: Colors.BACKGROUND_VARAINT_8,
         padding: 20,
    },
    Button: {
        paddingVertical: scale(10),
        width: scale(120),
        borderRadius:scale(40),
        marginRight:scale(10)
    },
    btnTxt:{
        alignSelf:'center'
    },
    playTrack:{
      flexDirection:'row',
      marginTop:scale(20),
        marginHorizontal: scale(20),
        justifyContent:'space-between'
    },
    sliderTrack:{
        backgroundColor:'#C6C6C6',
        height:scale(4),
        borderRadius:(6),
        width:230
    },
    sliderThumb:{
        width: scale(8),
        height: scale(8),
        overflow: 'hidden',
        borderRadius: scale(4),
        backgroundColor: '#000'
    },
    playView: {
        // height: scale(32),
        // width: scale(32),
        // borderRadius: scale(20),
        alignItems: 'center',
        justifyContent: 'center',
    },
    innerView: {
        height: scale(38),
        width: scale(38),
        borderRadius: scale(19),
        backgroundColor: theme.TRANSPARENT,
        borderColor: '#DCDCDC',
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    uploadThumbCont:{
        padding: 20,
    },
    subtitlePriceTxt:{
        // marginTop:scale(10),
        fontSize:scale(14),
        fontFamily:fonts.Proxima_Nova_Sbold,
        color:'#000000'
    },
    trackdurationTxt:{
        //marginLeft:scale(5),
        fontSize:scale(8),
        fontFamily:fonts.Proxima_Nova_Sbold,
        color:'#000000'
    },
    priceTextinputCont:{
        flexDirection:'row',
        borderWidth:1,
        marginTop:scale(8),
        alignItems:'center',
        borderColor:'#C1BEBE',
        borderRadius:scale(5)
    },
    footerBtn: {
        alignItems: 'center',
        borderTopLeftRadius: scale(20),
        borderTopRightRadius: scale(20),
        backgroundColor: Colors.BLACK,
        paddingVertical: verticalScale(16),
        position:'absolute',
        left:0,right:0,bottom:0,
    },
    footerBtnTxt: {
        fontFamily: Fonts.Proxima_Nova_Sbold,
        fontSize: scale(14),
        textAlign: 'center',
        color: Colors.WHITE,
    },
});
