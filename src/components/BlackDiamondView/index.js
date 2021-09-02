import React from 'react';
import {Text, View, Image} from 'react-native';
import styles from './style';
import BlackDiamond from '../../assets/image/BlackDiamond.png';

const BlackDiamondView = ({style,diamond}) => {
  return (
    <View style={[styles.MainContainer, style]}>
      <Image source={BlackDiamond} />
      <Text style={styles.typeText}>{diamond}</Text>
    </View>
  );
};

export default BlackDiamondView;
