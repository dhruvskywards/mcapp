import React, { useEffect, useState } from "react";
import {
  TouchableOpacity,
  Image,
  StyleSheet,
  ActivityIndicator, Dimensions,
} from "react-native";
import ApiConstants from "../../../../utils/ApiConstants";
let wp = Dimensions.get('window');
const MyImage = ({style, sourceObj, onPress}) => {
  const [imageError, setImageError] = useState(false);
  const [loading, setLoading] = useState(true);
  console.log("CH-012SourceOjb",JSON.stringify(sourceObj?.contentUrl))
  return (

    <TouchableOpacity onPress={onPress}>
      {imageError || !sourceObj.contentUrl ? (
        <Image
          source={{uri: `${ApiConstants.API_MEDIA}${encodeURIComponent(sourceObj?.contentUrl)}`,}}
           style={{ ...style }}
          // style={{ height:100,width:150,backgroundColor:'red' }}
          onLoadEnd={() => setLoading(false)}
        />
      ) :
          (
        <Image
           style={{ ...style }}
          //style={{ height:100,width:100,backgroundColor:'green' }}
          source={{uri: `${ApiConstants.API_MEDIA}${encodeURIComponent(sourceObj?.contentUrl)}`,}}
          onError={(e) => {
            setLoading(false);
            setImageError(true);
          }}
          onLoadEnd={() => setLoading(false)}
        />
      )
      }
      {loading && (
        <ActivityIndicator
          style={styles.activityIndicator}
          animating={loading}
        />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  activityIndicator: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  galleryImg:{
    height: wp * 0.6 + 12,
    width: wp * 0.6 + 12,
    backgroundColor:'red'
  }
});

export default MyImage;
