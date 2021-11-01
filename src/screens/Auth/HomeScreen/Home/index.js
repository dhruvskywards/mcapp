import React, {useEffect, useState, useRef} from 'react';
import {
  View,
  FlatList,
  SafeAreaView,
  RefreshControl,
  Pressable,
  Image,
} from 'react-native';
import style from './style';
import user1 from 'src/assets/image/user1.png';
import user2 from 'src/assets/image/user2.png';
import StoryContainer from 'src/components/StoryContainer';
import CompetitionCard from 'src/components/CompetitionCard';
import AddStory from 'src/components/AddStory';
import * as actions from 'src/store/action/postListAction';
import * as storyactions from 'src/store/action/storyAction';
import {useDispatch, useSelector} from 'react-redux';
import BottomSheet from 'reanimated-bottom-sheet';
import SendPostModal from '../../../../components/SendPostModal';
import OutlinedTextInput from '../../../../components/OutlinedTextInput';
import Avatar from '../../../../components/Avatar/Avatar';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {getSessionData} from 'src/utils/asyncStorage';
import sessionKey from 'src/utils/const';
import {useNavigation} from '@react-navigation/core';

const Home = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const sheetRef = useRef();
  const storyData1 = [
    {text: 'TashaM84', image: user1},
    {text: 'TravisDa..', image: user2},
    {text: 'TashaM84', image: user1},
    {text: 'TravisDa..', image: user2},
    {text: 'TashaM84', image: user1},
    {text: 'TravisDa..', image: user2},
    {text: 'TashaM84', image: user1},
    {text: 'TravisDa..', image: user2},
  ];
  const postData = useSelector(state => state?.postList?.postData);
  const storyData = useSelector(state => state?.storyList?.storydata);
  const page = useSelector(state => state?.postList?.pageNumber);
  const [
    onEndReachedCalledDuringMomentum,
    setOnEndReachedCalledDuringMomentum,
  ] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    getPostList();
  };
  const getPostList = () => {
    const params = {
      page: page,
    };
    dispatch(
      actions.postList(
        params,
        async success => {
          setRefreshing(false);
        },
        error => {
          setRefreshing(false);
        },
      ),
    );
  };

  const getStoryList = () => {
    dispatch(
      storyactions.storyList(
        // params,
        async success => {
          // setRefreshing(false);
        },
        error => {
          // setRefreshing(false);
        },
      ),
    );
  };
  useEffect(async () => {
    const user = await getSessionData(sessionKey.userData);
    //console.log('user', user);
  }, []);

  useEffect(() => {
    getPostList();
    getStoryList();
  }, []);

  const renderStoryItem = ({item, index}) => (
    <Pressable key={index} onPress={() => navigation.navigate('StoryLayout')}>
      <StoryContainer data={item} color={true} />
    </Pressable>
  );

  const renderItem = ({item, index}) => (
    <View key={index} style={style.postView}>
      <CompetitionCard
        postData={item}
        onSendPress={() => {
          sheetRef.current.snapTo(1);
        }}
      />
    </View>
  );

  const onScrollHandler = () => {
    if (!onEndReachedCalledDuringMomentum) {
      console.log('call loadmore');
      getPostList();
      setOnEndReachedCalledDuringMomentum(true);
    }
  };

  const listHeader = () => (
    <View style={style.StoryView}>
      <AddStory />
      <FlatList
        // style={style.header}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={storyData}
        renderItem={renderStoryItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );

  const renderHeaderView = () => {
    return (
      <View style={style.ModalContain}>
        <OutlinedTextInput
          placeholder={'Search'}
          rightView={() => {
            return (
              <MIcon name="plus-circle" size={25} style={style.searchicon} />
            );
          }}
          textStyle={style.TextStyle}
        />
      </View>
    );
  };

  return (
    <SafeAreaView>
      {
        (console.log('postData===>', postData),
        console.log('storyData===>', storyData))
      }
      <FlatList
        style={style.postList}
        showsVerticalScrollIndicator={false}
        data={postData}
        renderItem={renderItem}
        ListHeaderComponent={listHeader}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        keyExtractor={(item, index) => index.toString()}
        onEndReached={() => onScrollHandler()}
        onMomentumScrollBegin={() => setOnEndReachedCalledDuringMomentum(false)}
        onEndReachedThreshold={0.5}
      />
      {/*<BottomSheet*/}
      {/*  ref={sheetRef}*/}
      {/*  snapPoints={['89%', '50%', 0]}*/}
      {/*  initialSnap={2}*/}
      {/*  renderHeader={() => {*/}
      {/*    return renderHeaderView();*/}
      {/*  }}*/}
      {/*  renderContent={() => {*/}
      {/*    return <SendPostModal />;*/}
      {/*  }}*/}
      {/*/>*/}
    </SafeAreaView>
  );
};
export default Home;
