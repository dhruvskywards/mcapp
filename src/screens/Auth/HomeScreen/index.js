import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';
import Modal from 'react-native-modal';
import style from './style';
import {TourGuideZone} from 'rn-tourguide';
import Flash from 'src/assets/image/Flash.png';
import BlackDiamond from 'src/assets/image/BlackDiamond.png';
import Message from 'src/assets/image/Message.png';
import SmallLogo from 'src/assets/image/SmallLogo.png';
import TopTabBar from 'src/components/TopTabBar';
import theme from 'src/utils/theme';
import ModelCompomemt from 'src/components/ModalComponent';
import {scale} from 'react-native-size-matters';
import {useTheme} from '@react-navigation/native';
import CommonStyle from 'src/utils/styles';

const HomeScreen = ({}) => {
  const CustomTheme = useTheme();
  // const [profile_photo, setPhoto] = useState(null);
  const [isVisible] = useState(true);
  // const [nextModel, setnextModel] = useState(false);
  const [WalkthroughModelNo, setWalkthroughModelNo] = useState(1);
  const [tabNo, setTabNo] = useState();
  const ChangeWalkThrough = no => {
    setWalkthroughModelNo(no);
  };
  const RenderWalkthrouhWindow = () => {
    switch (WalkthroughModelNo) {
      case 1:
        return (
          <Modal
            animationIn="fadeIn"
            backdropColor={theme.BLACK}
            backdropOpacity={0.3}
            isVisible={true}>
            <View style={CommonStyle.container}>
              <ModelCompomemt
                tringlestyle={{
                  left: scale(12),
                }}
                onPress={() => ChangeWalkThrough(2)}
                style={style.flashmodel}
                imageurl={Flash}
                TextContains={'View and respond to MC challenges.'}
              />
            </View>
          </Modal>
        );
      case 2:
        return (
          <Modal
            animationIn="fadeIn"
            backdropColor={theme.BLACK}
            backdropOpacity={0.3}
            isVisible={true}>
            <View style={CommonStyle.container}>
              <ModelCompomemt
                tringlestyle={{left: scale(45)}}
                onPress={() => ChangeWalkThrough(3)}
                style={style.DiamondModel}
                imageurl={BlackDiamond}
                TextContains={
                  'Black Diamonds are essential, level up & Cash out.'
                }
              />
            </View>
          </Modal>
        );
      case 3:
        return (
          <Modal
            animationIn="fadeIn"
            backdropColor={theme.BLACK}
            backdropOpacity={0.3}
            isVisible={true}>
            <View style={CommonStyle.container}>
              <ModelCompomemt
                tringlestyle={{left: scale(195)}}
                onPress={() => ChangeWalkThrough(4)}
                style={style.MessageModel}
                imageurl={Message}
                TextContains={'View and respond to MC messages.'}
              />
            </View>
          </Modal>
        );
      case 4:
        return (
          <Modal
            style={{
              flex: 1,
              margin: 0,
              alignItems: 'flex-end',
              justifyContent: 'flex-end',
              alignSelf: 'flex-end',
            }}
            animationIn="fadeIn"
            backdropColor={theme.BLACK}
            backdropOpacity={0.3}
            isVisible={true}>
            <View style={CommonStyle.container}>
              <ModelCompomemt
                tringlestyle={{top: scale(1)}}
                onPress={() => ChangeWalkThrough(5)}
                style={style.BottomModel}
                imageurl={Flash}
                TextContains={'View and edit your profile and settings.'}
              />
            </View>
          </Modal>
        );
      case 5:
        return (
          <Modal
            style={{
              flex: 1,
              margin: 0,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            animationIn="fadeIn"
            backdropColor={theme.BLACK}
            backdropOpacity={0.3}
            isVisible={true}>
            <View style={CommonStyle.container}>
              <ModelCompomemt
                tringlestyle={{top: scale(1)}}
                onPress={() => ChangeWalkThrough(6)}
                style={style.BottomModel}
                imageurl={Flash}
                TextContains={'Watch and start a broadcast.'}
              />
            </View>
          </Modal>
        );
      case 6:
        return (
          <Modal
            style={{margin: 0, alignItems: 'center', justifyContent: 'center'}}
            animationIn="fadeIn"
            backdropColor={theme.BLACK}
            backdropOpacity={0.3}
            isVisible={isVisible}>
            <View style={CommonStyle.container}>
              <ModelCompomemt
                tringlestyle={{top: scale(1)}}
                onPress={() => ChangeWalkThrough(7)}
                style={style.BottomModel}
                imageurl={Flash}
                TextContains={
                  'Create a post and collect 10 Black Diamonds now!'
                }
              />
            </View>
          </Modal>
        );
      case 7:
        return (
          <Modal
            style={{margin: 0, alignItems: 'center', justifyContent: 'center'}}
            animationIn="fadeIn"
            backdropColor={theme.BLACK}
            backdropOpacity={0.3}
            isVisible={isVisible}>
            <View style={CommonStyle.container}>
              <ModelCompomemt
                tringlestyle={{top: scale(1)}}
                onPress={() => setWalkthroughModelNo(8)}
                style={style.BottomModel}
                imageurl={Flash}
                TextContains={'View your notifications.'}
              />
            </View>
          </Modal>
        );
      default:
        <></>;
    }
  };
  return (
    <View
      style={[
        style.container,
        {backgroundColor: CustomTheme.colors.background},
      ]}>
      <View style={style.header}>
        <View style={style.insideHeader}>
          <TourGuideZone zone={1} borderRadius={16}>
            <View>
              <Image source={Flash} />
            </View>
          </TourGuideZone>
          <View style={style.BlackDiamondContainer}>
            <Image source={BlackDiamond} />
            <Text style={style.titleText}>465K</Text>
          </View>
        </View>
        <View style={style.logoView}>
          <Image source={SmallLogo} />
        </View>
        <View style={style.MessageView}>
          <Image source={Message} />
        </View>
      </View>
      <TopTabBar setTabNo={setTabNo} />
    </View>
  );
};
export default HomeScreen;
