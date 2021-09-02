import React from 'react';
import {View, Image, Text, Pressable} from 'react-native';

import styles from './style';

const ModelCompomemt = ({
  style,
  tringlestyle,
  imageurl,
  TextContains,
  onPress,
}) => {
  return (
    <View style={[styles.mainContainer, style]}>
      <View style={[styles.triangle, tringlestyle]} />
      <View style={styles.innerContainer}>
        <View style={styles.iconView}>
          <Image source={imageurl} />
        </View>
        <Text numberOfLines={2} style={styles.details}>
          {TextContains}
        </Text>
      </View>
      <Pressable onPress={onPress} style={styles.button}>
        <Text style={styles.title}>Next</Text>
      </Pressable>
    </View>
  );
};

export default ModelCompomemt;
