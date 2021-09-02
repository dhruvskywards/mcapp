import React from 'react';
import {View, Text, Modal, FlatList, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './style';

const DropdownModal = ({data, visible, onPress, action, id}) => {
  return (
    <View>
      <Modal
        visible={visible}
        transparent={true}
        animationType={'fade'}
        onRequestClose={action}>
        <View style={styles.container}>
          <View style={styles.innerContainer}>
            <Icon
              onPress={action}
              name="ios-close-circle"
              style={styles.cancelBtn}
              size={30}
            />
            <FlatList
              data={data}
              renderItem={item => (
                <Pressable
                  onPress={() => {
                    onPress(item);
                    action();
                  }}>
                  <Text style={styles.text}>{item.item.name}</Text>
                </Pressable>
              )}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default DropdownModal;
