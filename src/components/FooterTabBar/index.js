import React, {useState, useEffect} from 'react';
import {Text, View, TouchableOpacity, ScrollView} from 'react-native';
import theme from 'src/utils/theme';
import style from './style';
import {useTheme} from '@react-navigation/native';
import Gallery from '../../screens/Auth/HomeScreen/AddStoryFlow/Gallery';
import Camera from '../../screens/Auth/HomeScreen/AddStoryFlow/Camera';
import Video from '../../screens/Auth/HomeScreen/AddStoryFlow/Video';

const FooterTabBar = ({initialTab = 0, setTabNo = 1, ContentType}) => {
  const CustomTheme = useTheme();
  const [footer] = useState([
    {name: 'Gallery'},
    {name: 'photo'},
    {name: 'video'},
    {name: 'live'},
    {name: 'story'},
    {name: 'artist match'},
  ]);
  const [tab, setTab] = useState(0);
  const selectTab = value => {
    setTab(value);
    // setTabNo(value);
  };
  const showPage = () => {
    switch (tab) {
      case 0:
        return <Gallery ContentType={ContentType} />;
      case 1:
        return <Camera ContentType={ContentType} />;
      case 2:
        return <Video />;
      case 3:
        return <Video />;
      case 4:
        return <Video />;
      case 5:
        return <Video />;
      case 6:
        return <Video />;
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
          {footer.map((data, key) => (
            <TouchableOpacity
              key={key}
              activeOpacity={0.7}
              onPress={() => selectTab(key)}
              style={[style.tabview]}>
              <View style={[style.ContainerView]}>
                <Text style={[style.txt]}>{data.name}</Text>
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
          ))}
        </View>
      </View>
    </View>
  );
};
export default FooterTabBar;
