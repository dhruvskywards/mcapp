import React from 'react';
import {TextInput} from 'react-native';
import theme from '../../utils/theme';
import styles from './style';
const Textinput = ({
  placeholder,
  customStyle,
  onChangeText,
  value,
  multiline,
  secureTextEntry,
}) => {
  return (
    <TextInput
      style={[styles.textInput, customStyle]}
      placeholder={placeholder}
      placeholderTextColor={theme.LABEL_COLOR}
      onChangeText={onChangeText}
      value={value}
      multiline={multiline}
      secureTextEntry={secureTextEntry}
    />
  );
};

export default Textinput;
