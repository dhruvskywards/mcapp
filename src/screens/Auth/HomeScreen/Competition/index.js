import React, {useState, useEffect} from 'react';
import {View, RefreshControl, FlatList, Text, SafeAreaView} from 'react-native';
import style from './style';
import adidas from 'src/assets/image/adidas.png';
import nba from 'src/assets/image/nba.png';
import puma from 'src/assets/image/puma.png';
import {useTheme} from '@react-navigation/native';
import * as actions from 'src/store/action/competitionAction';
import * as genreListActions from 'src/store/action/genreListAction';
import * as types from 'src/store/actionType';
import StoryContainer from 'src/components/StoryContainer';
import CompetitionTabBar from 'src/components/CompetitionTabBar';
import LivestreamCard from 'src/components/LivestreamCard';
import LiveButton from 'src/components/LiveButton';
import {useDispatch, useSelector} from 'react-redux';

const Competition = ({}) => {
  const dispatch = useDispatch();
  const storyData = [
    {text: 'Adidas', image: adidas},
    {text: 'NBA', image: nba},
    {text: 'Puma', image: puma},
  ];

  const [tabNo, setTabNo] = useState(0);
  const [
    onEndReachedCalledDuringMomentum,
    setOnEndReachedCalledDuringMomentum,
  ] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [stateRefreshing, setStateRefreshing] = useState(false);
  const [competitionType, setCompetitionType] = useState('Live');
  const [selectedGenreData, setSelectedGenreData] = useState();
  const page = useSelector(state => state?.compotitionList?.pageNumber);
  const competitionData = useSelector(
    state => state?.compotitionList?.competitionData,
  );

  const onRefresh = () => {
    setRefreshing(true);
    refreshing && getCompetitionList();
  };

  const getCompetitionList = () => {
    const params = {
      page: page,
      genreId: selectedGenreData ? selectedGenreData.item.id : 0,
      type: competitionType,
      tag: tabNo,
    };
    dispatch(
      actions.competitionList(
        params,
        async success => {
          setStateRefreshing(false);
          setRefreshing(false);
        },
        error => {
          setStateRefreshing(false);
          setRefreshing(false);
        },
      ),
    );
  };

  const getgenreData = () => {
    dispatch(
      genreListActions.genresList(
        async success => {},
        error => {},
      ),
    );
  };

  useEffect(() => {
    getCompetitionList();
    getgenreData();
  }, []);

  useEffect(() => {
    competitionType && getCompetitionList();
    getgenreData();
  }, [competitionType]);

  useEffect(() => {
    stateRefreshing && getCompetitionList();
    stateRefreshing && getgenreData();
  }, [stateRefreshing]);

  useEffect(() => {
    selectedGenreData && getCompetitionList();
    getgenreData();
  }, [selectedGenreData]);

  useEffect(() => {
    dispatch({type: types.RESET_COMPETITION_LIST});
    setStateRefreshing(true);
  }, [
    tabNo,
    refreshing,
    dispatch,
    competitionType,
    selectedGenreData?.item?.id,
  ]);

  const renderAdItem = ({item, index}) => (
    <View key={index}>
      <StoryContainer text={item.text} url={item.image} color={true} />
    </View>
  );

  const renderItem = ({item, index}) => (
    <View key={index}>
      <LivestreamCard competitionData={item} />
    </View>
  );

  const onScrollHandler = () => {
    if (!onEndReachedCalledDuringMomentum) {
      getCompetitionList();
      setOnEndReachedCalledDuringMomentum(true);
    }
  };

  return (
    <SafeAreaView style={style.maincontainer}>
      <View>
        <FlatList
          style={style.header}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          data={storyData}
          renderItem={renderAdItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
      <CompetitionTabBar setTabNo={setTabNo} />
      {competitionData.length > 0 ? (
        <FlatList
          style={style.background}
          showsVerticalScrollIndicator={false}
          data={competitionData}
          renderItem={renderItem}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          keyExtractor={(item, index) => index.toString()}
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
      <View
        style={competitionData.length > 0 ? style.liveBtn : style.liveBtnData}>
        <LiveButton
          setCompetitionType={setCompetitionType}
          selectedGenreData={selectedGenreData}
          setSelectedGenreData={setSelectedGenreData}
        />
      </View>
    </SafeAreaView>
  );
};
export default Competition;
