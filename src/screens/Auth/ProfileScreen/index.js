import React, { useEffect, useRef, useState } from "react";
import { View, Text, ScrollView, Image, TouchableOpacity, SafeAreaView, Pressable } from "react-native";
import theme from '../../../utils/theme';
import style from './style';
import Badge_ok from '../../../assets/image/Badge_ok.png'
import profHome from '../../../assets/image/prof_home.png'
import profMusic from '../../../assets/image/prof_music.png'
import profCalender from '../../../assets/image/prof_calender.png'
import profLink from '../../../assets/image/prof_link.png'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import BlackDiamond from '../../../assets/image/BlackDiamond.png'
import UserProfileGallery from "../../../components/UserProfileGallery";
import UserProfileMusic from "../../../components/UserProfileMusic";
import UserProfileLink from "../../../components/UserProfileLink";
import UserProfileCalender from "../../../components/UserProfileCalender";
import { getSessionData } from "../../../utils/asyncStorage";
import sessionKey from "../../../utils/const";
import ApiConstants from "../../../utils/ApiConstants";
import { useDispatch } from "react-redux";
import * as actions from "../../../store/action/userProfile";
import * as actions1 from "../../../store/action/UserProfilePost";
import DropDownMenu from '../../../components/DropDownMenu/DropDownMenu';
import {PROFILE_MENU_ITEMS} from '../../../utils/StaticJsonHelpers';
import Colors from "../../../utils/theme";
let TABS = {
  PROFILE_GALLERY: 'UserProfileGallery',
  PROFILE_MUSIC: 'UserProfileMusic',
  PROFILE_CALENDER: 'UserProfileCalender',
  PROFILE_LINK: 'UserProfileLink',
};
const ProfileScreen = () => {
  const [selectedTab, setSelectedTab] = useState(TABS.PROFILE_GALLERY);
  const [userId, setUserId] = useState({ });
  const [user, setUser] = useState(undefined);
  const [userContent, setUserContent] = useState({ });

  const dispatch = useDispatch();
  const menuRef = useRef();
  useEffect(async () => {
    const userDet = JSON.parse(await getSessionData(sessionKey.userData));
    setUserId(userDet)
    dispatch(
      actions.userProfile(
        userDet.id,
        async success => {
          console.log(success)
          setUser(success)
        },
        error => {
          console.log(error)
        },
      ),
    );
      const postdata = { uid:userDet.id };
              dispatch(
            actions1.UserProfilePost(
              postdata,
                async success => {
                    console.log(success)
                    setUserContent(success)
                },
                error => {
                    console.log(error)
                },
            ),
        );
    //getUser();
  }, []);




  return (
    // <ScrollView>
      <View style={style.maincontainer}>
        <View style={style.mainHeader}>
          <View style={{flexDirection:'row',alignItems:'center',paddingHorizontal:10}}>
              <Pressable
                onPress={() => { }}>
                <MaterialIcons
                  name="arrow-back"
                  size={23}
                  color={Colors.BLACK}
                />
              </Pressable>
          <Image source={BlackDiamond} style={{marginLeft:10,height:18,width:18}} />
          <Text style={style.diamondCount}>{user?.wallet?.blackDiamonds}</Text>
        </View>
          <DropDownMenu data={PROFILE_MENU_ITEMS} iconColor={theme.BLACK}/>
        </View>
        <View style={style.userHeaderCont}>
          <View style={style.userConnCont}>
            <Text style={style.userConnTTxt}>{user?.connections || '0'}</Text>
            <Text style={style.userConnSTTxt}>Connections</Text>
          </View>
          <View style={style.userImgCont}>
            <Image source={{
              uri: `${ApiConstants.API_MEDIA}${encodeURIComponent(user?.profilepic)}`,
            }} style={style.userImg} />
          </View>
          <View style={style.userConnCont}>
            <Text style={style.userConnTTxt}>{user?.competitions || '0'}</Text>
            <Text style={style.userConnSTTxt}>Competitions</Text>
          </View>
        </View>

        <View style={style.userSubHeaderCont}>
          <View style={style.usernameCont}>
            <Text style={style.userSHTxt}>{user?.username}</Text>
            <Image source={Badge_ok} style={style.badgeImg}/>
          </View>
          <View style={style.verLing}></View>
          {/*<Text style={style.userSHTxt}>{user?.interest.length > 0 ? user?.interest[0]?.name : 'test'}</Text>*/}
          <Text style={style.userSHTxt}>{user?.interest.length == 1 ? user?.interest[0]?.name : ''
            || user?.interest.length >= 1 ? user?.interest[0]?.name + ' '+'/'+' '+ user?.interest[1]?.name : ''
          }</Text>
          <View style={style.verLing}></View>
          <Text style={style.userSHTxt}>Wins: {user?.win || '0'}</Text>
        </View>

        <View style={style.profbtnCont}>
            <TouchableOpacity style={style.btnCont}>
              <Text style={style.btnTxt}>Connect</Text>
            </TouchableOpacity>
          <TouchableOpacity style={style.btnCont}>
            <Text style={style.btnTxt}>Channel</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[style.btnCont,{backgroundColor:'#F7FF19'}]}>
            <Text style={[style.btnTxt,{color:'#000'}]}>Challenge</Text>
          </TouchableOpacity>
        </View>

        <View style={style.profGalCont}>
          <TouchableOpacity onPress={()=>{setSelectedTab(TABS.PROFILE_GALLERY)}}>
              <Image source={profHome} style={selectedTab==TABS.PROFILE_GALLERY ? style.profGalImg1 : style.profGalImg}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{setSelectedTab(TABS.PROFILE_MUSIC)}}>
            <Image source={profMusic} style={selectedTab === TABS.PROFILE_MUSIC ? style.profGalImg1 : style.profGalImg}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{setSelectedTab(TABS.PROFILE_CALENDER)}}>
            <Image source={profCalender} style={selectedTab === TABS.PROFILE_CALENDER ? style.profGalImg1 : style.profGalImg}/>
          </TouchableOpacity >
          <TouchableOpacity onPress={()=>{setSelectedTab(TABS.PROFILE_LINK)}}>
            <Image source={profLink} style={selectedTab === TABS.PROFILE_LINK ? style.profGalImg1 : style.profGalImg} />
          </TouchableOpacity>
        </View>
        {selectedTab === TABS.PROFILE_GALLERY ?
          <UserProfileGallery userContent={userContent}/>
          :null}
        {selectedTab === TABS.PROFILE_MUSIC ?
          <UserProfileMusic uid={userId.id}/>
          :null}
        {selectedTab === TABS.PROFILE_CALENDER ?
          <UserProfileCalender/>
          :null}
        {selectedTab === TABS.PROFILE_LINK ?
          <UserProfileLink/>
          :null}
      </View>
    // </ScrollView>
  );
};
export default ProfileScreen;
