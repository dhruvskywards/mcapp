import React,{useState} from 'react';
import {View, Text, ScrollView,SafeAreaView,FlatList,Pressable} from 'react-native';
import DiscoverChallange from '../../../../components/DiscoverChallange';
import PeopleAndBrand from '../../../../components/DiscoverChallange/PeopleAndBrand';
import DiscoverTab from '../../../../components/DiscoverTab';
import LeaderboardCard from '../../../../components/LeaderboardCard';
import ThumbnailNameRow from '../../../../components/ThumbnailNameRow';
import style from './style';
import { DISCOVER_SEARCH_FILTERS, DISCOVER_SEARCH_FILTERS_1, EMPTY_JSON } from '../../../../utils/StaticJsonHelpers';
import FloatButtonView from '../../../../components/DiscoverChallange/FloatButtonView/FloatButtonView';

import MIcon from 'react-native-vector-icons/FontAwesome';
import theme from '../../../../utils/theme';
import {useTheme} from '@react-navigation/native';
import {scale} from 'react-native-size-matters';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import DropdownModal from '../../../../components/Genresmodal';
const Discover = ({navigation}) => {
  // const [profile_photo, setPhoto] = useState(null);
  const [tabNos, setTabNos] = useState('All');
  const [tabNo, setTabNo] = useState(0);
  const CutomTheme = useTheme();
  const [visibleModal, setVisibleModal] = useState(false);
  const renderSelectedTabRow=(tabNo)=>{
      switch(tabNo){
        case 0:
          return(
          <FlatList
            style={style.background}
              showsVerticalScrollIndicator={false}
              data={EMPTY_JSON}
              renderItem={(item) => {
                return(
                   <ThumbnailNameRow  rightView={() => {
                      return (null); }}/> );
              
              }}
            
              keyExtractor={(item, index) => index.toString()}
            
            />
            );
        case 1:
          return(<PeopleAndBrand setTabNos={setTabNos} />);
          break;
        case 2:
          return(<DiscoverChallange />);

        default:
          break;
      };

  }
  return (
    <SafeAreaView style={style.safeAreaViewContainer}>
      <ScrollView >
        <LeaderboardCard />
        <View style={style.maincontainer}>
            <DiscoverTab setTabNo={setTabNo} />

            {renderSelectedTabRow(tabNo)} 
        </View>
        <View  style={style.floatButtonView}>
          <FloatButtonView
              placeholder={'Search'}
              rightView={() => {
                return (
                  <MIcon
                    name="search"
                    color={'black'}
                    size={20}
                    //style={Homestyle.SurfaceIcon}
                  />
                  
                );
              }}
              containerStyle={style.containerStyles}
              />
            

              <Pressable style={style.row} onPress={() => setVisibleModal(true)}>
                <Text style={[style.liveSubText, {color: CutomTheme.colors.text}]}>
                  People
                 
                </Text>
                <FontAwesome5
                  name="chevron-down"
                  size={scale(20)}
                 // style={style.moreIcon}
                  color={CutomTheme.colors.text}
                />
                <DropdownModal
                  data={DISCOVER_SEARCH_FILTERS_1}
                  visible={visibleModal}
                  action={() => setVisibleModal(false)}
                  //onPress={setSelectedGenreData}
                />
        </Pressable>
        </View>
        </ScrollView>
    </SafeAreaView>
  );
};
export default Discover;
