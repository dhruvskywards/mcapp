import React from 'react';
import {View, Text} from 'react-native';
import styles from './style';
import CommonStyle from 'src/utils/styles';
import Button from 'src/components/Button';
import Header from 'src/components/Header/Header';

const ForgotPasswordSuccess = ({navigation}) => {
  const rightView = () => {
    return <Text style={styles.titleSubEmail}>Resend link</Text>;
  };

  return (
    <View style={styles.container}>
      <Header
        rightView={() => rightView()}
        onPress={() => navigation.goBack()}
      />
      <View style={[CommonStyle.insideContainer, styles.insideContainer]}>
        <View style={CommonStyle.innerContainerSection}>
          <Text style={[CommonStyle.unAuthtitle, styles.title]}>
            Check your Email.
          </Text>
          <Text style={styles.titleSub}>A password reset link was sent to</Text>
          <Text style={styles.titleSubEmail}>Aseem.patel@gmail.com</Text>
        </View>
        <View style={styles.button}>
          <Button
            title={'Go to Link'}
            onPress={() => {
              navigation.navigate('Signin');
            }}
          />
        </View>
      </View>
    </View>
  );
};
export default ForgotPasswordSuccess;
