import React, { useEffect, useRef, useState } from "react";
import { View, Text, ScrollView, Image, FlatList, TouchableOpacity } from "react-native";
import style from './style';
import event_Calender from '../../../assets/image/event_Calender.png'
import edit from '../../../assets/image/edit_pen.png'
const data = [{id:1},{id:2},{id:3},{id:4}]
const RowItem = () => {
  return (
      <View >
        <FlatList
          data={data}
           // style={{paddingBottom:40,}}
          renderItem={()=> (
              <View style={style.flatlistItem}>
                  <TouchableOpacity style={{position:'absolute',right:10,top:12}}>
                      <Image source={edit} style={{height:20,width:20}}/>
                  </TouchableOpacity>
                <View style={style.eventCont}>
                    <View style={style.eventImgCont}>
                        <Image source={event_Calender} style={style.eventImg}/>
                    </View>
                  <View style={{marginLeft:15,flex:1}}>
                  <Text style={style.eventTitleTxt}>Trap House Album Listening Session</Text>
                    <Text style={style.eventSubTxt}>Opens Jan 4th, 2021 3:30pm Pacific</Text>
                  </View>
                </View>
                <TouchableOpacity style={style.lvstrmBtn}>
                  <Text style={style.lvstrmBtnTxt}>LIVE-STREAM</Text>
                </TouchableOpacity>
                {/*<TouchableOpacity style={style.trackBtn}>*/}
                {/*  <Text style={style.trackBtnTxt}>Track</Text>*/}
                {/*</TouchableOpacity>*/}
              </View>
              )}
        />
      </View>
  );
};
export default RowItem;
