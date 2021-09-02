import AsyncStorage from '@react-native-async-storage/async-storage';
import FlashMessage from '../components/FlashMessage';
import Colors from './theme';

export const setSessionData = async (key, value) => {
  try {
    await AsyncStorage.setItem('@' + key, value);
  } catch (error) {
    FlashMessage.displayMessage({
      message: error.message,
      bgColor: Colors.BACKGROUND_PRIMARY_DARK,
      //icon: 'circle',
      position: 'top',
    });
  }
};

export const getSessionData = async key => {
  try {
    const value = await AsyncStorage.getItem('@' + key);
    return value !== null ? value : null;
  } catch (error) {
    FlashMessage.displayMessage({
      message: error.message,
      bgColor: Colors.BACKGROUND_PRIMARY_DARK,
      //icon: 'circle',
      position: 'top',
    });
  }
};

export const setSessionDataObject = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('@' + key, jsonValue);
  } catch (error) {
    FlashMessage.displayMessage({
      message: error.message,
      bgColor: Colors.BACKGROUND_PRIMARY_DARK,
      //icon: 'circle',
      position: 'top',
    });
  }
};

export const getSessionDataObject = async key => {
  try {
    const jsonValue = await AsyncStorage.getItem('@' + key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (error) {
    FlashMessage.displayMessage({
      message: error.message,
      bgColor: Colors.BACKGROUND_PRIMARY_DARK,
      //icon: 'circle',
      position: 'top',
    });
  }
};

export const clearSession = () => {
  AsyncStorage.clear();
};
