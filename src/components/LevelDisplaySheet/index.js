import React from 'react';
import {View, Image, Text, Pressable} from 'react-native';
import ProgressBar from 'react-native-progress/Bar';

import styles from './style';
import BlackDiamond from 'src/assets/image/BlackDiamond.png';
import Prize from 'src/assets/image/Prize.png';
import {scale} from 'react-native-size-matters';

const LevelDisplaySheet = ({onPress}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.HeaderView}>
        <View style={styles.BlackDiamondView}>
          <Image source={BlackDiamond} />
          <Text style={styles.title}>Level 12</Text>
        </View>
        <View style={styles.levelView}>
          <Text style={styles.title}>41,578 to Level 13</Text>
        </View>
      </View>
      <ProgressBar
        progress={1}
        // duration={progress}
        color="#00FF99"
        unfilledColor="#E6E6E6"
        borderColor="rgba(255,255,255,0.1)"
        width={scale(250)}
        height={scale(7)}
      />
      <View style={styles.FooterView}>
        <View style={styles.BlackDiamondView}>
          <Image source={Prize} />
          <Text style={styles.title}>12000</Text>
        </View>
        <View style={styles.HorizontalView}>
          <View style={styles.ButtonView}>
            <Text style={styles.ButtonText}>Buy Remix Points</Text>
          </View>
          <Pressable onPress={onPress} style={styles.ButtonView}>
            <Text style={styles.ButtonText}>Cancel</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default LevelDisplaySheet;
