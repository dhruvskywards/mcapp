/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState} from 'react';
import {Pressable, Text, View,Image} from 'react-native';
import theme from '../../../utils/theme';
import style from './style';
import {scale} from 'react-native-size-matters';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {useTheme} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import faker from 'faker';
import BlackDiamond from '../../../assets/image/BlackDiamond.png';

const FloatButton = ({
  leaderboardData,
  tabNo
}) => {
  const CutomTheme = useTheme();
  console.log("===tabNo",tabNo)
  const showContent = () => {
    switch (tabNo) {
      case 0:
        return(
          <Text style={style.textYou}>Wins: 454 / Loses: 98</Text>
        );
      case 1:
     
      case 2:
        return(
          <Text style={style.textYou}>Content hours watched: 783hrs</Text>
        );
      case 3:
        console.log("Gift")
        return(
          <View style={style.viewTopGifter}>
            <Text style={style.textYou}>Gift given: </Text>
            <Image source={BlackDiamond} />
            <Text style={style.titleCount}> 32800</Text>
         
         </View>
        );

      case 11:
        return(
          <Text style={style.textYou}>Content Likes: 73,283</Text>
        );
      
        case 12:
          return(
            <Text style={style.textYou}>111000xp</Text>
          );
      default:
        break;
    }
  };
  return (
    <View
      style={[style.container,
      
      ]}>
      <View style={style.headercontainer}>
        <View style={style.row}>
          
          <View style={style.viewRank}>
              <Image style={style.imageStyle}
                        source={{
                          uri: faker.image.avatar(),
                        }}
                        resizeMode={'cover'} />
                  <View style={style.rankCircle}>
                      <Text style={style.textRank}>10</Text>
                </View>
            </View>
            <View style={style.viewYou}>
              <Text style={style.textYou}>You</Text>
                {showContent()}
            </View>
          
         </View>
      </View>
    </View>
  );
};

export default FloatButton;
