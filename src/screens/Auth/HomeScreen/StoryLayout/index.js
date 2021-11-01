import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Dimensions,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import style from './style';
import {Verified} from 'src/assets/image/Verified.png';
import Video from 'react-native-video';
import {useSelector} from 'react-redux';
import CountDown from 'react-native-countdown-component';
// import { API_MEDIA, API_URL } from 'src/utils/ApiConstants'
import ApiConstants from 'src/utils/ApiConstants';
import {useNavigation} from '@react-navigation/core';

const StoryLayout = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      console.log('Display');
      navigation.goBack();
    }, 1000);
  });
  return (
    <View style={style.maincontainer}>
      <Image
        source={{
          uri: 'https://i.pinimg.com/originals/07/2f/fd/072ffddbcb037a91cc782cf3b6d8ad0f.jpg',
          //   uri: 'https://www.rmp-streaming.com/media/big-buck-bunny-360p.mp4',
        }} // Can be a URL or a local file.
        style={style.backgroundVideo}
        resizeMode="cover"
        // onLoad={handleLoad}
        // onProgress={handleProgress}
        // onEnd={handleEnd}
      />

      <View style={style.adsCont}>
        <View style={style.adslogo}>
          <Image
            source={{
              uri: 'https://i.pinimg.com/originals/07/2f/fd/072ffddbcb037a91cc782cf3b6d8ad0f.jpg',
            }}
            style={style.adslogoImg}
          />
        </View>
        <View style={style.adsTxt}>
          <Text style={style.adstitleText}>asa</Text>
        </View>
        <View style={style.checkImg}>
          <Image source={Verified} color={'white'} size={20} />
        </View>
      </View>
    </View>
  );
};
export default StoryLayout;
