import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import style from './style';

const FavouriteScreen = () => {
  return (
    <ScrollView contentContainerStyle={style.scrollViewContainer}>
      <View style={style.maincontainer}>
        <View style={style.container}>
          <Text style={style.titleText}>FavouriteScreen</Text>
          <Text numberOfLines={3} style={style.SubtitleText}>
            Coming up next
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};
export default FavouriteScreen;
