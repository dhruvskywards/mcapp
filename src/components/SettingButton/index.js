import React from 'react';
import {Text, Pressable} from 'react-native';
import styles from './style';
import {useTheme} from '@react-navigation/native';

const SettingButton = ({title, onPress, customStyle}) => {
  const CustomTheme = useTheme();
  return (
    <Pressable
      style={[
        styles.buttonContainer,
        customStyle,
        {backgroundColor: CustomTheme.colors.backgrounds},
      ]}
      onPress={onPress}>
      <Text
        style={[styles.buttonTitle, {color: CustomTheme.colors.text}]}>
        {title}
      </Text>
    </Pressable>
  );
};

export default SettingButton;
