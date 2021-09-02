import React from 'react';
import {Text, View, Image} from 'react-native';
import styles from './style';
import User from '../../assets/image/User.png';
import {useTheme} from '@react-navigation/native';

const TeamProfile = () => {
  const CustomTheme = useTheme();
  return (
    <View style={styles.MainContainer}>
      <View style={styles.ImageContainer}>
        <Image source={User} style={styles.imageView} />
        <Image source={User} style={styles.secondimage} />
        <Image source={User} style={styles.ThirdImage} />
      </View>
      <View style={styles.DetailsView}>
        <Text style={[styles.nameText, {color: CustomTheme.colors.text}]}>
          BLACK TEAM
        </Text>
      </View>
    </View>
  );
};

export default TeamProfile;
