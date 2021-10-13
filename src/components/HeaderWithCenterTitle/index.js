import React from 'react';
import {View, Pressable, Text} from 'react-native';
import MICon from 'react-native-vector-icons/Ionicons'
import Colors from '../../utils/theme';
import styles from './style';
import {useTheme} from '@react-navigation/native';

const HeaderwithCenterTitle = ({title, onPress, rightView, color,textStyle,alighTitle}) => {
  const CustomTheme = useTheme();
  return (
    <View style={[styles.headerContainer, color]}>
      <Pressable
       // style={styles.alignSelf}
        onPress={() => {
          onPress();
        }}>
        <MICon
              name="arrow-back"
              size={23}
              color={Colors.TEXT_COMMON_SILVER}
         />
      </Pressable>
      <View style={[styles.headerTitle,alighTitle]}>
        <Text style={[styles.headerText, textStyle,{color: CustomTheme.colors.text}]} >
          {title}
        </Text>
      </View>
      <View>{rightView ? rightView() : null}</View>
    </View>
  );
};


       
export default HeaderwithCenterTitle;
