import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView, Switch, TouchableOpacity, FlatList, RefreshControl} from 'react-native';
import { EMPTY_JSON } from '../../../../utils/StaticJsonHelpers';
import HeaderwithCenterTitle from '../../../../components/HeaderWithCenterTitle';
import style from './style';
import {useDispatch, useSelector} from 'react-redux';
import ThumbnailNameRow from '../../../../components/ThumbnailNameRow';
import Button from '../../../../components/Button';
import {useNavigation, useTheme} from '@react-navigation/native';
const BlockedUser = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const renderItem = ({item, index}) => (
    <View key={index}>
      <ThumbnailNameRow rightView = {() => {
           return  <Button customStyle={style.padding} title={'Unblock'} />
        }} />
    </View>
  );
  return (
    <ScrollView style={style.scrollContainer}>
      <View style={style.maincontainer}>
        <HeaderwithCenterTitle  title={'Blocked Users'} onPress={()=>{navigation.goBack()}} />
        
        <View style={[style.selectAccountView]}>
              <Text style={style.selectAccountText}>Select an account</Text>
        </View>
        {EMPTY_JSON.length > 0 ? (
        <FlatList
   
          style={style.flatListView}
          data={EMPTY_JSON}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          
        />
        ) : (
          <View style={style.container}>
            <Text style={style.noData}>No Data</Text>
          </View>
        )}
      </View>
    </ScrollView>
  );
};
export default BlockedUser;
