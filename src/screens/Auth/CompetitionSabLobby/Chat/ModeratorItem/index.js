
import React, {useEffect, useState} from 'react';
import {Text, View, Image,FlatList} from 'react-native';
import styles from './style';
import {useTheme} from '@react-navigation/native';
import BlackDiamondView from "../../../../../components/BlackDiamondView";
import UserChatProfile from "../../../../../components/UserChatProfile";
import ApiConstants from "../../../../../utils/ApiConstants";
const data = [{id:1}]
const ModeratorItem = ({moderator}) => {
  // const CustomTheme = useTheme();

    const [creator, setCreator] = useState([ ]);

  return (
    <View style={{marginTop:15}}>

      <FlatList
        data={data}
        // horizontal={true}
        style={{marginRight:15}}
        numColumns={3}
        renderItem={(item)=>(
          <View style={{marginRight:20,marginVertical:20}}>
            <UserChatProfile
              url={{uri: `${ApiConstants.API_MEDIA}${encodeURIComponent(moderator?.profilepic)}`}}
              name={moderator?.username}
              type={moderator?.interest[0]?.name}
              style={{}}
            />
          </View>
        )

        }
      />
    </View>
  );
};

export default ModeratorItem;
