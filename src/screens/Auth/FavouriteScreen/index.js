import React, { useEffect, useRef, useState } from "react";
import { View, Text, ScrollView, Switch, Image, Pressable, TouchableOpacity } from "react-native";
import style from './style';
import { useTheme } from "@react-navigation/native";

const FavouriteScreen = () => {
  const CustomTheme = useTheme();
  return (
     <ScrollView>
       <View style={style.maincontainer}>
         <View style={{flex:1,backgroundColor:CustomTheme.colors.notification,alignItems:'center',justifyContent:'center'}}>
           <Text style={{color:CustomTheme.colors.text}}> comming soon</Text>
         </View>
       </View>

     </ScrollView>
  );
};
export default FavouriteScreen;
