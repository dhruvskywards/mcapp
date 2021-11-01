import React from 'react';
import {Text, View, Image, Pressable} from 'react-native';
import style from './style';
import {useNavigation} from '@react-navigation/core';

const EditImage = ({uri, name, onPress}) => {
  console.log('Display');
  const navigation = useNavigation();
  return (
    <View style={style.maincontainer}>
      <View style={style.imageContainer}>{/* <Image source={uri} /> */}</View>
      <Text style={style.titleText}>Data</Text>
    </View>
  );
};

export default EditImage;
