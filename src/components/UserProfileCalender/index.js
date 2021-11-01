import React, { useEffect, useRef, useState } from "react";
import {View, Text, ScrollView,TouchableOpacity} from 'react-native';
import style from './style';
import RowItem from "./rowItem";
const UserProfileCalender = () => {
  return (
    <ScrollView contentContainerStyle={style.scrollViewContainer}>
      <View style={style.maincontainer}>
          <TouchableOpacity style={style.sheduleBtn}>
            <Text style={style.sheduleBtnTxt}>Set Schedule</Text>
          </TouchableOpacity>
          <RowItem />
      </View>
    </ScrollView>
  );
};
export default UserProfileCalender;
