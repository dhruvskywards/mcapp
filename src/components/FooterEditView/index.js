import React, {useState, useEffect} from 'react';
import {Text, View, TouchableOpacity, FlatList} from 'react-native';
import style from './style';
import {useTheme} from '@react-navigation/native';
import theme from '../../utils/theme';

const FooterEditView = ({
  initialTab = 0,
  setTabNo = 0,
  FilterView,
  EditView,
}) => {
  const CustomTheme = useTheme();
  const [footer] = useState([
    {name: 'Filter', cftags: 0},
    {name: 'Edit', cftags: 1},
  ]);
  const [tab, setTab] = useState(0);
  const selectTab = (index, item) => {
    setTab(index);
  };
  const showPage = () => {
    switch (tab) {
      case 0:
        return <FilterView />;
      case 1:
        return <EditView />;
      default:
        break;
    }
  };
  useEffect(() => {
    setTab(initialTab);
  }, [initialTab]);
  return (
    <View style={style.mainview}>
      <View style={style.pageContainer}>{showPage()}</View>
      <View>
        <View style={style.footerview}>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={footer}
            renderItem={({item, index}) => (
              <TouchableOpacity
                key={index}
                activeOpacity={0.7}
                onPress={() => selectTab(index, item)}
                style={[style.tabview]}>
                <View style={[style.ContainerView]}>
                  <Text style={[style.txt]}>{item.name}</Text>
                  <View
                    style={[
                      style.border,
                      {
                        backgroundColor:
                          tab === index
                            ? CustomTheme.colors.text
                            : CustomTheme.colors.background,
                      },
                    ]}
                  />
                </View>
              </TouchableOpacity>
            )}
          />
          {/* {footer.map((, data) => (
            <TouchableOpacity
              key={key}
              activeOpacity={0.7}
              onPress={() => selectTab(key, data)}
              style={[style.tabview]}>
              <View style={[style.ContainerView]}>
                <Text
                  style={[
                    style.txt,
                    {color: tab === key ? theme.BLACK : theme.TEXT_VARAINT_1},
                  ]}>
                  {data.name}
                </Text>
                <View
                  style={[
                    style.border,
                    {
                      backgroundColor:
                        tab === key
                          ? CustomTheme.colors.text
                          : CustomTheme.colors.background,
                    },
                  ]}
                />
              </View>
            </TouchableOpacity>
          ))} */}
        </View>
      </View>
    </View>
  );
};
export default FooterEditView;
