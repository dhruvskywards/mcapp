import React, { useState } from "react";
import { View, Image, Text, Pressable, TouchableOpacity } from "react-native";
import FooterButton from '../FooterButton';
import {Rating, AirbnbRating} from 'react-native-ratings';
import {useDispatch, useSelector} from 'react-redux';
import styles from './style';
import * as actions from "../../store/action/Competition/CompetitionVoteAction";
const RateSheet = ({onPress, username, uri,competitionDetail,userId,participants}) => {
  const [starCount, setStarCount] = useState(0);
  const dispatch = useDispatch();
  const genreId = competitionDetail?.genre?.id;
  const onStarRatingPress = (value) => {
    // dispatch({ type: 'COMPETITION_VOTE_SELECT', payload: value });
    setStarCount(value);
  };
  const addVote = () => {
    const VotingData = {
      participantUserId: participants,
      viewerUserId: userId,
      round: 1,
      points: starCount,
      competitionId: competitionDetail.id,
       genreTypeId: genreId,
    };
    console.log("CH-RT00011",JSON.stringify(VotingData))
    dispatch(
      actions.CompetitionVoteAction(
        VotingData,
        async success => {
          console.log("CH-RT0011",JSON.stringify(success))
        },
        error => {
          console.log(error)
        },
      ),
    );
    // competitionVoteReducer(VotingData);
    // CommentVisible();
  };
  return (
    <View style={styles.mainContainer}>
      <View>
        <View style={styles.innerContainer}>
          <View>
            <Image source={uri} style={styles.iconView} />
          </View>
          <Text style={styles.titletext}>{username}</Text>
        </View>
        <Text style={styles.details}>
          Running out of points will disqualify you from the audience prize
          pool.
        </Text>
        <View style={styles.RateView}>
          <AirbnbRating
            type="star"
            count={5}
            size={30}
            rating={starCount}
            // selectedStar={(rating) => onStarRatingPress(rating)}
            onFinishRating={(rating) => onStarRatingPress(rating)}
            defaultRating={1}
            reviews={['10+', '100+', '250+', '350+', '500+']}
          />
        </View>
      </View>
      <TouchableOpacity style={styles.button} >
        <FooterButton onPress={addVote} title={'Submit'} />
      </TouchableOpacity>
    </View>
  );
};

export default RateSheet;
