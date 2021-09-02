import React, {useState, createRef} from 'react';
import {
  View,
  Text,
  Pressable,
  Image,
  Platform,
  ScrollView,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import style from './style';
import TextInput from 'src/components/TextInput';
import FooterButton from 'src/components/FooterButton';
import camera from 'src/assets/image/Camera.png';
import ActionSheet from 'react-native-actions-sheet';
import ImagePicker from 'react-native-image-crop-picker';
import {useDispatch} from 'react-redux';
import * as actions from 'src/store/action/localuserdataAction';
import * as mediaactions from 'src/store/action/media';
import CommonStyle from 'src/utils/styles';
import FlashMessage from 'src/components/FlashMessage';
import Colors from 'src/utils/theme';
import validate from 'src/utils/validation';

const actionSheetRef = createRef();

const Step1 = ({navigation}) => {
  const dispatch = useDispatch();
  const [imageurl, setimageurl] = useState(null);
  const [profile_photo, setPhoto] = useState(null);
  const [fullname, setfullname] = useState(null);
  const [username, setusername] = useState(null);

  const fromGallery = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(response => {
      setPhoto(response.path);
      actionSheetRef.current?.hide();
      const form = new FormData();
      form.append('media', {
        type: 'image/jpeg',
        uri: response.path,
        name: 'profile_photo.jpeg',
      });
      dispatch(
        mediaactions.media(
          form,
          res => {
            console.log(res.key), setimageurl(res.key);
          },
          e => {},
        ),
      );
    });
  };

  const fromCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    })
      .then(response => {
        setPhoto(response.path);
        actionSheetRef.current?.hide();
        const form = new FormData();
        form.append('media', {
          type: 'image/jpeg',
          uri: response.path,
          name: 'profile_photo.jpeg',
        });
        dispatch(
          mediaactions.media(
            form,
            res => {
              console.log(res.key), setimageurl(res.key);
            },
            e => {},
          ),
        );
      })
      .catch(err => {
        console.log('image error', err.message);
      });
  };
  const display = () => {
    const FullnameEmpty = validate('FullnameEmpty', fullname);
    const UsernameEmpty = validate('UsernameEmpty', username);
    if (FullnameEmpty !== null || UsernameEmpty !== null) {
      FlashMessage.displayMessage({
        message: FullnameEmpty || UsernameEmpty,
        bgColor: Colors.BACKGROUND_PRIMARY_DARK,
        //icon: 'circle',
        position: 'top',
      });
      return;
    } else {
      const params = {
        profilepic: imageurl,
        fullname: fullname,
        username: username,
      };
      return (
        navigation.navigate('Step2'), dispatch(actions.setuserdata(params))
      );
    }
  };

  return (
    <KeyboardAvoidingView
      style={CommonStyle.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}
      enabled={Platform.OS === 'ios' ? true : false}>
      <ScrollView contentContainerStyle={CommonStyle.container}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={style.maincontainer}>
            <View style={style.container}>
              <Text style={style.titleText}>Get your fame on!</Text>
              <Text numberOfLines={3} style={style.SubtitleText}>
                Add a profile so your friends know its you.
              </Text>
              <Pressable
                style={style.imageStyle}
                onPress={() => actionSheetRef.current?.setModalVisible()}>
                {profile_photo ? (
                  <Image
                    source={{uri: profile_photo}}
                    style={style.imageStyle}
                  />
                ) : (
                  <Image source={camera} />
                )}
              </Pressable>
              <ActionSheet ref={actionSheetRef}>
                <View style={style.actionsheet}>
                  <Text style={style.titleText}>Select an image</Text>
                  <Text
                    onPress={() => fromCamera()}
                    style={style.titleTextBlack}>
                    From Camera
                  </Text>
                  <Text
                    onPress={() => fromGallery()}
                    style={style.titleTextBlack}>
                    From Gallery
                  </Text>
                  <Text
                    onPress={() => actionSheetRef.current?.hide()}
                    style={style.titleTextBlack}>
                    Cancel
                  </Text>
                </View>
              </ActionSheet>
              <View style={style.devide}>
                <TextInput
                  multiline={false}
                  placeholder={'Full Name'}
                  secureTextEntry={false}
                  value={fullname}
                  onChangeText={value => setfullname(value)}
                />
              </View>
              <View style={style.devide}>
                <TextInput
                  multiline={false}
                  placeholder={'Username (min 15 chars.)'}
                  secureTextEntry={false}
                  value={username}
                  onChangeText={value => setusername(value)}
                />
              </View>
            </View>
            <View style={style.button}>
              <FooterButton title={'Continue'} onPress={() => display()} />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
export default Step1;
