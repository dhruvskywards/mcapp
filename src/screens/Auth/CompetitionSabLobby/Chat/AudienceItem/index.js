

import React from 'react';
import {Text, View, Image,FlatList} from 'react-native';
import styles from './style';
import {useTheme} from '@react-navigation/native';
import BlackDiamondView from "../../../../../components/BlackDiamondView";
import UserProfile from '../../../../../components/UserProfile/index';
import ApiConstants from "../../../../../utils/ApiConstants";
const data = [{id:1},{id:2},{id:3},{id:4},{id:3},{id:4}]
const AudienceItem = ({audience}) => {
  // const CustomTheme = useTheme();

  return (
    <View style={{marginTop:15}}>

      <FlatList
        data={audience}
        // horizontal={true}
         style={{}}
        numColumns={4}
        renderItem={({item})=>(
          <View style={{marginRight:35,marginVertical:20}}>
            <UserProfile
              url={{ uri: `${ApiConstants.API_MEDIA}${encodeURIComponent(item?.profilepic)}` }}
              name={item.username}
              type={item?.interest.length == 1 ? item?.interest[0]?.name : ''
              || item?.interest.length >= 1 ? item?.interest[0]?.name + ' '+'/'+' '+ item?.interest[1]?.name : ''
              }
              // type={item?.interest[0]?.name}
              style={{}}
            />
          </View>
        )

        }
      />
    </View>
  );
};

export default AudienceItem;
