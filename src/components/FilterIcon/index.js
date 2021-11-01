import React from 'react';
import {Text, View, Image, Pressable} from 'react-native';
import style from './style';
import {useNavigation} from '@react-navigation/core';

const FilterIcon = ({uri, name}) => {
  console.log(uri);
  return (
    <Pressable style={style.maincontainer}>
      <Text style={style.titleText}>{name}</Text>
      <View style={style.imageContainer}>
        <Image
          source={{
            uri: `${uri}`,
          }}
          style={style.imageView}
        />
      </View>
    </Pressable>
  );
};

export default FilterIcon;
