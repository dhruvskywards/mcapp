import React, {useEffect, useRef, useState} from 'react';
import {Text, View, Image,TouchableOpacity} from 'react-native';
import styles from './style';
import {useTheme} from '@react-navigation/native';
import mic from '../../assets/image/mic.png'
import {NodeCameraView, NodePlayerView} from "react-native-nodemediaclient";
import style from "../../screens/Auth/CompetitionSabLobby/style";
import {COMPETITION_PARTICIPANT_STARTED} from "../../store/actionType";
import mute from '../../assets/image/mute.png'
import {useSelector} from "react-redux";


const UserChatProfile = ({style, HorizontalView, url, name, type,micState}) => {
    const competitionEventReducer = useSelector(
        state => state.competitionEventReducer,
    );
    const CustomTheme = useTheme();
    const [isplaying, setIsPlaying] = useState(true);
    const [ismute, setIsmute] = useState(true);

  return (

    <View style={[styles.MainContainer, style]}>

        <View>
              <Image source={url} style={styles.imageView} />
              <TouchableOpacity style={styles.micImgCont}
                   onPress={()=>{
                       micState(ismute)
                       setIsmute(!ismute)
                   }}
              >
                  {ismute ? (<Image source={mic}/> ) : ( <Image source={mute} /> )}
              </TouchableOpacity>
        </View>
      <View style={[styles.DetailsView, HorizontalView]}>
        <Text style={[styles.nameText, {color: CustomTheme.colors.text}]}>
          {name}
        </Text>
        <Text style={styles.typeText}>{type}</Text>
      </View>


    </View>
  );
};

export default UserChatProfile;
