import React, {useState} from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import styles from './style';
import CommonStyle from 'src/utils/styles';
import TextInput from 'src/components/TextInput';
import FooterButton from 'src/components/FooterButton';
import Button from 'src/components/Button';

const ForgotPassword = ({navigation}) => {
  const [mail, setMail] = useState('');

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={CommonStyle.insideContainer}>
        <View style={CommonStyle.innerContainerSection}>
          <Image
            style={CommonStyle.logoBg}
            source={require('src/assets/image/logo.png')}
          />
          <Text style={[CommonStyle.unAuthtitle, styles.title]}>
            Forgot Your Password
          </Text>
          <TextInput
            multiline={false}
            placeholder={'Enter email'}
            onChangeText={mailValue => setMail(mailValue)}
            value={mail}
            secureTextEntry={false}
          />
          <Text
            style={styles.titleSub}
            onPress={() => navigation.navigate('Signup')}>
            Don't have an account?
          </Text>
        </View>
        <Button
          title={'Continue'}
          onPress={() => {
            navigation.navigate('ForgotPasswordSuccess');
          }}
        />
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
export default ForgotPassword;
