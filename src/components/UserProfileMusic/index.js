import React, { useEffect, useRef, useState } from "react";
import { View, Text, ScrollView, Image, FlatList, Pressable, TouchableOpacity } from "react-native";
import style from './style';
import add_music from '../../assets/image/add_music.png'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from "../BeatPlay/style";
import { scale } from "react-native-size-matters";
import theme from "../../utils/theme";
import DocumentPicker from 'react-native-document-picker';
import * as actions from "../../store/action/AddTrack";
import { useDispatch } from "react-redux";
import {useNavigation} from '@react-navigation/native';
import * as mediaactions from "../../store/action/media";
import AdTrack from "../AdTrack";
const data = [{id:1},{id:2},{id:3},{id:4},{id:5}]

const UserProfileMusic = (uid) => {
  const navigation = useNavigation();
  useEffect(()=>{
    setTimeout(()=>{
      console.log('res.key==>audio', JSON.stringify(audiourl));
    },3000)

  })
  const [media, setMedia] = useState({
    name: null,
    type: null,
    uri: null,
  });
  const [isplaying, setIsPlaying] = useState(false);
  const [audiourl, setaudiourl] = useState();
  const dispatch = useDispatch();

  const Uploadmedia11 = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.audio],
      });
      console.log('res', res[0]?.name);
      const form = new FormData();
      form.append('media', {
        type: res[0].type,
        uri: res[0].uri,
        name: res[0].name,
      });
      console.log('form', JSON.stringify(form));
      dispatch(
        mediaactions.media(
          form,
          res => {
            console.log('res.key==>', JSON.stringify(res)),
              setMedia({name: form?.name, type: form?.type, uri: res?.key}),
              setaudiourl(res?.key);
            Uploadmedia();
          },
          e => {
            console.log("res.key==>err",JSON.stringify(e))
          },
        ),
        console.log('audiourl==>', JSON.stringify(audiourl)),

        console.log('Media==>', JSON.stringify(media)),
      );
    } catch (err) {
      console.log('document picker error : ', err);
    }
  };
  const Uploadmedia = async () => {

      const postdata = { id:uid };
      const trackInfo = {
        caption: "test",
        tag: "test",
        contentUrl: [
          audiourl
        ],
        privacy: true,
        comment: true,
        accessibility: true,
        contentAudio: media
          ? {
            content_audioName: media?.name,
            tag: null,
            audioUrl: media?.uri,
            privacy: true,
            allowLease: true,
            leaseAmount: 0,
            allowDownload: true,
            downloadAmount: 0,
            legalUrl: null,
            stemsUrl: null,
          }
          : null,

      }
      dispatch(
        actions.AddTrack(
          trackInfo,
          async success => {
            console.log(success)

          },
          error => {
            console.log(error)
          },
        ),
      );

  };

  return (
    <ScrollView contentContainerStyle={style.scrollViewContainer}>
      <View style={style.maincontainer}>
       <TouchableOpacity style={style.addTrackCont}
        onPress={()=>{navigation.navigate('AdTrack')}}
       >
         <View style={style.addTrackImgCont}>
           <Image source={add_music} style={style.addTrackImg}/>
         </View>
         <View style={style.addTrackTxtCont}>
           <Text style={style.trackTitleTxt}>Add a track</Text>
           <Text style={style.trackSubTitleTxt}>MP3 or WAV format Only</Text>
         </View>
       </TouchableOpacity>

        <View>
          <FlatList
            data={data}
            style={{}}
            renderItem={()=> (
              <View style={style.addTrackCont}>
                  <View style={style.playView}>
                    <TouchableOpacity style={style.innerView} onPress={()=>{setIsPlaying(!isplaying)}}>
                    {/*<Image source={add_music} style={style.addTrackImg}/>*/}
                    {isplaying ? (
                      <FontAwesome name="pause" size={scale(7)} color={theme.WHITE} />
                    ) : (
                      <FontAwesome name="play" size={scale(7)} color={theme.WHITE} />
                    )}
                  </TouchableOpacity>
                </View>
                  {/*<View style={styles.innerView}>*/}

                <View style={style.addTrackTxtCont}>
                  <Text style={style.trackTitleTxt}>Add a track</Text>
                  <Text style={style.trackSubTitleTxt}>MP3 or WAV format Only</Text>
                </View>
              </View>
            )}
          />
        </View>
      </View>
    </ScrollView>
  );
};
export default UserProfileMusic;
