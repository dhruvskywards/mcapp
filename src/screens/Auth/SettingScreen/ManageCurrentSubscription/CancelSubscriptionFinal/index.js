import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView, Switch, TouchableOpacity, FlatList, RefreshControl, Image} from 'react-native';
import {Options} from '../../../../../utils/StaticJsonHelpers';
import HeaderwithCenterTitle from '../../../../../components/HeaderWithCenterTitle';
import TextWithBulletPoints from '../../../../../components/TextWithBulletPoints';
import style from './style';

import {useDispatch, useSelector} from 'react-redux';
import RadioButtonRN from 'radio-buttons-react-native';
import theme from '../../../../../utils/theme';
import {getSessionData} from 'src/utils/asyncStorage';
import sessionKey from 'src/utils/const';
import FooterButton from '../../../../../components/FooterButton';
import Icon from 'react-native-vector-icons/FontAwesome'
import {
    scale,
    verticalScale,
    moderateScale,
    ScaledSheet,
  } from 'react-native-size-matters';
import {useNavigation, useTheme} from '@react-navigation/native';
import { cancelUserSubscriptionAction } from '../../../../../store/action/cancelUserSubscriptionAction';
import { cancelTierSubscriptionAction } from '../../../../../store/action/cancelTierSubscriptionAction';
import {cancelUserSubscriptionreducer} from '../../../../../store/reducers/cancelUserSubscriptionreducer';
import {cancelTierSubcriptionreducer} from '../../../../../store/reducers/cancelTierSubcriptionreducer'
const CancelSubscriptionFinal = () => {
  const navigation = useNavigation();
  const [tierMemberId, setTierMemberId] = useState(null);
  const [subscriberId, setSubscriberId] = useState(null);
  const cancelSubscriptionReducer = useSelector((state) => state.cancelUserSubscriptionreducer);
  const cancelTierSubscriptionReducer = useSelector((state) => state.cancelTierSubcriptionreducer);
 
  useEffect(async ()=>{
  
    const user = JSON.parse(await getSessionData(sessionKey.userData));
    console.log("==calledUser",user.id)
    //setUserId(user.id)
    setTierMemberId(user.tierMemberId)
    setSubscriberId(user.id)
    
  },[])
  const cancelSubscriptionRequest = () => {
    const postdata = {
      id: subscriberId,
    };
    cancelUserSubscriptionAction(subscriberId);
  };
  const cancelTierSubscriptionRequest = () => {
    const postdata = {
      id: tierMemberId,
    };
    cancelTierSubscriptionAction(tierMemberId);
  };
  useEffect(() => {
    console.log("==calledsub",cancelSubscriptionReducer.success)
    if (cancelSubscriptionReducer.success) {
      cancelSubscriptionReducer.success = false;
      navigation.navigate('ManageCurrentSubscription', {
        subscriptionCancel: false,
      });
    }
  }, [cancelSubscriptionReducer]);

  useEffect(() => {

    console.log("==calledtierr",cancelTierSubscriptionReducer.data)
    if (cancelTierSubscriptionReducer.success) {
      console.log("==calledtierr",cancelTierSubscriptionReducer.success)
      cancelTierSubscriptionReducer.success = false;
      navigation.navigate('ManageCurrentSubscription', {
        subscriptionCancel: false,
      });
    }
  }, [cancelTierSubscriptionReducer]);
  return (
    <View style={style.maincontainer}>
     
        <ScrollView style={style.scrollContainer}>
      
       
        <HeaderwithCenterTitle alighTitle={{alignItems:'flex-start',marginLeft:scale(5)}}  title={'Cancel Subscription'} onPress={()=>{
          navigation.goBack();
         }} />
        <Text style={style.titleViewText}>
        Are you sure you want to cancel?
        </Text>
        <Text style={style.paddinTops}>
           You will not be able to:
        </Text>
        
        <View style={{ paddingVertical: 60,marginHorizontal:scale(20) }}>
          <TextWithBulletPoints children={'Participate in paid competitions'}  />
          <TextWithBulletPoints children={'Create tracks in MC studio'}  />
          <TextWithBulletPoints children={'Have access to A&Rs'}  />
          <TextWithBulletPoints children={'Have access to MC Vibe filters'}  />
       
        </View>
    </ScrollView>
      <FooterButton
   
       onPress={() => {
        tierMemberId === null ? cancelSubscriptionRequest() : cancelTierSubscriptionRequest();
      }}
      title={'Continue to cancel'}
    />
    </View>
    );
  
};
export default CancelSubscriptionFinal;
