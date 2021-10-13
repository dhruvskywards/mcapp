import React, { useCallback, useEffect, useState } from 'react';
import { returnScreenDimensions } from '../../../../utils/JsUtils';
import { useSelector,useDispatch } from 'react-redux';
import Pagination from '../../../../components/Pagination';
import theme from '../../../../utils/theme';
import fonts from 'src/utils/fonts';
import styles from './style';
import {useNavigation, useTheme} from '@react-navigation/native';
import Carousel from '../../../../components/Carousel';
import lineRed from '../../../../assets/image/lineRed.png';
import lineGray from '../../../../assets/image/lineGray.png';
import redCircle from '../../../../assets/image/redCircle.png';
import circleGray from '../../../../assets/image/circleGray.png';
import * as actions from '../../../../store/action/fetchSubscription';
import * as tierAction from '../../../../store/action/fetchTiers';
import FooterButton from '../../../../components/FooterButton';
import IconSet from 'react-native-vector-icons/Ionicons';
import {fetchTierReducer} from '../../../../store/reducers/fetchTierReducer';
import {View, Text, ScrollView, Switch, TouchableOpacity, Linking, SafeAreaView,TextInput,Image} from 'react-native';
import { scale } from 'react-native-size-matters';
const Subscription = () => {
    const navigation = useNavigation();
    const CustomTheme = useTheme();
    const dispatch = useDispatch();
   
    const [low, setLow] = useState(0);
    const [high, setHigh] = useState(100);
    const [activeSlide, setActiveSlide] = useState(0);
    const slidetabs = [];
    const subscriptions = useSelector((state) => state.fetchSubscriptionReducer.data);
    const tiers = useSelector((state) => state.fetchTierReducer.data);
    const [activeTier, setActiveTier] = useState(tiers[0]);
    const selectTier = (tier = tiers[0]) => {
      setActiveTier(tier);
  };
    const getSubscriptionList = () => {
      dispatch(
        actions.fetchSubscription(
          async success => {
              console.log("success sub",JSON.stringify(success))
          },
          error => {
              console.log("error sub",JSON.stringify(error))
          },
        ),
      );
    };

  const getTierList = () => {
      dispatch(
          tierAction.fetchTiers(
          async success => {
              console.log("success tier",JSON.stringify(success))
          },
          error => {
              console.log("error tier",JSON.stringify(error))
          },
        ),
      );
    };

    useEffect(() => {
      getTierList();
     getSubscriptionList();
     
    }, [dispatch]);

 
    subscriptions.forEach((element) => {
      slidetabs.push({ type: element.name });
    });
    slidetabs.push({ type: 'Tier' });
  
    const TierTabCreator = () => {
      let rows = [];
      tiers.forEach((element) => {
        rows.push(
          <Text 
            onPress={() => selectTier(element)}
            style={[activeTier?.id === element.id ? styles.textBlack : styles.tierText]}
          >
            {element.name}
          </Text>
        );
      });
      return <View style={styles.tierTabView}>{rows}</View>;
    };
    
 
    
    const handleRangeTextColor = (activeSubscription) => {
      if (activeSubscription.name === 'Supreme') {
        return {
          fontFamily: fonts.Proxima_Nova_Bold,
          color: theme.RED,
        };
      } else {
        return {
          fontFamily: fonts.Proxima_Nova_Bold,
          color: CustomTheme.colors.text,
        };
      }
    };
  
    const renderCarousal = ({ item: { type } }) => {
      if (type !== 'Tier') {
        const selectedItem = subscriptions.filter((m) => m.name === type)[0];
        return (
          <>
            <View style={styles.subscriptionTitleView}>
              <View style={styles.viewText}>
                <Text style={[styles.subscriptionTitleTextMain, { color: CustomTheme.colors.text }]}>
                    {selectedItem.name}
                 </Text>
                 
                  <Text
                    style={[styles.subscriptionSubText,{ color: CustomTheme.colors.text },]}>
                    {selectedItem.title}
                  </Text>
                </View>
            </View>
            <View
              style={styles.subTextView}>
             <View>
                <Text
                  style={[styles.subMainText,{color:CustomTheme.colors.text}]}>
                  Price yield potential earnings
                </Text>
                <Text
                  style={[styles.SubSecondText,{color:CustomTheme.colors.text}]}>
                  {selectedItem.name === 'Supreme'
                    ? 'Increased winners per competition'
                    : 'Decreased winners per competition'}
                </Text>
              </View>
              <View style={styles.container}>
                <View style={styles.textCon}>
                  <Text style={handleRangeTextColor(selectedItem)}>
                    ${selectedItem.startRange}
                  </Text>
                  <Text style={handleRangeTextColor(selectedItem)}>
                    ${selectedItem.endRange}
                  </Text>
                </View>
                <View>
                  {selectedItem.name === 'Supreme' ? (
                    <View
                      style={styles.supremeSliderMainView}>
                      <Image  source={redCircle} />
                      <Image  source={lineRed}  style={{ width: scale(250),}}/>
                      <Image  source={redCircle} />
                    </View>
                    ) : (
                    <View
                      style={styles.otherSliderView}>
                      <Image  source={circleGray} />
                      <Image  source={lineGray}  style={{ width: scale(250),}}/>
                      <Image  source={circleGray} />
                    </View>
                  )}
                </View>
              </View>
              <View >
                <Text
                  style={[styles.priceTextView,{color:CustomTheme.colors.text}]}>
                  {selectedItem.price > 0 ? '$' : ''}
                  {selectedItem.price > 0 ? selectedItem.price : 'Free'}
                </Text>
                <Text
                  style={[styles.detailTextView,{color:CustomTheme.colors.text}]}>
                  {selectedItem.details}
                </Text>
              </View>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('SubscriptionDetails', {
                    SELECTED_ID: selectedItem.id,
                    NAME: selectedItem.name
                  })
                } 
                >
                <Text
                  style={[styles.detail_SubTextView,{color:CustomTheme.colors.text}]}>
                  Details
                </Text>
              </TouchableOpacity>
            </View>
          </>
        );
      } else {
        return (
          <>
          <View style={styles.subscriptionTitleView}>
               <View style={styles.viewText}>
                <Text style={[styles.subscriptionTitleTextMain, { color: CustomTheme.colors.text }]}>
                  Tier
                </Text>
                <Text style={[styles.subscriptionSubText,{ color: CustomTheme.colors.text },]}>
                  plan supremo
                </Text>
              </View>
            </View>
            <View style={{ alignItems: 'center', marginTop: 20 }}>
              <TierTabCreator />
            </View>
            <View
              style={styles.containers}>
              <Text
                style={[styles.tierPriceText,{color:CustomTheme.colors.text}]}>
                {activeTier?.price === 0 ? 'Free' : '$' + activeTier?.price}
              </Text>
              <Text
                style={[styles.tierDetailText,{color: CustomTheme.colors.text}]}>
                {activeTier?.details}
              </Text>
              <View
                style={styles.tirContainer}>
                <TouchableOpacity
                  onPress={() => {
                    // navigation.navigate(Globals.SCREENS.TIER, {
                    //   tierID: activeTier.id,
                    // });
                  }}
                >
                  <Text
                    style={[styles.textContainer,{color:CustomTheme.colors.text}]}>
                    Details
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text
                    style={[styles.textContainer,{
                        marginLeft:scale(10),
                        color:CustomTheme.colors.text},]}>
                    Requirements
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </>
        );
      }
    };
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.Email}>
          <View style={{ position: 'absolute', left: 0, top: 0, right: 0, bottom: 0 }}>
            <Carousel
              data={slidetabs}
              renderItem={renderCarousal}
              sliderWidth={returnScreenDimensions().SCREEN_WIDTH}
              itemWidth={returnScreenDimensions().SCREEN_WIDTH}
              onSnapToItem={(index) => setActiveSlide(index)}
            />
          </View>
          <View>
            <View style={styles.LoungeCon}>
              <View style={styles.LoungeCon1}>
                <View style={styles.Emaillightcontainer}>
                  <TouchableOpacity style={styles.headerIcon} onPress={() => navigation.goBack()}>
                    <IconSet name="arrow-back" size={24} color={CustomTheme.colors.text} />
                  </TouchableOpacity>
                </View>
                <View style={styles.Emaillightcontainer}>
                  <Pagination
                    numOfElements={slidetabs.length}
                    selectedIndex={activeSlide}
                    ViewStyle={{
                      marginHorizontal: '5%',
                      justifyContent: 'flex-end',
                    }}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
        <FooterButton
          title={activeSlide !== 3 ? 'Buy Now' : 'Apply Now'}
        
          onPress={() => {
            navigation.navigate('ManageCurrentSubscription', {
              subscriptionCancel: false,
            });
          }}
        />
      </View>
    );
  };
  export default Subscription;