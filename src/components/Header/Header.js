import React from 'react';
import {View, Pressable, Text} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Colors from '../../utils/theme';
import styles from './style';
import {useTheme} from '@react-navigation/native';

const Header = ({title, onPress, rightView, color}) => {
  const CustomTheme = useTheme();
  return (
    <View style={[styles.headerContainer, color]}>
      <Pressable
        style={styles.alignSelf}
        onPress={() => {
          onPress();
        }}>
        {onPress ? (
          <Pressable
            onPress={() => {
              onPress();
            }}>
            <MaterialIcons
              name="arrow-back"
              size={23}
              color={Colors.GRAY_VARIANT_1}
            />
          </Pressable>
        ) : null}
      </Pressable>
      <View>
        <Text style={[styles.title, {color: CustomTheme.colors.text}]}>
          {title}
        </Text>
      </View>
      <View>{rightView ? rightView() : null}</View>
    </View>
  );
};

export default Header;
