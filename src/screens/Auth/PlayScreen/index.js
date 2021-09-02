import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import style from './style';

const PlayScreen = () => {
  return (
    <ScrollView contentContainerStyle={{flex: 1}}>
      <View style={style.maincontainer}>
        <View style={style.container}>
          <Text style={style.titleText}>Play</Text>
          <Text numberOfLines={3} style={style.SubtitleText}>
            Coming up next
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};
export default PlayScreen;
