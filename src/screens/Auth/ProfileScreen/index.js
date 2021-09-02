import React, {useState} from 'react';
import {View, Text, ScrollView, Switch} from 'react-native';
import theme from '../../../utils/theme';
import style from './style';

const ProfileScreen = () => {
  const [isdarkMode, setdarkmode] = useState(false);
  return (
    <ScrollView>
      <View style={style.maincontainer}>
        <View style={style.container}>
          <Text style={style.titleText}>ProfileScreen</Text>
          <Text numberOfLines={3} style={style.SubtitleText}>
            Dark and Light Mode
          </Text>
          <Switch
            trackColor={{false: theme.BLACK, true: theme.WHITE}}
            thumbColor={isdarkMode ? theme.BLACK : theme.WHITE}
            // onValueChange={}
            value={isdarkMode}
          />
        </View>
      </View>
    </ScrollView>
  );
};
export default ProfileScreen;
