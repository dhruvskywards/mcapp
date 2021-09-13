import React from 'react';
import {View, Pressable,Image,Text} from 'react-native';
import faker from 'faker';
import TitleAndSubTitleRow from '../../TitleAndSubTitleRow';
import Avatar from '../../Avatar/Avatar';
import theme from '../../../utils/theme';
import styles from './style';
import { scale } from 'react-native-size-matters';

const LeaderBoardItem = ({
  url = faker.image.avatar(),
  urls = [],
  name = faker.name.findName(),
  helperText = faker.commerce.product(),
  onPress = () => {},
  leftView = () => {
    return null;
  },
  thumbnailSize = 35,
  isVerified = false,
  rightView,
}) => {
  var leftValue = 0;
  return (
    <View style={styles.Thumbnailnamerowcon}>
      {leftView()}
      <Pressable
        style={styles.Thumbnailnamerowcon1}
        onPress={() => {
          onPress();
        }}>
        {url ? 
          <View style={styles.viewRank}>
            <Image style={styles.imageStyle}
                      source={{
                        uri: url,
                      }}
                      resizeMode={'cover'} />
              <View style={styles.rankCircle}>
                    <Text style={styles.textRank}>10</Text>
              </View>
          </View>: null}
     
        <View style={styles.TitleAndSubTitleRow}>
          <TitleAndSubTitleRow
            name={name}
            helperText={helperText}
            isVerified={isVerified}
          />
        </View>
      </Pressable>
      {rightView()}
    </View>
  );
};

export default LeaderBoardItem;
