import React from 'react';
import {View, ImageBackground} from 'react-native';
import CardFooter from './CardFooter';
import CardHeader from './CardHeader';
import PlaySound from './PlaySound';
import style from './style';
import Swiper from 'react-native-swiper';
import ApiConstants from 'src/utils/ApiConstants';

const CompetitionCard = ({postData, onSendPress}) => {
  return (
    <Swiper
      style={style.maincontainer}
      loop={false}
      paginationStyle={style.pagination}
      activeDot={<View style={style.activeDot} />}>
      {[postData?.contentUrl].map(item => {
        return (
          <View key={item}>
            <ImageBackground
              style={style.maincontainer}
              source={{
                uri: `${ApiConstants.API_MEDIA}${encodeURIComponent(
                  postData?.contentUrl,
                )}`,
              }}
              imageStyle={style.imageview}>
              <CardHeader data={postData?.user} />
              <PlaySound data={postData} />
              <CardFooter onSendPress={onSendPress} />
            </ImageBackground>
          </View>
        );
      })}
    </Swiper>
  );
};

export default CompetitionCard;
