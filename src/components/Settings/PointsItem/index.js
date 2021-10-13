import React from 'react';
import {FlatList, Text, View,Image} from 'react-native';

  

import styles from './style';

import faker from 'faker';
import Button from '../../Button';
const PointsItem = ({data}) => {
 
  return (
        <View style={styles.containerCard}>
            <Text style={styles.textRemix}>
              {data.remixPoints} Remix Points 
               
            </Text>
            <Text style={styles.textStartAt}>
              Starting at
            </Text>
            <Text style={styles.textPrice}>
                 ${data.price} 
            </Text>
            <Text style={styles.textDescription}>
              {data.description}
              {/* Remix points can get you into any compettiotn  & can allow you to purchase virtual goods 
              such as extra lives  for music trivia based competitons.
               Earned Remix points can also  be cashed out for cash  rewards. */}
            </Text>
            <Button
              onPress={() => {  }}
              title={'Buy Now'}
              customStyle={styles.buttonStyle}
              />
              
          
          </View>
  );
};

export default PointsItem;
