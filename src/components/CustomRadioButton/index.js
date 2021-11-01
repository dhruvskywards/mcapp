import React from 'react';
import {Text, View, Pressable} from 'react-native';
import styles from './style';
import {useTheme} from '@react-navigation/native';

const CustomRadioButton = ({Detials, onPress}) => {
  const CustomTheme = useTheme();
  return (
    <View style={styles.MainContainer}>
      <Pressable onPress={onPress} style={styles.outerview}>
        <View style={styles.innerView} />
      </Pressable>
      <Text style={styles.nameText}>{Detials}</Text>
    </View>
  );
};

export default CustomRadioButton;
