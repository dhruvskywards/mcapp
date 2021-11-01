import React, { useEffect, useRef, useState } from "react";
import {View, Text, ScrollView,Image} from 'react-native';
import style from './style';
import instaLogo from '../../assets/image/instaLogo.png'
import SocialLinks from '../SocialLinks'
const UserProfileLink = () => {
  return (
    <ScrollView contentContainerStyle={style.scrollViewContainer}>
      <SocialLinks />
    </ScrollView>
  );
};
export default UserProfileLink;
