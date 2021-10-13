import React from 'react';
import {FlatList, Text, View,Image} from 'react-native';


import ApiConstants from '../../../utils/ApiConstants';
import styles from './style';
import user from '../../../assets/image/user2.png'
import faker from 'faker';
import Button from '../../Button';
import theme from '../../../utils/theme';
import Avatar from '../../Avatar/Avatar';
import SettingButton from '../../SettingButton';
const ProfileView = ({data,isButton=false,showConnection=false,showCompetiton=false}) => {
  var interestNameArray=[];
  var interestName="";
  
  const fetchInterest=()=>{
    if(data?.interest!=null){
      data?.interest.map(names=>{
          interestNameArray.push(names.name);
         
        })   
     
        if(data?.interest.length>1){
          interestName=interestName.concat(interestNameArray).replace(",","/")
        }else{
          interestName=interestName.concat(interestNameArray)
      }
    }
  }
  return (
    <View>
      {fetchInterest()}
      <View style={styles.HeaderCommain}>
        <View style={styles.HeadNameCon}>
          {
            showConnection?(
            <View style={styles.HeadName}>
              <Text style={styles.textConnectionValue}>
              {data?.connections || '0'}
              </Text>
              <Text style={ styles.headnamebottom}>
                Connections
              </Text>
            </View>):(null)
          }
        
        {data?.profilepic != null ? (
          <Avatar
            size={70}
            url={`${ApiConstants.API_MEDIA}${encodeURIComponent(data?.profilepic)}`}
            
          />
        ) : (  
          <Image
          style={styles.imageView}
          /> )}

        {
            showCompetiton?(
            <View style={styles.HeadName}>
              <Text style={styles.textConnectionValue}>
              {data?.competitions || '0'}
              </Text>
              <Text style={ styles.headnamebottom}>
              Competitions
              </Text>
            </View>):(null)
          }
        
        </View>
       
      </View>
      <View style={styles.HeadNameCon}>
        <Text style={styles.text}>
          {`${data?.username}  |  ${interestName}  |  Wins: ${data?.win || '0'}`}
        </Text>
      </View>
      
      <View style={styles.Walletbtncon}>

      {
        isButton?(  <SettingButton
          onPress={() => {
           
          }}
          customStyle={styles.EditbuttonStyle}
          
          title={'Edit Profile'}>
          
        </SettingButton>):(null)
      }
    
        </View>
    </View>
  );
};

export default ProfileView;
