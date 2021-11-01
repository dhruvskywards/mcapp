import React from 'react';
import {View, Image, Text, Pressable} from 'react-native';
import FooterButton from '../FooterButton';

import styles from './style';
import hint from 'src/assets/image/hint.png';

const HintSheet = ({onPress}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.innerContainer}>
        <Image source={hint} style={styles.iconView} />
        <Text style={styles.titletext}>Tap a Contestant to vote.</Text>
      </View>
      <Text style={styles.details}>
        You must rate both contestants in this competition for each round.
        Running out of points will disqualify you from winning a prize & your
        vote will no longer count.
      </Text>
      <Pressable style={styles.button}>
        <FooterButton onPress={onPress} title={'Got it!'} />
      </Pressable>
    </View>
  );
};

export default HintSheet;
