import React, {useEffect, useState} from 'react';
import {useRef} from 'react';
import {View, Image, Pressable} from 'react-native';
import {RNCamera} from 'react-native-camera';
import style from './style';
import StoryHeader from '../../../../../components/StoryHeader';
import {useNavigation} from '@react-navigation/core';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {scale} from 'react-native-size-matters';
import theme from '../../../../../utils/theme';
import Flipcamera from '../../../../../assets/image/flipcamera.png';
import {useDispatch} from 'react-redux';
import {SET_STORY_SELECTED_URL} from '../../../../../store/actionType';

const Camera = ({ContentType}) => {
  const cameraRef = useRef();
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [captureImageUrl, setcaptureimageUrl] = useState('');
  const [cameraSettings, setCameraSettings] = useState({
    flashMode: RNCamera.Constants.FlashMode.on,
    cameraType: RNCamera.Constants.Type.back,
    isRecordingOn: false,
  });

  const takePicture = async () => {
    console.log('Display');
    if (cameraRef) {
      const options = {quality: 1, base64: true};
      const data = await cameraRef.current.takePictureAsync(options);
      setcaptureimageUrl(data.uri);
      console.log('data==>', data.uri);
      navigation.navigate('EditPhoto', {
        imageurl: data?.uri,
        ContentType: ContentType,
      });
    }
  };
  const rightView = () => {
    return (
      <View style={style.headerView}>
        <Pressable
          onPress={() => flashmodechange()}
          style={style.headerinnerview}>
          <MaterialIcons
            name={returnFlashIconByType(cameraSettings.flashMode)}
            size={scale(22)}
            color={theme.WHITE}
          />
        </Pressable>
      </View>
    );
  };
  const flashmodechange = () => {
    let flashTypes = [
      RNCamera.Constants.FlashMode.on,
      RNCamera.Constants.FlashMode.off,
      RNCamera.Constants.FlashMode.auto,
    ];
    let flashIndex =
      flashTypes.indexOf(cameraSettings.flashMode) + 1 > flashTypes.length - 1
        ? 0
        : flashTypes.indexOf(cameraSettings.flashMode) + 1;
    setCameraSettings(preState => {
      return {...preState, flashMode: flashTypes[flashIndex]};
    });
  };
  const returnFlashIconByType = type => {
    if (type === RNCamera.Constants.FlashMode.on) {
      return 'flash-on';
    } else if (type === RNCamera.Constants.FlashMode.off) {
      return 'flash-off';
    } else {
      return 'flash-auto';
    }
  };
  const flipcamera = () => {
    let cameraType = RNCamera.Constants.Type.front;
    if (cameraSettings.cameraType === RNCamera.Constants.Type.front) {
      cameraType = RNCamera.Constants.Type.back;
    }
    setCameraSettings(preState => {
      return {...preState, cameraType: cameraType};
    });
  };
  return (
    <View style={style.maincontainer}>
      <RNCamera
        ref={cameraRef}
        style={style.cameraview}
        type={cameraSettings.cameraType}
        flashMode={cameraSettings.flashMode}
        androidCameraPermissionOptions={{
          title: 'Permission to use camera',
          message: 'We need your permission to use your camera',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}
        androidRecordAudioPermissionOptions={{
          title: 'Permission to use audio recording',
          message: 'We need your permission to use your audio',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}>
        <StoryHeader
          onPress={() => navigation.goBack()}
          rightView={() => rightView()}
          color={theme.WHITE}
        />
      </RNCamera>
      <View style={style.bottomView}>
        <Pressable onPress={() => takePicture()} style={style.capture}>
          <View style={style.captureview} />
        </Pressable>
        <Pressable style={style.flipiconview} onPress={() => flipcamera()}>
          <Image source={Flipcamera} style={style.flipiconstyle} />
        </Pressable>
      </View>
    </View>
  );
};
export default Camera;
