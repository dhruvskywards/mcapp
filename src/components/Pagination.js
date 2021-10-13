import React from 'react';
import {
  View,
  TouchableOpacity
} from 'react-native';
import theme from '../utils/theme';
const Pagination = (props) => {
  const {
    numOfElements = 3,
    selectedIndex,
    onChange = () => {},
    containerProps,
    disableTouch = true,
    containerStyle,
  } = props;
  const returnPagination = () => {
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
              width: selectedIndex === index ? 23 : 9,
              height: selectedIndex === index ? 7 : 9,
              borderRadius: 10,
              alignSelf: 'center',
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
      {returnPagination()}
    </View>
  );
};

export default Pagination;
