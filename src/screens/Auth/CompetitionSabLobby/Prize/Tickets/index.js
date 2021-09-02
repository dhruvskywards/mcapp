import React from 'react';
import {View, Image, ScrollView, Text} from 'react-native';
import style from './style';
import MerchandiseBanner from '../../../../../assets/image/MerchandiseBanner.png';
import FooterButton from '../../../../../components/FooterButton/index';
import Header from '../../../../../components/Header/Header';
import {useTheme} from '@react-navigation/native';

const Tickets = ({navigation}) => {
  const CustomTheme = useTheme();

  return (
    <View
      style={[
        style.maincontainer,
        {backgroundColor: CustomTheme.colors.background},
      ]}>
      <Header
        onPress={() => navigation.goBack()}
        color={{backgroundColor: CustomTheme.colors.background}}
        title="Viewing 1st place prize"
      />
      <ScrollView>
        <View style={style.container}>
          <Image source={MerchandiseBanner} style={style.imageStyle} />
          <View
            style={[
              style.insideContainer,
              {backgroundColor: CustomTheme.colors.background},
            ]}>
            <Text style={[style.titleText, {color: CustomTheme.colors.text}]}>
              EVENT TYPE
            </Text>
            <Text
              style={[style.SubtitleText, {color: CustomTheme.colors.text}]}>
              NBA Tickets
            </Text>
            <Text style={[style.titleText, {color: CustomTheme.colors.text}]}>
              TICKET TYPE
            </Text>
            <Text
              style={[style.SubtitleText, {color: CustomTheme.colors.text}]}>
              Floor Seats
            </Text>
            <Text style={[style.titleText, {color: CustomTheme.colors.text}]}>
              EVENT TICKET FULL PRICE VALUE
            </Text>
            <Text
              style={[style.SubtitleText, {color: CustomTheme.colors.text}]}>
              $2500
            </Text>
            <Text style={[style.titleText, {color: CustomTheme.colors.text}]}>
              EVENT DISCOUNT PRICE
            </Text>
            <Text
              style={[style.SubtitleText, {color: CustomTheme.colors.text}]}>
              FREE
            </Text>
            <Text style={[style.titleText, {color: CustomTheme.colors.text}]}>
              EVENT DESCRIPTION
            </Text>
            <Text
              style={[style.ItemtitleText, {color: CustomTheme.colors.text}]}>
              LAKERS AT CLIPPERS
            </Text>
            <Text
              style={[style.SubtitleText, {color: CustomTheme.colors.text}]}>
              Every October, basketball fans across America get excited for
              another fun-filled and competitive season of the NBA, and with 30
              professional teams playing at various venues around the country,
              one is never very far from the next big game. The regular season
              runs through mid-April, followed by a two-month playoff season.
              This means that there are more than ample opportunities to secure
              great tickets to the game of choice.
            </Text>
            <Text style={[style.titleText, {color: CustomTheme.colors.text}]}>
              IS THIS A DIGITAL EVENT?
            </Text>
            <Text
              style={[style.SubtitleText, {color: CustomTheme.colors.text}]}>
              No
            </Text>
            <Text style={[style.titleText, {color: CustomTheme.colors.text}]}>
              LOCATION
            </Text>
            <Text
              style={[style.Locationstyle, {color: CustomTheme.colors.text}]}>
              1111 S Figueroa St, Los Angeles, CA 90015
            </Text>
            <Text style={[style.titleText, {color: CustomTheme.colors.text}]}>
              EVENT START DATE
            </Text>
            <Text
              style={[style.SubtitleText, {color: CustomTheme.colors.text}]}>
              Friday July 11th, 2021 6:00pm UTC/GMT -8 hours (Pacific Standard
              Time)
            </Text>
            <Text style={[style.titleText, {color: CustomTheme.colors.text}]}>
              EVENT END DATE
            </Text>
            <Text
              style={[style.SubtitleText, {color: CustomTheme.colors.text}]}>
              Friday July 11th, 2021 7:30pm UTC/GMT -8 hours (Pacific Standard
              Time)
            </Text>
          </View>
        </View>
      </ScrollView>
      <View style={style.FooterButton}>
        <FooterButton title={'Shop Now'} />
      </View>
    </View>
  );
};
export default Tickets;
