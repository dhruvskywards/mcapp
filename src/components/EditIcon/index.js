import React from 'react';
import {Text, View, Image, Pressable} from 'react-native';
import style from './style';
import plus from '../../assets/image/plus.png';
import {useNavigation} from '@react-navigation/core';

const EditIcon = ({uri, name, onPress}) => {
  const navigation = useNavigation();
  return (
    <Pressable style={style.maincontainer} onPress={onPress}>
      <View style={style.imageContainer}>
        <Image source={uri} />
      </View>
      <Text style={style.titleText}>{name}</Text>
    </Pressable>
  );
};

export default EditIcon;
