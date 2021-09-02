import React, {useState} from 'react';
import {Text, View, TouchableOpacity, FlatList} from 'react-native';
import style from './style';
import {useTheme} from '@react-navigation/native';

const CompetitionTabBar = ({setTabNo = 0}) => {
  const CustomTheme = useTheme();
  const [competitionTabBar] = useState([
    {name: 'All', cftags: 0},
    {name: 'MC Hosted', cftags: 3},
    {name: 'Most Popular', cftags: 1},
    {name: 'Tier Member', cftags: 2},
    {name: 'Replay', cftags: 4},
  ]);
  const [tab, setTab] = useState(0);
  const selectTab = (index, item) => {
    setTab(index);
    setTabNo(item.cftags);
  };

  return (
    <View style={style.mainview}>
      <View>
        <View style={style.footerview}>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={competitionTabBar}
            renderItem={({item, index}) => (
              <TouchableOpacity
                key={index}
                activeOpacity={0.7}
                onPress={() => selectTab(index, item)}
                style={[style.tabview]}>
                <View
                  style={[
                    style.ContainerView,
                    {
                      backgroundColor:
                        tab === index
                          ? CustomTheme.colors.text
                          : CustomTheme.colors.background,
                    },
                  ]}>
                  <Text
                    style={[
                      style.txt,
                      {
                        color:
                          tab === index
                            ? CustomTheme.colors.background
                            : CustomTheme.colors.text,
                      },
                    ]}>
                    {item.name}
                  </Text>
                </View>
              </TouchableOpacity>
            )}
          />
          {/* {competitionTabBar.map((data, key) => ( */}
          {/* <TouchableOpacity
            key={key}
            activeOpacity={0.7}
            onPress={() => selectTab(key, data)}
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
          ))} */}
        </View>
      </View>
    </View>
  );
};

export default CompetitionTabBar;
