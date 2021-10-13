import React, {useEffect, useState,useRef} from 'react';
import {View, Text, ScrollView, Switch, TouchableOpacity, FlatList, RefreshControl,Image,TextInput} from 'react-native';
import { EMPTY_JSON } from '../../../../utils/StaticJsonHelpers';
import HeaderwithCenterTitle from '../../../../components/HeaderWithCenterTitle';
import theme from '../../../../utils/theme';
import style from './style';

import {useDispatch, useSelector,connect} from 'react-redux';
import plus from '../../../../assets/image/plus.png';
import {getSessionData} from 'src/utils/asyncStorage';

import * as actions from '../../../../store/action/userConnectionAction';
import * as updateAction from '../../../../store/action/updateTierDetailsAction';
import * as permissionAction from '../../../../store/action/fetchTierPermissionActions';
import {tierPermissionActionsReducer} from '../../../../store/reducers/tierPermissionActionsReducer';
import ThumbnailNameRow from '../../../../components/ThumbnailNameRow';
import {useNavigation, useTheme} from '@react-navigation/native';
import ApiConstants from '../../../../utils/ApiConstants';

import ProfileView from '../../../../components/Settings/ProfileView';
import ToggleElement from '../../../../components/ToggleElement';
import Icon from 'react-native-vector-icons/FontAwesome';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { scale } from 'react-native-size-matters';
import BottomSheet from 'reanimated-bottom-sheet';
import sessionKey from 'src/utils/const';
import { fetchUserConnectionReducer } from '../../../../store/reducers/fetchUserConnectionReducer';
import Button from '../../../../components/Button';
import FooterButton from 'src/components/FooterButton';
import Animated from 'react-native-reanimated';

const TierMemberPermision = () => {
  const sheetRef = useRef();
  const dispatch = useDispatch();
  const [users, setUser] = useState(null);
  const [userId, setUserId] = useState(0);
  const CustomTheme = useTheme();
  const navigation = useNavigation();
  const [notifyModeratorActions,SetnotifyModeratorAction] = useState(false);
  const [moderatorsIds,setModeratorsId]=useState([])
  const [selectedPermissionIds,setPermissionID]=useState([])
  const [moderatorData,setModeratorData]=useState([]);
  const [query, setQuery] = useState('');
  const [fullData, setFullData] = useState([]);
  const [datas,setDatas] =useState([]);
  const [IsselectedIds,setISSelectedIds]=useState(false)
  const [bottomsheetVisible,setBottomSheetVisible]=useState(false)
  var interestNameModeratorArray=[];
  var interestModeratorName="";
  const userConnectionReducer = useSelector((state) => state?.fetchUserConnectionReducer?.data);
  const tierPermissionActionsReducer=useSelector((state)=>state?.tierPermissionActionsReducer);
  const fall = new Animated.Value(1);
const renderHeaderView = () => {
  return (
    <View style={style.ModalContain}>
      <TouchableOpacity
        onPress={() => {}}
        style={style.serachLine}
      />
      <View style={style.SecondCon}>
        <View style={style.searchSection}>
              <TextInput
                  autoCapitalize="none"
                  autoCorrect={false}
                  clearButtonMode="always"
                  style={style.input}
                  placeholder="Search"
                  value={query}
                  onChangeText={queryText => handleSearch(queryText)}
                  underlineColorAndroid="transparent"
              />
               <MIcon style={style.searchIcon} name="plus-circle" size={20} />
          </View>
      </View>
    </View>
  );
};

const handleSearch = text => {
  const newData = fullData.filter(item => {
    const itemData = item.username.toUpperCase();
    const textData = text.toUpperCase();
    return itemData.indexOf(textData) > -1
  });
  setDatas(newData);
  setQuery(text);
};
 

const renderDiscoverItems = ({item,index}) => {
  {fetchInterestModerator(item)}
  return (
  
      <ThumbnailNameRow name={item.username} helperText={interestModeratorName} thumbnailSize={50} 
        url= {`${ApiConstants.API_MEDIA}${encodeURIComponent(item.profilepic)}` }
        rightView={() => {
          return <Button  onPress={() => {
                  if(!moderatorsIds.includes(item.id)){
                    let id=moderatorsIds;
                    id.push(item.id)
                      
                    const updatedData={
                        tierModeratorsIds:id,      
                  };
                  
                  updateTierData(userId,updatedData)
                  
                    }else{
                      setISSelectedIds(true);
                      alert("Connection already Exists!")
                    }
               }}
              customStyle={style.padding}  title={'Select'} />;
        }}
      />
   
  );
};

const renderInnerBottomView = () => {
  return (
    <View style={style.containers}>
      <FlatList
          style={style.flatListStyle}
          showsVerticalScrollIndicator={false}
          scrollEnabled={true}
          data={datas}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderDiscoverItems}
          contentContainerStyle={{ flexGrow: 1 }}
      />

      <View style={style.button}>
        <FooterButton
          title={'Cancel'}
          onPress={() => {
            setBottomSheetVisible(false)
          }}
        />
      </View>
  </View>
  );
};
const fetchInterestModerator=(item)=>{
  interestNameModeratorArray=[];
   interestModeratorName="";
  if(item?.interest!=null){
    item?.interest.map(names=>{
      interestNameModeratorArray.push(names.name);
      })   
   
      if(item?.interest.length>1){
        interestModeratorName=interestModeratorName.concat(interestNameModeratorArray).replace(",","/")
      }else{
        interestModeratorName=interestModeratorName.concat(interestNameModeratorArray)
    }
  }
}
const fetchUserConnection = (id) => {
  dispatch(
    actions.userConnectionAction(  
        id,
      async success => {
        console.log('success', success);
      },
      error => {
      },
    ),
  );
};

const fetchTierPermission = (id) => {
  dispatch(
    permissionAction.fetchTierPermissionActions(
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

const updateTierData = (id,data) => {
  const params = {
    id: id,
    userData: data,
   
  };
  dispatch(
    updateAction.updateTierDetailsAction(
      params,
      async success => {
        console.log("success",JSON.stringify(success))
      },
      error => {
        console.log("fail",JSON.stringify(error)) 
      },
    ),
  );
};

const renderPermission=()=>{
  if (tierPermissionActionsReducer.success === true) {
   return tierPermissionActionsReducer.data.tierPermissions.map((item) => {
    
     return(
       <View style={style.permissionRow} key={item.id}>
            <Text style={[style.textContent,{marginTop:scale(10)}]}>
                {item.description}
            </Text>

          <ToggleElement 
                  thumbActiveComponent={
                    <Icon name="check" size={20} color={theme.GREEN_SWITCH}  style={style.IconStyle}/>
                  }
                  thumbInActiveComponent={
                    <Icon name="close" size={20} color={theme.GRAY_SWITCH}  style={style.IconStyle}/>
                  }
            
                trackBar={{
                  activeBackgroundColor: theme.GREEN_SWITCH,
                  inActiveBackgroundColor: theme.GRAY_SWITCH,
                  width: scale(80),
                  height:scale(35)
                }}
                value={true} 
                thumbButton={{
                  activeBackgroundColor: theme.WHITE,
                  inActiveBackgroundColor:theme.WHITE,
                  width: scale(30),
                  height:scale(30),
    
                }}
                onPress={(value) => {
                  if(value===true){
                    setPermissionID((prestate) => {
                      return [...prestate, ...[item.id]];
                     
                    });
                  
                  }else{
                    const newArray = selectedPermissionIds.filter((id) => id !== item.id);
                    setPermissionID(newArray);
                    const updatedData={
                      tierPermissionIds:newArray,      
                    };
                    updateTierData(userId,updatedData);
                  
                  }
                }}
              />
              </View>
              )
        });
      }else{
          return(
            <View style={style.permissionRow}>
            <Text style={[style.textContent,{marginTop:scale(25)}]}>
              No Permissions !
            </Text>
            </View>
          )
      }

}

  useEffect(async ()=>{
    const user = JSON.parse(await getSessionData(sessionKey.userData));
    setUser(user);
    setUserId(1)
    fetchUserConnection(1)
    fetchTierPermission(1)
  },[]);

  useEffect(() => {
      if(tierPermissionActionsReducer.success){
        let _permissionIdArray=[];
        if(tierPermissionActionsReducer.data.tierPermissions!=null){
          tierPermissionActionsReducer.data.tierPermissions.map((item) => {
            _permissionIdArray.push(item.id);
            
          });
          setPermissionID(_permissionIdArray);
        }
        let _moderatorsIdsArray=[];
        if(tierPermissionActionsReducer.data.tierModerators!=null){
          setModeratorData(tierPermissionActionsReducer.data.tierModerators);
          tierPermissionActionsReducer.data.tierModerators.map((item)=>{
          
            _moderatorsIdsArray.push(item.id)
          })
          setModeratorsId(_moderatorsIdsArray)
        }
        if(tierPermissionActionsReducer.data.notifyModeratorAction===true){
          SetnotifyModeratorAction(true)
        }
      }
  }, [permissionAction,tierPermissionActionsReducer]);


  useEffect(() => {
    
      if(userConnectionReducer!=null){
        setFullData(userConnectionReducer)
        setDatas(userConnectionReducer)
       
      }
  }, [dispatch,userConnectionReducer]);


  return (
    <View style={style.maincontainer}>
    <ScrollView style={style.scrollContainer}>
      <View>
          <HeaderwithCenterTitle  title={'Tier member permissions'} onPress={()=>{navigation.goBack()}} />
          
          <View style={[style.selectAccountView]}>
                <Text style={style.selectAccountText}>Your Account</Text>
          </View>

        <ProfileView data={users}  showConnection={true} showCompetiton={true} />

        <View style={style.container}>
          <View style={style.viewStyle} >
            <Text style={style.generalText}>
              General Settings
            </Text>

            <View style={style.flexRow}>
              <Text style={[style.textContent,{marginTop:scale(10)}]}>
                Turn on notifications every time moderator does an action
              </Text>
               <ToggleElement 
                  thumbActiveComponent={
                    <Icon name="check" size={20} color={theme.GREEN_SWITCH}  style={style.IconStyle}/>
                  }
                  thumbInActiveComponent={
                    <Icon name="close" size={20} color={theme.GRAY_SWITCH}  style={style.IconStyle}/>
                  }
               trackBar={{
                activeBackgroundColor: theme.GREEN_SWITCH,
                inActiveBackgroundColor: theme.GRAY_SWITCH,
                
                width: scale(80),
                height:scale(35)

              }}
              thumbButton={{
                activeBackgroundColor: theme.WHITE,
              inActiveBackgroundColor:theme.WHITE,
              width: scale(30),
              height:scale(30),

              }}
              value={notifyModeratorActions} 
              onPress={(value) => {
                const updatedData={
                 
                  notifyModeratorAction:value,
              
                 };
                 updateTierData(userId,updatedData);
                
              }}></ToggleElement>
            </View>

            <View style={style.flexRow}>
              <Text style={style.generalText}>
               Account Moderators
              </Text>
              <TouchableOpacity
                onPress={() => {
                  
                  sheetRef.current.snapTo(1);
                  }}>
                    <MIcon name="plus-circle" size={25}  />
                </TouchableOpacity>
            </View>
             
            <FlatList
                data={moderatorData}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ marginVertical:15,  }}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => {
                  return (
                    <View style={{ alignItems: 'center',  }}>
                      <TouchableOpacity>

                      {item?.profilepic != '' ? (
                          <View>
                          <Image
                            style={style.noImageView}
                            source={{
                              uri: `${ApiConstants.API_MEDIA}${encodeURIComponent(item?.profilepic)}`,
                            }}
                          />
                          </View>
                        ) : (<View style={style.noImageView}></View>)}
                      </TouchableOpacity>
                      <Text ellipsizeMode='tail' numberOfLines={1}  style={style.moderatorNameText}>
                            {item.username}
                      </Text>
                      {fetchInterestModerator(item)}
                      <Text style={style.moderatorInterestText}>
                          {interestModeratorName}
                      </Text>
                      <TouchableOpacity
                          onPress={() => {
                            const updatedIds = moderatorsIds.filter((id) => id !== item.id);
                              setModeratorsId(updatedIds);
                              const updatedData={
                                tierModeratorsIds:updatedIds,      
                              };
                             
                              updateTierData(userId,updatedData)
                              fetchTierPermission(userId)
                          }}>
                          <Text  style={style.textRemove}>
                            Remove
                        </Text>
                      </TouchableOpacity>
                    </View>
                  );
                }}
              />
            
          </View>
        </View>
        <View style={[style.containePermissionSettings]}>
            <Text style={style.permissionText}>Permissions</Text>
            {renderPermission()}
        </View>
      </View>  
    </ScrollView>
     <BottomSheet
     callbackNode={fall}
     ref={sheetRef}
     snapPoints={['89%', '57%', 0]}
     initialSnap={2}
   
     renderHeader={() => {
       return renderHeaderView();
     }}
     renderContent={() => {
       return renderInnerBottomView();
     }}
     enabledInnerScrolling={true}
   />
    </View>
  );
};



export default TierMemberPermision;

