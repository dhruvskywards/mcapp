import React,{useState} from 'react';
import faker from 'faker';
import {scale, verticalScale, ScaledSheet} from 'react-native-size-matters';
import theme from '../../../utils/theme';
import styles from './style';
import { useNavigation } from '@react-navigation/native';
import {View, Text, ScrollView,RefreshControl, FlatList, SafeAreaView} from 'react-native';
import { EMPTY_JSON } from '../../../utils/StaticJsonHelpers';
import { Fragment } from 'react';
import { PEOPLE_AND_BRANDS_FILTERS } from '../../../utils/StaticJsonHelpers';
import ThumbnailNameRow from '../../ThumbnailNameRow';
const PeopleAndBrand = ({ setTabNos ,data}) => {
  const navigation = useNavigation();
  const [tab, setTab] = useState('All');
  const selectTab = (label, value) => {
    setTab(value);
    setTabNos(value);
  };
  return (
    <Fragment >
    
    <View style={styles.DiscoverFilterCon}>
      
      {PEOPLE_AND_BRANDS_FILTERS.map(({ label, value }) => {
        return (
          <Text
            key={value}
            style={[
              {
                paddingRight: 10,
                lineHeight: 35,
                fontFamily: 'ProximaNova-Extrabld',
                color:
                tab === value ? theme.TEXT_PRIMARY_NORMAL : theme.TEXT_INACTIVE_NORMAL,
              },
            ]}
            onPress={() => {
              selectTab(label,value);
            }}
          >
            {label}
          </Text>
        );
      })}
      
    </View>
    <View>
    <Text style={[styles.DiscoverFeatured]}>
      Featured Brands
    </Text>
    <Text style={[styles.DisTopbrand]}>Top Brands on MC</Text>

    <FlatList
           showsVerticalScrollIndicator={false}
            data={EMPTY_JSON}
            renderItem={(item) => {
                return(
                   <ThumbnailNameRow  rightView={() => {
                      return (null); }}/> );
              
              }}
            
              keyExtractor={(item, index) => index.toString()}
            
            />
        </View>
        <View>
    <Text style={[styles.DiscoverFeatured]}>
     People
    </Text>
    <Text style={[styles.DisTopbrand]}>Talent,Fans & Inflincers</Text>

    <FlatList
           showsVerticalScrollIndicator={false}
            data={EMPTY_JSON}
            renderItem={(item) => {
                return(
                   <ThumbnailNameRow  rightView={() => {
                      return (null); }}/> );
              
              }}
            
              keyExtractor={(item, index) => index.toString()}
            
            />
        </View>
  </Fragment>
  );
};

export default PeopleAndBrand;
