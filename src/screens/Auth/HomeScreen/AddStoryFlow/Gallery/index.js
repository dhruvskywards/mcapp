import React, {useEffect, useState} from 'react';
import {
  View,
  FlatList,
  Image,
  Pressable,
  PermissionsAndroid,
} from 'react-native';
import CameraRoll from '@react-native-community/cameraroll';
import {useNavigation} from '@react-navigation/core';
import style from './style';
import StoryHeader from '../../../../../components/StoryHeader';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {scale} from 'react-native-size-matters';
import theme from '../../../../../utils/theme';
import Multiselection from '../../../../../assets/image/multiselection.png';
import DropDownPicker from 'react-native-dropdown-picker';

const Gallery = ({ContentType}) => {
  const navigation = useNavigation();
  const [albumsData, setAlbumsData] = useState([]);

  const [albumPhotosData, setAlbumsPhotoData] = useState();
  // const [onScrollEndIndicator, setOnScrollEndIndicator] = useState(false);
  const [selectedAlbum, setSelectedAlbum] = useState();
  const [selectedGalleryPhoto, setSelectedGalleryPhoto] = useState(
    'https://www.levistrauss.com/wp-content/uploads/2020/05/Black_Box.png',
  );

  const [
    onEndReachedCalledDuringMomentum,
    setOnEndReachedCalledDuringMomentum,
  ] = useState(true);
  useEffect(() => {
    setSelectedAlbum(selectedValue);
    getAlbumPhotos(selectedAlbum);
  }, [selectedAlbum, albumsData, selectedValue]);

  useEffect(() => {
    PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
    );
    async function getAlbums() {
      CameraRoll.getAlbums()
        .then(res => {
          const albumsDataLocal = res.map(item => {
            return {label: item?.title, value: item?.title};
          });

          setAlbumsData(albumsDataLocal);
          setSelectedAlbum(albumsData[0]?.label);
        })
        .catch(e => {
          console.error(e);
        });
    }
    getAlbums();
  }, [albumsData.length > 0, selectedAlbum, albumPhotosData?.length > 0]);

  const getAlbumPhotos = async albumName => {
    const response = await CameraRoll.getPhotos({
      groupName: albumName === undefined ? albumsData[0]?.label : albumName,
      first: 25,
    });
    setAlbumsPhotoData(response);
    setSelectedGalleryPhoto(response.edges[0].node.image.uri);
  };

  const getMoreData = async () => {
    console.log('Scroll event');
    // if (
    //   !onEndReachedCalledDuringMomentum &&
    //   albumPhotosData.page_info.has_next_page
    // ) {
    //   setOnScrollEndIndicator(true);
    try {
      console.log('selectedAlbum==>', selectedAlbum);
      const response = await CameraRoll.getPhotos({
        groupName:
          selectedValue === undefined ? albumsData[0]?.label : selectedValue,
        first: 15,
        after: albumPhotosData.page_info.end_cursor,
      });
      setAlbumsPhotoData(prestate => {
        return {
          ...prestate,
          page_info: response.page_info,
          edges: [...prestate.edges, ...response.edges],
        };
      });
    } finally {
      // setOnScrollEndIndicator(false);
    }
  };
  const [selectedValue, setSelectedValue] = useState(selectedAlbum);
  const [open, setOpen] = useState(false);
  const rightView = () => {
    return (
      <View style={style.headerView}>
        <View style={style.headerinnerview}>
          <DropDownPicker
            placeholder={albumsData[0]?.label}
            open={open}
            value={selectedValue}
            items={albumsData}
            setOpen={setOpen}
            style={style.PickerStyle}
            textStyle={style.txt}
            labelStyle={style.txt}
            onChangeValue={(itemValue, itemIndex) => {
              setSelectedAlbum(itemValue);
              getAlbumPhotos(selectedValue);
            }}
            setValue={(itemValue, itemIndex) => {
              setSelectedValue(itemValue);
            }}
          />
        </View>
        <Image source={Multiselection} style={style.iconstyle} />
      </View>
    );
  };
  const onScrollHandler = () => {
    console.log(
      'onEndReachedCalledDuringMomentum===>',
      onEndReachedCalledDuringMomentum,
    );
    if (!onEndReachedCalledDuringMomentum) {
      console.log('call loadmore');
      getMoreData();
      setOnEndReachedCalledDuringMomentum(true);
    }
  };
  return (
    <View style={style.maincontainer}>
      <StoryHeader
        onPress={() => navigation.goBack()}
        rightView={() => rightView()}
        color={theme.BLACK}
      />
      {console.log('albumPhotosData at return==>', albumPhotosData)}
      <FlatList
        data={albumPhotosData?.edges}
        keyExtractor={(item, index) => {
          return index.toString();
        }}
        style={style.imagelistview}
        showsVerticalScrollIndicator={false}
        numColumns={3}
        removeClippedSubviews={true}
        onEndReached={() => onScrollHandler()}
        onMomentumScrollBegin={() => {
          console.log(
            'onEndReachedCalledDuringMomentum',
            onEndReachedCalledDuringMomentum,
          );
          setOnEndReachedCalledDuringMomentum(false);
        }}
        onEndReachedThreshold={0}
        renderItem={item => (
          <Pressable
            onPress={() => {
              navigation.navigate('EditPhoto', {
                imageurl: item?.item.node.image.uri,
                ContentType: ContentType,
              });
            }}
            style={style.imageview}>
            <Image
              source={{
                uri: item?.item.node.image.uri,
              }}
              style={style.imagestyle}
            />
          </Pressable>
        )}
      />
    </View>
  );
};
export default Gallery;
