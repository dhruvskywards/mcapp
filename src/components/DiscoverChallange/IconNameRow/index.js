import React from 'react';

import faker from 'faker';
import { TouchableOpacity, View ,Text} from 'react-native';
import styles from './style'
const IconNameRow = ({
  theme,
  disabled,
  circleStyle,
  containerStyle,
  iconView = () => {
    return null;
  },
  rightView = () => {
    return null;
  },
  title = faker.name.findName(),
  helperText = faker.commerce.product(),
  onPress = () => {},
}) => {
 

  return (
    <TouchableOpacity
      onPress={() => {
        onPress();
      }}
      style={{opacity: disabled ? 0.3 : null},[
        styles.mainview,
        containerStyle,
        
      ]}
    >
     
    <View
        style={[
           styles.circleView,
            circleStyle,
        ]}
        >
        {iconView()}
    </View>
    <View style={styles.pageContainer}>
        <Text style={styles.txt}>{title}</Text>
        <Text style={styles.txt_1}>
          {helperText}
        </Text>
      </View>
      {rightView()}
    </TouchableOpacity>
  );
};

export default IconNameRow;
