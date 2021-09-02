import React from 'react';
import {FlatList, View} from 'react-native';
import ThumbnailNameRow from '../ThumbnailNameRow';
import {EMPTY_JSON} from 'src/utils/StaticJsonHelpers';
import Button from '../Button';
import styles from './style';

const SendPostModal = () => {
  const renderDiscoverItems = () => {
    return (
      <ThumbnailNameRow
        rightView={() => {
          return <Button customStyle={styles.padding} title={'Send'} />;
        }}
      />
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={item => {
          return renderDiscoverItems(item);
        }}
        data={EMPTY_JSON}
      />
    </View>
  );
};

export default SendPostModal;
