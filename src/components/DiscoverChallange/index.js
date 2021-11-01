import React from 'react';
import faker from 'faker';
import {scale, verticalScale, ScaledSheet} from 'react-native-size-matters';
import theme from '../../utils/theme';

import { useNavigation } from '@react-navigation/native';

import IconNameRow from './IconNameRow';

const DiscoverChallange = ({ disabled }) => {
  const navigation = useNavigation();
  return (
    <IconNameRow
      onPress={() => {
       // navigation.navigate(Globals.SCREENS.CHALLENGES_LISTING);
      }}
      disabled={disabled}
      title={'#' + faker.lorem.word()}
      helperText={faker.lorem.sentence()}
      circleStyle={{ backgroundColor: theme.YELLOW_BACKGROUND }}
    
      
      containerStyle={{ paddingHorizontal:scale(15) }}
    />
  );
};

export default DiscoverChallange;
