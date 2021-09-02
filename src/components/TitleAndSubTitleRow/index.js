import React, {Fragment} from 'react';
import {View, Text} from 'react-native';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import fonts from '../../utils/fonts';
import theme from '../../utils/theme';
import styles from './style';
import {scale} from 'react-native-size-matters';

const TitleAndSubTitleRow = ({name, helperText, isVerified = false}) => {
  return (
    <Fragment>
      {name ? (
        <View style={styles.titlensubtilecon}>
          <Text style={[fonts.Proxima_Nova_Sbold, {lineHeight: scale(17)}]}>
            {name}
          </Text>
          {isVerified ? (
            <MIcon
              name="check-decagram"
              color={theme.BLACK}
              size={15}
              style={{marginLeft: 8}}
            />
          ) : null}
        </View>
      ) : null}
      {helperText ? (
        <Text
          style={[
            fonts.Proxima_Nova_Sbold,
            {color: theme.TEXT_COMMON_SILVER, marginTop: scale(5)},
          ]}>
          {helperText}
        </Text>
      ) : null}
    </Fragment>
  );
};

export default TitleAndSubTitleRow;
