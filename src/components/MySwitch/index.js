import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import style from './style';
import { useNavigation, useTheme } from "@react-navigation/native";
import close from "../../assets/image/close.png";
import { Switch } from "react-native-switch";

const MySwitch = (value,onValueChange) => {


  return (
    <View>
      <Switch
         // value={value}
         // onValueChange={onValueChange}
         activeText={''}
         inActiveText={''}
        // onValueChange={(val) => console.log(val)}
        circleSize={23}
        barHeight={27}
        // disabled={false}
        backgroundActive={'#000'}
        backgroundInactive={'gray'}
        // circleActiveColor={'#30a566'}
        // circleInActiveColor={'#000000'}
        renderInsideCircle={() => <Image source={close} style={{height:11,width:11,tintColor:'#8A8A8A'}}/>}
        innerCircleStyle={{ alignItems: "center", justifyContent: "center",backgroundColor:'#FFF' }}
        switchWidthMultiplier={2.2}
        switchBorderRadius={30}
      />
    </View>
  );
};
export default MySwitch;
