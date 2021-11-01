import React, {useEffect, useState} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import theme from 'src/utils/theme';
import style from './style';
import Button from '../../components/Button';
import {useNavigation, useTheme} from '@react-navigation/native';
import {scale} from 'react-native-size-matters';
import Feather from 'react-native-vector-icons/Feather';
import Modal from 'react-native-modal';
import ApiConstants from 'src/utils/ApiConstants';
import Verified from '../../assets/image/Verified.png';
import Profile from '../../assets/image/Profile.png';
import Prize from '../../assets/image/Prize.png';

const LivestreamCard = ({competitionData}) => {
  const CustomTheme = useTheme();
  const navigation = useNavigation();
  const {tags = [competitionData.genre.name]} = competitionData;
  const [ModelVisible, setModelVisisble] = useState(false);
  const JoinCompetition = (typevar) => {
    setModelVisisble(false);
    navigation.navigate('JoinCompetition', { type: typevar, item: competitionData });
  };

  return (
    <View
      style={[
        style.container,
        {backgroundColor: CustomTheme.colors.background},
      ]}>
      <Image
        style={style.image}
        source={{
          uri: `${ApiConstants.API_MEDIA}${encodeURIComponent(
            competitionData?.thumbnailUrl,
          )}`,
        }}
      />
      <View
        style={[
          style.bottomView,
          {backgroundColor: CustomTheme.colors.background},
        ]}>
        <View style={style.headercontainer}>
          <View style={style.profileInfo}>
            <Image
              style={style.imageview}
              source={{
                uri: `${ApiConstants.API_MEDIA}${encodeURIComponent(
                  competitionData?.channel?.profilepic,
                )}`,
              }}
            />
            <Text style={[style.titleText, {color: CustomTheme.colors.text}]}>
              {competitionData?.channel?.name}
            </Text>
            <Image
              source={Verified}
              style={[
                style.verifiedImage,
                {tintColor: CustomTheme.colors.text},
              ]}
            />
          </View>
          <Feather
            name="more-vertical"
            size={scale(20)}
            style={style.moreIcon}
            color={theme.GRAY_VARIANT_4}
          />
        </View>
        <View style={style.mapContainer}>
          {tags.map((item, index) => (
            <View
              key={index}
              style={[
                style.mapView,
                {backgroundColor: CustomTheme.colors.background},
              ]}>
              <Text style={style.mapText}>{item}</Text>
            </View>
          ))}
        </View>
        <Text style={[style.titleTextBlack, {color: CustomTheme.colors.text}]}>
          {competitionData.name}
        </Text>
        <Text style={[style.SubtitleText, {color: CustomTheme.colors.text}]}>
          ${competitionData.prizeYield.prizePool} Total in prizes
        </Text>
        <View style={style.FooterView}>
          <View style={style.PrizeView}>
            <View style={style.innerComp}>
              <Image
                source={Profile}
                style={{tintColor: CustomTheme.colors.text}}
              />
              <Text style={[style.lebel, {color: CustomTheme.colors.text}]}>
                543854
              </Text>
            </View>
            <View style={style.innerComp}>
              <Image
                source={Prize}
                style={{tintColor: CustomTheme.colors.text}}
              />
              <Text style={[style.lebel, {color: CustomTheme.colors.text}]}>
                95
              </Text>
            </View>
          </View>
          <Button
            customStyle={style.padding}
            title={'Join Competition'}
            onPress={() => setModelVisisble(true)}
            //onPress={() => navigation.navigate('ProfileScreen', { type: 'comp', item: competitionData })}
          />
        </View>
      </View>
      <Modal
        style={style.ModalStyle}
        animationIn="fadeIn"
        backdropColor={theme.BLACK}
        backdropOpacity={0.7}
        isVisible={ModelVisible}
        onRequestClose={() => {
          setModelVisisble(false);
        }}>
        <TouchableOpacity
          style={[
            style.ModelInnerStyle,
            {backgroundColor: CustomTheme.colors.background},
          ]}
          onPress={() => {
            setModelVisisble(false);
          }}>
          <Text style={[style.ModalTitle, {color: CustomTheme.colors.text}]}>
            JOIN THIS COMPETITION
          </Text>
          <Text
            style={[style.ModalContainText, {color: CustomTheme.colors.text}]}>
            Engage as a part of the audience & earn black diamonds. Rate both
            contestants honestly & increase your chances of winning from the
            viewer prize pool.
          </Text>

          <Text style={[style.Or, {color: CustomTheme.colors.text}]}>OR</Text>

          <Text
            style={[style.ModalContainText, {color: CustomTheme.colors.text}]}>
            Hop in the contestant seat & showcase your talent, earn black
            diamonds. Winner takes all from the contestant prize pool.
          </Text>
          <View style={style.ModalBtnView}>
            <Button
              customStyle={style.padding}
              title={'Join as Audience'}
              onPress={() => JoinCompetition('aud')}
            />
            <Button
              customStyle={style.padding}
              title={'Join as Contestant' + ' '+ competitionData?.participantCount + '/' +  competitionData?.competitionOption?.maxParticipants}
              // onPress={() => navigation.navigate('CompetitionSubLobby')}
              onPress={() => JoinCompetition('comp')}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

export default LivestreamCard;
