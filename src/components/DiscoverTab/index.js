import React, {useState} from 'react';
import {Text, View, TouchableOpacity, FlatList} from 'react-native';
import style from './style';
import {useTheme} from '@react-navigation/native';

const DiscoverTab = ({setTabNo}) => {
  const CustomTheme = useTheme();
  const [discoverTab] = useState([
    {name: 'Clubs', cftags: 0},
    {name: 'Brands & People', cftags: 1},
    {name: 'Challanges', cftags: 2},
    {name: 'Channel', cftags: 3},
    
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
            data={discoverTab}
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

export default DiscoverTab;
