import React, {useEffect, useState} from 'react';
import {View, ScrollView, Text, Image, Pressable} from 'react-native';
import style from './style';
import StoryHeader from '../../../../../components/StoryHeader';
import TextInput from '../../../../../components/TextInput';
import CustomRadioButton from '../../../../../components/CustomRadioButton';
import FooterButton from '../../../../../components/FooterButton';
import OutlinedTextInput from '../../../../../components/OutlinedTextInput';
import DocumentPicker from 'react-native-document-picker';
import * as mediaactions from 'src/store/action/media';
import * as PoststoryAction from '../../../../../store/action/PostStoryAction';
import * as NewPostAction from '../../../../../store/action/NewPostAction';
import {useDispatch} from 'react-redux';
import {getSessionData} from 'src/utils/asyncStorage';
import sessionKey from 'src/utils/const';
import theme from '../../../../../utils/theme';
import ApiConstants from 'src/utils/ApiConstants';

const PostStoryForm = ({navigation, route}) => {
  const dispatch = useDispatch();
  const storyimageUrl = route.params?.storyimage;
  const ContentType = route.params?.ContentType;
  console.log('ContentType==>', ContentType);
  const type = route.params?.type;
  const [caption, setcaption] = useState();
  const [userdata, setuserdata] = useState();
  const [media, setMedia] = useState({
    name: null,
    type: null,
    uri: null,
  });
  useEffect(async () => {
    const user = await getSessionData(sessionKey.userData);
    const personObject = JSON.parse(user);
    console.log('user', user);
    setuserdata(personObject);
  }, []);

  console.log('storyimageUrl==>', storyimageUrl);
  console.log('userdata==>', userdata?.id);
  const [audiourl, setaudiourl] = useState();
  const rightView = () => {
    return <Text style={style.txt}>Usd</Text>;
  };

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
      console.log('form', form);
      dispatch(
        mediaactions.media(
          form,
          res => {
            console.log('res.key==>', res?.key),
              setMedia({name: form?.name, type: form?.type, uri: res?.key}),
              setaudiourl(res?.key);
          },
          e => {},
        ),
        console.log('audiourl==>', audiourl),

        console.log('Media==>', media),
      );
    } catch (err) {
      console.log('document picker error : ', err);
    }
  };

  const Postdata = () => {
    if (ContentType === 'post') {
      const PostData = {
        caption: caption,
        userId: userdata?.id,
        tag: null,
        contentUrl: [storyimageUrl],
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
      };
      console.log('PostData==>', PostData);
      dispatch(
        NewPostAction.NewPostAction(
          PostData,
          success => {
            console.log(success);
          },
          error => {
            console.log(error);
          },
        ),
      );
    } else {
      const storydata = {
        title: caption,
        userId: userdata?.id,
        isSaved: true,
        storyUrl: storyimageUrl,
        storyAudio: {
          story_audioName: media.name,
          tag: null,
          audioUrl: media.uri,
          privacy: true,
          allowLease: true,
          leaseAmount: 0,
          allowDownload: true,
          downloadAmount: 0,
          legalUrl: null,
          stemsUrl: null,
        },
      };
      console.log('storydata==>', storydata);
      dispatch(
        PoststoryAction.PostStoryAction(
          storydata,
          success => {
            console.log(success);
          },
          error => {
            console.log(error);
          },
        ),
      );
    }
    navigation.navigate('HomeScreen');
  };
  return (
    <View style={style.maincontainer}>
      <ScrollView>
        <StoryHeader onPress={() => navigation.goBack()} color={theme.BLACK} />
        <View style={style.container}>
          <View style={style.captionView}>
            <Image
              source={{
                uri: `${ApiConstants.API_MEDIA}${encodeURIComponent(
                  storyimageUrl,
                )}`,
              }}
              style={style.ProfileImage}
            />
            <TextInput
              placeholder={'Write a caption'}
              onChangeText={data => setcaption(data)}
            />
            <View style={style.colorView} />
          </View>
          <View style={style.bottomline} />
          <View style={style.captionView}>
            <TextInput placeholder={'Tag People'} />
          </View>
          <View style={style.bottomline} />
          <View style={style.setupView}>
            <Text style={style.SubtitleText}>Privacy </Text>
            <CustomRadioButton
              Detials={'Post Globally (Will maximize post exposure)'}
            />
            <CustomRadioButton Detials={'Post only to connections'} />
          </View>
          <View style={style.setupView}>
            <Text style={style.SubtitleText}>Commenting </Text>
            <CustomRadioButton Detials={'Turn off commenting for this post'} />
          </View>
          <View style={style.setupView}>
            <Text style={style.SubtitleText}>Accessibility </Text>
            <CustomRadioButton Detials={'Write Alt Text'} />
            <Text style={style.Detialstext}>
              Alt text describes your photos for people with visual impairments.
              Alt text will be automatically created for your photos or you can
              choose to write your own.
            </Text>
          </View>
          <View style={style.audioView}>
            <Text style={style.SubtitleText}>Upload Audio (Optional) </Text>
            <Text style={style.Detialstext}>
              {media.name !== null
                ? media.name
                : 'MP3 or WAV format only accepted.'}
            </Text>
            <View style={style.AudioBtnView}>
              <Pressable style={style.button} onPress={() => Uploadmedia()}>
                <Text style={style.btnText}>Upload Media</Text>
              </Pressable>
              <View style={style.button}>
                <Text style={style.btnText}>Delete</Text>
              </View>
            </View>
          </View>
          <View style={style.setupView}>
            <Text style={style.SubtitleText}>Audio Name </Text>
            <TextInput placeholder={'Enter audio name'} />
            <View style={style.bottomline} />
          </View>
          <View style={style.setupView}>
            <Text style={style.SubtitleText}>Add audio tags </Text>
            <TextInput placeholder={'Create audio tags'} />
            <View style={style.bottomline} />
          </View>
          {/* <View style={style.setupView}>
            <Text style={style.SubtitleText}>
              Is this a beat? Put this beat up for sale?
            </Text>
            <Text style={style.Detialstext}>
              MC takes 5 - 10% from each transaction depending on your
              subscription level. Leasing your beat through mc studio is a great
              way to get your beats circulating through the platform. You must
              own 100% of the beat you're uploading & have proper documentation.
            </Text>
            <CustomRadioButton
              Detials={'Allow this beat to be leased through mc studio'}
            />
            <CustomRadioButton Detials={'Allow this beat to be downloaded'} />
          </View>
          <View style={style.setupView}>
            <Text style={style.SubtitleText}>Set price</Text>
            <Text style={style.lebeltext}>Set lease Amount </Text>
            <OutlinedTextInput
              placeholder={'Enter beat price'}
              rightView={() => rightView()}
            />
            <Text style={style.lebeltext}>Set download Amount (Optional)</Text>
            <OutlinedTextInput
              placeholder={'Enter beat price'}
              rightView={() => rightView()}
            />
          </View>
          <View style={style.setupView}>
            <Text style={style.SubtitleText}>Upload Legal</Text>
            <Text style={style.Detialstext}>
              This is required if you decide to allow this beat to be
              downloaded. PDF format is only accepted.
            </Text>
            <View style={style.button}>
              <Text style={style.btnText}>Upload Legal</Text>
            </View>
          </View>
          <View style={style.setupView}>
            <Text style={style.SubtitleText}>Upload Stems</Text>
            <Text style={style.Detialstext}>
              This is required if you decide to allow this beat to be
              downloaded. ZIP format are accepted.
            </Text>
            <View style={style.button}>
              <Text style={style.btnText}>Upload Stems</Text>
            </View>
          </View> */}
        </View>
      </ScrollView>
      <Pressable style={style.Footerbutton}>
        <FooterButton title={'Post'} onPress={() => Postdata()} />
      </Pressable>
    </View>
  );
};
export default PostStoryForm;
