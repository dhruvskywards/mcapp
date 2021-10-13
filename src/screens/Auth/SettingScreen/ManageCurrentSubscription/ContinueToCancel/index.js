import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView, Switch, TouchableOpacity, FlatList, RefreshControl, Image} from 'react-native';
import {Options} from '../../../../../utils/StaticJsonHelpers';
import HeaderwithCenterTitle from '../../../../../components/HeaderWithCenterTitle';

import style from './style';

import {useDispatch, useSelector} from 'react-redux';
import RadioButtonRN from 'radio-buttons-react-native';
import theme from '../../../../../utils/theme';
import OutlinedTextInput from '../../../../../components/OutlinedTextInput';
import FooterButton from '../../../../../components/FooterButton';
import Icon from 'react-native-vector-icons/FontAwesome'
import {
    scale,
    verticalScale,
    moderateScale,
    ScaledSheet,
  } from 'react-native-size-matters';
import Button from '../../../../../components/Button';
import {useNavigation, useTheme} from '@react-navigation/native';
const ContinueToCancel = () => {
  const navigation = useNavigation();
  const[radioButtonValue,setRadioButtonValue]=useState(null)
  console.log(radioButtonValue);
  return (
    <View style={style.maincontainer}>
        <ScrollView style={style.scrollContainer}>

           <HeaderwithCenterTitle alighTitle={{alignItems:'flex-start',marginLeft:scale(5)}}  title={'Cancel Subscription'} onPress={()=>{
          navigation.goBack();
         }} />

        <Text style={style.titleViewText}>
          Before you cancel...
        </Text>
        <Text style={style.paddinTops}>
          Please tell us why you're canceling to help us improve our experience.
        </Text>
        
        <RadioButtonRN
            style={style.radiobtn}
            box={false}
            data={Options}
            textStyle={style.titleText}
            deactiveColor={theme.TEXT_VARAINT_1}
            activeColor={theme.TEXT_VARAINT_1}
            selectedBtn={(e) =>setRadioButtonValue(e) } />
          
       
            <OutlinedTextInput
              
              textAligns={'flex-start'}
              containerProps={style.whiteTextInput}
              placeholder={
                "Please tell us why you're canceling your subscription. Your feedback will help us improve the product."
              }
              placeHolderColor={theme.CANCEL_SUB_TEXT_PLACEHOLDER}
              textStyle={style.textInput}
              borderColor={theme.CANCEL_SUB_TEXT_PLACEHOLDER}
              multiline={true} />

          
           
      
    </ScrollView>
   
      <FooterButton
     
       textStyle={[{ opacity: radioButtonValue!==null ? 1 : 0.25 }]}
       onPress={() => {
         {
          radioButtonValue!==null?( navigation.navigate('CancelSubscriptionFinal')):(null)
         }
       
      }}
      title={'Continue to cancel'}
    />
    </View>
    );
  
};
export default ContinueToCancel;
