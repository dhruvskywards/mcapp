import React from 'react';
import {View, Pressable} from 'react-native';
import faker from 'faker';
import TitleAndSubTitleRow from '../TitleAndSubTitleRow';
import Avatar from '../Avatar/Avatar';
import theme from '../../utils/theme';
import styles from './style';

const ThumbnailNameRow = ({
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
        {url ? <Avatar url={url} size={thumbnailSize} /> : null}
        {urls.length ? (
          <View style={styles.title}>
            {urls.map((item, index) => {
              leftValue = leftValue + 5;
              return (
                <View
                  key={item}
                  style={[
                    {backgroundColor: theme.TRANSPARENT, minWidth: 45},
                    index == 0 ? null : {position: 'absolute', left: leftValue},
                  ]}>
                  <Avatar url={item} size={35} />
                </View>
              );
            })}
          </View>
        ) : null}
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

export default ThumbnailNameRow;
