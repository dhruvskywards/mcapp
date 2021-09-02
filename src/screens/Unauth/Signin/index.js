import React, {useState} from 'react';
import {View, Text, ScrollView, Pressable, Image} from 'react-native';
import styles from './style';
import CommonStyle from 'src/utils/styles';
import Colors from 'src/utils/theme';
import {setSessionData} from 'src/utils/asyncStorage';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/Ionicons';
import {scale} from 'react-native-size-matters';
import TextInput from 'src/components/TextInput';
import FooterButton from 'src/components/FooterButton';
import {CommonActions} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import FlashMessage from 'src/components/FlashMessage';
import validate from 'src/utils/validation';

import {useDispatch} from 'react-redux';
import * as actions from 'src/store/action/getUserProfile';
import sessionKey from 'src/utils/const';
const Signin = ({navigation}) => {
  const dispatch = useDispatch();
  const [mailandPhoneNo, setMailandPhoneNo] = useState('');
  const [password, setPassword] = useState('');
  const [hidePass, setHidePass] = useState(true);

  const makeSignIn = async () => {
    const emailError = validate('email', mailandPhoneNo);
    const passwordError = validate('loginPassword', password);
    if (emailError !== null || passwordError !== null) {
      FlashMessage.displayMessage({
        message: emailError || passwordError,
        bgColor: Colors.BACKGROUND_PRIMARY_DARK,
        //icon: 'circle',
        position: 'top',
      });
      return;
    } else {
      auth()
        .signInWithEmailAndPassword(mailandPhoneNo, password)
        .then(res => {
          setSessionData('authtoken', res.user.uid);
          dispatch(
            actions.GetUserProfile(
              mailandPhoneNo,
              async data => {
                setSessionData(sessionKey.userData, JSON.stringify(data));
                navigation.dispatch(
                  CommonActions.reset({
                    index: 1,
                    routes: [{name: 'Home'}],
                  }),
                );
              },
              error => {
                //show err
                console.log(error);
              },
            ),
          );
          // res.user.uid &&
          //   navigation.dispatch(
          //     CommonActions.reset({
          //       index: 1,
          //       routes: [{name: 'Home'}],
          //     }),
          //   );
        })
        .catch(error => {
          if (error.code === 'auth/wrong-password') {
            FlashMessage.displayMessage({
              message:
                'The password is invalid or the user does not have a password!',
              bgColor: Colors.BACKGROUND_PRIMARY_DARK,
              //icon: 'circle',
              position: 'top',
            });
          } else if (error.code === 'auth/invalid-email') {
            FlashMessage.displayMessage({
              message: 'That email address is invalid!',
              bgColor: Colors.BACKGROUND_PRIMARY_DARK,
              //icon: 'circle',
              position: 'top',
            });
          } else {
            FlashMessage.displayMessage({
              message: 'Something went wrong, Try again!',
              bgColor: Colors.BACKGROUND_PRIMARY_DARK,
              //icon: 'circle',
              position: 'top',
            });
          }

          console.error(error);
        });
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={CommonStyle.insideContainer}>
        <View style={CommonStyle.innerContainerSection}>
          <Image
            style={CommonStyle.logoBg}
            source={require('src/assets/image/logo.png')}
          />
          <Text style={CommonStyle.unAuthtitle}>Welcome back</Text>
          <Pressable style={styles.appleBtn}>
            <FontAwesome name="apple" size={scale(16)} color={'white'} />
            <Text style={styles.appleTitle}>Sign in with apple</Text>
          </Pressable>
          <TextInput
            //customStyle={styles.textInput} // remove when push
            multiline={false}
            placeholder={'Enter email or mobile number'}
            onChangeText={mailandPhoneNoValue =>
              setMailandPhoneNo(mailandPhoneNoValue)
            }
            value={mailandPhoneNo}
            secureTextEntry={false}
          />
          <View style={styles.passwordStyle}>
            <TextInput
              customStyle={styles.textInput}
              multiline={false}
              placeholder={'Enter password'}
              onChangeText={passwordValue => setPassword(passwordValue)}
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
        </View>
        <View>
          <Text
            style={styles.titleSub}
            onPress={() => navigation.navigate('Signup')}>
            Don't have an account?
          </Text>
          <Text
            style={styles.titleSub}
            onPress={() => navigation.navigate('ForgotPassword')}>
            Forgot your Password?
          </Text>
        </View>
      </View>
      <View style={styles.button}>
        <FooterButton
          title={'Sign In'}
          onPress={() => {
            makeSignIn();
          }}
        />
      </View>
    </ScrollView>
  );
};
export default Signin;
