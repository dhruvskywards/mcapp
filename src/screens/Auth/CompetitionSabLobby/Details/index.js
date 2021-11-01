import React, {createRef, useEffect, useState, useCallback, useReducer} from 'react';
import {View, Image, ScrollView, Text, FlatList,BackHandler,Alert,AppState} from 'react-native';
import style from './style';
import {useNavigation, useTheme} from '@react-navigation/native';
import CompetitionBanner from '../../../../assets/image/CompetitionBanner.png';
import FlootingButton from '../../../../components/FlootingButton';
import FooterButton from '../../../../components/FooterButton';
import UserProfile from '../../../../components/UserProfile/index';
import Seprator from '../../../../assets/image/Seprator.png';
import BeatPlay from '../../../../components/BeatPlay';
import BlackDiamondView from '../../../../components/BlackDiamondView';
import TeamProfile from '../../../../components/TeamProfile';
import {UserData} from '../../../../constants/mock-data';
import ActionSheet from 'react-native-actions-sheet';
import { useDispatch, useSelector } from 'react-redux';

import {
    COMPETITION_PARTICIPANT_STARTING,
    COMPETITION_PARTICIPANT_STARTED,
    COMPETITION_ENDED,
    COMPETITION_PARTICIPANTS_ADDED,
    COMPETITION_VIEWERS_ADDED,
    COMPETITION_ROUND_STARTING,
    COMPETITION_ROUND_STARTED,
    COMPETITION_AD_STARTING,
    COMPETITION_AD_STARTED,
    COMPETITION_AD_ENDED,
    COMPETITION_PREROLL_STARTING,
    COMPETITION_PREROLL_STARTED,
    COMPETITION_PREROLL_ENDED,
    COMPETITION_YOURTURN_STARTING,
    COMPETITION_YOURTURN_STARTED,
    COMPETITION_UPDATEPOINTS,
    COMPETITION_BEAT_VOTE_UPDATE,
    COMPETITION_CONTESTANT_INFO_STARTING,
    COMPETITION_CONTESTANT_INFO_STARTED,
    NEW_COMMENTS, COMPETITION_ACCEPT_TERM_CONDITION_SUCCESS,
    COMPETITION_BEAT_VOTE_SUCCESS,
    COMPETITION_GET_SELF_DETAIL_SUCCESS,
    COMPETITION_CHAT_CONTESTANT_ADDED,
    COMPETITION_CHAT_AUDIENCE_ADDED, COMPETITION_BEAT_VOTE_STATUS
} from "../../../../store/actionType";
import {getSessionData} from 'src/utils/asyncStorage'
import sessionKey from 'src/utils/const'
import ApiConstants from "../../../../utils/ApiConstants";
import TrackPlayer, { usePlaybackState, STATE_PLAYING } from 'react-native-track-player';
import * as actions from "../../../../store/action/Competition/competitionBeatVoteAction";
import * as action1 from "../../../../store/action/Competition/CompetitionGetSelfDetailAction";


const actionSheetRef = createRef();

const Details = ({room, item, competitionDetail, type}) => {
  const navigation = useNavigation();
  const CustomTheme = useTheme();
  const dispatch = useDispatch();
  const [competitionStarted, setCompetitionStarted] = useState(false);
  const [usertype, setUsertype] = useState('singleUser');
  const [currentSessionId, setCurrentSessionId] = useState(null);
  const [roomDetail, setRoomDetail] = useState(null);
  const [roomDetailEvent, setRoomDetailEvent] = useState(null);
  const [competitionViewers, setCompetitionViewers] = useState([]);
  const [competitionParticipants, setCompetitionParticipants] = useState([]);
  const [competitionContestant, setCompetitionContestant] = useState([]);
    const [voteSuccess, setVoteSuccess] = useState('');
  const [competitionBeats, setCompetitionBeats] = useState({});
  const [beatPlayingId, setBeatPlayingId] = useState();
  const competitionEventReducer = useSelector(
    state => state.competitionEventReducer,
  );
  const [userId, setUserId] = useState(null);
  const [competitionSelfData, setCompetitionSelfData] = useState({});
  const [Visible, setVisible] = useState(false);
  const competitionGetSelfDetailReducer = useSelector(
    state => state.competitionGetSelfDetailReducer,
  );
  const competitionBeatVoteReducer = useSelector(
    (state) => state.competitionBeatVoteReducer);

  useEffect(() => {
    if (competitionGetSelfDetailReducer.success) {
      setCompetitionSelfData(competitionGetSelfDetailReducer.data);
    }
  }, [competitionGetSelfDetailReducer.success, competitionGetSelfDetailReducer.data]);

  useEffect(async ()=>{
      const user = JSON.parse(await getSessionData(sessionKey.userData));
      setUserId(user.id)
    },[])
  // useEffect(() => {
  //   setCompetitionBeats(competitionDetail?.competitionBeat);
  // }, [competitionDetail.competitionBeat]);
  // useEffect(() => {
  //   if (
  //     competitionBeatVoteReducer.success
  //     // && competitionBeatVoteReducer.type === COMPETITION_BEAT_VOTE_UPDATE
  //   ) {
  //     setCompetitionBeats(competitionBeatVoteReducer.data);
  //   }
  // }, [
  //   competitionBeatVoteReducer.data,
  //   competitionBeatVoteReducer.success,
  //   // competitionBeatVoteReducer.type,
  // ]);

  useEffect(() => {
    if (competitionBeatVoteReducer.success) {
      const competitionData = {
        type: type === 'aud' ? 'Viewer' : 'Participant',
        userId: userId,
        competitionId: competitionDetail.id,
      };
      dispatch(
        action1.CompetitionGetSelfDetailAction(
          competitionData,
          async success => {
            dispatch(
              { type:COMPETITION_GET_SELF_DETAIL_SUCCESS, payload: success },
            )
          },
          error => {
            console.log(error)
          },
        )
      )
    }
    if (competitionBeatVoteReducer.error) {
      Alert.alert(competitionBeatVoteReducer.data.message);
      competitionBeatVoteReducer.error = false;
    }
  }, [
    competitionBeatVoteReducer,
    competitionDetail.id,
    type,
    userId,
  ]);
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
              TrackPlayer.stop();
            }

            navigation.goBack();
          },
        },
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener('hardwareBackPress', backActionDetail);

    return () => backHandler.remove();
  }, [navigation, roomDetail, roomDetailEvent]);

  useEffect(() => {
    if (room) {
      setRoomDetail(room.id);
      setRoomDetailEvent(room);
      setCurrentSessionId(room.sessionId);
      setCompetitionParticipants([...room.state.participants]);
      setCompetitionViewers([...room.state.viewers]);
      // setCompetitionContestant([...room.state.contestant]);
      setCompetitionBeats(room.state.beat);


      room.onError((code, message) => {
        console.log(message);
        console.log(client.id, "couldn't join", room.name);
      });
      room.state.messages.onAdd = function (message, sessionId) {
        console.log('Data==>', message);
      };
      room.state.participants.onAdd = function (message, sessionId) {
        console.log(message);
      };
      room.state.participants.onAdd = function (message, sessionId) {
        dispatch({
          type: COMPETITION_PARTICIPANTS_ADDED,
          payload: room.state.participants,
        });
        setCompetitionParticipants([...room.state.participants]);
        console.log(room.state.participants);

      };
      room.state.viewers.onAdd = function (message, sessionId) {
        dispatch({
          type: COMPETITION_VIEWERS_ADDED,
          payload: room.state.viewers,
        });
        setCompetitionViewers([...room.state.viewers]);
        console.log(room.state.viewers);
      };
        room.state.beat.onAdd = function () {
            setCompetitionBeats(room.state.beat);
            // console.log("CH-vote00",JSON.stringify(room.state.beat))
            dispatch({
                type: COMPETITION_BEAT_VOTE_UPDATE,
                payload: room.state.beat,
            });
        };
      room.state.beat.onChange = function (message){
         // console.log("CH-Vote0update",JSON.stringify(message))

          const voteCheck = room.state.beat.map((item)=>(
              item.id == message.id ?
                  {...item, isVoted: true,votes:message.votes}
                  : {...item, isVoted: false,votes:message.votes}) )
          // : item) )
          setCompetitionBeats(voteCheck)
        //setCompetitionBeats(message)
    }
      room.state.participants.onRemove = function (message, sessionId) {
        dispatch({
          type: COMPETITION_PARTICIPANTS_ADDED,
          payload: room.state.participants,
        });
        console.log(message);
        setCompetitionParticipants([...room.state.participants]);
      };
      room.state.viewers.onRemove = function (message, sessionId) {
        console.log(message);
        dispatch({
          type: COMPETITION_VIEWERS_ADDED,
          payload: room.state.viewers,
        });
        setCompetitionViewers([...room.state.viewers]);
        console.log(room.state.viewers);
      };
      // listen to patches coming from the server
      room.onMessage('competitionStarting', function (message) {
        console.log(message);
      });

      room.onMessage('addStarting', function (message) {
        dispatch({type: COMPETITION_AD_STARTING, payload: message});
        console.log(message);
      });
      room.onMessage('competitionStarted', function (message) {
        console.log(message);
      });
      room.onMessage('addStarted', function (message) {
        dispatch({type: COMPETITION_AD_STARTED, payload: message});
        console.log(message);
        try {
          navigation.navigate('AdScreen');
        } catch (e) {
          alert(e);
        }
      });
      room.onMessage('preRollStarting', function (message) {
        dispatch({type: COMPETITION_PREROLL_STARTING, payload: message});
        console.log(message);
      });
      room.onMessage('preRollStarted', function (message) {
        dispatch({type: COMPETITION_PREROLL_STARTED, payload: message});
        onStream();
      });
      room.onMessage('contestantInfoStarting', function (message) {
        dispatch({
          type: COMPETITION_CONTESTANT_INFO_STARTING,
          payload: message,
        });
        console.log(message);
      });
      room.onMessage('contestantInfoStarted', function (message) {
        dispatch({type: COMPETITION_CONTESTANT_INFO_STARTED, payload: message});
        console.log(message);
      });
      room.onMessage('roundStarting', function (message) {
        dispatch({type: COMPETITION_ROUND_STARTING, payload: message});
        onStream();
        console.log(message);
      });
      room.onMessage('roundStarted', function (message) {
        dispatch({type: COMPETITION_ROUND_STARTED, payload: message});
        console.log(message);
      });

      room.onMessage('participantStarting', function (message) {
        dispatch({type: COMPETITION_PARTICIPANT_STARTING, payload: message});
        console.log(message);
      });

      room.onMessage('participantStarted', function (message) {
        dispatch({type: COMPETITION_PARTICIPANT_STARTED, payload: message});
        console.log(message);
      });
      room.onMessage('competitionEnded', function (message) {
        dispatch({ type: COMPETITION_ENDED });
        console.log(message);
      });
      room.state.comment.onAdd =  function (message) {
        let newData = {...message,timestamp: new Date().getTime()}
        dispatch({ type: NEW_COMMENTS, payload: newData });
        console.log(message);
      };

      room.onMessage('message', function (message) {
        console.log(message);
      });
      room.onMessage('tickEvent', function (message) {
        // settimeRemaining(message.remainingTime);
      });
      room.onMessage('endTickEvent', function (message) {
        // console.log(message);

      });

      // room.onMessage('competitionBeatVote', function (message) {
      //   dispatch({ type: COMPETITION_BEAT_VOTE_UPDATE, payload: message });
      //   setCompetitionBeats(message);
      // });
      room.onMessage('error', function (message) {
        console.error(message);
      });
      room.onMessage('addEnded', function (message) {
        dispatch({type: COMPETITION_AD_ENDED, payload: message});
        console.log(message);
      });
      room.onMessage('preRollEnded', function (message) {
        dispatch({type: COMPETITION_PREROLL_ENDED, payload: message});
        console.log(message);
      });
      room.onMessage('yourTurnstarting', function (message) {
        dispatch({type: COMPETITION_YOURTURN_STARTING, payload: message});
        console.log(message);
      });
      room.onMessage('yourTurnstarted', function (message) {
        dispatch({type: COMPETITION_YOURTURN_STARTED, payload: message});
        console.log(message);
      });
      room.onMessage('updatePoints', function (message) {
        dispatch({type: COMPETITION_UPDATEPOINTS, payload: message});
        console.log(message);
      });

    }
  }, [room]);

  const onStream = useCallback(
    e => {
      navigation.navigate('StreamTo', {
        currentSessionId,
        roomDetail,
        competitionDetail,
        competitionParticipants,
        userId: userId,
        room,
        type
      });
    },
    [
      competitionDetail,
      competitionParticipants,
      currentSessionId,
      navigation,
      roomDetail,
      userId,
      room,
    ],
  );
  const Contesttype = () => {
    if (usertype === 'singleUser') {
      return (
        <View>
          <View style={style.ContestantInfo}>
            <View>
              <UserProfile
                 url={{ uri: `${ApiConstants.API_MEDIA}${encodeURIComponent(competitionParticipants[0]?.profilepic)}` }}
                name={competitionParticipants[0]?.username}
                 type={ competitionParticipants[0]?.interest.length ==1 ? competitionParticipants[0]?.interest[0].name :  ''
                 ||  competitionParticipants[0]?.interest.length >= 1 ? competitionParticipants[0]?.interest[0]?.name + ' '+'/'+' '+
                     competitionParticipants[0]?.interest[1]?.name : ''
                 }
                 // type={competitionParticipants[0]?.interest[0]?.name}
              />
            </View>
            <Image source={Seprator} style={style.seperatorImg}/>
            <View>
              <UserProfile
                url={{ uri: `${ApiConstants.API_MEDIA}${encodeURIComponent(competitionParticipants[1]?.profilepic)}` }}
                name={competitionParticipants[1]?.username}
                  // type={user?.interest.length == 1 ? user?.interest[0]?.name : ''
                  // || user?.interest.length >= 1 ? user?.interest[0]?.name + ' '+'/'+' '+ user?.interest[1]?.name : ''
                  // }
                type={ competitionParticipants[1]?.interest.length ==1 ? competitionParticipants[1]?.interest[0].name :  ''
                  ||  competitionParticipants[1]?.interest.length >= 1 ? competitionParticipants[1]?.interest[0]?.name + ' '+'/'+' '+
                    competitionParticipants[1]?.interest[1]?.name : ''
                }
              />
            </View>
          </View>
          <View style={style.BlackDiamondInfo}>
            <BlackDiamondView
              diamond={competitionParticipants[0]?.wallet?.blackDiamonds}
            />
            <Text
              style={[style.SubtitleText, {color: CustomTheme.colors.text}]}>
               Rounds {competitionDetail?.competitionOption?.rounds}
            </Text>
            <BlackDiamondView
              diamond={competitionParticipants[1]?.wallet?.blackDiamonds}
            />
          </View>
        </View>
      );
    } else if (type === 'team') {
      return (
        <View>
          <View style={style.TeamContestantInfo}>
            <TeamProfile />
            <Image source={Seprator} />
            <TeamProfile />
          </View>
          <View style={style.BlackDiamondInfo}>
            <BlackDiamondView />
            <Text
              style={[style.SubtitleText, {color: CustomTheme.colors.text}]}>
              2 Rounds
            </Text>
            <BlackDiamondView />
          </View>
        </View>
      );
    } else {
      return (
        <View style={style.MultiUserView}>
          <Image source={Seprator} />
          <FlatList
            horizontal={true}
            data={UserData}
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => (
              <View style={style.multipleUserComponentView}>
                <UserProfile
                  url={item.url}
                  name={item.Username}
                  type={item.userType}
                />
                <BlackDiamondView style={style.multipleBlackdiamondStyle} />
              </View>
            )}
          />
        </View>
      );
    }
  };

  const voted = (id) =>{
      console.log("CH-Vote01ID",id)
        const voteCheck = competitionBeats.map((item)=>(
            item.id == id ?
            {...item, isVoted: true}
            : {...item, isVoted: false}) )
  // : item) )
        setCompetitionBeats(voteCheck)
    }
  const Vote = (id) => {
      // console.log("CH-VoteID",id)
    const postdata1 = {
      id,
      userId,
    };
    dispatch(
      actions.CompetitionBeatVoteAction(
        postdata1,
        async success => {
          console.log("491",success)
            // setVoteSuccess(success?.competitionBeatVote)
            // voted(id)
        },
        error => {
          console.log(error)
        },
      ),
    );
  };

  const RenderBeats = ({
    beats,
    //onViewStream,
    onVote,
    selfBeatVoteId,
    setBeatPlayingId,
    beatPlayingId,
  }) => {

    const [currentTrackId, setCurrentTrackId] = useState();
    const playerState = usePlaybackState();
    useEffect(() => {
      if (competitionEventReducer.action === COMPETITION_AD_STARTING) {
        TrackPlayer.stop();
      }
    }, [competitionEventReducer.action]);
    // useEffect(() => {
    //   if (playerState == TrackPlayer.STATE_READY || playerState == TrackPlayer.STATE_PAUSED) {
    //     TrackPlayer.play();
    //   }
    // }, [playerState]);
useEffect(()=>{
    console.log("CH-VoteIDBeatPlay",JSON.stringify(beats))

})
    return (
      <View>
        {/*<BeatPlay backGroundColor={style.Beat1} />*/}
        {/*{rows}*/}
          <FlatList
              nestedScrollEnabled={true}
               data={beats}
              extraData={beats}
              renderItem={({item}) => (
                  <View style={{}}>
                        <BeatPlay
                          item={item}
                          header={item?.beatName}
                          backGroundColor={style.Beat1}
                          music={item?.beatUrl}
                          subheader={item?.votes}
                          onpressevent ={() => onVote(item?.id)}
                          selfBeatVoteId={selfBeatVoteId}
                          id={item?.id}
                          setPlaying={(id) => {
                            setBeatPlayingId(id);
                          }}
                          beatPlayingId={beatPlayingId}
                           currentTrackId={currentTrackId}
                          playTrack={async (musicUrl, header, isstarted, id) => {
                            setCurrentTrackId(id);
                            const state = await TrackPlayer.getState();
                            if (playerState == 3) {
                              TrackPlayer.pause();
                            }else {
                              TrackPlayer.play();
                            }
                            if (state === TrackPlayer.STATE_PLAYING) {
                              await TrackPlayer.reset();
                              if (isstarted) return;
                            }
                            await TrackPlayer.add({
                              id: beatPlayingId,
                              url: `${ApiConstants.API_MEDIA}${encodeURIComponent(musicUrl)}`,
                              title: header,
                              artist: header,
                            });
                          }}
                        />
                  </View>
              )}
          />
      </View>
    );
  }

  return (
    <View>
      <ScrollView>
        <View style={style.maincontainer}>
          <View style={style.container}>
            <Image source={CompetitionBanner} style={style.BannerView} />
            <View
              style={[
                style.insideContainer,
                {backgroundColor: CustomTheme.colors.background},
              ]}>
              <Contesttype />
              <Text style={[style.titleText, {color: CustomTheme.colors.text}]}>
                Vote on a beat
              </Text>
              <RenderBeats
                beats={competitionBeats}
                //onViewStream={onViewStream}
                onVote={Vote}
                setBeatPlayingId={setBeatPlayingId}
                beatPlayingId={beatPlayingId}
                selfBeatVoteId={competitionSelfData?.beatVote?.id}
              />
              <Text style={[style.titleText, {color: CustomTheme.colors.text}]}>
                Audience
              </Text>
              <FlatList
                nestedScrollEnabled={true}
                data={competitionViewers}
                renderItem={({item}) => (
                  <View style={style.AudienceView}>
                    <UserProfile
                      url={{ uri: `${ApiConstants.API_MEDIA}${encodeURIComponent(item?.profilepic)}` }}
                      name={item.username}
                      type={item?.interest.length == 1 ? item?.interest[0]?.name : ''
                      || item?.interest.length >= 1 ? item?.interest[0]?.name + ' '+'/'+' '+ item?.interest[1]?.name : ''
                      }
                      // type={
                      //   item.interest[0]?.name + '/' + item.interest[1]?.name
                      // }
                      HorizontalView={style.DetailView}
                      style={style.flexDirection}
                    />
                  </View>
                )}
              />
            </View>
          </View>
        </View>
      </ScrollView>
      <ActionSheet ref={actionSheetRef}>
        <View style={style.actionsheet}>
          <Text style={style.titleText}>Select an image</Text>
          <Text
            onPress={() => setType('singleUser')}
            style={style.titleTextBlack}>
            One-to-One
          </Text>
          <Text onPress={() => setType('team')} style={style.titleTextBlack}>
            team
          </Text>
          <Text onPress={() => setType('abc')} style={style.titleTextBlack}>
            Multiple team
          </Text>
          <Text
            onPress={() => actionSheetRef.current?.hide()}
            style={style.titleTextBlack}>
            Cancel
          </Text>
        </View>
      </ActionSheet>
      {competitionStarted ? (
        <View style={style.afterstartedView}>
          <View style={[style.FooterButton, style.compstarted]}>
            <FlootingButton
              onPress={() => actionSheetRef.current?.setModalVisible()}
              isfinished={true}
            />
          </View>
          <View style={style.button}>
            <FooterButton
              onPress={() => navigation.navigate('CompetitionCanceled')}
              title={'Continue to competition'}
            />
          </View>
        </View>
      ) : (
        <View style={style.FooterButton}>
          <FlootingButton
            onPress={() => actionSheetRef.current?.setModalVisible()}
            isfinished={false}
            CompetitionStarted={setCompetitionStarted}
          />
        </View>
      )}
    </View>
  );
};
export default Details;
