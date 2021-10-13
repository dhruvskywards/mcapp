/* eslint-disable react-native/no-inline-styles */
import React, { useState, Fragment, useCallback,useEffect } from 'react';
import { ScrollView, StyleSheet, TextInput,View,Text,TouchableOpacity,Image} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import * as actions from '../../../../../store/action/fetchSubscription';
import IconSet from 'react-native-vector-icons/Ionicons';
import sliderDefault from '../../../../../assets/image/sliderDefault.png';
import styles from './style';
import {useNavigation, useTheme} from '@react-navigation/native';
import { scale } from 'react-native-size-matters';
import { returnScreenDimensions } from '../../../../../utils/JsUtils';
import { useSelector,useDispatch } from 'react-redux';
import HeaderwithCenterTitle from '../../../../../components/HeaderWithCenterTitle';
import Button from '../../../../../components/Button';
import theme from '../../../../../utils/theme';
const SubscriptionDetails = ({route}) => {
const navigation = useNavigation();
const CustomTheme = useTheme();
const dispatch = useDispatch();
const {SELECTED_ID,NAME}=route.params;
 console.log("------------------"+SELECTED_ID)
 useEffect(() => {
 getSubscriptionList();
 
}, [dispatch]);
 
  const getSubscriptionList = () => {
    dispatch(
      actions.fetchSubscription(
        async success => {
            console.log("success sub",JSON.stringify(success))
        },
        error => {
            console.log("error sub",JSON.stringify(error))
        },
      ),
    );
  }; 
  const subscriptions = useSelector((state) => state.fetchSubscriptionReducer.data);

  const selectedItem = subscriptions.filter((m) => m.id === SELECTED_ID)[0];


  const list= selectedItem.subscriptionDetails;
 
  const handleStyleCard = (name) => {
    if (name === 'Supreme') {
      return {
        borderBottomRightRadius: 45,
      borderTopColor: theme.TRANSPARENT,
      borderRightColor: theme.TRANSPARENT,
      borderBottomColor: theme.TRANSPARENT,
      borderLeftColor: theme.RED,
      borderLeftWidth: 5,
      borderTopRightRadius: 45,
      borderWidth: 1,
      elevation: 10,
       marginHorizontal:scale(10),
      marginTop:scale(30),
      paddingHorizontal:scale(10),
      paddingVertical:scale(30),
      shadowColor: '#c5c6d0',
      shadowOffset: {
        height: 1,
        width: 0,
      },
      shadowOpacity: 6,
      shadowRadius: 3.22,
      };
    }  else {
      return {
        borderBottomRightRadius: 45,
        borderTopColor: theme.TRANSPARENT,
        borderRightColor: theme.TRANSPARENT,
        borderBottomColor: theme.TRANSPARENT,
        borderLeftColor: '#c5c6d0',
        borderLeftWidth: 5,
        borderTopRightRadius: 45,
        borderWidth: 1,
        elevation: 10,
         marginHorizontal:scale(10),
        marginTop:scale(30),
        paddingHorizontal:scale(10),
        paddingVertical:scale(30),
        shadowColor: '#c5c6d0',
        shadowOffset: {
          height: 1,
          width: 0,
        },
        shadowOpacity: 6,
        shadowRadius: 3.22,
      }
    }
  };


  return (
   
    <View style={{ flex: 1, backgroundColor: CustomTheme.colors.background, marginHorizontal: scale(10) }}>
      <View style={styles.mainContainer}>
      <HeaderwithCenterTitle  title={'Details'} onPress={()=>{navigation.goBack()}} />
      </View>
      <ScrollView style={{ flexGrow: 1 }}>
        <View style={[handleStyleCard(NAME),{backgroundColor:CustomTheme.colors.background}]}>
          <Text style={[styles.textTitleMain,{color:CustomTheme.colors.color}]}>
            {selectedItem.name}
          </Text>
          <Text style={[styles.textStartingAt, {color:CustomTheme.colors.color}]}>
            Starting at 
            {selectedItem.price > 0 ? ` for 1 ${selectedItem.duration}`:''}
             
          </Text>
          <Text style={[styles.textPrice, {color:CustomTheme.colors.color}]}>
                 {selectedItem.price > 0 ? `$${selectedItem.price}` : '$0.00'}
          </Text>
          <Text style={[styles.textDetail, {color:CustomTheme.colors.color}]}>
           {selectedItem.description}
          </Text>
          <Text style={[styles.textPrizeValue, {color:CustomTheme.colors.color}]}>
            Prize value potential earnings
          </Text>

          <View style={styles.container}>
            <View style={styles.textCon}>
                <Text style={styles.valueText}>${selectedItem.startRange}</Text>
                <Text style={styles.valueTexts}>${selectedItem.endRange}</Text>
              </View>
              <Image style={{width:'100%', marginTop:10}}  source={sliderDefault} />
           </View> 
            {selectedItem.price > 0 ? (
                <Button
                customStyle={styles.padding}
                title={'Buy'}
                onPress={()=>{navigation.navigate('ManageCurrentSubscription',{
                  subscriptionCancel: false,
                });}} />) : (null)}
          
        </View>
        <View style={{flex: 1}}>
          <FlatList
            contentContainerStyle={{ flex: 1, marginBottom: 30 }}
            data={
              list || []
            }
            keyExtractor={(item) => {item.id}}
            showsVerticalScrollIndicator={false}
            renderItem={({ item}) => (
              <View style={styles.mainListContainer}>
                <View style={styles.innerListContainer}>
                  <View style={styles.listTextView1}>
                    <Text style={( { color: CustomTheme.colors.color})}>
                      {item.description}
                      
                    </Text>
                  </View>

                  
                  {item.description.includes('beta') ? (
                    <View style={styles.listTextView2}>
                      <Text style={[ { color: CustomTheme.colors.color,fontFamily: 'ProximaNova-Extrabld' ,  fontSize: 16}]}>
                        {'BETA'}
                      </Text>
                    </View>
                  ) :  ( <View style={styles.listEmpaty}>
                    <Text style={[ { color: CustomTheme.colors.color }]}>
                  
                    </Text>
                  </View>)}
                </View>
              </View>
            )}
          />
        </View>
      </ScrollView>
    </View>
  );
};
export default SubscriptionDetails;

