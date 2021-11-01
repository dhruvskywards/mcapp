import React from 'react';
import {View, Pressable, Text} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Colors from '../../utils/theme';
import styles from './style';
import {useTheme} from '@react-navigation/native';
import {scale} from 'react-native-size-matters';

const StoryHeader = ({title, onPress, rightView, viewstyle, color}) => {
  const CustomTheme = useTheme();
  return (
    <View style={[styles.headerContainer, viewstyle]}>
      {onPress ? (
        <Pressable
          style={styles.alignSelf}
          onPress={() => {
            onPress();
          }}>
          <MaterialIcons name="close" size={scale(23)} color={color} />
        </Pressable>
      ) : null}
      <View style={styles.rightview}>{rightView ? rightView() : null}</View>
    </View>
  );
};

export default StoryHeader;
