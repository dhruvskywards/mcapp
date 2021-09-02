import React, {useEffect, useState} from 'react';
import {Text, View, ActivityIndicator, Pressable} from 'react-native';
import style from './style';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import TrackPlayer, {usePlaybackState} from 'react-native-track-player';

import theme from '../../../utils/theme';
import {scale} from 'react-native-size-matters';
import ApiConstants from 'src/utils/ApiConstants';

const PlaySound = ({data}) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const playbackState = usePlaybackState();
  async function togglePlayback() {
    if (isPlaying === false) {
      await TrackPlayer.setupPlayer({});
      await TrackPlayer.add({
        // id: '1111',
        url: `${ApiConstants.API_MEDIA}${encodeURIComponent(
          data.content_audio[0]?.audioUrl,
        )}`,
        title: data.content_audio[0]?.content_audioName,
        artist: data.content_audio[0]?.content_audioName,
        // artwork: null,
        // artwork: 'https://i.picsum.photos/id/100/200/200.jpg',
        // duration: 143,
      });
      await TrackPlayer.updateOptions({
        stopWithApp: true,
        alwaysPauseOnInterruption: true,
        capabilities: [
          TrackPlayer.CAPABILITY_PLAY,
          TrackPlayer.CAPABILITY_PAUSE,
          TrackPlayer.CAPABILITY_STOP,
        ],
        notificationCapabilities: [],
      });
      await TrackPlayer.play();
      setIsPlaying(true);
    } else {
      await TrackPlayer.stop();
      setIsPlaying(false);
    }
  }

  useEffect(() => {
    // returned function will be called on component unmount
    return () => {
      TrackPlayer.stop();
    };
  }, []);

  return (
    <View style={style.maincontainer}>
      <Pressable
        style={style.playBtn}
        onPress={() => {
          togglePlayback();
        }}>
        {playbackState === TrackPlayer.STATE_BUFFERING ? (
          <ActivityIndicator size={'large'} color={theme.WHITE} />
        ) : (
          <MaterialIcon
            name={isPlaying === false ? 'play' : 'pause'}
            size={scale(25)}
            color={theme.WHITE}
          />
        )}
      </Pressable>
      <View style={style.DetailsView}>
        <Text style={style.titleText}>
          {data.content_audio[0]?.content_audioName}
        </Text>
        <Text style={style.sabtitleText}>893k Plays</Text>
      </View>
    </View>
  );
};

export default PlaySound;
