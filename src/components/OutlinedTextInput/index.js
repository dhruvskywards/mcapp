import React from 'react';
import {TextInput, View} from 'react-native';
import theme from '../../utils/theme';
import styles from './style';

const OutlinedTextInput = props => {
  const {
    containerProps,
    rightView = null,
    leftView = null,
    placeholder,
  } = props;
  return (
    <View style={styles.container} {...containerProps}>
      {leftView ? leftView() : null}
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={theme.LABEL_COLOR}
        autoCapitalize={'none'}
        {...props}
        style={styles.text}
      />
      {rightView ? rightView() : null}
    </View>
  );
};

export default OutlinedTextInput;
