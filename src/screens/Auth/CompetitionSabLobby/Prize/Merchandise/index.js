import React from 'react';
import {View, Image, ScrollView, Text} from 'react-native';
import style from './style';
import Swiper from 'react-native-swiper';
import MerchandiseBanner from '../../../../../assets/image/MerchandiseBanner.png';
import FooterButton from '../../../../../components/FooterButton/index';
import Header from '../../../../../components/Header/Header';
import {useTheme} from '@react-navigation/native';

const Merchandise = ({navigation}) => {
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
          <View
            style={[
              style.insideContainer,
              {backgroundColor: CustomTheme.colors.background},
            ]}>
            <Swiper
              style={style.swiperStyle}
              loop={false}
              paginationStyle={style.pagination}
              activeDot={
                <View
                  style={[
                    style.activeDot,
                    {backgroundColor: CustomTheme.colors.text},
                  ]}
                />
              }
              dot={<View style={style.Dot} />}>
              {[1, 2, 3, 4].map(item => {
                return (
                  <View>
                    <Image
                      source={MerchandiseBanner}
                      style={style.imageStyle}
                    />
                  </View>
                );
              })}
            </Swiper>
            <Text style={[style.titleText, {color: CustomTheme.colors.text}]}>
              ROLEX
            </Text>
            <Text
              style={[style.ItemtitleText, {color: CustomTheme.colors.text}]}>
              ROLEX DAY-DATE
            </Text>
            <Text style={[style.titleText, {color: CustomTheme.colors.text}]}>
              MERCHANDISE TYPE
            </Text>
            <Text
              style={[style.SubtitleText, {color: CustomTheme.colors.text}]}>
              Watch
            </Text>
            <Text style={[style.titleText, {color: CustomTheme.colors.text}]}>
              MATERIAL TYPE
            </Text>
            <Text
              style={[style.SubtitleText, {color: CustomTheme.colors.text}]}>
              18 Karat Solid Gold
            </Text>
            <Text style={[style.titleText, {color: CustomTheme.colors.text}]}>
              COLOR
            </Text>
            <Text
              style={[style.SubtitleText, {color: CustomTheme.colors.text}]}>
              Gold
            </Text>
            <Text style={[style.titleText, {color: CustomTheme.colors.text}]}>
              RETAIL PRICE
            </Text>
            <Text
              style={[style.SubtitleText, {color: CustomTheme.colors.text}]}>
              $32,950
            </Text>
            <Text style={[style.titleText, {color: CustomTheme.colors.text}]}>
              RETAIL DISCOUNT PRICE
            </Text>
            <Text
              style={[style.SubtitleText, {color: CustomTheme.colors.text}]}>
              FREE
            </Text>
            <Text style={[style.titleText, {color: CustomTheme.colors.text}]}>
              DESCRIPTION
            </Text>
            <Text style={[style.DetailsText, {color: CustomTheme.colors.text}]}>
              Rose gold-tone 18kt everose gold case with a rose gold-tone 18kt
              everose gold rolex president bracelet. Fixed fluted rose gold-tone
              18kt everose gold bezel. Chocolate dial with rose gold-tone hands
              and Roman numeral and index hour markers. Minute markers around
              the outer rim. Dial Type: Analog. Date display at the 3 o’clock
              position. day display at 12 o’clock. Rolex Calibre 3255 automatic
              movement with a 70-hour power reserve. Scratch resistant sapphire
              crystal. Screw down crown.
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
export default Merchandise;
