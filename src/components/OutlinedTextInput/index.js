import React from 'react';
import {TextInput, View} from 'react-native';
import theme from '../../utils/theme';
import styles from './style';

const OutlinedTextInput = props => {
  const {containerProps, rightView = null, leftView = null,placeHolderColor=theme.LABEL_COLOR,borderColors=theme.UNDERLINE_COLOR,textAligns='center',textStyle} = props;
  return (
    <View style={[styles.container,{borderColor:{borderColors}, alignItems: textAligns}]} {...containerProps}>
      {leftView ? leftView() : null}
      <TextInput
        placeholderTextColor={placeHolderColor}
        autoCapitalize={'none'}
        {...props}
        style={styles.text}{...textStyle}
      />
      {rightView ? rightView() : null}
    </View>
  );
};

export default OutlinedTextInput;
