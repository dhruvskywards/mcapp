import React from 'react';
import {Text, View, Image} from 'react-native';
import style from './style';
import plus from '../../assets/image/plus.png';
const AddStory = () => {
  return (
    <View style={style.maincontainer}>
      <View style={style.imageContainer}>
        <Image resizeMode={'stretch'} source={plus} />
      </View>
      <Text style={style.titleText}>New Story</Text>
    </View>
  );
};

export default AddStory;
