import { Platform, Dimensions } from 'react-native';


export const returnScreenDimensions = () => {
  const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');
  return { SCREEN_WIDTH, SCREEN_HEIGHT };
};

