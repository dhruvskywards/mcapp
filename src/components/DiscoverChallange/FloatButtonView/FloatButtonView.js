import React from 'react';
import {View, Text, Image,TextInput} from 'react-native';
import styles from './style';
import theme from '../../../utils/theme';

const FloatButtonView = (props) => {
  const {
    containerProps,
    textInputProps,
   
    textStyle,
    containerStyle,
    rightView = null,
    leftView = null,
  } = props;
 
  return (
    <View
      style={[
        styles.mainview,
        containerStyle,
      ]}
      {...containerProps}
    >
      {leftView ? leftView() : null}

      <TextInput
        placeholderTextColor={theme.BORDER_SILVER}
        autoCapitalize={'none'}
        // selectionColor={colors.textPrimary}
        {...props}
        style={[
         
          {
            fontSize: 13,
            color: 'black',
            paddingHorizontal: 10,
            flex: 1,
            paddingVertical: 10,
          },
          textStyle,
        ]}
      />
      {rightView ? rightView() : null}
    </View>
  );
};

export default FloatButtonView;
