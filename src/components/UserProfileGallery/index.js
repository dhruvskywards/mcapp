import React, { useEffect, useRef, useState } from "react";
import {View, Text, ScrollView,FlatList} from 'react-native';
import style from './style';
import FastImage from 'react-native-fast-image'
import InstaGrid from "../../screens/Auth/ProfileScreen/InstaGrid/InstaGrid";
const data = [{id:1},{id:2},{id:3},{id:4},{id:5},{id:6},{id:7},{id:5},{id:6},{id:7},{id:5},{id:6},{id:7}]

const UserProfileGallery = (userContent) => {
    const userPost = userContent.userContent;
    // console.log("CH-112",JSON.stringify(userPost[0]?.contentUrl))
  return (
    <ScrollView contentContainerStyle={style.scrollViewContainer}>
      <View style={style.maincontainer}>
        {userPost &&(
        <InstaGrid
          data={userPost}
          columns={3}
          //loading={loading}
          onItemClick={(item) => {
            console.log('Got the Item:' + JSON.stringify(item));
          }}
          onEndReachedThreshold={400}
          //onEndReached={() => (offset !== -1 ? fetchData() : null)}
        /> ) }
      </View>
    </ScrollView>
  );
};
export default UserProfileGallery;
