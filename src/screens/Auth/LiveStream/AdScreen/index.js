import React,{useEffect,useState} from 'react';
import {View, Text,Dimensions, ScrollView,Image,TouchableOpacity} from 'react-native';
import style from './style';
import {Verified} from 'src/assets/image/Verified.png';
import Video from 'react-native-video';
import { useSelector } from "react-redux";
import CountDown from 'react-native-countdown-component';
import ApiConstants from "src/utils/ApiConstants";
const AdScreen = () => {

  const [ads, setAds] = useState({});
  const competitionEventReducer = useSelector((state) => state.competitionEventReducer);

  useEffect(() => {
    setAds(competitionEventReducer.ads);
  }, [competitionEventReducer.ads]);
  const CountDownComponent = ({ counto }) => {
    return (
      <CountDown
        size={10}
        until={counto}
        digitStyle={{ backgroundColor: 'transparent' }}
        digitTxtStyle={{ fontWeight: 'bold', fontSize: 12, color: 'white' }}
        // timeLabelStyle={{color: 'red',fontSize: 12 }}
        separatorStyle={{ color: 'white', fontSize: 12 }}
        timeToShow={['M', 'S']}
        timeLabels={{ m: null, s: null }}
        showSeparator
      />
    );
  };
  return (
    <View style={style.maincontainer}>
      <Video
        source={{
            uri: `${ApiConstants.API_MEDIA}${encodeURIComponent(ads?.preRollUrl ? ads?.preRollUrl : ads?.roundAdUrl)}`,
           //uri: `https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4`,
        }} // Can be a URL or a local file.
        style={style.backgroundVideo}
        resizeMode="cover"
        shouldPlay
        useNativeControls={true}
        repeat={false}
        // onLoad={handleLoad}
        // onProgress={handleProgress}
        // onEnd={handleEnd}
      />

      <View style={style.adsCont}>
        <View style={style.adslogo}>
          <Image
          source={{
            uri: 'https://i.pinimg.com/originals/07/2f/fd/072ffddbcb037a91cc782cf3b6d8ad0f.jpg',
            }}
            style={style.adslogoImg}
          />
        </View>
        <View style={style.adsTxt}>
          <Text style={style.adstitleText}>Adidas</Text>
          <Text style={style.adsSubtitleText}>Brand</Text>
        </View>
        <View style={style.checkImg}>
          <Image source={Verified} color={'white'} size={20} />
        </View>
        <View style={style.nextRoundCont}>
          <View style={style.nextCont}>
            <Text style={style.nextRoundTxt}>NEXT ROUND BEGIN IN</Text>
            <CountDownComponent counto={ads?.duration} />
          </View>
          <View style={style.sponsoredCont}>
            <View style={style.sponsoredBtn}>
              <Text style={style.sponsoredBtnTxt}>Sponsored</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={style.footerBtnCont}>
        <TouchableOpacity style={style.footerBtn}>
          <Text style={style.footerBtnTxt}>Shop now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

};
export default AdScreen;
