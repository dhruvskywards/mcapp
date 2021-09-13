import React, {useState} from 'react';
import {Text, View, TouchableOpacity, FlatList} from 'react-native';
import style from './style';
import {useTheme} from '@react-navigation/native';

const LeaderBoardTab = ({setTabNo}) => {
  const CustomTheme = useTheme();
  const [leaderboarTabBar] = useState([
    {name: 'Rap', cftags: 0},
    {name: 'Battle Rap', cftags: 1},
    {name: 'Viewer', cftags: 2},
    {name: 'Top Gifters', cftags: 3},
    {name: 'Most Liked Content', cftags: 11},
    {name: 'XP Level', cftags: 12},
    {name: 'Global', cftags: 4},
    {name: 'Dance', cftags: 5},
    {name: 'Singing', cftags: 6},
    {name: 'DJ', cftags: 7},
    {name: 'Comedy', cftags: 8},
    {name: 'R&B', cftags:9},
    {name: 'Bands', cftags: 10},
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
            data={leaderboarTabBar}
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
        
        </View>
      </View>
    </View>
  );
};

export default LeaderBoardTab;
