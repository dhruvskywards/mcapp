import React, {useEffect, useState, useRef} from 'react';
import {
  View,
  FlatList,
  SafeAreaView,
  RefreshControl,
  Pressable,
} from 'react-native';
import style from './style';
import user1 from 'src/assets/image/user1.png';
import user2 from 'src/assets/image/user2.png';
import StoryContainer from 'src/components/StoryContainer';
import CompetitionCard from 'src/components/CompetitionCard';
import AddStory from 'src/components/AddStory';
import * as actions from 'src/store/action/postListAction';
import {useDispatch, useSelector} from 'react-redux';
import BottomSheet from 'reanimated-bottom-sheet';
import SendPostModal from '../../../../components/SendPostModal';
import OutlinedTextInput from '../../../../components/OutlinedTextInput';
import Avatar from '../../../../components/Avatar/Avatar';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {getSessionData} from 'src/utils/asyncStorage';
import sessionKey from 'src/utils/const';
import { scale } from 'react-native-size-matters';
const Home = () => {
  const dispatch = useDispatch();
  const sheetRef = useRef();
  const storyData = [
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
  useEffect(async ()=>{
    // const user = await getSessionData(sessionKey.userData)
    const user = JSON.parse(await getSessionData(sessionKey.userData));
    console.log("getSessionData",JSON.stringify(user))
  },[])
  useEffect(() => {
    getPostList();
  }, []);

  const renderStoryItem = ({item, index}) => (
    <View key={index}>
      <StoryContainer text={item.text} url={item.image} color={true} />
    </View>
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
          containerProps={{height:scale(50)}}
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
      <BottomSheet
        ref={sheetRef}
        snapPoints={['89%', '50%', 0]}
        initialSnap={2}
        renderHeader={() => {
          return renderHeaderView();
        }}
        renderContent={() => {
          return <SendPostModal />;
        }}
      />
    </SafeAreaView>
  );
};
export default Home;
