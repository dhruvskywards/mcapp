import React from 'react';
import {Text, View, Image} from 'react-native';
import styles from './style';
import {useTheme} from '@react-navigation/native';

const UserProfile = ({style, HorizontalView, url, name, type}) => {
  const CustomTheme = useTheme();
  return (
    <View style={[styles.MainContainer, style]}>
      <Image source={url} style={styles.imageView} />
      <View style={[styles.DetailsView, HorizontalView]}>
        <Text style={[styles.nameText, {color: CustomTheme.colors.text}]}>
          {name}
        </Text>
        <Text style={styles.typeText}>{type}</Text>
      </View>
    </View>
  );
};

export default UserProfile;
