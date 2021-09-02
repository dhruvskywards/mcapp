import React, {useEffect, useState} from 'react';
import {View, ScrollView, SafeAreaView} from 'react-native';
import style from './style';
import {useTheme} from '@react-navigation/native';
import Header from '../../../components/Header/Header';
import SubLobbyTopBar from '../../../components/SubLobbyTopBar';

const CompetitionSubLobby = ({
  route,
  navigation,
  room,
  type,
  item,
  competitionDetail,
}) => {
  const CustomTheme = useTheme();
  const [tncAccept] = useState(false);
  return (
    <SafeAreaView
      style={[
        style.SafeAreaViewContainer,
        {backgroundColor: CustomTheme.colors.card},
      ]}>
      <ScrollView contentContainerStyle={style.scrollViewContainer}>
        <Header
          color={{backgroundColor: CustomTheme.colors.card}}
          title={competitionDetail.name}
          onPress={() => navigation.goBack()}
        />
        <View
          style={[
            style.maincontainer,
            {backgroundColor: CustomTheme.colors.card},
          ]}>
          <SubLobbyTopBar
            room={room}
            type={type}
            item={item}
            competitionDetail={item}
          />
          {tncAccept ? <></> : <View style={style.reddot} />}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default CompetitionSubLobby;
