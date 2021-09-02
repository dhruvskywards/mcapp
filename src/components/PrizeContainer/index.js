import React from 'react';
import {Text, View} from 'react-native';
import Button from '../Button';
import styles from './style';
import {useNavigation} from '@react-navigation/native';

const PrizeContainer = ({PrizeType}) => {
  const navigation = useNavigation();
  const RenderPrizeType = () => {
    if (PrizeType === 'Cash') {
      return (
        <View>
          <Text style={styles.CashText}>$500.00</Text>
        </View>
      );
    } else if (PrizeType === 'Remixpoint') {
      return (
        <View>
          <Text style={styles.CashText}>10000</Text>
          <Text style={styles.RemixPointText}>Remix points</Text>
        </View>
      );
    } else if (PrizeType === 'Cash&Remixpoint') {
      return (
        <View style={styles.CombineView}>
          <View>
            <Text style={styles.CashText}>$500.00</Text>
          </View>
          <View>
            <Text style={styles.CashText}>10000</Text>
            <Text style={styles.RemixPointText}>Remix points</Text>
          </View>
        </View>
      );
    } else if (PrizeType === 'Merchandise') {
      return (
        <View style={styles.CombineView}>
          <View>
            <Text style={styles.CashText}>Rolex</Text>
            <Text style={styles.RemixPointText}>Prize value $32,950</Text>
          </View>
          <Button
            onPress={() => navigation.navigate('Merchandise')}
            title={'View Prize'}
            customStyle={styles.Button}
          />
        </View>
      );
    } else {
      return (
        <View style={styles.CombineView}>
          <View>
            <Text style={styles.CashText}>NBA Ticket</Text>
            <Text style={styles.RemixPointText}>Floor seats</Text>
          </View>
          <Button
            onPress={() => navigation.navigate('Tickets')}
            title={'View Prize'}
            customStyle={styles.Button}
          />
        </View>
      );
    }
  };
  return (
    <View style={styles.MainContainer}>
      <RenderPrizeType />
    </View>
  );
};

export default PrizeContainer;
