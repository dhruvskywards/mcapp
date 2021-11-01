import React, {useEffect, useRef, useState} from "react";
import {
    View,
    Text,
    ScrollView,
    Image,
    TouchableOpacity,
    PermissionsAndroid,
    Alert,
    BackHandler,
    AppState
} from "react-native";
import style from './style';
import CompetitionBanner from '../../../../assets/image/CompetitionBanner.png';
import { useNavigation, useTheme } from "@react-navigation/native";
import ApiConstants from "../../../../utils/ApiConstants";
import BlackDiamondView from "../../../../components/BlackDiamondView";
import ModeratorItem from "./ModeratorItem";
import AudienceItem from "./AudienceItem";

import { useDispatch, useSelector } from "react-redux";
import UserChatProfile from "../../../../components/UserChatProfile";
import {NodeCameraView, NodePlayerView} from "react-native-nodemediaclient";
import {getSessionData} from "../../../../utils/asyncStorage";
import sessionKey from "../../../../utils/const";
import {COMPETITION_CHAT_CONTESTANT_ADDED,COMPETITION_CHAT_AUDIENCE_ADDED} from "../../../../store/actionType";

const Chat = ({room, item, competitionDetail, type}) => {

  const dispatch = useDispatch();
  const navigation = useNavigation();
  const CustomTheme = useTheme();
    const [userId, setUserId] = useState(null);
  const [micstate, setMicstate] = useState(false);
  const [roomParticipants, setRoomParticipants] = useState([]);
    const [competitionContestant, setCompetitionContestant] = useState([]);
  const [competitionChat, setCompetitionChat] = useState([]);
    const [roomDetailEvent, setRoomDetailEvent] = useState(null);
  const competitionEventReducer = useSelector(
    state => state.competitionEventReducer,
  );
    let vb2 = useRef();
    let vb11 = useRef();

    useEffect(() => {
        if(type !== 'aud')
            vb2.current.start();

    }, []);
    useEffect(() => {
        AppState.addEventListener('change', handleChange);
        return () => {
            AppState.removeEventListener('change', handleChange);
        }
    }, []);
    const handleChange = (newState) => {
        if (newState === "background") {
            vb2.current.stop()
        }
    }
    useEffect(async ()=>{
        const user = JSON.parse(await getSessionData(sessionKey.userData));
        setUserId(user.id)
    },[])
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
                        try{
                            vb2.current.stop();
                            vb11.current.stop();
                        }catch (e) {
                            console.log(e)
                        }
                        // if(room){
                        //     room.onLeave(('competition', {
                        //         competitionId: competitionDetail.id,
                        //         type: type === 'aud' ? 'viewer' : 'participant',
                        //         userId: userId,
                        //     }))
                        //
                        // }
                        navigation.goBack();
                    },
                },
            ]);
            return true;
        };

        const backHandler = BackHandler.addEventListener('hardwareBackPress', backActionDetail);

        return () => backHandler.remove();
    }, [navigation, competitionDetail]);
    useEffect(()=>{
        if(room){
            setRoomDetailEvent(room);
            setCompetitionContestant([...room.state.contestant]);
            // setCompetitionContestant([...room.state.contestant]);
            // room.state.joinAsContestant.onAdd = function (message, sessionId) {
            //   dispatch({
            //     type: COMPETITION_CHAT_CONTESTANT_ADDED,
            //     payload: room.state.joinAsContestant,
            //   });
            //    console.log("CH-room02",payload);
            // };
            // room.state.joinAsAudiance.onAdd = function (message, sessionId) {
            //   dispatch({
            //     type: COMPETITION_CHAT_AUDIENCE_ADDED,
            //     payload: room.state.joinAsAudiance,
            //   });
            //    console.log(room.state.joinAsAudiance);
            // };
            room.onMessage('handRaiser', function (message) {
                console.log(message);
            });
            room.state.handRaiser.onAdd =  function (message) {
                // dispatch({ type: NEW_COMMENTS, payload: message });
                console.log(message);
            };
        }
    },[room])

    useEffect(async () => {
        try {
            const granted = await PermissionsAndroid.requestMultiple(
                [
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
                console.log('You can use the record audio');
            } else {
                console.log('Camera permission denied');
            }
        } catch (err) {
            console.warn(err);
        }
    }, []);

    useEffect(() => {
        setCompetitionChat(competitionDetail?.competitionChat)
        // setTimeout(()=>{
        //     console.log("CH-evntREd",JSON.stringify(competitionChat))
        // },3000)
    }, []);
  return (
    <View>
    <ScrollView>
      <View style={style.maincontainer}>
        <View style={style.container}>
          <Image source={CompetitionBanner} style={style.BannerView} />
            <View style={{flexDirection:'row',height:1,width:1,}}>
                { type === 'aud' ?
                    <NodePlayerView
                        style={{marginLeft:10,height: 1, width: 1,}}
                        ref={vb11}
                        inputUrl={
                            'rtmp://streaming.mcmasterofceremony.com/liveone/' +  competitionChat?.chatStreamUrl
                        }
                        scaleMode={'ScaleToFill'}
                        audioEnable={true}
                        bufferTime={300}
                        maxBufferTime={1000}
                        autoplay={true}
                    /> :
                    <View>
                <NodeCameraView
                    style={{height: 1, width: 1,backgroundColor:'red',marginRight:10}}
                    ref={vb2}
                    outputUrl={
                        'rtmp://streaming.mcmasterofceremony.com/liveone/' + competitionChat?.chatStreamUrl }
                    camera={{cameraId: 1, cameraFrontMirror: true}}
                    audio={{bitrate:  32000, profile: 1, samplerate: 44100}}
                    video={{
                        preset: 12,
                        bitrate: 400000,
                        profile: 1,
                        fps: 15,
                        videoFrontMirror: false,
                    }}
                    denoise={false}
                    autopreview={true}
                    onStatus={(a, b) => {
                        //alert(JSON.stringify(b))
                    }}
                />
                <NodePlayerView
                    style={{marginLeft:10,height: 1, width: 1,}}
                    ref={vb11}
                    inputUrl={
                        'rtmp://streaming.mcmasterofceremony.com/liveone/' +  competitionChat?.chatStreamUrl
                    }
                    scaleMode={'ScaleToFill'}
                    audioEnable={true}
                    bufferTime={300}
                    maxBufferTime={1000}
                    autoplay={true}
                /></View> }
            </View>
        <View
          style={[
            style.insideContainer,
            {backgroundColor: CustomTheme.colors.background},
          ]}>

          <Text style={[style.titleText, {color: CustomTheme.colors.text}]}>Contestants</Text>
          <View style={style.ContestantInfo}>
          <View style={{marginTop:20,flexDirection:'row'}}>
            <View style={{alignItems:'center'}}>
              <UserChatProfile
                url={{uri: `${ApiConstants.API_MEDIA}${encodeURIComponent(competitionEventReducer?.participants[0]?.profilepic)}`}}
                name={(competitionEventReducer?.participants[0]?.username)}
                type={ competitionEventReducer?.participants[0]?.interest.length ==1 ? competitionEventReducer?.participants[0]?.interest[0].name :  ''
                ||  competitionEventReducer?.participants[0]?.interest.length >= 1 ? competitionEventReducer?.participants[0]?.interest[0]?.name + ' '+'/'+' '+
                    competitionEventReducer?.participants[0]?.interest[1]?.name : ''
                }
                // type={(competitionEventReducer?.participants[0]?.interest[0].name)}
                style={{}}
                // micurl={(competitionEventReducer?.participants[0]?.streamurl)}
                micState={(mute)=>{
                    setMicstate(mute)
                    // vb2.current.muted()

                }}
              />
              <BlackDiamondView
                  diamond={(competitionEventReducer?.participants[0]?.wallet?.blackDiamonds)}
                style={style.backDiamond}
              />
            </View>
              { competitionEventReducer?.participants[1] &&
            <View style={{marginLeft:30,alignItems:'center'}}>
              <UserChatProfile
                  url={{uri: `${ApiConstants.API_MEDIA}${encodeURIComponent(competitionEventReducer?.participants[1]?.profilepic)}`}}
                  name={(competitionEventReducer?.participants[1]?.username)}
                  type={ competitionEventReducer?.participants[1]?.interest.length ==1 ? competitionEventReducer?.participants[1]?.interest[0].name :  ''
                  ||  competitionEventReducer?.participants[1]?.interest.length >= 1 ? competitionEventReducer?.participants[1]?.interest[0]?.name + ' '+'/'+' '+
                      competitionEventReducer?.participants[1]?.interest[1]?.name : ''
                  }
                  // type={(competitionEventReducer?.participants[1]?.interest[0].name)}
                  style={{}}
                   // micurl={(competitionEventReducer?.participants[1]?.streamurl)}
                  micState={(mute)=>{
                      setMicstate(mute)
                  }}
              />
              <BlackDiamondView
                diamond={(competitionEventReducer?.participants[1]?.wallet?.blackDiamonds)}
                style={style.backDiamond}
              />
            </View> }
          </View>
          </View>

          <View style={style.moderatorCont}>
            <Text style={[style.titleText, {color: CustomTheme.colors.text}]}>Moderators & Speakers</Text>
            {/*<Text style={style.titleText}>Moderators & Speakers</Text>*/}
            <ModeratorItem moderator={competitionDetail?.creater}/>
          </View>
          <View style={style.moderatorCont}>
            <Text style={[style.titleText, {color: CustomTheme.colors.text}]}>Audience</Text>
            <AudienceItem audience={competitionEventReducer?.viewers}/>
          </View>
          </View>
        </View>
      </View>
    </ScrollView>
        <View style={[style.AudiraiseHandCont,{backgroundColor: CustomTheme.colors.primary}]}>
            {/*<Text style={[style.raiseHandTxt, {color: CustomTheme.colors.text}]}>RAISED HANDS: 7</Text>*/}
            <TouchableOpacity style={style.audiraiseHandBtn}
                              onPress={()=>{
                                  if (room ) {
                                      room.send('handRaiser', 'test');
                                  }
                              }}
            >
                <Text style={style.raiseHandBtnTxt}>Raised hands</Text>
            </TouchableOpacity>
        </View>
      <View style={[style.raiseHandCont,{backgroundColor: CustomTheme.colors.primary}]}>
        <Text style={[style.raiseHandTxt, {color: CustomTheme.colors.text}]}>RAISED HANDS: 7</Text>
        <TouchableOpacity style={style.raiseHandBtn}
                          onPress={()=>{}}
        >
          <Text style={style.raiseHandBtnTxt}>View Raised hands</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Chat;
