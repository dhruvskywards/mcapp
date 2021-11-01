import React, { useEffect, useState } from "react";
import {View, Image, ScrollView, Text,TouchableOpacity,useWindowDimensions } from 'react-native';
import style from './style';
import CompetitionBanner from '../../../../assets/image/CompetitionBanner.png';
import FooterButton from '../../../../components/FooterButton/index';
import {useTheme} from '@react-navigation/native';
import * as actions1 from "../../../../store/action/Competition/AcceptTermsAndConditionAction";
import * as actions from "../../../../store/action/Competition/CompetitionGetSelfDetailAction";
import {useDispatch, useSelector} from 'react-redux';
import { getSessionData } from "../../../../utils/asyncStorage";
import sessionKey from "../../../../utils/const";
import { COMPETITION_ACCEPT_TERM_CONDITION_SUCCESS} from "../../../../store/actionType"
import Pdf from 'react-native-pdf';
import ApiConstants from "../../../../utils/ApiConstants";

const TermsAndConditions = ({ type, item,tnc } ) => {

  const CustomTheme = useTheme();
  const [userId, setUserId] = useState(null);
  const [competitionSelfData, setCompetitionSelfData] = useState({});
  const [competitionTC, setCompetitionTC] = useState({});
  const dispatch = useDispatch();

  const competitionGetSelfDetailReducer = useSelector((state) => state.competitionGetSelfDetailReducer);
  const acceptTermsAndConditionReducer = useSelector(
    (state) => state.acceptTermsAndConditionReducer);
  const source = {
    uri: `${ApiConstants.API_MEDIA}${encodeURIComponent(item?.tcUrl)}`,

    cache: true,
  };

  const getSelfData = () =>{
    if (userId !== null) {
      const competitionData = {
        type: type === 'aud' ? 'Viewer' : 'Participant',
        userId: userId,
        competitionId: item.id
      };
      dispatch(
        actions.CompetitionGetSelfDetailAction(
          competitionData,
          async success => {
            console.log(success)
            setCompetitionTC(success)
          },
          error => {
            console.log(error)
          },
        ),
      );
    }
  };

  useEffect(() => {
    if (competitionGetSelfDetailReducer.success) {
      setCompetitionSelfData(competitionGetSelfDetailReducer.data);
    }
  }, [competitionGetSelfDetailReducer.success,
    competitionGetSelfDetailReducer.data,
    competitionGetSelfDetailReducer.isLoading,
  ]);

  useEffect(async () => {
    const user = JSON.parse(await getSessionData(sessionKey.userData));
      setUserId(user.id);
  }, []);

  const AcceptTC = () => {
    const postdata = {
      id: item.id,
      userId:userId,
       type: type == 'aud' ? 'viewer' : 'participant',
    };
    dispatch(
      actions1.AcceptTermsAndConditionAction(
        postdata,
        async success => {
         console.log(success)
           // getSelfData()
            setCompetitionTC(success)
          dispatch(
            { type:COMPETITION_ACCEPT_TERM_CONDITION_SUCCESS, payload: success },
          )
        },
        error => {
          console.log(error)
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
              <Pdf source={source} style={style.pdf} />

            </View>
          </View>
        </View>
      </ScrollView>
      {/*<View style={style.FooterButton}>*/}
      {/*  <FooterButton title={'I accept the terms & conditions'} />*/}
      {/*</View>*/}
        <TouchableOpacity
          // style={ competitionTC?.tcAccept ?style.FooterButton2 :style.FooterButton1}
           style={ tnc ?style.FooterButton2 :style.FooterButton1}
                          onPress={()=>{ AcceptTC() } }
                           disabled={competitionTC?.tcAccept}
        >
          <Text style={tnc ? style.buttonTitle1 : style.buttonTitle}>I accept the terms & conditions</Text>
        </TouchableOpacity>

    </View>
  );
};
export default TermsAndConditions;
