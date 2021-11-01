
import React from 'react';
import {Text, View, Image,FlatList} from 'react-native';
import styles from './style';
import {useTheme} from '@react-navigation/native';
import UserChatProfile from "../../UserChatProfile";
import mic from "../../../assets/image/mic.png";
const data = [{id:1},{id:2},{id:3}]

const ModeratorProfile = (style, HorizontalView, url, name, type,) => {
   const CustomTheme = useTheme();
  return (
    <View style={{marginTop:15}}>

      <FlatList
        data={data}
         horizontal={true}
        style={{marginRight:15}}
        // numColumns={3}
        renderItem={()=>(
          <View style={{marginRight:40,marginVertical:20}}>
            <View style={[styles.MainContainer, style]}>
              <View style={styles.greenDot}>
              </View>
              <Image source={url} style={styles.imageView} />
              <View style={styles.micImgCont}>
                <Image source={mic} style={{}}/>
              </View>
              <View style={[styles.DetailsView, HorizontalView]}>
                <Text style={[styles.nameText, {color: CustomTheme.colors.text}]} maxLength={6}>
                  MarkWoo...
                </Text>
                <Text style={styles.typeText}>Musician</Text>
                <Text style={styles.removeText}>Remove</Text>
              </View>
            </View>
          </View>
        )

        }
      />
    </View>
  );
};

export default ModeratorProfile;
