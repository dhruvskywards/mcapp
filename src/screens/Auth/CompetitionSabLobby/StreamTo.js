import React, { useEffect, useRef, useState } from "react";
import { FlatList, Image, Keyboard, PermissionsAndroid, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as Colyseus from "colyseus.js";
import Video from "react-native-video";
import { NodeCameraView, NodePlayerView } from "react-native-nodemediaclient";
import { useSelector } from "react-redux";
import ProgressBar from 'react-native-progress/Bar';
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
// import style from "../PlayScreen/style";
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
const client = new Colyseus.Client('ws://34.235.198.223:8001');
var Sound = require('react-native-sound');
var whoosh;
// const _ = require("lodash");
const Comment = ({data}) => {
  //let d = _.orderBy(data, ["timestamp", "desc"]);
  // let d1 = _.sortBy(data,["timestamp", "asc"])
  // console.log("CH-comment",JSON.stringify(d));
  return (
    <View>
      <FlatList
        data={data}
        // extraData={d}
        keyExtractor={(item, index) => 'key' + index}
        style={{
          paddingBottom: 20,
          marginTop: 10,
          maxHeight: 230,
          width: '100%',
        }}
        inverted
        renderItem={({item, index}) => (
          <View
            style={{
              marginLeft: 10,
              alignItems: 'center',
              flexDirection: 'row',
              marginTop: 10,
            }}>
            <View
              style={{
                backgroundColor: 'lightgrey',
                borderRadius: 50,
                height: 50,
                width: 50,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{fontSize: 30, fontWeight: 'bold'}}>
                {item.username.substring(0, 1)}
              </Text>
            </View>
            <View style={{marginLeft: 20}}>
              <Text style={{color: '#FFF', fontWeight: 'bold', fontSize: 12}}>
                {item.username}
              </Text>
              <Text style={{color: '#FFF', fontSize: 9}}>{item.comment}</Text>
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
  const [isPreRollPlaying, setIsPreRollPlaying] = useState(false);
  const {
    currentSessionId,
    roomDetail,
    competitionDetail,
    competitionParticipants,
    userId,
    room,
  } = route.params;
  const competitionEventReducer = useSelector(
    state => state.competitionEventReducer,
  );
  const [yourStream, setYourStream] = useState({});
  const [issplit, setIssplit] = useState(true);
  const [participants, setParticipants] = useState([]);
  const [preRollUrl, setPreRollUrl] = useState('');
  const [myuserId, setMyuserId] = useState('');
  const [commentPost, setCommentPost] = useState('');
  const [currentRound, setCurrentRound] = useState({});
  const [points, setPoints] = useState({});
  const [currentPreRoll, setCurrentPreRoll] = useState({});
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
    participant => participant.id === myuserId,
  );
  const otherUser = participants.find(
    participant => participant.id != myuserId,
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
    setCurrentRound(competitionEventReducer.round);
    setCurrentPreRoll(competitionEventReducer?.preRoll);
    setPoints(competitionEventReducer?.points);
    setLoaderProgress(60);
  }, []);

  useEffect(() => {
    console.log('PreRollURL==>', preRollUrl);
    if (competitionEventReducer.action === COMPETITION_PARTICIPANT_STARTING) {
      if (whoosh) {
        whoosh.stop();
      }
      // startCountDown();
    }
    if (competitionEventReducer.action === COMPETITION_PARTICIPANT_STARTED) {
      setIsPreRollPlaying(false);
      PlaySound(currentRound?.beat?.beatUrl);
      setCurrentParticipant(competitionEventReducer.participant);
          console.log("CH-CP",JSON.stringify(competitionEventReducer.participant))
      // var progress = competitionEventReducer?.participant?.rounds?.filter(
      //   (m) => m.round === currentRound?.round
      // );
      // Promise.all(progress);
      setLoaderProgress(120);
    }
    if (competitionEventReducer.action === COMPETITION_ROUND_STARTING) {
      setIsPreRollPlaying(true);
      // startCountDown();
    }
    if (competitionEventReducer.action === COMPETITION_ROUND_STARTED) {
      // setStreamUrl(competitionEventReducer.data.streamUrl);
      // setCurrentRound(competitionEventReducer.round);
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
      setCurrentPreRoll(competitionEventReducer.preRoll);
      setPreRollUrl(competitionEventReducer.preRoll?.preRollEffectURL);
      setIsPreRollPlaying(true);
      // setStreamUrl(competitionEventReducer.data.streamUrl);
    }
    if (competitionEventReducer.action === COMPETITION_PREROLL_ENDED) {
      // setStreamUrl(competitionEventReducer.data.streamUrl);
      setIsPreRollPlaying(true);
    }
    if (competitionEventReducer.action === COMPETITION_ROUND_STARTED) {
      setPreRollUrl('tmp/f4187e46-0607-4bc4-8ab6-d0dcafa7b2ae.mp4');
      setIsPreRollPlaying(true);
      // setStreamUrl(competitionEventReducer.data.streamUrl);
    }
    if (competitionEventReducer.action === COMPETITION_YOURTURN_STARTED) {
      //PlaySound(currentRound?.beat?.beatUrl);
      setIsPreRollPlaying(false);
      // setStreamUrl(competitionEventReducer.data.streamUrl);
    }
    if (competitionEventReducer.action === COMPETITION_UPDATEPOINTS) {
      setPoints(competitionEventReducer.points);
      // setStreamUrl(competitionEventReducer.data.streamUrl);
    }
    if (competitionEventReducer.action === COMPETITION_CONTESTANT_INFO_STARTING) {
      // startCountDown();
      console.log('Is Starting');
      //setIsPreRollPlaying(true);
    }
    if (competitionEventReducer.action === COMPETITION_CONTESTANT_INFO_STARTED) {
      setCurrentPreRoll(competitionEventReducer.preRoll);
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
    console.log(
      'CH-sound',
      `${ApiConstants.API_MEDIA}${encodeURIComponent(beatUrl)}`,
    );
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
      whoosh.play((success) => {
        if (success) {
          console.log("Sound done");
        } else {
          console.log("Sound not done");
        }
      });
      whoosh.setNumberOfLoops(-1);
    });
  };

  return (
    <View style={style.maincontainer1}>
      {isPreRollPlaying === true ? (
          <View style={style.splitCont }>
            {preRollUrl ?
            <Video
              source={{
                //uri: `http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4`,
                uri: `${ApiConstants.API_MEDIA}${encodeURIComponent(preRollUrl)}`,
              }}
              style={{height: '100%', width: '100%'}}
              resizeMode={'stretch'}
              shouldPlay
              controls={false}
              paused={false}
              repeat={true}
              autoplay={true}
            />
              : <View style={{ height: "100%", width: "100%" }}>
                <Image source={{
                  uri: `${ApiConstants.API_MEDIA}${encodeURIComponent(participants[0]?.profilepic)}`,
                }} style={{height:'100%',width:'100%'}}/>
              </View>
            }
            {competitionEventReducer.action === COMPETITION_CONTESTANT_INFO_STARTED && (
              <Text style={style.nextRoundTxt}>
                {competitionEventReducer.preRoll?.name}
              </Text>
            )}
            {competitionEventReducer.action === COMPETITION_ROUND_STARTED && (
              <View>
                <Text style={style.nextRoundTxt}>
                  NEXT ROUND BEGINS
                  {/*{competitionEventReducer?.round?.round}*/}
                </Text>
                <Text style={style.nextRoundTxt}>
                  1:00
                </Text>
              </View>
            )}
          </View>
        )
        : (
          <>
            <View style={style.topHeader}>
              <View style={style.insideHeader}>
                <Image source={eye} color={"white"} />
                <Text style={style.titleText1}>722K</Text>
              </View>
              <View>
                <ProgressBar
                  progress={60}
                  // duration={progress}
                  color="#00FF99"
                  unfilledColor="#E6E6E6"
                  borderColor="rgba(255,255,255,0.1)"
                  width={200}
                  height={5}
                />
              </View>
              <View style={style.logoView}>
                <Image source={SmallLogo} tintColor={"white"} />
                <Image source={close} tintColor={"white"} style={{ marginLeft: 10 }} />
              </View>
            </View>
            <View style={style.splitView}>
              <NodeCameraView
                style={[style.camera]}
                ref={vb}
                outputUrl={"rtmp://streaming.mcmasterofceremony.com/liveone/" + currentUser?.streamurl}
                camera={{ cameraId: 1, cameraFrontMirror: true }}
                audio={{ bitrate: 32000, profile: 1, samplerate: 44100 }}
                video={{ preset: 12, bitrate: 400000, profile: 1, fps: 15, videoFrontMirror: false }}
                autopreview={true}
                onStatus={(a, b) => {
                  //alert(JSON.stringify(b))
                }}

              />
              <NodePlayerView
                style={[style.camera]}
                ref={vb1}
                inputUrl={"rtmp://streaming.mcmasterofceremony.com/liveone/" + otherUser?.streamurl}
                scaleMode={"ScaleToFill"}
                audioEnable={false}
                bufferTime={300}
                maxBufferTime={1000}
                autoplay={true}
              />
            </View>
            <View style={style.userCont}>
              <TouchableOpacity style={currentParticipant.id === participants[0] ? style.userContImg : style.userContImg1}>
                <Image source={{
                  uri: `${ApiConstants.API_MEDIA}${encodeURIComponent(participants[0]?.profilepic)}`,
                  //uri: `https://picsum.photos/seed/picsum/200/300`,
                }} style={style.userContImg1} />
              </TouchableOpacity>
              <View style={style.pearCont}>
                <Image source={pears} style={style.pearImg } />
                <Text style={style.pearTxt}>2500</Text>
              </View>
              <TouchableOpacity style={currentParticipant.id === participants[1] ? style.userContImg : style.userContImg1}>
                <Image source={{
                  uri: `${ApiConstants.API_MEDIA}${encodeURIComponent(participants[1]?.profilepic)}`,
                }} />
              </TouchableOpacity>
            </View>
            <Image source={signal} style={style.signalImg} />
            <Comment  data={competitionEventReducer?.comment}/>
            <View style={style.comtCont}>
              <View style={style.comtContLeft}>
                <Image source={hint} style={style.hintImg} />
                <Text style={style.comtTxtLeft}>Tap a Contestant to vote.</Text>
              </View>
              <View style={style.comtContRight}>
                {/*<TextInput style={style.comtText}>Tap a Contestant to vote.</TextInput>*/}
                <TextInput
                  style={style.comtTxtRight}
                  placeholder={"Leave a comment..."} placeholderTextColor={"#D5D5D5"}
                  value={commentPost}
                  onChangeText={(text) => {
                    setCommentPost(text);
                  }}
                  onSubmitEditing={() => {
                    if (room && commentPost)
                      room.send("comment", commentPost);
                    Keyboard.dismiss();
                    setCommentPost("");
                  }}
                />
                <TouchableOpacity onPress={() => {
                  if (room && commentPost)
                    room.send("comment", commentPost);
                  setCommentPost("");
                  Keyboard.dismiss();
                }}>
                  <Image source={cmmt} style={style.commtImg} /></TouchableOpacity>
              </View>
            </View>
          </>
        )}
    </View>
  );
};

export default StreamTo;
