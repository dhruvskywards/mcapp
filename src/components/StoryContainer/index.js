import React from 'react';
import {Text, View, Image} from 'react-native';
import style from './style';
import {useTheme} from '@react-navigation/native';
import API_MEDIA from '../../utils/ApiConstants';

const StoryContainer = ({data, color}) => {
  const CustomTheme = useTheme();
  return (
    <View style={[style.maincontainer]}>
      <View style={style.imageContainer}>
        <Image
          resizeMode={'stretch'}
          source={{
            uri: `${API_MEDIA}${encodeURIComponent(data.profilepic)}`,
          }}
          style={style.imageContainer}
        />
      </View>
      <Text
        numberOfLines={1}
        style={[style.titleText, {color: CustomTheme.colors.text}]}>
        {data.username}
      </Text>
    </View>
  );
};

export default StoryContainer;
