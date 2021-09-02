import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import style from './style';
import {PrizeDetails} from '../../../../constants/mock-data';
import PrizeContainer from '../../../../components/PrizeContainer';
import {useTheme} from '@react-navigation/native';

const Prize = () => {
  const CustomTheme = useTheme();
  return (
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
            {PrizeDetails[0].title}
          </Text>
          <Text style={[style.subtitleText, {color: CustomTheme.colors.text}]}>
            {PrizeDetails[0].subTitle}
          </Text>
        </View>
        <View
          style={[
            style.offPrizeContainer,
            {backgroundColor: CustomTheme.colors.card},
          ]}>
          <Text style={[style.PrizeTitle, {color: CustomTheme.colors.text}]}>
            1st place
          </Text>
          <PrizeContainer PrizeType={'Cash'} />
        </View>
        <View
          style={[
            style.evenPrizeContainer,
            {backgroundColor: CustomTheme.colors.notification},
          ]}>
          <Text style={[style.PrizeTitle, {color: CustomTheme.colors.text}]}>
            2nd place
          </Text>
          <PrizeContainer PrizeType={'Remixpoint'} />
        </View>
        <View
          style={[
            style.AudiancePrizecontainer,
            {backgroundColor: CustomTheme.colors.card},
          ]}>
          <Text style={[style.titleText, {color: CustomTheme.colors.text}]}>
            {PrizeDetails[1].title}
          </Text>
          <Text style={[style.subtitleText, {color: CustomTheme.colors.text}]}>
            {PrizeDetails[1].subTitle}
          </Text>
        </View>
        <View
          style={[
            style.evenPrizeContainer,
            {backgroundColor: CustomTheme.colors.notification},
          ]}>
          <Text style={[style.PrizeTitle, {color: CustomTheme.colors.text}]}>
            1st place
          </Text>
          <PrizeContainer PrizeType={'Cash&Remixpoint'} />
        </View>
        <View
          style={[
            style.offPrizeContainer,
            {backgroundColor: CustomTheme.colors.card},
          ]}>
          <Text style={[style.PrizeTitle, {color: CustomTheme.colors.text}]}>
            2nd place
          </Text>
          <PrizeContainer PrizeType={'Merchandise'} />
        </View>
        <View
          style={[
            style.evenPrizeContainer,
            {backgroundColor: CustomTheme.colors.notification},
          ]}>
          <Text style={[style.PrizeTitle, {color: CustomTheme.colors.text}]}>
            3rd place
          </Text>
          <PrizeContainer PrizeType={'Tickets'} />
        </View>
        <View
          style={[
            style.offPrizeContainer,
            {backgroundColor: CustomTheme.colors.card},
          ]}>
          <Text style={[style.PrizeTitle, {color: CustomTheme.colors.text}]}>
            4th place
          </Text>
          <PrizeContainer PrizeType={'Cash'} />
        </View>
      </View>
    </ScrollView>
  );
};
export default Prize;
