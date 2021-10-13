import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView, Switch, TouchableOpacity, FlatList, RefreshControl,Image} from 'react-native';

import HeaderwithCenterTitle from '../../../../../components/HeaderWithCenterTitle';


import style from './style';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch, useSelector} from 'react-redux';
import {getSessionData} from 'src/utils/asyncStorage';
import faker from 'faker';
import ThumbnailNameRow from '../../../../../components/ThumbnailNameRow';
import {useNavigation, useTheme} from '@react-navigation/native';
import ApiConstants from '../../../../../utils/ApiConstants';
const ManageAccounts = ({route}) => {
  
  const dispatch = useDispatch();
  const [userId, setUserId] = useState(null);
  const CustomTheme = useTheme();
  const navigation = useNavigation();
  var brandName = route.params ? route.params.brandName : null;
  var profilePic=route.params ? route.params.profilePic : null;
  var interestName=route.params ? route.params.interestName:null;
  var moderatorPermission=route.params?route.params.permission:null;
  const renderUserPermissions = ({ index, item }) => {
    return (
      <View key={index}>
        <Text key={item.id} style={style.textGeneralSettings}>{item.description}</Text>
        </View>
    );
  };
  return (
    <ScrollView style={style.scrollContainer}>
      <View style={style.maincontainer}>
        <HeaderwithCenterTitle  title={' '} onPress={()=>{navigation.goBack()}} />


      {/* <ThumbnailNameRow style={style.thumbnailView} name={item.name}  url={`${ApiConstants.API_MEDIA}${encodeURIComponent(item.profilePic)}`} helperText={'Rap/Dancer'}  /> */}
      <View style={style.thumbnailView}>
      <ThumbnailNameRow  name={brandName} thumbnailSize={50}  url={profilePic} helperText={interestName} 
          rightView = {() => null} />
        <View style={[style.selectAccountView]}>
              <Text style={style.selectAccountText}>Actions</Text>
              <Text style={style.selectAccountDetails}>These actions are subject to change depending on the permissions set by the original account holder</Text>
        </View>
      </View>
      
        {moderatorPermission.length > 0 &&  moderatorPermission!=null? (
          <FlatList
            style={style.flatListStyle}
            data={moderatorPermission}
            renderItem={renderUserPermissions}
            keyExtractor={(item, index) => index.toString()}
          />
        ):(
          <View style={style.containers}>
            <Text style={style.noData}>No Permissions</Text>
          </View>
        )}

      </View>
    </ScrollView>
  );
};
export default ManageAccounts;
