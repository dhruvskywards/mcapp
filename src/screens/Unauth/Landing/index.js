import React from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  Pressable,
  SafeAreaView,
} from 'react-native';
import styles from './style';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Swiper from 'react-native-swiper';
import {scale} from 'react-native-size-matters';
import CommonStyle from 'src/utils/styles';
import FooterButton from 'src/components/FooterButton';
import {swiperData} from 'src/constants/mock-data';

const Landing = ({navigation}) => {
  const reanderJoinUs = () => {
    return (
      <View style={styles.joinStyle}>
        <Pressable
          onPress={() => navigation.navigate('SigninOption')}
          style={CommonStyle.rowContainer}>
          <Text style={styles.footerTitle}>Join us</Text>
          <View style={CommonStyle.sliderContainer}>
            <View style={styles.circle}>
              <MaterialIcons
                name="chevron-right"
                size={scale(18)}
                color={'white'}
              />
            </View>
          </View>
        </Pressable>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Swiper
        style={styles.wrapper}
        showsButtons={false}
        loop={false}
        paginationStyle={styles.paginationStyle}
        dotStyle={styles.dot}
        activeDot={<View style={styles.activeDot} />}>
        {swiperData.map(swiper =>
          swiper.backgroundImage ? (
            <ImageBackground
              style={styles.MainView}
              source={swiper.backgroundImage}>
              <View style={styles.ContainMainView}>
                <Image
                  style={[CommonStyle.logoBg, styles.logo]}
                  source={swiper.logo}
                />
                <Text style={styles.text}>{swiper.title}</Text>
              </View>
              {reanderJoinUs()}
            </ImageBackground>
          ) : (
            <View style={styles.MainView}>
              {swiper.image.headerImage2 ? (
                <Swiper
                  showsPagination={false}
                  showsButtons={false}
                  autoplay={true}>
                  <Image
                    style={[styles.slideImage, {width: swiper.customWidth1}]}
                    source={swiper.image.headerImage1}
                  />
                  <Image
                    style={[styles.slideImage, {width: swiper.customWidth2}]}
                    source={swiper.image.headerImage2}
                  />
                </Swiper>
              ) : (
                <Image
                  style={[styles.slideImage, {width: swiper.customWidth}]}
                  source={swiper.image.headerImage1}
                />
              )}
              <View style={styles.ContainerSlide}>
                <Text style={styles.landingTitle}>{swiper.title}</Text>
                <Text style={styles.subTitle}>{swiper.subTitle}</Text>
              </View>
              {reanderJoinUs()}
            </View>
          ),
        )}
      </Swiper>
      <View style={styles.button}>
        <FooterButton
          title={'Sign In'}
          onPress={() => {
            navigation.navigate('Signin');
          }}
        />
      </View>
    </SafeAreaView>
  );
};
export default Landing;
