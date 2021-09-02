import React from 'react';
import {Text, Pressable} from 'react-native';
import styles from './style';
import {useTheme} from '@react-navigation/native';

const Button = ({title, onPress, customStyle}) => {
  const CustomTheme = useTheme();
  return (
    <Pressable
      style={[
        styles.buttonContainer,
        customStyle,
        {backgroundColor: CustomTheme.colors.text},
      ]}
      onPress={onPress}>
      <Text
        style={[styles.buttonTitle, {color: CustomTheme.colors.background}]}>
        {title}
      </Text>
    </Pressable>
  );
};

export default Button;
