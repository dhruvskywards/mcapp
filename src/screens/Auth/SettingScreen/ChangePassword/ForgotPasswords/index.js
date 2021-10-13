import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView, Switch, TouchableOpacity, FlatList, RefreshControl, Pressable,Dimensions} from 'react-native';

import HeaderwithCenterTitle from '../../../../../components/HeaderWithCenterTitle';

import style from './style';


import {useNavigation, useTheme} from '@react-navigation/native';

import {scale} from 'react-native-size-matters';
import TextInput from 'src/components/TextInput';
import Icon from 'react-native-vector-icons/Ionicons';
import { firebase } from '@react-native-firebase/auth';
import theme from '../../../../../utils/theme';

import Button from '../../../../../components/Button';
import FlashMessage from 'src/components/FlashMessage';
const ForgotPasswords = () => {
   
    const [mail, setMail] = useState('');
    const WIDTH = Dimensions.get('window').width / scale(1.03);
    const navigation=useNavigation();
    const forgotPassword = (email) => {
      if(email !=null && firebase.auth().currentUser.email===email && email!=''){
         firebase.auth().sendPasswordResetEmail(email)
            .then(function (user) {
              FlashMessage.displayMessage({
                message:
                'Please Check your email for reset link',
                bgColor: theme.BACKGROUND_PRIMARY_DARK,
                position: 'top',
              });
              // store.dispatch({
              //   type: types.REMOVE_SESSION_OBJ,
              // });
            }).catch(function (e) {
              console.log(e)
            })
      }else{
        FlashMessage.displayMessage({
          message:
          'Enter Valid Email Address!',
          bgColor: theme.BACKGROUND_PRIMARY_DARK,
          position: 'top',
        });
      }
    }
  return (
    <ScrollView style={style.scrollContainer}>
      <View style={style.maincontainer}>
        <HeaderwithCenterTitle  title={'Forgot password'} textStyle={{fontSize: scale(14)}} onPress={()=>{navigation.goBack()}} />
       
        <View style={style.mainView}>
            <Text style={style.textContent}>Whats your email or phone number?</Text>
            <View style={style.topContainer}>
            <TextInput
              multiline={false}
              placeholder={'Email'}
              onChangeText={mail => setMail(mail)}
              value={mail}
              secureTextEntry={false}
            />
            
            </View>
          </View>
          <Text style={style.titlePassword}>You will receive an email or a text link to create a new password</Text>
        <Button
            onPress={() => {
                {forgotPassword(mail)}
              
              }}
            customStyle={style.padding}
            title={'Submit'} />
      </View>
    </ScrollView>
  );
};
export default ForgotPasswords;
