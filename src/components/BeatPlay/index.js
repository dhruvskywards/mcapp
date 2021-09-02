import React, {useState} from 'react';
import {Text, View, Pressable} from 'react-native';
import styles from './style';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {scale} from 'react-native-size-matters';
import theme from '../../utils/theme';
import {useTheme} from '@react-navigation/native';

const BeatPlay = ({backGroundColor, playTrack,music,header}) => {
  const CustomTheme = useTheme();
  const [isplaying, setIsPlaying] = useState(false);
  const [isVoted, setisVoted] = useState(false);

  return (
    <View
      style={[
        styles.MainContainer,
        {backgroundColor: CustomTheme.colors.primary},
      ]}>
      <Pressable
        onPress={() => {
          setIsPlaying(!isplaying);
          playTrack && playTrack(music);
        }}
        style={[styles.playView, backGroundColor]}>
        <View style={styles.innerView}>
          {isplaying ? (
            <FontAwesome name="pause" size={scale(7)} color={theme.WHITE} />
          ) : (
            <FontAwesome name="play" size={scale(7)} color={theme.WHITE} />
          )}
        </View>
      </Pressable>
      <View style={styles.ContainView}>
        <Text style={[styles.beatName, {color: CustomTheme.colors.text}]}>
          12AM in London
        </Text>
        <Text style={styles.votes}>2930 votes</Text>
      </View>
      <Pressable
        onPress={() => setisVoted(!isVoted)}
        style={[
          styles.buttonContainer,
          {backgroundColor: CustomTheme.colors.text},
        ]}>
        {isVoted ? (
          <View style={styles.VoteView}>
            <Text
              style={[
                styles.buttonText,
                styles.space,
                {color: CustomTheme.colors.background},
              ]}>
              Voted
            </Text>
            <FontAwesome
              name="check"
              size={scale(15)}
              color={CustomTheme.colors.background}
            />
          </View>
        ) : (
          <Text
            style={[styles.buttonText, {color: CustomTheme.colors.background}]}>
            Vote
          </Text>
        )}
      </Pressable>
    </View>
  );
};

export default BeatPlay;
