import React, { useEffect, useState } from "react";
import {View, Image, ScrollView, Text,TouchableOpacity} from 'react-native';
import style from './style';
import CompetitionBanner from '../../../../assets/image/CompetitionBanner.png';
import FooterButton from '../../../../components/FooterButton/index';
import {useTheme} from '@react-navigation/native';
import * as actions from "../../../../store/action/Competition/AcceptTermsAndConditionAction";
import {useDispatch, useSelector} from 'react-redux';
import { getSessionData } from "../../../../utils/asyncStorage";
import sessionKey from "../../../../utils/const";
import { disabledArrowColor } from "react-native-calendars/src/style";
import { acceptTermsAndConditionReducer } from "../../../../store/reducers/Competiton/acceptTermsAndConditionReducer";
import { competitionGetSelfDetailReducer } from "../../../../store/reducers/Competiton/competitionGetSelfDetailReducer";
import { AcceptTermsAndConditionAction } from '../../../../store/action/Competition/AcceptTermsAndConditionAction'
const TermsAndConditions = (type,item) => {

  const CustomTheme = useTheme();

  const [userId, setUserId] = useState(null);
  const [userType, setUserType] = useState(null);
  const [accepttc, setAccepttc] = useState(false);
  const [competitionSelfData, setCompetitionSelfData] = useState({});
  const dispatch = useDispatch();

  const competitionGetSelfDetailReducer = useSelector((state) => state.competitionGetSelfDetailReducer);
  // useEffect(() => {
  //   if (userId !== null) {
  //     const competitionData = {
  //       type: type === 'aud' ? 'Viewer' : 'Participant',
  //       userId: userId,
  //       competitionId: item.id,
  //     };
  //     CompetitionGetSelfDetailAction(competitionData);
  //   }
  // }, [CompetitionGetSelfDetailAction, item.id, type, userId,acceptTermsAndConditionReducer.isLoading]);

  useEffect(() => {

    if (acceptTermsAndConditionReducer.success) {
      const competitionData = {
        type: type === 'aud' ? 'Viewer' : 'Participant',
        userId: userId,
        competitionId: item.id,
      };

      AcceptTermsAndConditionAction(competitionData);
    }
  }, [
    AcceptTermsAndConditionAction,
    acceptTermsAndConditionReducer.success,
    item.id,
    type,
    userId,
  ]);
  useEffect(() => {
    if (competitionGetSelfDetailReducer.success) {
      setCompetitionSelfData(competitionGetSelfDetailReducer.data);
    }
  }, [competitionGetSelfDetailReducer.success,
    competitionGetSelfDetailReducer.data,
    competitionGetSelfDetailReducer.isLoading,
  ]);

  useEffect(async () => {
    // async function getUserData() {
    const user = JSON.parse(await getSessionData(sessionKey.userData));
      setUserId(user.id);
    console.log("CH-user111",userId)
    // }
    // getUserData();
  }, []);
  const AcceptTC = () => {
    const postdata = {
      id: type.item.id,
      userId:userId,
       type: type.type == 'aud' ? 'viewer' : 'participant',
    };
    console.log("CH-type",JSON.stringify(postdata))
    // console.log("CH-type",JSON.stringify(type))
    dispatch(
      actions.AcceptTermsAndConditionAction(
        postdata,
        async success => {
         console.log("success",JSON.stringify(success))
        },
        error => {
          console.log("fail",JSON.stringify(error))
        },
      ),
    );
     // AcceptTermsAndConditionAction();

  };
  return (
    <View>
      <ScrollView>
        <View
          style={[
            style.maincontainer,
            {backgroundColor: CustomTheme.colors.background},
          ]}>
          <View style={style.container}>
            <Image source={CompetitionBanner} style={style.imageStyle} />
            <View
              style={[
                style.insideContainer,
                {backgroundColor: CustomTheme.colors.background},
              ]}>
              <Text style={[style.titleText, {color: CustomTheme.colors.text}]}>
                Terms & Conditions
              </Text>
              <Text
                style={[style.ContainText, {color: CustomTheme.colors.text}]}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Text>
              <Text
                style={[style.ContainText, {color: CustomTheme.colors.text}]}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
      {/*<View style={style.FooterButton}>*/}
      {/*  <FooterButton title={'I accept the terms & conditions'} />*/}
      {/*</View>*/}
      {competitionSelfData !== true ? (
        <TouchableOpacity style={style.FooterButton1}
                          onPress={()=>{ AcceptTC() } }
                          // disabled={true}
        >
          <Text style={style.buttonTitle}>I accept the terms & conditions</Text>
        </TouchableOpacity>
      ):null}

    </View>
  );
};
export default TermsAndConditions;
