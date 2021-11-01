import React, { useEffect, useRef, useState } from "react";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import style from './style';
import instaLogo from '../../assets/image/insta.png'
import fblogo from '../../assets/image/fblogo.png'
import twitchlogo from '../../assets/image/twitchlogo.png'
import youtubelogo from '../../assets/image/youtubelogo.png'
import tiktologo from '../../assets/image/tiktologo.png'
import snaplogo from '../../assets/image/snaplogo.png'
import discorlogo from '../../assets/image/discorlogo.png'
import twitterlogo from '../../assets/image/twitterlogo.png'
import spotifylogo from '../../assets/image/spotifylogo.png'

import link from '../../assets/image/noun_link.png'
const SocialLinks = () => {
  return (
    <ScrollView>
      <View style={style.maincontainer}>
        <TouchableOpacity style={style.socialCont}>
          <View style={{flexDirection:'row',alignItems:'center'}}>
            <Image source={instaLogo} style={style.socialImg} />
            <Text style={style.socialTxt}>Instagram</Text>
          </View>
          <Image source={link} style={style.socialLinkImg} />
        </TouchableOpacity>
        <TouchableOpacity style={style.socialCont}>
          <View style={{flexDirection:'row',alignItems:'center'}}>
            <Image source={fblogo} style={style.socialImg} />
            <Text style={style.socialTxt}>Facebook</Text>
          </View>
          <Image source={link} style={style.socialLinkImg} />
        </TouchableOpacity>
        <TouchableOpacity style={style.socialCont}>
          <View style={{flexDirection:'row',alignItems:'center'}}>
            <Image source={twitterlogo} style={style.socialImg} />
            <Text style={style.socialTxt}>Twitter</Text>
          </View>
          <Image source={link} style={style.socialLinkImg} />
        </TouchableOpacity>
        <TouchableOpacity style={style.socialCont}>
          <View style={{flexDirection:'row',alignItems:'center'}}>
            <Image source={twitchlogo} style={style.socialImg} />
            <Text style={style.socialTxt}>Twitch</Text>
          </View>
          <Image source={link} style={style.socialLinkImg} />
        </TouchableOpacity>
        <TouchableOpacity style={style.socialCont}>
          <View style={{flexDirection:'row',alignItems:'center'}}>
            <Image source={youtubelogo} style={style.socialImg} />
            <Text style={style.socialTxt}>YouTube</Text>
          </View>
          <Image source={link} style={style.socialLinkImg} />
        </TouchableOpacity>
        <TouchableOpacity style={style.socialCont}>
          <View style={{flexDirection:'row',alignItems:'center'}}>
            <Image source={tiktologo} style={style.socialImg} />
            <Text style={style.socialTxt}>TikTok</Text>
          </View>
          <Image source={link} style={style.socialLinkImg} />
        </TouchableOpacity>
        <TouchableOpacity style={style.socialCont}>
          <View style={{flexDirection:'row',alignItems:'center'}}>
            <Image source={snaplogo} style={style.socialImg} />
            <Text style={style.socialTxt}>Snap</Text>
          </View>
          <Image source={link} style={style.socialLinkImg} />
        </TouchableOpacity>
        <TouchableOpacity style={style.socialCont}>
          <View style={{flexDirection:'row',alignItems:'center'}}>
            <Image source={discorlogo} style={style.socialImg} />
            <Text style={style.socialTxt}>Discord</Text>
          </View>
          <Image source={link} style={style.socialLinkImg} />
        </TouchableOpacity>
        <TouchableOpacity style={style.socialCont}>
          <View style={{flexDirection:'row',alignItems:'center'}}>
            <Image source={spotifylogo} style={style.socialImg} />
            <Text style={style.socialTxt}>Discord</Text>
          </View>
          <Image source={link} style={style.socialLinkImg} />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
export default SocialLinks;
