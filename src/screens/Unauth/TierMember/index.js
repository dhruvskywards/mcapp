import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import styles from './style';
import FooterButton from 'src/components/FooterButton';
import CommonStyle from 'src/utils/styles';
import TextInput from 'src/components/TextInput';
import Button from 'src/components/Button';

const TierMember = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.insideContainer}>
        <Text style={CommonStyle.unAuthtitle}>Whos your plug?</Text>
        <Text style={styles.titleSub}>
          Enter the tier member code & get 100 black diamonds credited to your
          account…
        </Text>
        <TextInput
          multiline={false}
          placeholder={'Enter code of tier member'}
          secureTextEntry={false}
        />
        <Button title={'Continue'} />
      </View>
      <View style={styles.button}>
        <FooterButton title={'Nobody invites me'} />
      </View>
    </ScrollView>
  );
};
export default TierMember;
