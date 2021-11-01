import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  ImageBackground,
  Pressable,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import StoryHeader from '../../../../../components/StoryHeader';
import {useNavigation} from '@react-navigation/core';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import RNSlider from 'react-native-slider';
import {
  AdenCompat,
  Grayscale,
  Sepia,
  Protanomaly,
  Deuteranomaly,
  Tritanomaly,
  LuminanceToAlpha,
  Invert,
  Nightvision,
  Warm,
  Cool,
  Technicolor,
  Polaroid,
  ToBGR,
  Kodachrome,
  Browni,
  Vintage,
  Lsd,
  Protanopia,
  Deuteranopia,
  Tritanopia,
  Achromatopsia,
  Achromatomaly,
  ColorMatrix,
  contrast,
  brightness,
  saturate,
  hueRotate,
  temperature,
  tint,
  predator,
  threshold,
  night,
  warm,
  rgba,
  concatColorMatrices,
  Sharpen,
} from 'react-native-image-filter-kit';
import style from './style';
import {scale} from 'react-native-size-matters';
import theme from '../../../../../utils/theme';
import FooterEditView from '../../../../../components/FooterEditView';
import FilterIcon from '../../../../../components/FilterIcon';
import EditIcon from '../../../../../components/EditIcon';
import {EditPhotoOptions} from '../../../../../constants/mock-data';
import EditImage from '../../../../../components/EditImage';
import {useDispatch} from 'react-redux';
import * as mediaactions from 'src/store/action/media';

const EditPhoto = ({route}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [initialTab, setinitialTab] = useState(0);
  const [EditDisplay, setEditDisplay] = useState(0);
  const [EditType, setEditType] = useState(null);
  const [selectedEditValues, setSelectedEditValues] = useState({
    Contrast: null,
  });
  const [FinalStoryUrl, setFinalStoryUrl] = useState();
  const imageUrl = route.params?.imageurl;
  const ContentType = route.params?.ContentType;

  const [editedImageUrl, seteditedImageUrl] = useState(`${imageUrl}`);

  const FILTERS = [
    {
      title: 'Normal',
      filterComponent: AdenCompat,
    },
    {
      title: 'Grayscale',
      filterComponent: Grayscale,
    },
    {
      title: 'Sepia',
      filterComponent: Sepia,
    },
    {
      title: 'Protanomaly',
      filterComponent: Protanomaly,
    },
    {
      title: 'Deuteranomaly',
      filterComponent: Deuteranomaly,
    },
    {
      title: 'Tritanomaly',
      filterComponent: Tritanomaly,
    },
    {
      title: 'LuminanceToAlpha',
      filterComponent: LuminanceToAlpha,
    },
    {
      title: 'Invert',
      filterComponent: Invert,
    },
    {
      title: 'Nightvision',
      filterComponent: Nightvision,
    },
    {
      title: 'Warm',
      filterComponent: Warm,
    },
    {
      title: 'Cool',
      filterComponent: Cool,
    },
    {
      title: 'Technicolor',
      filterComponent: Technicolor,
    },
    {
      title: 'Polaroid',
      filterComponent: Polaroid,
    },
    {
      title: 'ToBGR',
      filterComponent: ToBGR,
    },
    {
      title: 'Kodachrome',
      filterComponent: Kodachrome,
    },
    {
      title: 'Browni',
      filterComponent: Browni,
    },
    {
      title: 'Vintage',
      filterComponent: Vintage,
    },
    {
      title: 'Lsd',
      filterComponent: Lsd,
    },
    {
      title: 'Protanopia',
      filterComponent: Protanopia,
    },
    {
      title: 'Deuteranopia',
      filterComponent: Deuteranopia,
    },
    {
      title: 'Tritanopia',
      filterComponent: Tritanopia,
    },
    {
      title: 'Achromatopsia',
      filterComponent: Achromatopsia,
    },
    {
      title: 'Achromatomaly',
      filterComponent: Achromatomaly,
    },
  ];

  const storyNext = () => {
    const form = new FormData();
    form.append('media', {
      type: 'image/jpeg',
      uri: extractedUri.current,
      name: 'profile_photo.jpeg',
    });
    dispatch(
      mediaactions.media(
        form,
        res => {
          console.log('Url==>', res.key),
            navigation.navigate('PostStoryForm', {
              storyimage: res.key,
              ContentType: ContentType,
            });
        },
        e => {},
      ),
    );
    // {
    //   FinalStoryUrl !== null
    //     ? navigation.navigate('PostStoryForm', {
    //         storyimage: FinalStoryUrl,
    //         ContentType: ContentType,
    //       })
    //     : null;
    // }
  };
  const rightView = () => {
    return (
      <View style={style.headerView}>
        <Pressable style={style.headerinnerview}>
          <MaterialCommunityIcons
            name={'volume-mute'}
            size={scale(27)}
            color={theme.WHITE}
          />
        </Pressable>
        <Pressable style={style.headerinnerview} onPress={() => storyNext()}>
          <Text style={style.txt}>Next</Text>
        </Pressable>
      </View>
    );
  };
  const EditrightView = () => {
    return (
      <View style={style.headerView}>
        <Pressable style={style.EditViewHeader}>
          <Text style={style.txt}>{EditType}</Text>
        </Pressable>
      </View>
    );
  };
  const FilterView = () => {
    return (
      <View style={style.FilterView}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={FILTERS}
          horizontal={true}
          renderItem={renderFilterComponent}
        />
      </View>
    );
  };

  const EditView = () => {
    return (
      <View style={style.EditView}>
        {console.log('extractedUri===>', extractedUri.current)}
        <FlatList
          horizontal={true}
          data={EditPhotoOptions}
          renderItem={item => (
            <EditIcon
              name={item.item.title}
              uri={item.item.image}
              onPress={() => {
                setEditType(item.item.title), setEditDisplay(1);
              }}
            />
          )}
        />
      </View>
    );
  };

  const [matrixval, setMatrixval] = useState([]);
  useEffect(() => {
    let matrix = [contrast(1)];
    let k = 0;
    if (selectedEditValues.Contrast) {
      matrix[k] = contrast(selectedEditValues.Contrast);
      k = k + 1;
    }
    if (selectedEditValues.Brightness) {
      matrix[k] = brightness(selectedEditValues.Brightness);
      k = k + 1;
    }
    if (selectedEditValues.Saturation) {
      matrix[k] = saturate(selectedEditValues.Saturation);
      k = k + 1;
    }
    if (selectedEditValues.HueRotate) {
      matrix[k] = hueRotate(selectedEditValues.HueRotate);
      k = k + 1;
      if (selectedEditValues.Temprature) {
        matrix[k] = temperature(selectedEditValues.Temprature);
        k = k + 1;
      }
      if (selectedEditValues.Tint) {
        matrix[k] = tint(selectedEditValues.Tint);
        k = k + 1;
      }
      if (selectedEditValues.Threshold) {
        matrix[k] = threshold(selectedEditValues.Threshold);
        k = k + 1;
      }
      if (selectedEditValues.Night) {
        matrix[k] = night(selectedEditValues.Night);
        k = k + 1;
      }
      if (selectedEditValues.Predator) {
        matrix[k] = predator(selectedEditValues.Predator);
        k = k + 1;
      }
    }
    setMatrixval(matrix);
  }, [selectedEditValues]);

  const extractedUri = useRef(`${imageUrl}`);
  const [filteredImageUri, setfilteredImageUri] = useState();

  const [selectedFilterIndex, setIndex] = useState(0);
  const [EditedFlag, setEditedFlag] = useState(false);

  const onExtractImage = ({nativeEvent}) => {
    // extractedUri.current = nativeEvent.uri;
    setfilteredImageUri(nativeEvent.uri);
  };
  const onExtractImageatEdit = ({nativeEvent}) => {
    seteditedImageUrl(nativeEvent?.uri), setEditedFlag(true);
  };
  const onSelectFilter = selectedIndex => {
    setIndex(selectedIndex);
  };

  const renderFilterComponent = ({item, index}) => {
    const FilterComponent = item.filterComponent;
    const image = (
      <Image
        style={style.filterSelector}
        source={{
          uri: `${imageUrl}`,
        }}
        resizeMode={'cover'}
      />
    );
    return (
      <TouchableOpacity
        style={style.filtericon}
        onPress={() => onSelectFilter(index)}>
        <Text style={style.filterTitle}>{item.title}</Text>
        <View style={style.imageContainer}>
          <FilterComponent image={image} />
        </View>
      </TouchableOpacity>
    );
  };
  const SelectedFilterComponent = FILTERS[selectedFilterIndex].filterComponent;
  return (
    <View style={style.maincontainer}>
      {EditDisplay === 0 ? (
        <>
          {selectedFilterIndex === 0 ? (
            <ImageBackground
              source={{
                uri: `${imageUrl}`,
              }}
              style={style.cameraview}>
              <StoryHeader
                onPress={() => navigation.goBack()}
                rightView={() => rightView()}
                color={theme.WHITE}
              />
            </ImageBackground>
          ) : (
            <View style={style.cameraview}>
              <StoryHeader
                viewstyle={style.StoryHeaderStyle}
                onPress={() => navigation.goBack()}
                rightView={() => rightView()}
                color={theme.WHITE}
              />
              <SelectedFilterComponent
                onExtractImage={onExtractImage}
                extractImageEnabled={true}
                image={
                  <Image
                    style={style.bgstyle}
                    source={{
                      uri: EditedFlag
                        ? `${editedImageUrl}`
                        : `${extractedUri.current}`,
                    }}
                    resizeMode={'cover'}
                  />
                }
              />
            </View>
          )}
          <View style={style.bottomView}>
            <FooterEditView
              FilterView={FilterView}
              EditView={EditView}
              initialTab={initialTab}
            />
          </View>
        </>
      ) : (
        <>
          <View style={style.Editcameraview}>
            <StoryHeader
              viewstyle={style.EditStoryHeaderStyle}
              rightView={() => EditrightView()}
              color={theme.WHITE}
            />
            <ColorMatrix
              matrix={concatColorMatrices(matrixval)}
              extractImageEnabled={true}
              onExtractImage={onExtractImageatEdit}
              image={
                <Image
                  style={style.Editimagestyle}
                  source={{
                    uri: `${filteredImageUri}`,
                  }}
                  resizeMode={'cover'}
                />
              }
            />
          </View>
          <View style={style.EditbottomView}>
            <View style={style.sliderView}>
              <Text style={style.txt}>
                {selectedEditValues[EditType] === null
                  ? 0
                  : selectedEditValues[EditType]?.toFixed(0)}
              </Text>
              <RNSlider
                style={style.sliderStyle}
                minimumValue={-10}
                maximumValue={10}
                value={selectedEditValues[EditType] ?? 0}
                onValueChange={value => {
                  setSelectedEditValues(prestate => {
                    return {...prestate, [EditType]: value};
                  });
                }}
              />
            </View>
            <View style={style.EditBottombtnview}>
              <Pressable
                onPress={() => {
                  setSelectedEditValues(0), setEditDisplay(0), setinitialTab(1);
                }}
                style={style.EditBottombtn}>
                <Text style={style.txt}>Cancel</Text>
              </Pressable>
              <Pressable
                onPress={() => {
                  setEditDisplay(0), setinitialTab(1);
                }}
                style={style.EditBottombtn}>
                <Text style={style.txt}>Done</Text>
              </Pressable>
            </View>
          </View>
        </>
      )}
    </View>
  );
};
export default EditPhoto;
