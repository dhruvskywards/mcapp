/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState} from 'react';
import {Pressable, Text, View} from 'react-native';
import theme from 'src/utils/theme';
import style from './style';
import {scale} from 'react-native-size-matters';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {useTheme} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import DropdownModal from '../Genresmodal';

const LiveButton = ({
  setCompetitionType,
  setSelectedGenreData,
  selectedGenreData,
}) => {
  const CutomTheme = useTheme();
  const [islive, setlive] = useState('Live');
  const [visibleModal, setVisibleModal] = useState(false);
  const genreData = useSelector(state => state?.genresList?.genreData);
  return (
    <View
      style={[
        style.container,
        {backgroundColor: CutomTheme.colors.background},
      ]}>
      <View style={style.headercontainer}>
        <View style={style.row}>
          <Pressable
            onPress={() => {
              setCompetitionType('Live');
              setlive('Live');
            }}
            style={[
              style.liveView,
              islive === 'Live'
                ? style.live
                : {backgroundColor: CutomTheme.colors.background},
            ]}>
            <Text
              style={[
                style.liveText,
                islive === 'Live'
                  ? {color: theme.BLACK}
                  : {color: CutomTheme.colors.text},
              ]}>
              LIVE
            </Text>
          </Pressable>
          <Pressable
            onPress={() => {
              setCompetitionType('Online');
              setlive('Online');
            }}
            style={[
              style.liveView,
              islive !== 'Online'
                ? {backgroundColor: CutomTheme.colors.background}
                : style.live,
            ]}>
            <Text
              style={[
                style.liveText,
                islive !== 'Online'
                  ? {color: CutomTheme.colors.text}
                  : {color: theme.BLACK},
              ]}>
              ONLINE
            </Text>
          </Pressable>
        </View>
        <View style={style.verticalBorder} />
        <Pressable style={style.row} onPress={() => setVisibleModal(true)}>
          <Text style={[style.liveSubText, {color: CutomTheme.colors.text}]}>
            Genres
            {selectedGenreData?.item?.name?.length > 4
              ? ' - ' +
                selectedGenreData?.item?.name.substring(0, 6 - 3) +
                '...'
              : selectedGenreData?.item?.name?.length !== 3
              ? null
              : ' - ' + selectedGenreData?.item?.name}
          </Text>
          <FontAwesome5
            name="chevron-down"
            size={scale(20)}
            style={style.moreIcon}
            color={CutomTheme.colors.text}
          />
          <DropdownModal
            data={genreData}
            visible={visibleModal}
            action={() => setVisibleModal(false)}
            onPress={setSelectedGenreData}
          />
        </Pressable>
      </View>
    </View>
  );
};

export default LiveButton;
