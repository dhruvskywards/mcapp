import React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
let wp = Dimensions.get('window').width;
import * as _ from 'lodash';
 import MyImage from './MyImage';
import ApiConstants from "../../../../utils/ApiConstants";

const InstaGrid = ({
                     data,
                     columns,
                     onEndReachedThreshold,
                     onEndReached,
                     loading = false,
                     onItemClick,
                   }) => {
  const groupEveryNthRow = 3;
  const {mainContainer, groupedGridContainer} = styles;
  var currentRow = 0;
  const rowsArray = _.chunk(data, columns);
  var bigImageSide = 'right';

  const renderGroupedItem = (row) => {
    const smallImage1 = row[0];
    const smallImage2 = row[1];
    const largeImage = row[2];
    //uri: `${ApiConstants.API_MEDIA}${encodeURIComponent(participants[0]?.profilepic)}`,
    if (bigImageSide === 'left') {
      bigImageSide = 'left';
      return (
        <View style={{flexDirection: 'row'}}>
          <View style={groupedGridContainer}>
            <View style={styles.gridStyle}>
              <MyImage
                style={styles.imageThumbnail}
                sourceObj={smallImage1}
                onPress={() => {
                  onItemClick(smallImage1);
                }}
              />
            </View>
            <View style={styles.gridStyle}>
              <MyImage
                style={styles.imageThumbnail}
                sourceObj={smallImage2}
                onPress={() => {
                  onItemClick(smallImage2);
                }}
              />
            </View>
          </View>
          <View style={styles.gridStyle}>
            <MyImage
              style={styles.imageThumbnailLarge}
              sourceObj={largeImage}
              onPress={() => {
                onItemClick(largeImage);
              }}
            />
          </View>
        </View>
      );
    } else {
      bigImageSide = 'right';
      return (
        <View style={{flexDirection: 'row'}}>
          <View style={styles.gridStyle}>
            <MyImage
              style={styles.imageThumbnailLarge}
              sourceObj={largeImage}
              onPress={() => {
                onItemClick(largeImage);
              }}
            />
          </View>
          <View style={groupedGridContainer}>
            <View style={styles.gridStyle}>
              <MyImage
                style={styles.imageThumbnail}
                sourceObj={smallImage1}
                onPress={() => {
                  onItemClick(smallImage1);
                }}
              />
            </View>
            <View style={styles.gridStyle}>
              <MyImage
                style={styles.imageThumbnail}
                sourceObj={smallImage2}
                onPress={() => {
                  onItemClick(smallImage2);
                }}
              />
            </View>
          </View>
        </View>
      );
    }
  };

  const renderSingleItem = (item) => {
    return (
      <View style={styles.gridStyle}>
        <MyImage
          style={styles.imageThumbnail}
          sourceObj={item}
          onPress={() => {
            onItemClick(item);
          }}
        />
      </View>
    );
  };

  const renderCell = (row) => {
    if (row.length >= columns && currentRow % groupEveryNthRow === 0) {
      currentRow++;
      return <View>{renderGroupedItem(row)}</View>;
    }
    currentRow++;
    return (
      <View style={{flexDirection: 'row'}}>
        {row.map((item) => {
          return renderSingleItem(item);
        })}
      </View>
    );
  };

  const isCloseToBottom = ({layoutMeasurement, contentOffset, contentSize}) => {
    const paddingToBottom = 20;
    return (
      layoutMeasurement.height + contentOffset.y >=
      contentSize.height - paddingToBottom
    );
  };

  const renderFooter = () => {
    return (
      <View style={{marginBottom: 16}}>
        <ActivityIndicator animating size="large" />
      </View>
    );
  };

  return (
    <ScrollView
      scrollEventThrottle={onEndReachedThreshold}
      // onScroll={({nativeEvent}) => {
      //   if (isCloseToBottom(nativeEvent)) {
      //     onEndReached();
      //   }
      // }}
    >
      <View style={mainContainer}>
        {rowsArray.map((row) => {
          return renderCell(row);
        })}
      </View>
      {loading && renderFooter()}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    paddingHorizontal:8,
    // borderWidth:2,
    borderTopLeftRadius:25,
    borderTopRightRadius:25,
    // overflow: 'hidden',
  },
  groupedGridContainer: {
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
  imageThumbnail: {
    height: wp / 3 - 13,
    width: wp / 3 - 13,
    // height: 120,
    // width:122,
    resizeMode: 'stretch',
    alignSelf: 'flex-start',
    // justifyContent: 'flex-start',
    overflow:'hidden',
    backgroundColor:'lightgrey'
  },
  imageThumbnailLarge: {
    height: wp * 0.6 + 9,
    width: wp * 0.6 + 9,
     //width: wp /2,
     // height: 248,
    //width:252,
    // marginLeft: 2,
    resizeMode: 'stretch',
    alignSelf: 'flex-start',
    // justifyContent: 'flex-start',
    backgroundColor:'lightgrey',
  },
  gridStyle: {
    margin: 4,
  },
});

export default InstaGrid;
