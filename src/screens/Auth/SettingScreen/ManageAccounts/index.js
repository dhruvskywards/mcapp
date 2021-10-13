import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView, Switch, TouchableOpacity, FlatList, RefreshControl,Image} from 'react-native';
import { EMPTY_JSON } from '../../../../utils/StaticJsonHelpers';
import HeaderwithCenterTitle from '../../../../components/HeaderWithCenterTitle';
import * as actions from '../../../../store/action/fetchUserProfileAction';
import * as moderatorAction from '../../../../store/action/fetchModeratorProfile';
import { fetchModeratorProfileReducer } from '../../../../store/reducers/fetchModeratorProfileReducer';
import { fetchUserProfileReducer } from '../../../../store/reducers/fetchUserProfileReducer';
import style from './style';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch, useSelector} from 'react-redux';
import plus from '../../../../assets/image/plus.png';
import {getSessionData} from 'src/utils/asyncStorage';
import sessionKey from 'src/utils/const';
import ThumbnailNameRow from '../../../../components/ThumbnailNameRow';
import {useNavigation, useTheme} from '@react-navigation/native';
import ApiConstants from '../../../../utils/ApiConstants';
import faker from 'faker';
const ManageAccounts = () => {
  
  const dispatch = useDispatch();
  const [userId, setUserId] = useState(null);
  const CustomTheme = useTheme();
  const navigation = useNavigation();
  const fetchUserProfileReducer = useSelector((state) => state.fetchUserProfileReducer);
  const fetchModeratorProfileReducer = useSelector((state) => state.fetchModeratorProfileReducer);
  const [modernaterData,setModeratorData]=useState([])
  const [moderatorPermission,setModeratorPermission]=useState([]);
  const [isPressed,setIsPressed]=useState(false);

  
  const fetchUserProfile = (id) => {
    dispatch(
      actions.fetchUserProfileAction(
        id,
        async success => {
         console.log("success",JSON.stringify(success))
        },
        error => {
          console.log("fail",JSON.stringify(error)) 
        },
      ),
    );
  };

 
  useEffect(async ()=>{
   
    const user = JSON.parse(await getSessionData(sessionKey.userData));
    console.log("==calledUser",user.id)
    setUserId(user.id)
  
    fetchUserProfile(user.id);
  },[])


  useEffect(()=>{
    if(fetchUserProfileReducer.data.tierModerator!=null){
      console.log("====tier moderator",JSON.stringify(fetchUserProfileReducer.data.tierModerator))
      setModeratorData(fetchUserProfileReducer.data.tierModerator)
      fetchUserProfileReducer.data.tierModerator.forEach(element => {
        setModeratorPermission(element.tierPermissions)
        console.log("====tier permission",element.tierPermissions)
      });
   }
    
 },[fetchUserProfileReducer])

 const renderItem = ({item, index}) => (
  // {`${ApiConstants.API_MEDIA}${encodeURIComponent(item.profilePic)}`} 
  <View key={index}>
    <ThumbnailNameRow name={item.brandStage}  url={faker.image.avatar()} thumbnailSize={45} helperText={fetchModeratorsInterest(item)}
        onPress={()=>{{
          setIsPressed(true)
          //send Item
          navigation.navigate('Details',{
            brandName:item.brandStage,
            profilePic:faker.image.avatar(),
            interestName:fetchModeratorsInterest(item),
            permission:item.tierPermissions
          });
        }}}
        rightView = {() => {
          {
            isPressed?(
              <MIcon name={'check-circle'} size={20} />
            ):(null)
          }
        }} />       
  </View>
  );
  const fetchModeratorsInterest=(item)=>{
    var moderatorsInterestArray=[];
    var interestName="";
    if(item?.interest!=null){
    item?.interest.map(names=>{
      moderatorsInterestArray.push(names.name);  
    }) 
    if(item?.interest.length>1){
      interestName=interestName.concat(moderatorsInterestArray).replace(",","/")
    }else{
      interestName=interestName.concat(moderatorsInterestArray)
  }  
 
  }
  return interestName;
}
  return (
    <ScrollView style={style.scrollContainer}>
   

      <View style={style.maincontainer}>
        <HeaderwithCenterTitle  title={'Manage accounts'} onPress={()=>{navigation.goBack()}} />
        
        <View style={[style.selectAccountView]}>
              <Text style={style.selectAccountText}>Select an account</Text>
        </View>

        <View style={style.viewAddAccount}>
          <View style={style.ModalContain}>
              <Image resizeMode={'stretch'} source={plus} />
          </View>
          <Text style={style.textSelectAccount}>Add an account</Text>
        </View>

        <FlatList
          style={style.flatListStyle}
          data={modernaterData}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </ScrollView>
  );
};
export default ManageAccounts;
