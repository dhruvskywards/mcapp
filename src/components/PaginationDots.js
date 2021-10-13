import React from 'react';
import {
  View,
  TouchableOpacity
} from 'react-native';

import theme from '../utils/theme';
const PaginationDots = (props) => {
  const {
    numOfElements = 3,
    selectedIndex,
    onChange = () => {},
    
    containerProps,
    disableTouch = true,
    containerStyle,
  } = props;
  const returnPaginationDots = () => {
    var dotsElements = [];
    for (var index = 0; index < numOfElements; index++) {
      dotsElements.push(
        <TouchableOpacity
          disabled={disableTouch}
          key={index.toString()}
          style={[
            {
              backgroundColor:
                selectedIndex === index
                  ? theme.textSecondary
                  : theme.backgroundSilverVariant,
              marginLeft: 5,
              width: 23,
              height: 5,
              borderRadius: 10,
            },
          ]}
          onPress={() => {
            if (index === selected) {
              return;
            }
            onChange(index);
          }}
        />
      );
    }
    return dotsElements;
  };
  return (
    <View style={[{ flexDirection: 'row' }, containerStyle]} {...containerProps}>
      {returnPaginationDots()}
    </View>
  );
};

export default PaginationDots;