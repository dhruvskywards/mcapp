import React from 'react';
import {View, Image, Text, Pressable} from 'react-native';
import FooterButton from '../FooterButton';

import styles from './style';
import ProgressBar from 'react-native-progress/Bar';
import {scale} from 'react-native-size-matters';

const InfoSheet = ({onPress, url}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.innerContainer}>
        <Image source={url} style={styles.imageView} />
        <Text style={styles.titletext}>James911I02934K</Text>
      </View>
      <View style={styles.HorizontalView}>
        <View style={styles.ButtonView}>
          <Text style={styles.ButtonText}>Delivery +100</Text>
        </View>
        <View style={styles.ButtonView}>
          <Text style={styles.ButtonText}>Wordplay +200</Text>
        </View>
        <View style={styles.ButtonView}>
          <Text style={styles.ButtonText}>Flow +100</Text>
        </View>
      </View>
      <View style={styles.BarView}>
        <Text style={styles.titletext}>1</Text>
        <ProgressBar
          progress={1}
          // duration={progress}
          color="#00FF99"
          unfilledColor="#E6E6E6"
          borderColor="rgba(255,255,255,0.1)"
          width={scale(200)}
          height={scale(7)}
        />
        <Text style={styles.titletext}>1</Text>
      </View>
      <View>
        <Text style={styles.titletext}>Your overall score: 1</Text>
      </View>
    </View>
  );
};

export default InfoSheet;
