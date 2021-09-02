import React from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import styles from './style';
import FooterButton from 'src/components/FooterButton';
import Instagram from 'src/assets/image/instagram.png';
import Facebook from 'src/assets/image/facebook.png';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from 'src/utils/theme';
import Header from 'src/components/Header/Header';

const SigninOption = ({navigation}) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Header onPress={() => navigation.goBack()} title="Sign Up" />
      <View style={styles.insideContainer}>
        <View style={styles.facebookView}>
          <Image style={styles.facebook} source={Facebook} />
          <MaterialCommunityIcons
            name="arrow-right"
            size={23}
            color={Colors.WHITE}
          />
        </View>
        <View style={styles.instagramView}>
          <Image style={styles.facebook} source={Instagram} />
          <MaterialCommunityIcons
            name="arrow-right"
            size={23}
            color={Colors.INSTAGRARROW}
          />
        </View>
        <View style={styles.rowContainer}>
          <View style={styles.border} />
          <Text style={styles.titleOr}>OR</Text>
          <View style={styles.border} />
        </View>
        <View>
          <Text
            style={styles.link}
            onPress={() => navigation.navigate('Signup')}>
            Sign Up with Email address or Phone Number
          </Text>
        </View>
        <Text
          style={styles.titleSub}
          onPress={() => navigation.navigate('Signin')}>
          Already have an account?
        </Text>
      </View>
      <View style={styles.button}>
        <FooterButton
          title={'Sign In'}
          onPress={() => {
            navigation.navigate('Signin');
          }}
        />
      </View>
    </ScrollView>
  );
};
export default SigninOption;
