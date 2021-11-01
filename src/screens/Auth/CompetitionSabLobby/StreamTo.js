import React, {useEffect, useRef, useState} from 'react';
import {
  Alert, AppState, BackHandler,
  FlatList,
  Image,
  Keyboard,
  PermissionsAndroid,
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import * as Colyseus from 'colyseus.js';
import Video from 'react-native-video';
import {NodeCameraView, NodePlayerView} from 'react-native-nodemediaclient';
import {useSelector} from 'react-redux';
import ProgressBar from 'react-native-progress/Bar';
import BottomSheet from 'reanimated-bottom-sheet';
import HintSheet from '../../../components/HintSheet';
import {
  COMPETITION_AD_ENDED,
  COMPETITION_AD_STARTED,
  COMPETITION_AD_STARTING,
  COMPETITION_CONTESTANT_INFO_STARTED,
  COMPETITION_CONTESTANT_INFO_STARTING,
  COMPETITION_ENDED,
  COMPETITION_PARTICIPANT_STARTED,
  COMPETITION_PARTICIPANT_STARTING,
  COMPETITION_PREROLL_ENDED,
  COMPETITION_PREROLL_STARTED,
  COMPETITION_PREROLL_STARTING,
  COMPETITION_ROUND_STARTED,
  COMPETITION_ROUND_STARTING,
  COMPETITION_UPDATEPOINTS,
  COMPETITION_YOURTURN_STARTED,
} from '../../../store/actionType/index';
import {getSessionData} from '../../../utils/asyncStorage';
import sessionKey from '../../../utils/const';
import ApiConstants from 'src/utils/ApiConstants';
import StreamProgress from '../../../components/StreamProgress';
import style from './style';
import eye from '../../../assets/image/eye.png';
import SmallLogo from '../../../assets/image/SmallLogo.png';
import close from '../../../assets/image/close.png';
import pears from 'src/assets/image/pears.png';
import signal from 'src/assets/image/singal.png';
import hint from 'src/assets/image/hint.png';
import cmmt from 'src/assets/image/cmmt.png';
import CompetitionEnded from './CompetitionEnded';
import _ from 'lodash';
import RateSheet from '../../../components/RateSheet';
import TrackPlayer from "react-native-track-player";
import {competitionBeatVoteReducer} from "../../../store/reducers/Competiton/competitionBeatVoteReducer";
const client = new Colyseus.Client('ws://34.235.198.223:8001');
var Sound = require('react-native-sound');
let whoosh;
const Comment = ({data}) => {
  return (
    <View>
      <FlatList
        data={data}
        // extraData={d}
        keyExtractor={(item, index) => 'key' + index}
        style={style.cmtFlstlist}
        inverted
        renderItem={({item, index}) => (
          <View style={style.cmtFlatlistCont}>
            <View style={style.cmtFlatlistImgCont}>
              {item?.profilepic ? (
                <Image
                  source={{
                    uri: `${ApiConstants.API_MEDIA}${encodeURIComponent(
                      item?.profilepic,
                    )}`,
                  }}
                  style={style.cmtuserImg}
                />
              ) : (
                <Text style={style.cmtuserTxt}>
                  {item.username.substring(0, 1)}
                </Text>
              )}
            </View>
            <View style={{marginLeft: 20}}>
              <Text style={style.cmtTitleTxt}>{item.username}</Text>
              <Text style={style.cmtsubTitleTxt}>{item.comment}</Text>
            </View>
          </View>
        )}
        // ItemSeparatorComponent={this.renderSeparator}
      />
    </View>
  );
};
const StreamTo = ({route, theme}) => {
  const navigation = useNavigation();
  const hintRef = useRef();
  const RateRef = useRef();

  const [selected, setSelected] = useState();
  const [isPreRollPlaying, setIsPreRollPlaying] = useState(false);
  const {
    currentSessionId,
    roomDetail,
    competitionDetail,
    competitionParticipants,
    userId,
    room,
    type,
  } = route.params;
  const competitionEventReducer = useSelector(
    state => state.competitionEventReducer,
  );
  const [participants, setParticipants] = useState([]);
  const [preRollUrl, setPreRollUrl] = useState('');
  const [myuserId, setMyuserId] = useState('');
  const [commentPost, setCommentPost] = useState('');
  const [currentRound, setCurrentRound] = useState({});
  const [points, setPoints] = useState({});
  const [loaderProgress, setLoaderProgress] = useState(10);
  const [currentParticipant, setCurrentParticipant] = useState(false);
  let vb = useRef();
  let vb1 = useRef();
  useEffect(async () => {
    const user = JSON.parse(await getSessionData(sessionKey.userData));
    setMyuserId(user.id);
  }, []);

  //const comment = useSelector((state) => state.competitionEventReducer);

  const currentUser = participants.find(
    participants => participants.id === myuserId,
  );
  const otherUser = participants.find(
    participants => participants.id != myuserId,
  );

  useEffect(async () => {
    try {
      const granted = await PermissionsAndroid.requestMultiple(
        [
          PermissionsAndroid.PERMISSIONS.CAMERA,
          PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
        ],
        {
          title: 'Cool Photo App Camera And Microphone Permission',
          message:
            'Cool Photo App needs access to your camera ' +
            'so you can take awesome pictures.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the camera');
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  }, []);
  useEffect(() => {
    AppState.addEventListener('change', handleChange);
    return () => {
      AppState.removeEventListener('change', handleChange);
    }
  }, []);
  const handleChange = (newState) => {
    if (newState === "background") {
      TrackPlayer.stop()
    }
  }
  useEffect(() => {
    const backActionDetail = () => {
      Alert.alert('Hold on!', 'Are you sure you want to go back?', [
        {
          text: 'Cancel',
          onPress: () => null,
          style: 'cancel',
        },
        {
          text: 'YES',
          onPress: () => {
            if(room){
              room.onLeave(('competition', {
                competitionId: competitionDetail.id,
                type: type === 'aud' ? 'viewer' : 'participant',
                userId: userId,
              }))
              vb.current.stop();
            }
            navigation.goBack();
          },
        },
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener('hardwareBackPress', backActionDetail);

    return () => backHandler.remove();
  }, [navigation, roomDetail]);

  useEffect(() => {
    if (competitionEventReducer.action === COMPETITION_PARTICIPANT_STARTED) {
      try {
        vb.current.stop();
        vb.current.start();
      } catch (e) {
        console.log(e);
      }
    }
  }, [competitionEventReducer.action]);
  useEffect(() => {
    setParticipants(competitionEventReducer.participants);
  }, [competitionEventReducer.participants]);

  useEffect(() => {
    console.log('PreRollURL==>', preRollUrl);
    if (competitionEventReducer.action === COMPETITION_PARTICIPANT_STARTING) {
      if (whoosh) {
        whoosh.stop();
      }
      //setLoaderProgress(5);
      // startCountDown();
    }
    if (competitionEventReducer.action === COMPETITION_PARTICIPANT_STARTED) {
      setIsPreRollPlaying(false);
      PlaySound(currentRound?.beat?.beatUrl);
      setCurrentParticipant(competitionEventReducer.participant);
      var progress = competitionEventReducer?.participant?.rounds?.filter(
        m => m.round === currentRound?.round,
      );
      Promise.all(progress);
      if (progress.length > 0) {
        setLoaderProgress(progress[0]?.duration);
      } else {
        setLoaderProgress(currentUser?.rounds[0].duration);
      }
    }
    if (competitionEventReducer.action === COMPETITION_ROUND_STARTING) {
      setCurrentRound(competitionEventReducer.round);
      setIsPreRollPlaying(true);
      // startCountDown();
    }
    if (competitionEventReducer.action === COMPETITION_ROUND_STARTED) {
      // setStreamUrl(competitionEventReducer.data.streamUrl);
      setCurrentRound(competitionEventReducer.round);
      setIsPreRollPlaying(true);
    }
    if (competitionEventReducer.action === COMPETITION_AD_STARTING) {
      setIsPreRollPlaying(true);
      if (whoosh) {
        whoosh.stop();
      }
      // startCountDown();
    }
    if (competitionEventReducer.action === COMPETITION_AD_STARTED) {
      if (whoosh) {
        whoosh.stop();
      }
      //setCurrentRound(competitionEventReducer.round);
      // setStreamUrl(competitionEventReducer.data.streamUrl);
    }
    if (competitionEventReducer.action === COMPETITION_AD_ENDED) {
      // setStreamUrl(competitionEventReducer.data.streamUrl);
    }
    if (competitionEventReducer.action === COMPETITION_PREROLL_STARTING) {
      // setStreamUrl(competitionEventReducer.data.streamUrl);
    }
    if (competitionEventReducer.action === COMPETITION_PREROLL_STARTED) {
      setPreRollUrl(competitionEventReducer.preRoll?.preRollEffectURL);
      setIsPreRollPlaying(true);
      // setStreamUrl(competitionEventReducer.data.streamUrl);
    }
    if (competitionEventReducer.action === COMPETITION_PREROLL_ENDED) {
      // setStreamUrl(competitionEventReducer.data.streamUrl);
      setIsPreRollPlaying(true);
    }
    if (competitionEventReducer.action === COMPETITION_ROUND_STARTED) {
      //setPreRollUrl('pre_roll/2a4c93de-a31a-43d3-a896-8373d692719d.mp4');
      setIsPreRollPlaying(true);
      // setStreamUrl(competitionEventReducer.data.streamUrl);
    }
    if (competitionEventReducer.action === COMPETITION_YOURTURN_STARTED) {
      PlaySound(currentRound?.beat?.beatUrl);
      setIsPreRollPlaying(false);
      // setStreamUrl(competitionEventReducer.data.streamUrl);
    }
    if (competitionEventReducer.action === COMPETITION_UPDATEPOINTS) {
      setPoints(competitionEventReducer.points);
      // setStreamUrl(competitionEventReducer.data.streamUrl);
    }
    if (
      competitionEventReducer.action === COMPETITION_CONTESTANT_INFO_STARTING
    ) {
      // startCountDown();
      console.log('Is Starting');
      //setIsPreRollPlaying(true);
    }
    if (
      competitionEventReducer.action === COMPETITION_CONTESTANT_INFO_STARTED
    ) {
      // setCurrentPreRoll(competitionEventReducer.preRoll);
      setPreRollUrl(competitionEventReducer.preRoll?.preRollEffectURL);
      setIsPreRollPlaying(true);
      console.log('Is Started', preRollUrl);
    }
    if (competitionEventReducer.action === COMPETITION_ENDED) {
      whoosh.stop();
      if (whoosh) {
        whoosh.stop();
      }
      navigation.navigate('CompetitionEnded');
      // cameraView.current.stop();
      // setPreview(!preview);
    }
  }, [
    competitionDetail,
    competitionEventReducer.action,
    competitionEventReducer.data,
    competitionEventReducer.participant,
    competitionEventReducer.points,
    competitionEventReducer.preRoll,
    competitionEventReducer.round,
  ]);
  const PlaySound = beatUrl => {
    Sound.setCategory('Playback');
    // Load the sound file 'whoosh.mp3' from the app bundle
    // See notes below about preloading sounds within initialization code below.
    whoosh = new Sound(
      `${ApiConstants.API_MEDIA}${encodeURIComponent(beatUrl)}`,
      Sound.MAIN_BUNDLE,
      error => {
        if (error) {
          console.log('failed to load the sound', error);
          return;
        }
        // loaded successfully
        console.log(
          'duration in seconds: ' +
            whoosh.getDuration() +
            'number of channels: ' +
            whoosh.getNumberOfChannels(),
        );

        // Play the sound with an onEnd callback
        whoosh.play(success => {
          if (success) {
            console.log('Sound done');
          } else {
            console.log('Sound not done');
          }
        });
        whoosh.setNumberOfLoops(-1);
      },
    );
  };

  return (
    <View style={style.maincontainer1}>
      {isPreRollPlaying === true ? (
        <View style={style.splitCont}>
          {preRollUrl ? (
            <Video
              source={{
                //uri: `http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4`,
                uri: `${ApiConstants.API_MEDIA}${encodeURIComponent(
                  preRollUrl,
                )}`,
              }}
              style={{
                alignItems: 'stretch',
                bottom: 0,
                height: '100%',
                left: 0,
                position: 'absolute',
                right: 0,
                top: 0,
              }}
              resizeMode={'stretch'}
              // controls={false}
              useNativeControls={true}
              shouldPlay
              paused={false}
              repeat={true}
              autoplay={true}
            />
          ) : (
            <View style={{height: '100%', width: '100%'}}>
              <Image
                source={{
                  uri: `${ApiConstants.API_MEDIA}${encodeURIComponent(
                    currentUser?.profilepic,
                  )}`,
                }}
                style={{height: '100%', width: '100%'}}
              />
            </View>
          )}
          {competitionEventReducer.action ===
            COMPETITION_CONTESTANT_INFO_STARTED && (
            <View style={{flex: 1}}>
              {participants[0].id === myuserId ? (
                <Text style={style.nextRoundTxt}>{currentUser?.username}</Text>
              ) : (
                <Text style={style.nextRoundTxt}>{otherUser?.username}</Text>
              )}
            </View>
          )}
          {competitionEventReducer.action === COMPETITION_ROUND_STARTED && (
            <Text style={style.nextRoundTxt}>
              {/*NEXT ROUND BEGINS*/}
              Round {competitionEventReducer?.round?.round}
            </Text>
          )}
        </View>
      ) : (
        <>
          <View style={style.topHeader}>
            <View style={style.insideHeader}>
              <Image source={eye} color={'white'} />
              <Text style={style.titleText1}>722K</Text>
            </View>
            <View>
              <StreamProgress
                //progress={loaderProgress?.progress ? loaderProgress?.progress : 60}
                progressCount={loaderProgress}
              />
            </View>
            <View style={style.logoView}>
              <Image source={SmallLogo} tintColor={'white'} />
              <Image
                source={close}
                tintColor={'white'}
                style={{marginLeft: 10}}
              />
            </View>
          </View>
          {/*<View style={style.splitView}>*/}
          {type === 'aud' ? (
            <View style={style.splitView}>
              <NodePlayerView
                style={[style.camera]}
                ref={vb1}
                inputUrl={
                  'rtmp://streaming.mcmasterofceremony.com/liveone/' +
                  competitionEventReducer.participants[0]?.streamurl
                }
                scaleMode={'ScaleToFill'}
                audioEnable={false}
                bufferTime={300}
                maxBufferTime={1000}
                autoplay={true}
              />
              <NodePlayerView
                style={[style.camera]}
                ref={vb1}
                inputUrl={
                  'rtmp://streaming.mcmasterofceremony.com/liveone/' +
                  competitionEventReducer.participants[1]?.streamurl
                }
                scaleMode={'ScaleToFill'}
                audioEnable={false}
                bufferTime={300}
                maxBufferTime={1000}
                autoplay={true}
              />
            </View>
          ) : (
            <View style={style.splitView}>
              <NodeCameraView
                style={[style.camera]}
                ref={vb}
                outputUrl={
                  'rtmp://streaming.mcmasterofceremony.com/liveone/' +
                  currentUser?.streamurl
                }
                camera={{cameraId: 1, cameraFrontMirror: true}}
                audio={{bitrate: 32000, profile: 1, samplerate: 44100}}
                video={{
                  preset: 12,
                  bitrate: 400000,
                  profile: 1,
                  fps: 15,
                  videoFrontMirror: false,
                }}
                autopreview={true}
                onStatus={(a, b) => {
                  //alert(JSON.stringify(b))
                }}
              />
              <NodePlayerView
                style={[style.camera]}
                ref={vb1}
                inputUrl={
                  'rtmp://streaming.mcmasterofceremony.com/liveone/' +
                  otherUser?.streamurl
                }
                scaleMode={'ScaleToFill'}
                audioEnable={false}
                bufferTime={300}
                maxBufferTime={1000}
                autoplay={true}
              />
            </View>
          )}

          <View style={style.userCont}>
            <TouchableOpacity
              style={
                currentParticipant.id === participants[0]?.id
                  ? style.userContImg
                  : style.userContImg1
              }
              onPress={() => {
                RateRef.current.snapTo(0);
              }}>
              <Image
                source={{
                  uri: `${ApiConstants.API_MEDIA}${encodeURIComponent(
                    participants[0]?.profilepic,
                  )}`,
                }}
                style={style.userContImg1}
              />
            </TouchableOpacity>
            <View style={style.pearCont}>
              <Image source={pears} style={style.pearImg} />
              <Text style={style.pearTxt}>2500</Text>
            </View>
            <TouchableOpacity
              style={
                currentParticipant.id === participants[1]?.id
                  ? style.userContImg
                  : style.userContImg1
              }
              onPress={() => {
                RateRef.current.snapTo(0);
              }}>
              <Image
                source={{
                  uri: `${ApiConstants.API_MEDIA}${encodeURIComponent(
                    participants[1]?.profilepic,
                  )}`,
                }}
                style={style.userContImg1}
              />
            </TouchableOpacity>
          </View>
          <Image source={signal} style={style.signalImg} />
          <Comment data={competitionEventReducer?.comment} />
          <View style={style.comtCont}>
            <View style={style.comtContLeft}>
              <Pressable
                onPress={() => {
                  hintRef.current.snapTo(0);
                }}>
                <Image source={hint} style={style.hintImg} />
              </Pressable>
              <Text style={style.comtTxtLeft}>Tap a Contestant to vote.</Text>
            </View>
            <View style={style.comtContRight}>
              {/*<TextInput style={style.comtText}>Tap a Contestant to vote.</TextInput>*/}
              <TextInput
                style={style.comtTxtRight}
                placeholder={'Leave a comment...'}
                placeholderTextColor={'#D5D5D5'}
                value={commentPost}
                onChangeText={text => {
                  setCommentPost(text);
                }}
                onSubmitEditing={() => {
                  if (room && commentPost) {
                    room.send('comment', commentPost);
                  }
                  Keyboard.dismiss();
                  setCommentPost('');
                }}
              />
              <TouchableOpacity
                onPress={() => {
                  if (room && commentPost) {
                    room.send('comment', commentPost);
                  }
                  setCommentPost('');
                  Keyboard.dismiss();
                }}>
                <Image source={cmmt} style={style.commtImg} />
              </TouchableOpacity>
            </View>
          </View>
        </>
      )}
      <BottomSheet
        ref={hintRef}
        snapPoints={['25%', 0]}
        initialSnap={1}
        // renderHeader={() => {
        //   return renderHeaderView();
        // }}
        renderContent={() => {
          return <HintSheet />;
        }}
      />
      <BottomSheet
        ref={RateRef}
        snapPoints={['35%', 0]}
        initialSnap={1}
        // renderHeader={() => {
        //   return renderHeaderView();
        // }}
        renderContent={() => {
          if (currentParticipant.id === participants[0]?.id) {
            return (
              <RateSheet
                competitionDetailId={competitionDetail?.id}
                userId={myuserId}
                round={competitionEventReducer?.round?.round}
                participants={ participants[0]?.id}
                uri={{
                  uri: `${ApiConstants.API_MEDIA}${encodeURIComponent(
                    participants[0]?.profilepic,
                  )}`,
                }}
                username={participants[0]?.username}
              />
            );
          } else {
            return (
              <RateSheet
                competitionDetailId={competitionDetail?.id}
                userId={myuserId}
                round={competitionEventReducer?.round?.round}
                participants={ participants[1]?.id}
                uri={{
                  uri: `${ApiConstants.API_MEDIA}${encodeURIComponent(
                    participants[1]?.profilepic,
                  )}`,
                }}
                username={participants[1]?.username}
              />
            );
          }
        }}
      />
    </View>
  );
};

export default StreamTo;
