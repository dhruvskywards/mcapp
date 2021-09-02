import React from 'react';
import {View, Text, Pressable} from 'react-native';
import styles from './style';

const TwoButton = ({title, onPressOne, onPressTwo, titleTwo}) => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.buttonContainer} onPress={onPressOne}>
        <Text style={styles.buttonTitle}>{title}</Text>
      </Pressable>
      <Pressable style={styles.buttonContainer} onPress={onPressTwo}>
        <Text style={styles.buttonTitle}>{titleTwo}</Text>
      </Pressable>
    </View>
  );
};

export default TwoButton;
