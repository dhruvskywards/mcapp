import React, {useState, useEffect} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import Competition from 'src/screens/Auth/HomeScreen/Competition';
import Discover from 'src/screens/Auth/HomeScreen/Discover';
import Home from 'src/screens/Auth/HomeScreen/Home';
import LeaderBoard from 'src/screens/Auth/HomeScreen/LeaderBoards';
import theme from 'src/utils/theme';
import style from './style';
const TopTabBar = ({initialTab = 0, setTabNo = 1}) => {
  const [footer] = useState([
    {name: 'Home'},
    {name: 'Competitions'},
    {name: 'Discover'},
    {name: 'LeaderBoards'},
  ]);
  const [tab, setTab] = useState(0);
  const selectTab = value => {
    setTab(value);
    setTabNo(value);
  };
  const showPage = () => {
    switch (tab) {
      case 0:
        return <Home />;
      case 1:
        return <Competition />;
      case 2:
        return <Discover />;
      case 3:
        return <LeaderBoard />;
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
                  {backgroundColor: tab === key ? theme.BLACK : theme.WHITE},
                ]}>
                <Text
                  style={[
                    style.txt,
                    {color: tab === key ? theme.WHITE : theme.BLACK},
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
export default TopTabBar;
