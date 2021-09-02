import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {useNavigation, CommonActions} from '@react-navigation/native';
import {getSessionData} from 'src/utils/asyncStorage';

const Splash = ({}) => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(async () => {
      const getToken = await getSessionData('authtoken');
      const userformFlag = await getSessionData('userformFlag');

      SplashScreen.hide();
      if (getToken != null) {
        if (userformFlag === null) {
          navigation.dispatch(
            CommonActions.reset({
              index: 1,
              routes: [{name: 'UserProfile'}],
            }),
          );
        } else {
          navigation.dispatch(
            CommonActions.reset({
              index: 1,
              routes: [{name: 'Home'}],
            }),
          );
        }
      } else {
        navigation.dispatch(
          CommonActions.reset({
            index: 1,
            routes: [{name: 'Landing'}],
          }),
        );
      }
    }, 2000);
  }, [navigation]);

  return <></>;
};

export default Splash;
