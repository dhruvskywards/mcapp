import React from 'react';
import {Text, View, Image} from 'react-native';
import style from './style';
import {useTheme} from '@react-navigation/native';
import API_MEDIA from '../../utils/ApiConstants';

const CompetitionStoryContainer = ({text, url, color}) => {
  const CustomTheme = useTheme();
  return (
    <View style={[style.maincontainer]}>
      <View style={style.imageContainer}>
        <Image
          resizeMode={'stretch'}
          source={url}
          style={style.imageContainer}
        />
      </View>
      <Text
        numberOfLines={1}
        style={[style.titleText, {color: CustomTheme.colors.text}]}>
        {text}
      </Text>
    </View>
  );
};

export default CompetitionStoryContainer;
