import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import style from './style';
import Header from '../Header/Header';
import add_more from '../../assets/image/add_more.png';
import ModeratorProfile from '../ChatSettings/ModeratorProfile';
import {useNavigation, useTheme} from '@react-navigation/native';
import Slider from 'react-native-custom-slider';
import MySwitch from '../MySwitch';
import download from '../../assets/image/download_file.png';
const ChatSetting = () => {
  const CustomTheme = useTheme();
  const navigation = useNavigation();
  const [ison, setIson] = useState(false);
  const rightView = () => {
    return (
      <TouchableOpacity
      // onPress={()=>{ navigation.navigate('ChatSetting')}}
      >
        <Image
          source={download}
          style={[style.downloadImg, {tintColor: CustomTheme.colors.text}]}
        />
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <View style={{backgroundColor: CustomTheme.colors.card}}>
        <Header
          // color={{backgroundColor: CustomTheme.colors.card}}
          title={'Chat Settings'}
          onPress={() => navigation.goBack()}
          rightView={() => rightView()}
        />
      </View>
      <ScrollView>
        <View
          style={[
            style.maincontainer,
            {backgroundColor: CustomTheme.colors.card},
          ]}>
          <View
            style={[
              style.container,
              {backgroundColor: CustomTheme.colors.notification},
            ]}>
            <Text style={[style.titleText, {color: CustomTheme.colors.text}]}>
              Chat Settings
            </Text>
            <View style={style.closeChatCont}>
              <Text
                style={[style.closeChtTxt, {color: CustomTheme.colors.text}]}>
                Close chat
              </Text>
              <MySwitch value={false} onValueChange={val => console.log(val)} />
            </View>
            <Text
              style={[
                style.closeChtTxt,
                {color: CustomTheme.colors.text, marginTop: 20},
              ]}>
              Audience raise hand frequency
            </Text>
            <View style={style.sliderDurationCont}>
              <Text
                style={[
                  style.sliderDurationTxt,
                  {color: CustomTheme.colors.text},
                ]}>
                OFF
              </Text>
              <Text
                style={[
                  style.sliderDurationTxt,
                  {color: CustomTheme.colors.text},
                ]}>
                5s
              </Text>
              <Text
                style={[
                  style.sliderDurationTxt,
                  {color: CustomTheme.colors.text},
                ]}>
                10s
              </Text>
              <Text
                style={[
                  style.sliderDurationTxt,
                  {color: CustomTheme.colors.text},
                ]}>
                20s
              </Text>
              <Text
                style={[
                  style.sliderDurationTxt,
                  {color: CustomTheme.colors.text},
                ]}>
                30s
              </Text>
              <Text
                style={[
                  style.sliderDurationTxt,
                  {color: CustomTheme.colors.text},
                ]}>
                40s
              </Text>
            </View>
            <Slider
              // value={value}
              minimumValue={0}
              maximumValue={50}
              step={10}
              //onValueChange={(value) => setValue(value)}
              thumbStyle={{justifyContent: 'center', alignItems: 'center'}}
              trackStyle={style.sliderTrack}
              customThumb={
                <View
                  style={[
                    style.sliderThumb,
                    {backgroundColor: CustomTheme.colors.text},
                  ]}
                />
              }
            />
            <Text
              style={[
                style.closeChtTxt,
                {color: CustomTheme.colors.text, marginTop: 15},
              ]}>
              Users will be restricted to raising their hand per this interval
              unless they are speakers or moderators.
            </Text>
          </View>
          <View
            style={[
              style.prmsnCont,
              {backgroundColor: CustomTheme.colors.card},
            ]}>
            <Text
              style={[
                style.titleText,
                {color: CustomTheme.colors.text, marginTop: 30},
              ]}>
              Permissions
            </Text>
            <View style={style.closeChatCont}>
              <Text
                style={[style.closeChtTxt, {color: CustomTheme.colors.text}]}>
                Allow moderators to mute other users
              </Text>
              <MySwitch />
            </View>
            <View style={style.closeChatCont}>
              <Text
                style={[style.closeChtTxt, {color: CustomTheme.colors.text}]}>
                Allow moderators to boot other users from chat
              </Text>
              <MySwitch />
            </View>
            <View style={style.closeChatCont}>
              <Text
                style={[style.closeChtTxt, {color: CustomTheme.colors.text}]}>
                Allow moderators to assign speakers
              </Text>
              <MySwitch />
            </View>
          </View>
          <View
            style={[
              style.chatModratorCont,
              {backgroundColor: CustomTheme.colors.notification},
            ]}>
            <View style={style.closeChatCont}>
              <Text
                style={[
                  style.titleText,
                  [style.closeChtTxt, {color: CustomTheme.colors.text}],
                ]}>
                Competition Chat Moderators
              </Text>
              <Pressable style={style.addImgCont}>
                <Image source={add_more} style={style.addImg} />
              </Pressable>
            </View>
            <View>
              <ModeratorProfile
                url={{}}
                name={'TheWeek'}
                type={'Musician'}
                style={{}}
              />
            </View>
          </View>
          <View
            style={[
              style.chatSpeakersCont,
              {backgroundColor: CustomTheme.colors.card},
            ]}>
            <View style={style.closeChatCont}>
              <Text style={[style.titleText, {color: CustomTheme.colors.text}]}>
                Speakers
              </Text>
              <Pressable style={style.addImgCont}>
                <Image source={add_more} style={style.addImg} />
              </Pressable>
            </View>
            <View>
              <ModeratorProfile
                url={{}}
                name={'TheWeek'}
                type={'Musician'}
                style={{}}
              />
            </View>
          </View>
        </View>
        <View
          style={[
            style.judgeCont,
            {backgroundColor: CustomTheme.colors.notification},
          ]}>
          <Text
            style={[
              style.titleText,
              [style.closeChtTxt, {color: CustomTheme.colors.text}],
            ]}>
            Jadges
          </Text>
          <Pressable style={style.addImgCont}>
            <Image source={add_more} style={style.addImg} />
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
};
export default ChatSetting;
