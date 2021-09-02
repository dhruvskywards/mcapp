import React from 'react';
import {
  StyleSheet,
  Modal,
  StatusBar,
  View,
  ActivityIndicator,
} from 'react-native';

const FullScreenLoader = props => {
  const {loading} = props;

  return (
    <Modal
      animationType={'none'}
      visible={loading}
      transparent
      onRequestClose={() => {}}>
      <StatusBar
        backgroundColor="rgba(52, 52, 52, 0.8)"
        barStyle="light-content"
      />
      <View style={styles.activityIndicatorWrapper}>
        <ActivityIndicator size="large" color="#fff" animating={loading} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  activityIndicatorWrapper: {
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
    // height: '100%',
    // width: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});

export default FullScreenLoader;
