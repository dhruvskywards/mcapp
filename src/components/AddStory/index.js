import React from 'react';
import {Text, View, Image, Pressable} from 'react-native';
import style from './style';
import plus from '../../assets/image/plus.png';
import {useNavigation} from '@react-navigation/core';

const AddStory = () => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => navigation.navigate('StoryFlow', {ContentType: 'story'})}
      style={style.maincontainer}>
      <View style={style.imageContainer}>
        <Image resizeMode={'stretch'} source={plus} />
      </View>
      <Text style={style.titleText}>New Story</Text>
    </Pressable>
  );
};

export default AddStory;
