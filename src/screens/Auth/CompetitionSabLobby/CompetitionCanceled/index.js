import React from 'react';
import {View, Text, Image} from 'react-native';
import style from './style';
import FooterButton from '../../../../components/FooterButton';
import canceledIcon from '../../../../assets/image/CanceledIcon.png';

const CompetitionCanceled = () => {
  return (
    <View style={style.maincontainer}>
      <View style={style.container}>
        <Image source={canceledIcon} />
        <Text style={style.titleText}>This competition has been canceled</Text>
        <Text style={style.PrizeTitle}>
          All refunds will be processed, if you have any questions please
          contact this competitions creator. For all other inquires please email
        </Text>
        <Text style={[style.PrizeTitle, style.boldText]}>
          support@mcmasterofceremony.com
        </Text>
      </View>
      <View style={style.button}>
        <FooterButton title={'Back to lobby'} />
      </View>
    </View>
  );
};
export default CompetitionCanceled;
