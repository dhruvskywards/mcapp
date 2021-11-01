import React, {useState, useEffect} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import Chat from '../../screens/Auth/CompetitionSabLobby/Chat';
import Details from '../../screens/Auth/CompetitionSabLobby/Details';
import Prize from '../../screens/Auth/CompetitionSabLobby/Prize';
import TermsAndConditions from '../../screens/Auth/CompetitionSabLobby/Terms&Conditions';
import style from './style';
import {useTheme} from '@react-navigation/native';

const SubLobbyTopBar = ({initialTab = 0, route,room,type,item,competitionDetail,tnc,fun}) => {
  const CustomTheme = useTheme();
  const [footer] = useState([
    {name: 'Details'},
    {name: 'Terms & Conditions'},
    {name: 'Prizes'},
    {name: 'Chat'},
  ]);
  const [tab, setTab] = useState(0);
  const selectTab = value => {
    setTab(value);
    fun&&fun(value)
  };
  const showPage = () => {
    switch (tab) {
      case 0:
        return <Details
          room={room}
          type={type}
          item={item}
          competitionDetail={item}
        />;
      case 1:
        return <TermsAndConditions type={type} item={item} tnc={tnc}  />;
      case 2:
        return <Prize />;
      case 3:
        return <Chat type={type} item={item} room={room} competitionDetail={item}/>;
      default:
        break;
    }
  };
  useEffect(() => {
    setTab(initialTab);
  }, [initialTab]);
  return (
    <View style={style.mainview}>
      <View>
        <View style={style.footerview}>
          {footer.map((data, key) => (
            <TouchableOpacity
              key={key}
              activeOpacity={0.7}
              onPress={() => selectTab(key)}
              style={[style.tabview]}>
              <View
                style={[
                  style.ContainerView,
                  {
                    backgroundColor:
                      tab === key
                        ? CustomTheme.colors.text
                        : CustomTheme.colors.background,
                  },
                ]}>
                <Text
                  style={[
                    style.txt,
                    {
                      color:
                        tab === key
                          ? CustomTheme.colors.background
                          : CustomTheme.colors.text,
                    },
                  ]}>
                  {data.name}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <View style={style.pageContainer}>{showPage()}</View>
    </View>
  );
};

export default SubLobbyTopBar;
