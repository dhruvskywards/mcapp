
import React, { useEffect, useRef, useState } from "react";
import { View, Text, ScrollView, Switch, Image, Pressable, TouchableOpacity } from "react-native";
import style from './style';
import Header from "../../../../../components/Header/Header";
import add_more from '../../../../../assets/image/add_more.png'
import user from '../../../../../assets/image/user1.png'
import { useTheme } from "@react-navigation/native";
import Slider from '@react-native-community/slider';
const ContestPerformerResult = () => {
  const CustomTheme = useTheme();
  const [ison,setIson] = useState(false);
  return (
    <ScrollView>
      <View style={style.maincontainer}>
        <View style={[style.container,{backgroundColor:CustomTheme.colors.notification}]}>
           <Text style={[style.titleText,{color: CustomTheme.colors.text}]}>Battle Rap Contest 2019</Text>
           <View style={[style.userCont,{backgroundColor:CustomTheme.colors.card}]}>
             <View style={style.userDetails}>
               <Image source={user} style={style.userImg}/>
               <View style={{marginLeft:20}}>
                 <Text style={[style.userTtlTxt,{color: CustomTheme.colors.text}]}>Newkidondablock</Text>
                 <Text style={[style.userSubTtlTxt,{color: CustomTheme.colors.text}]}>Location: West Hollywood, CA</Text>
               </View>
             </View>
             {/*<View style={[style.userWinCont,{backgroundColor:CustomTheme.colors.notification}]}>*/}
             {/*  <Text style={[style.userTtlTxt,{color: CustomTheme.colors.text}]}>Win</Text>*/}
             {/*</View>*/}
           </View>
          <View style={[style.roundScoreCont,{backgroundColor:CustomTheme.colors.card,marginTop:20}]}>
            <View style={{flexDirection:'row',justifyContent:'space-between',paddingHorizontal:22,paddingVertical:15,backgroundColor:'#232323'}}>
              <View>
                <Text style={[style.userTtlTxt,{color: CustomTheme.colors.text}]}>Round 1</Text>
                <View style={{height:5,width:30,backgroundColor:'#FFDC2D',alignSelf:'center',marginTop:5,borderRadius:10}}></View>
              </View>
              <Text style={[style.userTtlTxt,{color: CustomTheme.colors.text}]}>Round 2</Text>
              <Text style={[style.userTtlTxt,{color: CustomTheme.colors.text}]}>Round 3</Text>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between',paddingHorizontal:10,paddingVertical:20}}>
              <TouchableOpacity style={{backgroundColor:'white',paddingHorizontal:20,paddingVertical:10,borderRadius:20,}}>
                 <Text style={style.userTtlTxt}>Execution</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{backgroundColor:'black',paddingHorizontal:20,paddingVertical:10,borderRadius:20,}}>
                <Text style={{ color:'#FFF' }}>Choreography</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{backgroundColor:'black',paddingHorizontal:20,paddingVertical:10,borderRadius:20,}}>
                <Text style={{ color:'#FFF' }}>Energy</Text>
              </TouchableOpacity>
            </View>
            <Text style={[style.userTtlTxt,{color: CustomTheme.colors.text,alignSelf:'center'}]}>Score: 100</Text>
          </View>
          <View style={[style.userCont,{backgroundColor:CustomTheme.colors.card,marginTop:70}]}>
            <View style={style.userDetails}>
              <Image source={user} style={style.userImg}/>
              <View style={{marginLeft:20}}>
                <Text style={[style.userTtlTxt,{color: CustomTheme.colors.text}]}>Newkidondablock</Text>
                <Text style={[style.userSubTtlTxt,{color: CustomTheme.colors.text}]}>Location: West Hollywood, CA</Text>
              </View>
            </View>
            {/*<View style={[style.userWinCont,{backgroundColor:CustomTheme.colors.notification}]}>*/}
            {/*  <Text style={[style.userTtlTxt,{color: CustomTheme.colors.text}]}>Win</Text>*/}
            {/*</View>*/}
          </View>
          <View style={[style.roundScoreCont,{backgroundColor:CustomTheme.colors.card}]}>
            <View style={{flexDirection:'row',justifyContent:'space-between',paddingHorizontal:22,paddingVertical:15,backgroundColor:'#232323'}}>
              <View>
                <Text style={[style.userTtlTxt,{color: CustomTheme.colors.text}]}>Round 1</Text>
                <View style={{height:5,width:30,backgroundColor:'#FFDC2D',alignSelf:'center',marginTop:5,borderRadius:10}}></View>
              </View>
              <Text style={[style.userTtlTxt,{color: CustomTheme.colors.text}]}>Round 2</Text>
              <Text style={[style.userTtlTxt,{color: CustomTheme.colors.text}]}>Round 3</Text>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between',paddingHorizontal:10,paddingVertical:20}}>
              <TouchableOpacity style={{backgroundColor:'white',paddingHorizontal:20,paddingVertical:10,borderRadius:20,}}>
                <Text style={style.userTtlTxt}>Execution</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{backgroundColor:'black',paddingHorizontal:20,paddingVertical:10,borderRadius:20,}}>
                <Text style={{ color:'#FFF' }}>Choreography</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{backgroundColor:'black',paddingHorizontal:20,paddingVertical:10,borderRadius:20,}}>
                <Text style={{ color:'#FFF' }}>Energy</Text>
              </TouchableOpacity>
            </View>
            <Text style={[style.userTtlTxt,{color: CustomTheme.colors.text,alignSelf:'center'}]}>Score: 100</Text>
          </View>
        </View>
      </View>
        <View style={{backgroundColor:CustomTheme.colors.text,alignItems:'center',borderTopLeftRadius:20,borderTopRightRadius:20,padding:20,
          position:'absolute',left:0,bottom:0,width:'100%'
        }}>
          <Text style={[style.userTtlTxt,{color:CustomTheme.colors.primary}]}>Continue to viewer results </Text>
        </View>

    </ScrollView>
  );
};
export default ContestPerformerResult;
