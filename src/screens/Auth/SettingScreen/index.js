import React, {useState,useEffect} from 'react';
import {View, Text, ScrollView, Switch, TouchableOpacity, Linking, SafeAreaView,TextInput} from 'react-native';
import theme from '../../../utils/theme';
import style from './style';
import faker from 'faker';
import * as types from 'src/store/actionType';
import {useDispatch, useSelector} from 'react-redux';
import MIcon from 'react-native-vector-icons/Ionicons'
import { scale } from 'react-native-size-matters';
import UserProfile from '../../../components/UserProfile';
import ProfileView from '../../../components/Settings/ProfileView';
import ToggleElement from '../../../components/ToggleElement'
import SwitchButton from '../../../components/SwitchButton';
import IconSet from 'react-native-vector-icons/MaterialIcons'
import MICon from 'react-native-vector-icons/Ionicons'
import Icon from 'react-native-vector-icons/FontAwesome'
import TextView from '../../../components/Settings/TextView';
import {useNavigation, useTheme} from '@react-navigation/native';
import HeaderwithCenterTitle from '../../../components/HeaderWithCenterTitle';
import {getSessionData} from 'src/utils/asyncStorage';
import sessionKey from 'src/utils/const';
import Modal from 'react-native-modal';
import FooterButton from '../../../components/FooterButton';
// import { Country, State }  from 'country-state-city';
import RNCountry from "react-native-countries";
import { GenderList, LanguageList } from '../../../utils/StaticJsonHelpers';
import * as actions from '../../../store/action/updateUserProfileAction';
import * as profileAction from '../../../store/action/fetchUserProfileAction';
import Textinput   from '../../../components/TextInput';
const SettingScreen = () => {
  const [isdarkMode, setdarkmode] = useState(false);
  const [notification, setNotification] = useState(false);
  const [user, setUser] = useState(null);
  const navigation = useNavigation();
  const CustomTheme = useTheme();
  const dispatch = useDispatch();
  const [country, setCountry] = useState(null);
  const [gender, setGender] = useState(null);
  const [language, setLanguage] = useState(null);
  const [visibleModal, setVisibleModal] = useState(false);
  const [genderModalVisible, setGenderModalVisible] = useState(false);
  const [countryModalVisible, setCountryModalVisible] = useState(false);
  const [languageModalVisible, setLanguageModalVisible] = useState(false);
  const[search,setSearch]=useState(' ');
  const fetchUserProfileReducer = useSelector((state) => state.fetchUserProfileReducer);
  const[profileData,setProfileData] =useState(null);
  var interestIdArray=[];
  const updateProfileRequest = (data) => {
    const params ={
      id:user?.id,
      userData:data
    };
    console.log("============",params)
    dispatch(
      actions.updateUserProfileAction(
        params,
        async success => {
        },
        error => {
        },
      ),
    );
    if(genderModalVisible===true){
       setGenderModalVisible(false)
     
     
    }
    if(countryModalVisible===true){
      setCountryModalVisible(false)
  
    }
    setSearch('')
  };
  useEffect(async ()=>{
    const user = JSON.parse(await getSessionData(sessionKey.userData));
    console.log("==calledUser",user.id)
    fetchUserProfile(user?.id)
    setUser(user)
    
  },[])

  useEffect(()=>{
    if(fetchUserProfileReducer.data!=null){

      setProfileData(fetchUserProfileReducer.data)
   }
    
 },[fetchUserProfileReducer])
  
  useEffect(async() => {
    if(genderModalVisible===false){
      const user = JSON.parse(await getSessionData(sessionKey.userData));
      setUser(user);
      fetchUserProfile(user?.id)
   
  }
  }, [genderModalVisible]);

  useEffect(async() => {
    if(countryModalVisible===false){
      const user = JSON.parse(await getSessionData(sessionKey.userData));
      setUser(user);
      fetchUserProfile(user?.id)
    }
  }, [countryModalVisible]);

  const fetchUserProfile = (id) => {
    dispatch(
      profileAction.fetchUserProfileAction(
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

  const filterCountryList=(list)=> {
    return list.filter(listItem => listItem.toLowerCase().includes(search.toLowerCase()));
  }
 
  return (
   
    <ScrollView style={style.scrollContainer}>
      
      <View style={style.maincontainer}>
        <HeaderwithCenterTitle title={'Settings'} onPress={()=>{navigation.goBack()}} />
        
        <ProfileView data={profileData} isButton={true} />
        <View style={style.container}>
          <View style={style.viewStyle} >
            <Text style={[style.headerText,{ marginVertical:scale(15)}]}>
              Options
            </Text>

            <View style={[style.flexRow,,{marginTop:scale(20)}]}>
              <Text style={[style.textContent]}>
                Allow Notificatons
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
                  inActiveBackgroundColor: theme.GREEN_SWITCH,
                  width: 75,
                  height:35
                }}
                value={notification} 
                thumbButton={{
                  activeBackgroundColor: theme.WHITE,
                  inActiveBackgroundColor:theme.WHITE,
                  width: 30,
                  height:30,
                }}
                onPress={(value) => {
                  setNotification(value)
                }} />
            </View>

            <View style={style.flexRow}>
              <Text style={style.textContent}>
                Theme mode
              </Text>
            <SwitchButton
                  onChange={() => {
                   
                  }}
                  containerStyle={{  }}
                  selected={!isdarkMode}
                  options={[
                    {
                      renderView: () => {
                        return <IconSet name="wb-sunny" size={26} color={theme.BLACK} />;
                      },
                    },
                    {
                      renderView: () => {
                        return <MICon name="moon" size={26} color={theme.BLACK} />;
                      },
                    },
                  ]}
                />
            </View>

             <TextView 
                onPress={()=>{{
                  navigation.navigate('InviteFriends')
                }}}
                title={'Invite Friends'}/>
                
          </View>

          <View style={style.viewStyle} >
            <Text style={style.headerText}>
              Subscriptions & Remix Points
            </Text>
              
            <TextView 
                customStyle={{marginTop:scale(30)}}
                onPress={()=>{{
                  navigation.navigate('Subscription')
                }}}
                title={'Get a monthly subscription'}/>
              
            <TextView 
                onPress={()=>{{
                  navigation.navigate('ManageCurrentSubscription');
                }}}
                title={'Manage current subscription'}/>

            <TextView 
                onPress={()=>{{
                  navigation.navigate('BuyRemixPoints');
                }}}
                title={'Buy Remix Points'}/>
                  
          </View>

          <View style={style.viewStyle} >
            <Text style={style.headerText}>
             Tools
            </Text>
              
            <TextView 
                customStyle={{marginTop:scale(30)}}
                onPress={()=>{{alert('Comming Soon')}}}
                title={'Monetization'}/>
              
            <TextView 
                onPress={()=>{{navigation.navigate('TierMemberPermision')
                }}}
                title={'Tier member permission'}/>

            <TextView 
                onPress={()=>{{
                  navigation.navigate('ManageAccounts');
                }}}
                title={'Manage accounts'}/>
            
            <TextView 
                 onPress={()=>{{alert('Comming Soon')}}}
                title={'Ready Player Me Avatar Creator'}/>
                  
          </View>

          <View style={style.viewStyle} >
            <Text style={style.headerText}>
              Account
            </Text>
              
            <TextView 
                customStyle={{marginTop:scale(30)}}
                onPress={()=>{{
                  navigation.navigate('ChangePassword')
                }}}
                title={'Change Password'}/>
              
            <TextView 
                onPress={()=>{{
                  setCountryModalVisible(true)
                }}}
                rightText={true}
                subTitle={profileData?.country || ''}
                title={'Location'}/>

            <TextView 
                onPress={()=>{{
                  setLanguageModalVisible(true)
                }}}
                rightText={true}
                subTitle={language}
                title={'Language'}/>

            <TextView 
                onPress={()=>{{
                  setGenderModalVisible(true)
                }}}
                rightText={true}
                subTitle={profileData?.gender || ''}
                title={'Gender'}/>
            
            <TextView 
                onPress={()=>{{alert('Comming Soon')}}}
                title={'Profile Information'}/>

            <TextView 
                onPress={()=>{{navigation.navigate('BlockedUser');}}}
                title={'Blocked User'}/>

            <TextView 
                 onPress={()=>{{alert('Comming Soon')}}}
                title={'Onboarding Settings'}/>
            <TextView 
                onPress={()=>{{navigation.navigate('DeleteAccount')}}}
                title={'Delete Account'}/>

            <TextView 
                onPress={()=>{{
                  Linking.openURL("https://mcmasterofceremony.com/mcmasterofceremony/terms-conditions-2021/").catch((err) => console.error('An error occurred', err));
                }}}
                title={'Terms & Conditions'} />

            <TextView 
                onPress={()=>{{
                  Linking.openURL("https://mcmasterofceremony.com/mcmasterofceremony/mc-master-of-ceremony-privacy-policy/").catch((err) => console.error('An error occurred', err));
                }}}
                title={'Privacy Policy'} />

            <TextView 
                onPress={()=>{{
                  setUser(null)
                  dispatch({type: types.RESET_LOCAL_USERDATA});
                  navigation.navigate('Landing')
                  }
                  
                  console.log(user);
                }}
                title={'Sign Out'}/>
                  
          </View>

        </View>
      </View>
      <Modal
        style={style.ModalStyle}
        animationIn="fadeIn"
        backdropColor={theme.BLACK}
        backdropOpacity={0.3}
        isVisible={languageModalVisible}
        onBackdropPress={() => setLanguageModalVisible(false)}>
       
        <SafeAreaView  style={[
            style.ModelInnerStyle,
            {backgroundColor: CustomTheme.colors.background},
          ]}>
        
            <Text tyle={style.modelTitleText} >
              Select Language
            </Text>
         
          <ScrollView>
           {LanguageList.map((item) => {
            
              return (
                <View key={item} >
                  <TouchableOpacity 
                    key={item}
                    onPress={() => {
                      setLanguage(item);
                      setLanguageModalVisible(false)
                    }}
                    >
                    <View style={{paddingHorizontal:scale(10)}}>
                     {
                       language===item?(
                        <Text style={[style.modelTextItem,{backgroundColor:theme.BACKGROUND_VARAINT_7,padding:scale(8),borderRadius:scale(4)}]}>{item}</Text>
                       ):
                       (
                        <Text style={style.modelTextItem}>{item}</Text>
                       )
                     } 
                     
                    </View>
                  </TouchableOpacity>
                </View>
              
              );
            })}
           
           
          </ScrollView>
         
        </SafeAreaView>
      </Modal>
      <Modal
        style={style.ModalStyle}
        animationIn="fadeIn"
        backdropColor={theme.BLACK}
        backdropOpacity={0.3}
        isVisible={genderModalVisible}
        onBackdropPress={() => setGenderModalVisible(false)}>
       
        <SafeAreaView  style={[
            style.ModelInnerStyle,
            {backgroundColor: CustomTheme.colors.background},
          ]}>
        
            <Text tyle={style.modelTitleText} >
              Select Gender
            </Text>
         
          <ScrollView>
           {GenderList.map((item) => {
             
              return (
                <View key={item} >
                  <TouchableOpacity 
                    key={item}
                    onPress={() => {
                      setGender(item);
                      const updatedData={
                        gender:item,
                       };
                      if(item==='Other'){

                          if(gender!==null){
                            updateProfileRequest(updatedData);
                          }else{
                            alert('Enter Detail')
                          }
                      }else{
                        
                        updateProfileRequest(updatedData);
                      }
                      setGenderModalVisible(false)
                    }}
                    >
                   <View style={style.flexRow}>
                      <IconSet
                        name={
                          gender === item
                            ? 'radio-button-checked'
                            : 'radio-button-off'
                        }
                        style={{ marginRight: 20}}
                        size={26}
                      />
                      <Text style={[style.modelTextItem,{ flex: 1 }]}>{item}</Text>
                    </View>
                  </TouchableOpacity>
                
                </View>
              
              );
            })}
           
                  <View style={style.textInput}>
                      <Textinput
                        customStyle={style.CustomtextInput}
                        multiline={false}
                        placeholder={''}
                        onChangeText={value => setGender(value)}
                      />
                  </View>
          </ScrollView>
         
        </SafeAreaView>
      </Modal>
      <Modal
        style={style.ModalStyle}
        animationIn="fadeIn"
        backdropColor={theme.BLACK}
        backdropOpacity={0.3}
        isVisible={countryModalVisible}
        onBackdropPress={() => setCountryModalVisible(false)}>
       
        <SafeAreaView  style={[
            style.ModelInnerStyle,
            {backgroundColor: CustomTheme.colors.background},
          ]}>
        
            <Text style={style.modelTitleText} >
              Select Location
            </Text>
         
          <ScrollView>
          <View style={style.searchSection}>
              <IconSet style={style.searchIcon} name="search" size={20} color={theme.LIGHT_GRAY}/>
              <TextInput
                  style={style.input}
                  placeholder="Search"
                  onChangeText={(text) => setSearch(text)}  
                  underlineColorAndroid="transparent"
              />
          </View>
          {filterCountryList(RNCountry.getCountryNames).map((item) => {
              return (
                <View key={item}>
                  <TouchableOpacity 
                    key={item}
                    onPress={() => {
                      setCountry(item);
                      const updatedData={
                        country:item,
                       };
                       updateProfileRequest(updatedData);
                       setCountryModalVisible(false)
                    }}
                    >
                    <View style={{paddingHorizontal:scale(10)}}>
                     {
                       country===item?(
                        <Text style={[style.modelTextItem,{backgroundColor:theme.BACKGROUND_VARAINT_7,padding:scale(8),borderRadius:scale(4)}]}>{item}</Text>
                       ):
                       (
                        <Text style={style.modelTextItem}>{item}</Text>
                       )
                     } 
                     
                    </View>
                  </TouchableOpacity>
                </View>
              
              );
            })} 
          </ScrollView>
          <FooterButton
          title={'Cancel'}
           onPress={()=>setCountryModalVisible(false)}
        
        /> 
        </SafeAreaView>
      </Modal>
    </ScrollView>
     
  );
};
export default SettingScreen;
