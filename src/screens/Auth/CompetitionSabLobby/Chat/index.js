import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import style from './style';

const Chat = () => {
  return (
    <ScrollView contentContainerStyle={style.scrollViewContainer}>
      <View style={style.maincontainer}>
        <View style={style.container}>
          <Text style={style.titleText}>Post</Text>
          <Text numberOfLines={3} style={style.SubtitleText}>
            Coming up next
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};
export default Chat;
