import React from 'react';
import {View, Pressable,Text} from 'react-native';
import {scale, ScaledSheet} from 'react-native-size-matters';
import theme from '../../utils/theme';
import style from './style';
const TextWithBulletPoints = ({ roundSize = 5, children }) => {
  
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <View
        style={{
          height: roundSize,
          width: roundSize,
          borderRadius: roundSize / 2,
          backgroundColor: theme.BLACK,
        }}
      ></View>
      <Text style={style.texts}>{children}</Text>
    </View>
  );
};

export default TextWithBulletPoints;
