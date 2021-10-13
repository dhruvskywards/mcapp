import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView, Switch, TouchableOpacity, FlatList, RefreshControl, Image} from 'react-native';
import { EMPTY_JSON } from '../../../../utils/StaticJsonHelpers';
import HeaderwithCenterTitle from '../../../../components/HeaderWithCenterTitle';
import * as actions from '../../../../store/action/remixPointList'
import style from './style';
import PointsItem from '../../../../components/Settings/PointsItem';
import { remixPointList } from '../../../../store/reducers/remixPointList';
import {useDispatch, useSelector} from 'react-redux';
import ToggleElement from '../../../../components/ToggleElement';
import theme from '../../../../utils/theme';
import TextRowWithUnderline from '../../../../components/TextRowWithUnderline';
import FooterButton from '../../../../components/FooterButton';
import Icon from 'react-native-vector-icons/FontAwesome'
import {
    scale,
    verticalScale,
    moderateScale,
    ScaledSheet,
  } from 'react-native-size-matters';
import Button from '../../../../components/Button';
import {useNavigation, useTheme} from '@react-navigation/native';
const ManageCurrentSubscription = ({route}) => {
  const navigation = useNavigation();
  const CustomTheme = useTheme();
   // var subscriptionCancel = route.params ? route.params.subscriptionCancel : null;
   // console.log("===========subscriptionCancel",subscriptionCancel);
    var subscriptionCancel =false;
    const [toggleValue, setToggleValue] = useState(false);
  return (
    <View style={style.maincontainer}>
        <ScrollView style={style.scrollContainer}>
      
        <HeaderwithCenterTitle  title={'Manage Current Subscription'} onPress={()=>{navigation.goBack()}} />

        <View style={style.titleView}>
            <Text style={style.titleViewText}>
              {!subscriptionCancel ? 'Subscription Info' : 'Your subscription has been canceled.'}
            </Text>

           
            {!subscriptionCancel ? (
               
            <View style={style.autoRenewView}>
                <Text style={style.autoRenewText}>
                  Auto Renew
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
              value={toggleValue} 
              onPress={(val) => setToggleValue(val)}></ToggleElement>
              
             </View>
           
          ):null}
        </View>
          <TextRowWithUnderline
            theme={theme}
            leftText={'Current Plan'}
            rightText={subscriptionCancel ? 'FREE' : 'Basic Essentials'}
            />
          
          <TextRowWithUnderline
          theme={theme}
          leftText={'Status'}
          rightText={subscriptionCancel ? '- -' : 'Active'}
          containerStyle={style.containerStyles}
          rightTextStyle={subscriptionCancel ? null : { color: '#58EB24' }}
        />
        <TextRowWithUnderline
          theme={theme}
          leftText={'Next Billing Amount'}
          rightText={subscriptionCancel ? '- -' : '$5.99'}
          containerStyle={style.containerStyles}
        />
        <TextRowWithUnderline
          theme={theme}
          leftText={'Next Billing Date'}
          rightText={subscriptionCancel ? '- -' : '3 / 1 / 2020'}
          containerStyle={style.containerStyles}
        />
        <TextRowWithUnderline
          theme={theme}
          leftText={'Payment Method'}
          containerStyle={style.containerStyles}
        />
         <View style={style.paymentView}>
          {subscriptionCancel ? (
            <Text style={style.textBold}>{'- -'}</Text>
          ) : (
            <Image
              source={{
                uri: 'https://cdn.pixabay.com/photo/2015/05/26/09/37/paypal-784404_1280.png',
              }}
              style={style.imageView}
            />
          )}
          <Text style={[style.textBold, { textDecorationLine: 'underline' }]}>
            {!subscriptionCancel ? 'Update' : ''}
          </Text>
        </View>
        
        {subscriptionCancel ? (
           <Button
               customStyle={style.padding}
               title={'Add Payment'}
               onPress={()=>{}} />):null}

        {subscriptionCancel ? null : (
          <Text
            style={style.textCancelSubscription}
            onPress={() => {
              navigation.navigate('ContinueToCancel');
            }}
          >
            {'Cancel Subscription'}
          </Text>
        )}
     
    </ScrollView>
      <FooterButton
       onPress={() => {
        //navigation.navigate(Globals.SCREENS.SUBSCRIPTION);
      }}
      title={subscriptionCancel ? 'Purchase A Subscription' : 'Upgrade Subscription'}
    />
    </View>
    );
  
};
export default ManageCurrentSubscription;
