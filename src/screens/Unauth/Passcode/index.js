import React, {useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import styles from './style';
import Header from 'src/components/Header/Header';
import FooterButton from 'src/components/FooterButton';
import CommonStyle from 'src/utils/styles';
import TextInput from 'src/components/TextInput';
import FlashMessage from 'src/components/FlashMessage';
import {setSessionData} from 'src/utils/asyncStorage';
import Colors from 'src/utils/theme';

const Passcode = ({navigation, route}) => {
  const [passcode, setPasscode] = useState('');
  const confirmation = route.params.confirmation;

  const verify = async () => {
    if (passcode.length == 6) {
      confirmation
        .confirm(passcode)
        .then(response => {
          setSessionData('authtoken', response.user.uid);
          response?.additionalUserInfo?.isNewUser &&
            navigation.navigate('UserProfile');
        })
        .catch(error => {
          FlashMessage.displayMessage({
            message: error,
            bgColor: Colors.BACKGROUND_PRIMARY_DARK,
            //icon: 'circle',
            position: 'top',
          });
        });
    } else {
      FlashMessage.displayMessage({
        message: 'Please enter a 6 digit OTP code.',
        bgColor: Colors.BACKGROUND_PRIMARY_DARK,
        //icon: 'circle',
        position: 'top',
      });
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.insideContainer}>
        <Header onPress={() => navigation.goBack()} />
        <Text style={CommonStyle.unAuthtitle}>Sign Up</Text>
        <Text style={styles.titleSub}>
          You should have received a text message with a passcode, please enter
          it below.
        </Text>
        <TextInput
          multiline={false}
          placeholder={'Enter passcode'}
          onChangeText={passcodeValue => setPasscode(passcodeValue)}
          value={passcode}
          secureTextEntry={false}
        />
        <View style={CommonStyle.rowContainer}>
          <Text style={styles.titlePrivacy}>
            I didn’t receive a text, please{' '}
          </Text>
          <Text style={styles.titlePrivacyBorder}>send again!</Text>
        </View>
      </View>
      <View style={styles.button}>
        <FooterButton
          title={'Continue'}
          onPress={() => {
            verify();
          }}
        />
      </View>
    </ScrollView>
  );
};
export default Passcode;
