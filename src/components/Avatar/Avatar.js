import React from 'react';
import {Image} from 'react-native';
import faker from 'faker';
const Avatar = ({size = 25, url = faker.image.avatar(), style}) => {
  return (
    <Image
      style={[
        {
          height: size,
          width: size,
          borderRadius: size / 2,
        },
        style,
      ]}
      source={{
        uri: url,
      }}
      resizeMode={'cover'}
    />
  );
};
export default Avatar;
