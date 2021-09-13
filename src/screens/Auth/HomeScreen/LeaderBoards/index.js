import React,{useState,useEffect} from 'react';
import {View, Text, ScrollView,RefreshControl, FlatList, SafeAreaView} from 'react-native';
import LeaderboardCard from '../../../../components/LeaderboardCard';
import LeaderBoardTab from '../../../../components/LeaderBoardTab';
import style from './style';
import {EMPTY_JSON} from '../../../../utils/StaticJsonHelpers';
import LeaderBoardItem from '../../../../components/LeaderBoardTab/LeaderBoardItem';
import Button from '../../../../components/Button';
import FloatButton from '../../../../components/LeaderBoardTab/FloatButton';
import MiniProfileModal from '../../../../components/MiniProfileModal';
import { useSelector } from 'react-redux';
const LeaderBoard = ({navigation}) => {
  // const [profile_photo, setPhoto] = useState(null);
  const [showMiniProfile, setShowMiniProfile] = useState(false);

  const [tabNo, setTabNo] = useState(0);
  const [
    onEndReachedCalledDuringMomentum,
    setOnEndReachedCalledDuringMomentum,
  ] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [stateRefreshing, setStateRefreshing] = useState(false);
 // const { darkMode } = useSelector((state) => state.ThemeReducer);
  
  return (
    <SafeAreaView style={style.safeAreaViewContainer}>
      <ScrollView>
        <LeaderboardCard />
        <View style={style.maincontainer}>
          <LeaderBoardTab setTabNo={setTabNo} />

          <Text style={style.SubtitleText}>Ranking</Text>
          <FlatList
            style={style.background}
              showsVerticalScrollIndicator={false}
              data={EMPTY_JSON}
              renderItem={(item) => {
                return(<LeaderBoardItem 
                  onPress={() => {
                    setShowMiniProfile(true);
                  }}
                  rightView={() => {
                    return <Button 
                            onPress={() => { }}
                            customStyle={style.buttonStyle} title={'Challenge'} />;
                  }}/>);
              
              }}
            
              keyExtractor={(item, index) => index.toString()}
            
            />
        </View>
      </ScrollView>
       <View style={style.liveBtn}>
          <FloatButton tabNo={tabNo} />
        </View>
        <MiniProfileModal
          isVisible={showMiniProfile}
          closeModal={() => {
            setShowMiniProfile(false);
          }}
        />
    </SafeAreaView>
    
  );
};
export default LeaderBoard;
