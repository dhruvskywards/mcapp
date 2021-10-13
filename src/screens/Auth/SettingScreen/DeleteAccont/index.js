import React, { useState,useEffect } from 'react';
import {useTheme} from '@react-navigation/native';
import StarRating from 'react-native-star-rating';
import HeaderwithCenterTitle from '../../../../components/HeaderWithCenterTitle';
import {scale} from 'react-native-size-matters';
import { firebase } from '@react-native-firebase/auth';

import * as types from 'src/store/actionType';
import { SafeAreaView,ScrollView,Text, TextInput, View } from 'react-native';
import * as actions from '../../../../store/action/deleteAccountAction';
import Button from '../../../../components/Button'
import theme from '../../../../utils/theme';
import styles from './style';
import fonts from 'src/utils/fonts';
import {useDispatch, useSelector,connect} from 'react-redux';
import sessionKey from 'src/utils/const';
import {getSessionData} from 'src/utils/asyncStorage';
const DeleteAccount = () => {
  const CustomTheme = useTheme();
  const [rating, setRating] = useState(0);
  const [user, setUser] = useState(null);
  const [userId, setUserId] = useState(0);
  const [focused,setIsFocused] =useState(false);
  const dispatch = useDispatch();
  const deleteUserReducer=useSelector((state) => state.deleteUserReducer)
  useEffect(async ()=>{
   
    //const user = JSON.parse(await getSessionData(sessionKey.userData));
    ///console.log("==calledUser",user.id)
   //setUser(user)
    //(user?.id)
    
  },[]);
 

  const deleteUser = () =>{
    
    // var users = firebase.auth().currentUser;
    // console.log("==calledUser",users)
    const params ={
      id:22
    }
    dispatch(
      actions.deleteAccountAction( 
        params,
        async success => {
          console.log("success",JSON.stringify(success))
          // firebase.auth().currentUser.delete().then(function() {
          // }).catch(function(error) {
            
          //   });
        },
        error => {
          console.log("fail",JSON.stringify(error)) 
        },
      ),
    );
   
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      
      <ScrollView style={styles.scrollContainer}>
      <HeaderwithCenterTitle  title={'Delete Account'} alighTitle={{alignItems:'flex-start',marginLeft:scale(5)}} textStyle={{fontSize: scale(16)}} onPress={()=>{navigation.goBack()}} />
        <Text style={styles.textTitle}>
          We are sorry to see you go. In order for you to proceed please enter your current
          password.
        </Text>
       
        <View style={styles.viewMCText}>
          <Text style={styles.rateMcText}>How would you rate mc?</Text>
          <StarRating
            maxStars={5}
            containerStyle={{ marginTop: scale(15), paddingHorizontal: 30 }}
            rating={rating}
            disabled={false}
            emptyStarColor={theme.LIGHT_GRAY}
            fullStarColor={theme.BLACK}
            selectedStar={(rating) => {
              setRating(rating);
            }}
          />
        </View>

        <View
           style={[styles.viewMCText,{ borderTopWidth: 1, borderTopColor: CustomTheme.colors.lineSeparator }]}
        />
        <View style={styles.viewMCText}>
          <Text style={styles.rateMcText}>Whats your password?</Text>
          
          <TextInput
              onFocuse={()=>setIsFocused(true)}
              onBlur={()=>setIsFocused(false)}
              placeholder={'Password'}
              style={[{ borderBottomColor: focused ? theme.BLACK : theme.LIGHT_GRAY,
                      borderBottomWidth: 1 ,marginVertical:scale(10),fontFamily: fonts.Proxima_Nova_Regular,}]} />

          <TextInput
              onFocuse={()=>setIsFocused(true)}
              onBlur={()=>setIsFocused(false)}
              placeholder={'Confirm password'}
              style={[{ borderBottomColor: focused ? theme.BLACK : theme.LIGHT_GRAY,
                      borderBottomWidth: 1 ,marginVertical:scale(10),fontFamily: fonts.Proxima_Nova_Regular,}]} />
          
         
          
          <Button
            onPress={() => {
              deleteUser();
            }}
            title={'Delete Account'}
            customStyle={{
              width:'40%',
              paddingHorizontal:scale(5),
              marginLeft: scale(10),
              marginTop:scale(15)
            }} />
            
         
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};



export default DeleteAccount;
