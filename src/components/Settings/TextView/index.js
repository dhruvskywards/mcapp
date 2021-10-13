import React from 'react';
import {FlatList, Text, View,Image,Pressable} from 'react-native';
import MIcon from 'react-native-vector-icons/SimpleLineIcons'

import {useTheme} from '@react-navigation/native';
import styles from './style';
import theme from '../../../utils/theme';

const TextView = ({title, onPress, customStyle,rightText=false,subTitle=''}) => {
  const CustomTheme = useTheme();
  return (
    <Pressable
      style={[
        styles.flexRow,
        customStyle,
      
      ]}
      onPress={onPress}>
      {/* <Text
         style={[styles.textContent]}>
          {title}
      </Text>
      <MIcon name="arrow-right"  color={theme.BLACK} size={13}  /> */}
            
        {
          rightText ===true ? (
          <View style={styles.viewTextRow}>
            <Text
              style={[styles.textContent]}>
              {title}
            </Text>
            <Text style={[styles.textSubContent]}>
                {subTitle}
              </Text>
              <MIcon name="arrow-right" style={styles.iconStyle}  color={theme.BLACK} size={14}  />
          </View> 
          ):(
            <View style={styles.viewTextRow}>
              <Text
                style={[styles.textContent]}>
                {title}
              </Text>
              <MIcon name="arrow-right"  color={theme.BLACK} size={14}  />
            </View> 
          )
        } 
       
  </Pressable>
  );
};

export default TextView;
