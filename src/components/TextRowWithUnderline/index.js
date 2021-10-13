import React from 'react';
import {View, Pressable,Text} from 'react-native';
import faker from 'faker';
import TitleAndSubTitleRow from '../TitleAndSubTitleRow';
import Avatar from '../Avatar/Avatar';
import theme from '../../utils/theme';
import styles from './style';

const TextRowWithUnderline = ({
  leftText, rightText, containerStyle, rightTextStyle
}) => {
 
  return (
    <View
      style={[styles.mainView,  containerStyle]}>
      <Text style={styles.texts}>{leftText}</Text>
      <Text style={[styles.texts, rightTextStyle]}>{rightText}</Text>
    </View>
  );
};

export default TextRowWithUnderline;
