import React from 'react';

import faker from 'faker';
import { View, Text, TouchableOpacity, ScrollView,Image } from 'react-native';
import styles from './style';
import Modal from 'react-native-modal';
import ThumbnailNameRow from '../ThumbnailNameRow';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import BlackDiamond from '../../assets/image/BlackDiamond.png';
import Button from '../../components/Button';
import FooterButton from '../../components/FooterButton';
const MiniProfileModal = ({ isVisible, closeModal = () => {} }) => {
  return (
    <Modal
      isVisible={isVisible}
      animationIn="fadeIn"
      backdropOpacity={0.7}
      
      closeModal={() => {
        closeModal();
      }}
      style={{
          margin: 0,
          justifyContent: 'flex-end',
        
      }}
    >
      <View
        style={styles.mainContainer}
      >
        <Icon name='gift'  size={25} style={styles.iconView} />
        <View
          style={styles.innerContainer}>
          <View style={styles.miniProfileView}>
            <Text style={styles.title}>
              MINI-PROFILE 
            </Text>
            <Image source={BlackDiamond} />
            <Text style={styles.titleCount}> 32800</Text>
          </View>
          <ThumbnailNameRow
            isVerified={true}
            rightView={() => {
              return (
               null
              );
            }}
          />
          <Button onPress={() => {}} customStyle={styles.buttonStyle} title={'View Full Profile'} />     
        </View>
        <FooterButton
          style={{margin:0}}
          title={'Cancel'}
          onPress={() => {
            closeModal();
          }}
        />
      </View>
    </Modal>
  );
};

export default MiniProfileModal;
