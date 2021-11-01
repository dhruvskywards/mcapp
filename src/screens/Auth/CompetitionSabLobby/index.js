import React, {useEffect, useState} from 'react';
import {
  View,
  ScrollView,
  SafeAreaView,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import style from './style';
import {useNavigation, useTheme} from '@react-navigation/native';
import Header from '../../../components/Header/Header';
import SubLobbyTopBar from '../../../components/SubLobbyTopBar';
import {useDispatch, useSelector} from 'react-redux';
import * as actions from '../../../store/action/Competition/CompetitionGetSelfDetailAction';
import {getSessionData} from '../../../utils/asyncStorage';
import gear from '../../../assets/image/gear.png';
import ChatSetting from '../../../components/ChatSettings';
import sessionKey from '../../../utils/const';
import theme from '../../../utils/theme';
const CompetitionSubLobby = ({
  route,
  // navigation,
  room,
  type,
  item,
  competitionDetail,
}) => {
  const CustomTheme = useTheme();
  const [tncAccept, setTncAccept] = useState();
  const [userId, setUserId] = useState(null);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [tab, setTab] = useState(0);
  const acceptTermsAndConditionReducer = useSelector(
    state => state.acceptTermsAndConditionReducer,
  );

  useEffect(async () => {
    const user = JSON.parse(await getSessionData(sessionKey.userData));
    setUserId(user.id);
  }, []);

  useEffect(() => {
    if (userId !== null) {
      const competitionData = {
        type: type.type === 'aud' ? 'Viewer' : 'Participant',
        userId: userId,
        competitionId: competitionDetail.id,
      };
      dispatch(
        actions.CompetitionGetSelfDetailAction(
          competitionData,
          async success => {
            console.log(success);
            setTncAccept(success?.tcAccept);
          },
          error => {
            console.log(error);
          },
        ),
      );
    }
  }, [
    acceptTermsAndConditionReducer.action,
    acceptTermsAndConditionReducer.data,
  ]);

  const rightView = () => {
    return tab === 3 ? (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('ChatSetting');
        }}>
        <Image
          source={gear}
          style={[style.gearImg, {tintColor: CustomTheme.colors.text}]}
        />
      </TouchableOpacity>
    ) : null;
  };
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
          rightView={() => rightView()}
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
            tnc={tncAccept}
            fun={value => {
              setTab(value);
            }}
          />
          {tncAccept ? <></> : <View style={style.reddot} />}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default CompetitionSubLobby;
