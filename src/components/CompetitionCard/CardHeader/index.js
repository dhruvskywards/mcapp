import React from 'react';
import {Text, View, Image} from 'react-native';
import style from './style';
import Verified from '../../../assets/image/Verified.png';
import ApiConstants from 'src/utils/ApiConstants';
import dummy from 'src/assets/image/dummyuser.png';

const CardHeader = ({data}) => {
  return (
    <View style={style.maincontainer}>
      <View style={style.profileInfo}>
        <Image
          style={style.imageview}
          source={
            data.profilepic === null
              ? dummy
              : {
                  uri: `${ApiConstants.API_MEDIA}${encodeURIComponent(
                    data.profilepic,
                  )}`,
                }
          }
        />
        <Text style={style.titleText}>{data.username}</Text>
        <Image source={Verified} />
      </View>
      <View />
    </View>
  );
};

export default CardHeader;
