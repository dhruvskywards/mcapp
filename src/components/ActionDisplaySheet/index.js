import React from 'react';
import {View, Text, Pressable} from 'react-native';
import FooterButton from '../FooterButton';

import styles from './style';
import UserProfile from '../UserProfile';

const ActionDisplaySheet = ({onPress, data}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>Actions</Text>
        <UserProfile
          name={'Mira'}
          HorizontalView={styles.DetailView}
          style={styles.flexDirection}
        />
        <Text style={styles.titletext}>Gift</Text>
        <Text style={styles.titletext}>Rate</Text>
        <Text style={styles.titletext}>Report</Text>
      </View>
      <Pressable style={styles.button}>
        <FooterButton onPress={onPress} title={'Cancel'} />
      </Pressable>
    </View>
  );
};

export default ActionDisplaySheet;
