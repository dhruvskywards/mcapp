import React from 'react';
import { View } from 'react-native';
import {useTheme} from '@react-navigation/native';
const LineSeparatorComponent = (props) => {
  const CutomTheme = useTheme();
  return (
    <View
      style={[{ borderTopWidth: 1, color: CutomTheme.colors.lineSeparator }, props.style]}
    />
  );
};

export default LineSeparatorComponent;
