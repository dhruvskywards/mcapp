import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView, Pressable, Dimensions} from 'react-native';
import styles from './style';
import FooterButton from 'src/components/FooterButton';
import Header from 'src/components/Header/Header';
import Colors from 'src/utils/theme';
import PhoneInputtext from 'src/components/PhoneInputtext';
import TextInput from 'src/components/TextInput';
import Icon from 'react-native-vector-icons/Ionicons';
import CheckIcon from 'react-native-vector-icons/FontAwesome';
import CommonStyle from 'src/utils/styles';
import validate from 'src/utils/validation';
import {BarPasswordStrengthDisplay} from 'react-native-password-strength-meter';
import {scale} from 'react-native-size-matters';
import fireAuth from '@react-native-firebase/auth';
import FlashMessage from 'src/components/FlashMessage';
import {setSessionData} from 'src/utils/asyncStorage';
import {useDispatch, useSelector} from 'react-redux';
import * as actions from 'src/store/action/localuserdataAction';

const Signup = ({navigation}) => {
  const dispatch = useDispatch();
  const phoneInput = React.useRef(null);
  const [mail, setMail] = useState('');
    const [firebaseId, setFirebaseId] = useState();
  const [password, setPassword] = useState('');
  const [hidePass, setHidePass] = useState(true);
  const [emailView, setEmailView] = useState(false);
  const [phoneNoView, setPhoneNoView] = useState(true);
  const [phoneNo, setPhoneNo] = useState('');
  const [formattedPhoneNo, setFormattedPhoneNo] = useState('');
  const [check, setCheck] = useState(false);
  const [valid, setValid] = useState(true);
  const WIDTH = Dimensions.get('window').width / scale(1.03);


  const registerWithEmail = async () => {

    const emailError = validate('email', mail);
    const passwordError = validate('password', password);
    const checkError = validate('check', check);
    const params = {
       email: mail,
        firebaseId : firebaseId
    };
    if (emailError !== null || passwordError !== null || checkError !== null) {
      FlashMessage.displayMessage({
        message: emailError || passwordError || checkError,
        bgColor: Colors.BACKGROUND_PRIMARY_DARK,
        //icon: 'circle',
        position: 'top',
      });
      return;
    } else {
      try {
            fireAuth()
          .createUserWithEmailAndPassword(mail, password)
          .then(res => {
              setFirebaseId(res?.user?.uid)
              console.log('firebaseID', JSON.stringify(res));
            console.log('async data', res.user.email);
            setSessionData('authtoken', res.user.email);
            // setSessionData('emailid', mail);
            res?.additionalUserInfo?.isNewUser &&
              navigation.navigate('UserProfile');
            dispatch(actions.setuserdata({ email: mail,
                firebaseId : res?.user?.uid}));
          })
          .catch(error => {
            if (error.code === 'auth/email-already-in-use') {
              FlashMessage.displayMessage({
                message: 'That email address is already in use!',
                bgColor: Colors.BACKGROUND_PRIMARY_DARK,
                //icon: 'circle',
                position: 'top',
              });
            }
            if (error.code === 'auth/invalid-email') {
              FlashMessage.displayMessage({
                message: 'That email address is invalid!',
                bgColor: Colors.BACKGROUND_PRIMARY_DARK,
                //icon: 'circle',
                position: 'top',
              });
            }

            console.error(error);
          });
      } catch (e) {
        FlashMessage.displayMessage({
          message: e.message,
          bgColor: Colors.BACKGROUND_PRIMARY_DARK,
          //icon: 'circle',
          position: 'top',
        });
      }
    }

  };
  const registerWithPhoneNo = async () => {
    if (valid) {
      fireAuth()
        .signInWithPhoneNumber(formattedPhoneNo)
        .then(confirmation => {
          navigation.navigate('Passcode', {
            confirmation,
          });
        })
        .catch(error => {
          FlashMessage.displayMessage({
            message: error.message,
            bgColor: Colors.BACKGROUND_PRIMARY_DARK,
            //icon: 'circle',
            position: 'top',
          });
        });
    } else {
      FlashMessage.displayMessage({
        message: 'Invalid Phone Number',
        bgColor: Colors.BACKGROUND_PRIMARY_DARK,
        //icon: 'circle',
        position: 'top',
      });
    }
  };

  const rightView = () => {
    return (
      <View style={styles.tabContainer}>
        <Pressable
          onPress={() => {
            setPhoneNoView(true);
            setEmailView(false);
          }}
          style={[
            styles.phoneMenu,
            {
              backgroundColor: phoneNoView
                ? Colors.BLACK_VARAINT_3
                : Colors.BACKGROUND_VARIANT_2,
            },
          ]}>
          <Text
            style={[
              styles.titleTab,
              {
                color: !phoneNoView
                  ? Colors.BLACK_VARAINT_3
                  : Colors.BACKGROUND_VARIANT_2,
              },
            ]}>
            Phone Number
          </Text>
        </Pressable>
        <Pressable
          onPress={() => {
            setEmailView(true);
            setPhoneNoView(false);
          }}
          style={[
            styles.emailMenu,
            {
              backgroundColor: !emailView
                ? Colors.BACKGROUND_VARIANT_2
                : Colors.BLACK_VARAINT_3,
            },
          ]}>
          <Text
            style={[
              styles.titleTab,
              {
                color: emailView
                  ? Colors.BACKGROUND_VARIANT_2
                  : Colors.BLACK_VARAINT_3,
              },
            ]}>
            Email
          </Text>
        </Pressable>
      </View>
    );
  };

  const bottomView = () => {
    return (
      <View>
        <View style={styles.privacyView}>
          <Pressable
            onPress={() => {
              setCheck(!check);
            }}
            style={styles.checkBoxView}>
            {check && (
              <CheckIcon
                name={'check'}
                size={scale(15)}
                style={styles.checkBox}
                color={Colors.BLACK}
              />
            )}
          </Pressable>
          <Text style={styles.titleTerm}>TERMS & CONDITIONS</Text>
        </View>
        <View style={CommonStyle.rowContainer}>
          <Text style={styles.titlePrivacy}>By signing up I accept the </Text>
          <Text style={styles.titlePrivacyBorder}>Terms of Use.</Text>
        </View>
        <View style={CommonStyle.rowContainer}>
          <Text style={styles.titlePrivacy}>
            I have read and understood the
          </Text>
          <Text style={styles.titlePrivacyBorder}>Privacy Policy.</Text>
        </View>
      </View>
    );
  };
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Header
        rightView={() => rightView()}
        onPress={() => navigation.goBack()}
      />
      <View style={styles.insideContainer}>
        <Text style={styles.title}>Sign Up</Text>
        {phoneNoView ? (
          <Text style={styles.PhonetitleSub}>
            You may receive SMS updates from MC and opt out at any time.
          </Text>
        ) : (
          <Text style={styles.emailtitleSub}>Enter your email</Text>
        )}
        {phoneNoView ? (
          <View style={styles.topContainer}>
            <PhoneInputtext
              ref={phoneInput}
              referenceId={phoneInput}
              defaultValue={phoneNo}
              onChangeText={text => {
                setPhoneNo(text);
                const checkValid = phoneInput.current?.isValidNumber(text);
                checkValid && setValid(checkValid);
              }}
              onChangeFormattedText={text => {
                setFormattedPhoneNo(text);
              }}
              valid={valid}
            />
          </View>
        ) : (
          <View style={styles.topContainer}>
            <TextInput
              multiline={false}
              placeholder={'Email'}
              onChangeText={mail => setMail(mail)}
              value={mail}
              secureTextEntry={false}
            />
            <View style={styles.passwordStyle}>
              <TextInput
                customStyle={styles.textInput}
                multiline={false}
                placeholder={'Password (min 6 chars.)'}
                // eslint-disable-next-line no-shadow
                onChangeText={password => setPassword(password)}
                value={password}
                secureTextEntry={hidePass ? true : false}
              />
              <Icon
                name={hidePass ? 'ios-eye-off' : 'ios-eye'}
                size={scale(18)}
                style={styles.passwordEye}
                color={Colors.SILVER_ICON_COLOR}
                onPress={() => setHidePass(!hidePass)}
              />
            </View>
            <Text style={styles.titlePassword}>Password Strength:</Text>
            <BarPasswordStrengthDisplay
              password={password}
              labelVisible
              width={WIDTH}
              minLength={0}
              barStyle={styles.barStyle}
            />
            {password.length === 0 ? (
              <View style={styles.ProgessbarlebelView}>
                <Text style={styles.Progressbarlebel}>weak</Text>
                <Text style={styles.Progressbarlebel}>Strong</Text>
              </View>
            ) : (
              <></>
            )}
            {bottomView()}
          </View>
        )}
      </View>
      <View style={styles.button}>
        <FooterButton
          title={'Continue'}
          onPress={() => {
            phoneNoView ? registerWithPhoneNo() : registerWithEmail();
          }}
        />
      </View>
    </ScrollView>
  );
};
export default Signup;
