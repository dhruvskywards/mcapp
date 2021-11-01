import React, {useState,useEffect} from 'react';
import {Text, View, Pressable} from 'react-native';
import styles from './style';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {scale} from 'react-native-size-matters';
import theme from '../../utils/theme';
import {useTheme} from '@react-navigation/native';
import TrackPlayer, { usePlaybackState, STATE_PLAYING } from 'react-native-track-player';
import { parseLogBoxException } from "react-native/Libraries/LogBox/Data/parseLogBoxLog";


const BeatPlay = ({item,backGroundColor, playTrack,music,header,subheader,selfBeatVoteId,onpressevent}) => {
  const CustomTheme = useTheme();
  const [isplaying, setIsPlaying] = useState(false);
  const [isVoted,setIsVoted] = useState('false')
     // console.log("CH-Vote0BeatPlay",JSON.stringify(item.isVoted))
  return (
    <View
      style={[
        styles.MainContainer,
        {backgroundColor: CustomTheme.colors.primary},
      ]}>
      <Pressable
        onPress={() => {
          playTrack && playTrack(music);
          setIsPlaying(!isplaying);
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
          {header}
        </Text>
        <Text style={styles.votes}>{subheader} votes</Text>
      </View>
      <Pressable
        onPress={() => {
          // if(!item.isVoted)
          //   setIsVoted(!isVoted)
           onpressevent()
          //setIsVoted1(selfBeatVoteId === null || selfBeatVoteId === undefined ? false : true)
        }}
        // disabled={selfBeatVoteId === null || selfBeatVoteId === undefined ? false : true}
        style={[
          styles.buttonContainer,
          {backgroundColor: CustomTheme.colors.text},
        ]}>

        {item?.isVoted ? (
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
