import React from 'react';
import {Text, Pressable} from 'react-native';
import styles from './style';
import {useTheme} from '@react-navigation/native';

const FooterButton = ({title, onPress}) => {
  const CustomTheme = useTheme();
  return (
    <Pressable
      style={[
        styles.buttonContainer,
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

export default FooterButton;
