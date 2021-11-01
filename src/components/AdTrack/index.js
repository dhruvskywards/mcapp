import React, { useEffect, useState } from "react";
import { View, ScrollView, Text, Image, TouchableOpacity, Pressable, AppState } from "react-native";
import style from './style';
import { useNavigation, useTheme } from "@react-navigation/native";
import close from "../../assets/image/close.png";
import user from "../../assets/image/user1.png"
import RadioButtonRN from 'radio-buttons-react-native';
import TextInput from '../TextInput'
import theme from "../../utils/theme";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { scale } from "react-native-size-matters";
import TrackPlayer, { STATE_PLAYING } from 'react-native-track-player';
import Slider from 'react-native-custom-slider';
import DocumentPicker from "react-native-document-picker";
import {useTrackPlayerProgress} from 'react-native-track-player';
import { useDispatch } from "react-redux";
import * as mediaactions from "../../store/action/media";
import * as actions from "../../store/action/AddTrack";
import ApiConstants from "../../utils/ApiConstants";
const AdTrack = () => {
    const CustomTheme = useTheme();
    const dispatch = useDispatch();
     const { position, buffered, duration } = useTrackPlayerProgress()
    const [isplaying, setIsPlaying] = useState(false);
    const [audiourl, setaudiourl] = useState();
    const [trackpostion, setTrackpostion] = useState(0);
    const data = [
        {label: 'Expose track to public'},{label: 'Expose only to your connections'}];
    const data2 = [
        {label: 'Allow this beat to be leased through mc studio'},{label: 'Allow this beat to be downloaded'}];
    const [media, setMedia] = useState({
        name: null,
        type: null,
        uri: null,
    });
    useEffect(async ()=>{
        await TrackPlayer.setupPlayer();
    })
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
    const Uploadmedia = async () => {
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
                      // setMedia({name: form?.name, type: form?.type, uri: res?.key}),
                       setMedia({name: res?.originalname, type: res?.mimetype, uri: res?.key}),
                      setaudiourl(res?.key);
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
    const Upldtoprofile = async () => {
        // const postdata = { id:uid };
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
    const audioPlay = async () =>{
        await TrackPlayer.setupPlayer();
        await TrackPlayer.add({
            id: 11,
            url: `${ApiConstants.API_MEDIA}${encodeURIComponent(audiourl)}`,
            title: "test",
            artist: "test",
        });
        //TrackPlayer.play()
        if(isplaying){
            await TrackPlayer.play();}
        else{
            await TrackPlayer.stop();
        }
        await TrackPlayer.getPosition().then((time) => {
            console.log('Position: ',time);
            setTrackpostion(time)
            //dispatch(updateAudioPlayTime(time));
        });
        await TrackPlayer.getDuration().then(duration => {
            console.log('Duration: ',duration);
        });

    }
    return (
      <View>
        <ScrollView>
            <View style={style.maincontainer}>
                <View style={{padding:20}}>
                <Image source={close} style={{tintColor:'#000'}}/>
                <View style={{flexDirection:'row',marginTop:20,borderBottomWidth:1,alignItems:'center'}}>
                    <Image source={user} style={{height:36,width:36,resizeMode:'contain'}}/>
                    <TextInput
                        customStyle={{}}
                        placeholder={"Track Name"}
                    />
                </View>
                <View style={{flexDirection:'row',marginTop:20,borderBottomWidth:1,alignItems:'center'}}>
                    <TextInput
                        customStyle={{}}
                        placeholder={"Create track tags"}
                    />
                </View>
                <Text style={[style.titleTxt,{marginTop:scale(30),}]}>Privacy settings</Text>
                <RadioButtonRN
                    style={style.radiobtn}
                    box={false}
                    data={data}
                    textStyle={style.RadioBtnItemText}
                    deactiveColor={theme.TEXT_VARAINT_1}
                    activeColor={theme.BLACK}
                    //selectedBtn={value => setgender(value)}
                />
                </View>
                <View style={style.uploadCont}>
                    <Text style={[style.titleTxt,{marginTop:scale(10),}]}>Upload Track</Text>
                    <Text style={style.subtitleTxt}>MP3 or WAV format only accepted.</Text>
                    <View style={{flexDirection:'row',marginTop:20}}>
                        <TouchableOpacity style={[style.Button,{backgroundColor:CustomTheme.colors.card}]}
                        onPress={()=>{Uploadmedia()}}
                        >
                            <Text style={[style.btnTxt,{color:CustomTheme.colors.text}]}>Upload Media</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[style.Button,{backgroundColor:CustomTheme.colors.primary}]}>
                            <Text style={[style.btnTxt,{color:CustomTheme.colors.text}]}>Delete</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={style.playTrack}>
                        <View style={{justifyContent:'flex-end'}}>
                            {audiourl !== null ?(
                              <Text style={[style.trackdurationTxt,{width:230}]}>{media?.name}</Text>
                            ):(
                              <Text>--</Text>
                                )}
                            <Text>--</Text>
                            <View style={{flexDirection:'row',alignItems:"center"}}>
                            <Slider
                              //value={trackpostion}
                              style={{height:25}}
                              thumbStyle={{justifyContent: 'center', alignItems: 'center'}}
                              trackStyle={style.sliderTrack}
                              customThumb={<View style={style.sliderThumb} />}
                            />
                            <Text style={[style.trackdurationTxt,{marginLeft:5}]}>{position}</Text>
                        </View>
                        </View>
                        <Pressable
                          onPress={ async () => {
                               setIsPlaying(!isplaying);
                               audioPlay();
                          }}
                          style={[style.playView]}>
                            <View style={style.innerView}>
                                {isplaying ? (
                                  <FontAwesome name="pause" size={scale(10)} color={'#DCDCDC'} />
                                ) : (
                                  <FontAwesome name="play" size={scale(10)} color={'#DCDCDC'} />
                                )}
                            </View>
                        </Pressable>
                    </View>
                    {/*<View>*/}
                    {/*    <Text>Track progress: {position} seconds out of {duration} total</Text>*/}
                    {/*    <Text>Buffered progress: {buffered} seconds buffered out of {duration} total</Text>*/}
                    {/*</View>*/}
                </View>
                <View style={style.uploadThumbCont}>
                    <Text style={[style.titleTxt,{marginTop:scale(10),}]}>Upload Thumbnail</Text>
                    <View style={[style.thumbimgCont,{marginTop:20}]}><Image  style={style.img}/></View>
                    <TouchableOpacity style={[style.Button,{backgroundColor:CustomTheme.colors.card,marginTop:scale(20)}]}>
                        <Text style={[style.btnTxt,{color:CustomTheme.colors.text}]}>Upload Media</Text>
                    </TouchableOpacity>
                    <Text style={[style.titleTxt,{marginTop:scale(20),}]}>Put this track up for sale</Text>
                    <Text style={style.subtitleTxt}>MC takes 5 - 10% from each transaction depending on your subscription level. Leasing your beat through mc studio is a great way to get your beats circulating through the platform. You must own 100% of the beat you're uploading & have proper documentation.</Text>
                    <RadioButtonRN
                      style={style.radiobtn}
                      box={false}
                      data={data2}
                      textStyle={style.RadioBtnItemText}
                      deactiveColor={theme.TEXT_VARAINT_1}
                      activeColor={theme.BLACK}
                      //selectedBtn={value => setgender(value)}
                    />
                    <Text style={[style.titleTxt,{marginTop:scale(20),}]}>Set price</Text>
                    <Text style={[style.subtitlePriceTxt,{marginTop:scale(10)}]}>Set lease Amount </Text>
                    <View style={style.priceTextinputCont}>
                        <TextInput
                           customStyle={{width:'85%'}}
                          placeholder={"Enter beat price"}
                        />
                        <Text style={style.subtitlePriceTxt}>USD</Text>
                    </View>
                    <View style={{flexDirection:'row',marginTop:scale(20)}}>
                        <Text style={style.subtitlePriceTxt}>Set lease Amount </Text>
                        <Text style={[style.subtitlePriceTxt,{color:'#C7C7C7'}]}>(Optional) </Text>
                    </View>

                    <View style={style.priceTextinputCont}>
                        <TextInput
                          customStyle={{width:'85%'}}
                          placeholder={"Enter beat price"}
                        />
                        <Text style={style.subtitlePriceTxt}>USD</Text>
                    </View>
                    <Text style={[style.titleTxt,{marginTop:scale(30),}]}>Upload Legal</Text>
                    <Text style={style.subtitleTxt}>This is required if you decide to allow this beat to be downloaded. PDF format is only accepted.</Text>
                    <TouchableOpacity style={[style.Button,{backgroundColor:CustomTheme.colors.card,marginTop:scale(20)}]}>
                        <Text style={[style.btnTxt,{color:CustomTheme.colors.text}]}>Upload Media</Text>
                    </TouchableOpacity>
                    <Text style={[style.titleTxt,{marginTop:scale(30),}]}>Upload Stems</Text>
                    <Text style={style.subtitleTxt}>This is required if you decide to allow this beat to be downloaded. ZIP format are accepted.</Text>
                    <TouchableOpacity style={[style.Button,{backgroundColor:CustomTheme.colors.card,marginTop:scale(20)}]}>
                        <Text style={[style.btnTxt,{color:CustomTheme.colors.text}]}>Upload Media</Text>
                    </TouchableOpacity>

                </View>

            </View>
        </ScrollView>
            <TouchableOpacity style={style.footerBtn}
                //onPress={()=>{Upldtoprofile()}}
            >
                <Text style={style.footerBtnTxt}>Post track to profile</Text>
            </TouchableOpacity>
      </View>

    );
};
export default AdTrack;
