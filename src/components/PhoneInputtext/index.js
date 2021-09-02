import React from 'react';
import PhoneInput from 'react-native-phone-number-input';
import styles from './style';
import Colors from '../../utils/theme';
import Icon from 'react-native-vector-icons/FontAwesome5';

const PhoneInputtext = ({
  defaultValue,
  onChangeText,
  onChangeFormattedText,
  referenceId,
  valid,
}) => {
  return (
    <PhoneInput
      renderDropdownImage={
        <Icon name={'angle-down'} size={15} color={Colors.WHITE} />
      }
      ref={referenceId}
      defaultValue={defaultValue}
      defaultCode="IN"
      layout="first"
      onChangeText={text => onChangeText(text)}
      onChangeFormattedText={text => onChangeFormattedText(text)}
      disableArrowIcon={false}
      containerStyle={[styles.containerStyle]}
      textContainerStyle={styles.textContainerStyle}
      textInputStyle={styles.textInputStyle}
      codeTextStyle={styles.codeTextStyle}
      countryPickerButtonStyle={styles.countryPickerButtonStyle}
    />
  );
};

export default PhoneInputtext;
