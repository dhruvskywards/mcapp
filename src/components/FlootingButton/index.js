import React, {useState} from 'react';
import {Text, Pressable, View} from 'react-native';
import styles from './style';
import CountDown from 'react-native-countdown-component';
import {scale} from 'react-native-size-matters';
import {useTheme} from '@react-navigation/native';
import moment from 'moment';
import {formatTime} from "redux-logger/src/helpers";
const FlootingButton = ({CompetitionStarted = false, isfinished, onPress,test}) => {
  const CustomTheme = useTheme();
  const [isFinished, setFinished] = useState(isfinished);
  const second = 40;

    var startDate = moment(new Date(), "DD.MM.YYYY hh.mm");
    var endDate = moment('2021-10-08T18:04:00.000Z', "YYYY-MM-DD hh.mm");

    var result = endDate.diff(startDate, 'seconds');

  const CompetitonInfo = value => {
    setFinished(value);
    CompetitionStarted(value);
  };
  return (
    <View
      style={[
        styles.MainContainer,
        {backgroundColor: CustomTheme.colors.primary},
      ]}>
      {isFinished ? (
        <View>
          <Text style={[styles.TitleText, {color: CustomTheme.colors.text}]}>
            HAS STARTED
          </Text>
          <View style={styles.PrizetagView}>
            <Text
              style={[styles.PrizetagText, {color: CustomTheme.colors.text}]}>
              {' '}
              PRIZE ELIGIBLE:{' '}
            </Text>
            <Text style={styles.yes}>YES</Text>
          </View>
        </View>
      ) : (
        <View style={styles.CountDownView}>
          <Text style={styles.TitleText}>STARTS IN </Text>
          <CountDown
            size={scale(14)}
            until={result}
            onFinish={() => CompetitonInfo(true)}
            style={styles.countdownItem}
            digitStyle={styles.digitalstyle}
            digitTxtStyle={styles.digitaltextstyle}
            timeLabelStyle={styles.timeLabelstyle}
            separatorStyle={styles.sepratorstyle}
            timeToShow={['H', 'M', 'S']}
            timeLabels={{m: null, s: null}}
            showSeparator
          />
        </View>
      )}
      <Pressable
        onPress={onPress}
        style={[
          styles.buttonContainer,
          isFinished
            ? styles.FinishTrue
            : {backgroundColor: CustomTheme.colors.background},
        ]}>
        <Text style={[styles.buttonText, {color: CustomTheme.colors.text}]}>
          Reserve Slot
        </Text>
      </Pressable>
    </View>
  );
};

export default FlootingButton;
