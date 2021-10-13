import React from 'react';

import { TouchableOpacity, View } from 'react-native';
import { scale } from 'react-native-size-matters';
import theme from '../../utils/theme';
import style from './style';
const SwitchButton = ({  options, selected = true, onChange = () => {}, containerStyle }) => {
 
  return (
    <TouchableOpacity
      onPress={() => {
        onChange(!selected);
      }}
      style={[style.Switchbtncon, containerStyle]}
    >
      <View style={{ backgroundColor: theme.TRANSPARENT }}>
        {selected === false ? (
          <View
            style={style.selectedView}
          />
        ) : (
          <View style={{ paddingLeft: scale(6), backgroundColor: theme.TRANSPARENT }}>
            {options[0].renderView()}
          </View>
        )}
      </View>
      <View style={{ backgroundColor: theme.TRANSPARENT, marginLeft: scale(5) }}>
        {selected === true ? (
          <View
            style={style.selectedView}
          />
        ) : (
          <View style={{ paddingRight: scale(6), backgroundColor: theme.TRANSPARENT }}>
            {options[1].renderView()}
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default SwitchButton;
