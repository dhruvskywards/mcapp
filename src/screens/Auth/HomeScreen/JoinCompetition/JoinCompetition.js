import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {View } from "react-native";
import style from "../../PlayScreen/style";
import * as Colyseus from 'colyseus.js';
import {getSessionData} from 'src/utils/asyncStorage'
import sessionKey from 'src/utils/const'
import Details from "src/screens/Auth/CompetitionSabLobby/Details/index";
import Chat from "src/screens/Auth/CompetitionSabLobby/Chat";
import theme from "src/utils/theme";
import CompetitionSubLobby from "src/screens/Auth/CompetitionSabLobby";
let TABS = {
  DETAILS: 'Details',
  TERM_AND_CONDITION: 'Terms & Conditions',
  PRICE: 'Prizes',
  LEADERBOARDS: 'Chat',
};
const joinCompetition = ({item,route}) =>{
  const [room, setRoom] = useState(null);
  useEffect(() => {
    async function getUserData() {
      const user = JSON.parse(await getSessionData(sessionKey.userData));
      // const client = new Colyseus.Client('ws://34.235.198.223:8001');
      const client = new Colyseus.Client('wss://colyseus-test.mcmasterofceremony.com/');
      const competitionDetail = route.params.item;
      const type = route.params.type;

      client.joinOrCreate('competition', {
          competitionId: competitionDetail.id,
          type: type === 'aud' ? 'viewer' : 'participant',
          userId: user.id,
        })
        .then(room => {
          setRoom(room);
          console.log('roomCreate', room);
        })
        .catch(e => {

          //console.error('JOIN ERROR', e.message);
          console.error('JOIN ERROR', JSON.stringify(e));
          Alert.alert('Error!', e.message, [
            {
              text: 'Ok',
              onPress: () => {
                navigation.goBack();
              },
            },
          ]);
        });
    }
    getUserData();
  }, []);
  return (
    <View style={{ flex: 1, backgroundColor: '#F7F7F7' }}>
           <View style={{ flex: 1, backgroundColor: theme.TRANSPARENT }}>
          <CompetitionSubLobby
            room={room}
            type={route.params.type}
            item={route.params.item}
            competitionDetail={route.params.item}
          />
      </View>
    </View>
  );
};
export default joinCompetition;
