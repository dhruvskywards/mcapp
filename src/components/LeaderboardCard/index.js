import React, {useEffect, useState} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import theme from 'src/utils/theme';
import style from './style';
import Button from '../../components/Button';
import {useNavigation, useTheme} from '@react-navigation/native';
import {scale} from 'react-native-size-matters';
import Feather from 'react-native-vector-icons/Feather';
import Modal from 'react-native-modal';
import ApiConstants from 'src/utils/ApiConstants';
import Verified from '../../assets/image/Verified.png';
import Profile from '../../assets/image/Profile.png';
import Prize from '../../assets/image/Prize.png';

const LeaderboardCard = ({data}) => {
  const CustomTheme = useTheme();
  const navigation = useNavigation();
  
  const [ModelVisible, setModelVisisble] = useState(false);

  
    return (
      <View
        style={[style.container,{backgroundColor: CustomTheme.colors.background}]}>
        <Image
          style={style.image}
          source={{
            uri: 'https://s3.amazonaws.com/medill.wordpress.offload/WP+Media+Folder+-+medill-reports-chicago/wp-content/uploads/sites/3/2020/02/Kobe-as-NBA-Logo.jpg',
          }}
        />
          <View
            style={[
              style.bottomView,
              {backgroundColor: CustomTheme.colors.background},
            ]}>
            <View style={style.headercontainer}>
              <View style={style.profileInfo}>
                <Image
                  style={style.imageview}
                  source={{
                    uri: `https://s3.amazonaws.com/medill.wordpress.offload/WP+Media+Folder+-+medill-reports-chicago/wp-content/uploads/sites/3/2020/02/Kobe-as-NBA-Logo.jpg`,
                  }}
                />
                <Text style={[style.titleText, {color: CustomTheme.colors.text}]}>
                  NBA
                </Text>
                <Image
                  source={Verified}
                  style={[
                    style.verifiedImage,
                    {tintColor: CustomTheme.colors.text},
                  ]}
                />
                <View
                    style={[
                      style.mapView,
                      {backgroundColor: CustomTheme.colors.background},
                    ]}>
                    <Text style={style.mapText}>{'Sponsored'}</Text>
                  </View>
          
              </View>
             
            </View>
            <Text style={[style.titleTextBlack, {color: CustomTheme.colors.text}]}>
                DISNEYLAND SHOWDOWN
              </Text>
              <View style={style.buttonView}>
                <Button
                 title={'Buy Tickets'}
                //onPress={() => navigation.navigate('ProfileScreen', { type: 'comp', item: competitionData })}
                />
              </View>
          </View>
      </View>
    );
  };

export default LeaderboardCard;
