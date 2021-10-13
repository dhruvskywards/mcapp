import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView, Switch, TouchableOpacity, FlatList, RefreshControl, Pressable,Dimensions} from 'react-native';
import { EMPTY_JSON } from '../../../../utils/StaticJsonHelpers';
import HeaderwithCenterTitle from '../../../../components/HeaderWithCenterTitle';

import style from './style';

import {useDispatch, useSelector} from 'react-redux';
import {useNavigation, useTheme} from '@react-navigation/native';
import validate from 'src/utils/validation';
import {BarPasswordStrengthDisplay} from 'react-native-password-strength-meter';
import {scale} from 'react-native-size-matters';
import TextInput from 'src/components/TextInput';
import Icon from 'react-native-vector-icons/Ionicons';
import { firebase } from '@react-native-firebase/auth';
import theme from '../../../../utils/theme';
import FlashMessage from 'src/components/FlashMessage';
import Button from '../../../../components/Button';
const ChangePassword = () => {
    const navigation=useNavigation();
    const [newPassword,setNewPassword]=useState('')
 
    const [password, setPassword] = useState('');
    const [hidePass, setHidePass] = useState(true);
    const WIDTH = Dimensions.get('window').width / scale(1.03);

    const reauthenticate = currentPassword => {
        const user = firebase.auth().currentUser;
        const cred = firebase.auth.EmailAuthProvider.credential(
            user.email, currentPassword);
        return user.reauthenticateWithCredential (cred);
    }
    const changePassword=(oldPass,NewPass)=>{
        if(oldPass!=null && oldPass!='' && NewPass!=null && NewPass!=''){
        const passwordError = validate('password', NewPass);
          if(passwordError===null){
              firebase.auth()
              .signInWithEmailAndPassword(firebase.auth().currentUser.email, oldPass)
              .then(function(user) {
                  reauthenticate(oldPass)
                  firebase.auth().currentUser.updatePassword(NewPass).then(function(){
                    alert('Password Updated Successfully...')
                    
    
                  }).catch(function(err){
                    
                  });
    
              }).catch(function(err){
                FlashMessage.displayMessage({
                    message:
                    [err.code] + 'The password is invalid or the user does not have a password!',
                    bgColor: theme.BACKGROUND_PRIMARY_DARK,
                    //icon: 'circle',
                    position: 'top',
                  });
              
              });
          }else{
            FlashMessage.displayMessage({
                message:
                passwordError,
                bgColor: theme.BACKGROUND_PRIMARY_DARK,
                //icon: 'circle',
                position: 'top',
              });
           
          }
        }else{
            FlashMessage.displayMessage({
                message:
                'Fields can not be empty',
                bgColor: theme.BACKGROUND_PRIMARY_DARK,
                //icon: 'circle',
                position: 'top',
              });
          
        }
          
      }
  return (
    <ScrollView style={style.scrollContainer}>
      <View style={style.maincontainer}>
        <HeaderwithCenterTitle  title={'Change password'} textStyle={{fontSize: scale(14)}} onPress={()=>{navigation.goBack()}} />
       
        <View style={style.mainView}>
            <Text style={style.textContent}>Current Password</Text>
            <View style={style.passwordStyle}>
              <TextInput
                customStyle={style.textInput}
                multiline={false}
                placeholder={'Password (min 6 chars.)'}
                // eslint-disable-next-line no-shadow
                onChangeText={password => setPassword(password)}
                value={password}
                
              />
            
            </View>
            <Pressable onPress={() => {
               navigation.navigate('ForgotPasswords')
              }}>
                <Text style={style.titlePassword}>Don't remember?</Text>
            </Pressable>
            <Text style={style.textContent}>New Password</Text>
            <View style={style.passwordStyle}>
              <TextInput
                customStyle={style.textInput}
                multiline={false}
                placeholder={'Password (min 6 chars.)'}
                // eslint-disable-next-line no-shadow
                onChangeText={password => setNewPassword(password)}
                value={newPassword}
                secureTextEntry={hidePass ? true : false}
              />
              <Icon
                name={hidePass ? 'ios-eye-off' : 'ios-eye'}
                size={scale(18)}
                style={style.passwordEye}
                color={theme.SILVER_ICON_COLOR}
                onPress={() => setHidePass(!hidePass)}
              />
            </View>
            <Text style={style.textPassWordStrength} >Password Strength:</Text>
            <BarPasswordStrengthDisplay
              password={newPassword}
              labelVisible
              width={WIDTH}
              minLength={0}
              barStyle={style.barStyle}
            />
            {newPassword.length === 0 ? (
              <View style={style.ProgessbarlebelView}>
                <Text style={style.Progressbarlebel}>Weak</Text>
                <Text style={style.Progressbarlebel}>Strong</Text>
              </View>
            ) : (
              <></>
            )}
        </View>
        <Button
            onPress={() => {
                {changePassword(password,newPassword)}
              
              }}
            customStyle={style.padding}
            title={'Save Change'} />
      </View>
    </ScrollView>
  );
};
export default ChangePassword;
