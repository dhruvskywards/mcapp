import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView, Switch, TouchableOpacity, FlatList, RefreshControl} from 'react-native';
import { EMPTY_JSON } from '../../../../utils/StaticJsonHelpers';
import HeaderwithCenterTitle from '../../../../components/HeaderWithCenterTitle';
import * as actions from '../../../../store/action/remixPointList'
import style from './style';
import PointsItem from '../../../../components/Settings/PointsItem';
import { remixPointList } from '../../../../store/reducers/remixPointList';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation, useTheme} from '@react-navigation/native';
const BuyRemixPoints = () => {
  const [remixPointsData,setRemixPointsData]=useState([])
  const navigation = useNavigation();
  const [
    onEndReachedCalledDuringMomentum,
    setOnEndReachedCalledDuringMomentum,
  ] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [stateRefreshing, setStateRefreshing] = useState(false);
  const dispatch = useDispatch();
  const remixPointListReducer = useSelector((state) => state.remixPointList);
  console.log("remixPointListReducer",remixPointListReducer)
  const getList = () => {
    dispatch(
      actions.remixPointList(
        async success => {
          console.log("success remix",JSON.stringify(success))
          setStateRefreshing(false);
          setRefreshing(false);
        },
        error => {
          console.log("error remix",JSON.stringify(error))
          setStateRefreshing(false);
          setRefreshing(false);
        },
      ),
    );
  };
  
  
  useEffect(() => {
    getList();
  }, []);
  useEffect(() => {
    stateRefreshing && getList();
    
  }, [stateRefreshing]);

  useEffect(() => {
   
    if (remixPointListReducer.success) {
     
      setRemixPointsData(remixPointListReducer.data);
    }
  }, [remixPointListReducer.success,
    remixPointListReducer.data,
  ]);
  
  const onRefresh = () => {
    setRefreshing(true);
    refreshing && getList();
  };

  const onScrollHandler = () => {
    if (!onEndReachedCalledDuringMomentum) {
      getList();
      setOnEndReachedCalledDuringMomentum(true);
    }
  };
  const renderItem = ({item, index}) => (
    <View key={index}>
      <PointsItem  data={item} />
    </View>
  );
  return (
    <ScrollView style={style.scrollContainer}>
      <View style={style.maincontainer}>
        <HeaderwithCenterTitle  title={'Points'} onPress={()=>{navigation.goBack()}} />
        <Text style={style.headerText}>Puntos</Text>
        {remixPointsData.length > 0 ? (
        <FlatList
          data={remixPointsData}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          onEndReached={() => onScrollHandler()}
          onMomentumScrollBegin={() =>
            setOnEndReachedCalledDuringMomentum(false)
          }
          onEndReachedThreshold={0.5}
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
export default BuyRemixPoints;
