import React from 'react';
import {Image, SafeAreaView, Appearance} from 'react-native';
import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from '@react-navigation/native';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import FlashMessage, {renderFlashMessageIcon} from 'react-native-flash-message';
import closeRed from '../assets/image/close_red.png';
import Success from '../assets/image/success.png';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {scale} from 'react-native-size-matters';
import FullScreenLoader from 'src/components/FullScreenLoader';
import Landing from '../screens/Unauth/Landing';
import Signin from '../screens/Unauth/Signin';
import ForgotPassword from '../screens/Unauth/ForgotPassword';
import ForgotPasswordSuccess from '../screens/Unauth/ForgotPasswordSuccess';
import Passcode from '../screens/Unauth/Passcode';
import SigninOption from '../screens/Unauth/SigninOption';
import Signup from '../screens/Unauth/Signup';
import SplashScreen from '../screens/Unauth/SplashScreen';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Foundation from 'react-native-vector-icons/Foundation';
import Step2 from '../screens/Unauth/ProfileForm/Step2';
import Step3 from '../screens/Unauth/ProfileForm/Step3';
import Step1 from '../screens/Unauth/ProfileForm/Step1';
import styles from '../utils/styles';
import HomeScreen from '../screens/Auth/HomeScreen';
import PlayScreen from '../screens/Auth/PlayScreen';
import PostScreen from '../screens/Auth/PostScreen';
import FavouriteScreen from '../screens/Auth/FavouriteScreen';
import ProfileScreen from '../screens/Auth/ProfileScreen';
import SettingScreen from '../screens/Auth/SettingScreen'
import theme from '../utils/theme';
import commonStyle from '../utils/styles';
import {useSelector} from 'react-redux';
import CompetitionSubLobby from '../screens/Auth/CompetitionSabLobby';
import CompetitionCanceled from '../screens/Auth/CompetitionSabLobby/CompetitionCanceled';
import Merchandise from '../screens/Auth/CompetitionSabLobby/Prize/Merchandise';
import Tickets from '../screens/Auth/CompetitionSabLobby/Prize/Tickets';
import AdScreen from '../screens/Auth/LiveStream/AdScreen';
import JoinCompetition from '../screens/Auth/HomeScreen/JoinCompetition/JoinCompetition';
import StreamTo from '../screens/Auth/CompetitionSabLobby/StreamTo';
import CompetitionEnded from '../screens/Auth/CompetitionSabLobby/CompetitionEnded';
import BuyRemixPoints from '../screens/Auth/SettingScreen/BuyRemixPoints';
import ManageAccounts from '../screens/Auth/SettingScreen/ManageAccounts';
import Details from '../screens/Auth/SettingScreen/ManageAccounts/Details';
import BlockedUser from '../screens/Auth/SettingScreen/BlockedUser';
import ManageCurrentSubscription from '../screens/Auth/SettingScreen/ManageCurrentSubscription';
import ContinueToCancel from '../screens/Auth/SettingScreen/ManageCurrentSubscription/ContinueToCancel';
import CancelSubscriptionFinal from '../screens/Auth/SettingScreen/ManageCurrentSubscription/CancelSubscriptionFinal';
import ChangePassword from '../screens/Auth/SettingScreen/ChangePassword';
import ForgotPasswords from '../screens/Auth/SettingScreen/ChangePassword/ForgotPasswords';
import TierMemberPermision from '../screens/Auth/SettingScreen/TierMemberPermision';
import DeleteAccount from '../screens/Auth/SettingScreen/DeleteAccont';
import InviteFriends from '../screens/Auth/SettingScreen/InviteFriends';
import Subscription from '../screens/Auth/SettingScreen/Subscription';
import SubscriptionDetails from '../screens/Auth/SettingScreen/Subscription/SubscriptionDetails';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const ProfileStack = createStackNavigator();

const customRenderFlashMessageIcon = (
  icon = 'success',
  style = {},
  customProps = {},
) => {
  switch (icon) {
    case 'circle':
      return <Image source={closeRed} style={commonStyle.flashMsg} />;
    case 'success':
      return <Image source={Success} style={commonStyle.flashMsg} />;
  }
  return renderFlashMessageIcon(icon, style, customProps);
};

function HomeTabs() {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      backBehaviour="none"
      tabBarOptions={{
        showLabel: false,
        showIcon: true,
        activeTintColor: theme.BLACK,
        inactiveTintColor: theme.BACKGROUND_VARAINT_5,
        style: commonStyle.tabNavigation,
      }}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Foundation
              name="home"
              size={scale(24)}
              color={focused ? theme.BLACK : theme.BACKGROUND_VARAINT_5}
            />
          ),
        }}
      />
      <Tab.Screen
        name="PlayScreen"
        component={PlayScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <FontAwesome
              name="play"
              size={scale(24)}
              color={focused ? theme.BLACK : theme.BACKGROUND_VARAINT_5}
            />
          ),
        }}
      />
      <Tab.Screen
        name="PostScreen"
        component={PostScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Ionicons
              name="add-circle"
              size={scale(24)}
              color={focused ? theme.BLACK : theme.BACKGROUND_VARAINT_5}
            />
          ),
        }}
      />
      <Tab.Screen
        name="FavouriteScreen"
        component={FavouriteScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <FontAwesome
              name="heart"
              size={scale(24)}
              color={focused ? theme.BLACK : theme.BACKGROUND_VARAINT_5}
            />
          ),
        }}
      />
      <Tab.Screen
        name="SettingScreen"                                      //name="ProfileScreen"
        component={SettingScreen}                    //component={ProfileScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <FontAwesome
              name="user"
              size={scale(24)}
              color={focused ? theme.BLACK : theme.BACKGROUND_VARAINT_5}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
function UserProfile() {
  return (
    <ProfileStack.Navigator
      initialRouteName="Step1"
      screenOptions={{
        headerMode: 'screen',
        //headerShown: false,
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <ProfileStack.Screen
        name="Step1"
        component={Step1}
        options={{
          headerShown: false,
          header: null,
        }}
      />
      <ProfileStack.Screen
        name="Step2"
        component={Step2}
        options={{
          headerShown: false,
          header: null,
        }}
      />
      <ProfileStack.Screen
        name="Step3"
        component={Step3}
        options={{
          headerShown: false,
          header: null,
        }}
      />
    </ProfileStack.Navigator>
  );
}
function NavStack() {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{
        headerMode: 'screen',
        //headerShown: false,
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <Stack.Screen
        name="Splash"
        component={SplashScreen}
        options={{
          headerShown: false,
          header: null,
        }}
      />
      <Stack.Screen
        name="Landing"
        component={Landing}
        options={{
          headerShown: false,
          header: null,
        }}
      />
      <Stack.Screen
        name="UserProfile"
        component={UserProfile}
        options={{
          headerShown: false,
          header: null,
        }}
      />
      <Stack.Screen
        name="Signin"
        component={Signin}
        options={{
          headerShown: false,
          header: null,
        }}
      />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={{
          headerShown: false,
          header: null,
        }}
      />
      <Stack.Screen
        name="Home"
        component={HomeTabs}
        options={{
          headerShown: false,
          header: null,
        }}
      />
      <Stack.Screen
        name="ForgotPasswordSuccess"
        component={ForgotPasswordSuccess}
        options={{
          headerShown: false,
          header: null,
        }}
      />
      <Stack.Screen
        name="Passcode"
        component={Passcode}
        options={{
          headerShown: false,
          header: null,
        }}
      />
      <Stack.Screen
        name="SigninOption"
        component={SigninOption}
        options={{
          headerShown: false,
          header: null,
        }}
      />
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{
          headerShown: false,
          header: null,
        }}
      />
      <Stack.Screen
        name="CompetitionSubLobby"
        component={CompetitionSubLobby}
        options={{
          headerShown: false,
          header: null,
        }}
      />
      <Stack.Screen
        name="CompetitionCanceled"
        component={CompetitionCanceled}
        options={{
          headerShown: false,
          header: null,
        }}
      />
      <Stack.Screen
        name="Merchandise"
        component={Merchandise}
        options={{
          headerShown: false,
          header: null,
        }}
      />
      <Stack.Screen
        name="Tickets"
        component={Tickets}
        options={{
          headerShown: false,
          header: null,
        }}
      />
      <Stack.Screen
        name="AdScreen"
        component={AdScreen}
        options={{
          headerShown: false,
          header: null,
        }}
      />
      <Stack.Screen
        name="JoinCompetition"
        component={JoinCompetition}
        options={{
          headerShown: false,
          header: null,
        }}
      />
      <Stack.Screen
        name="StreamTo"
        component={StreamTo}
        options={{
          headerShown: false,
          header: null,
        }}
      />
      <Stack.Screen
        name="CompetitionEnded"
        component={CompetitionEnded}
        options={{
          headerShown: false,
          header: null,
        }}
      />
      <Stack.Screen
        name="BuyRemixPoints"
        component={BuyRemixPoints}
        options={{
          headerShown: false,
          header: null,
        }}
      />

      <Stack.Screen
        name="ManageAccounts"
        component={ManageAccounts}
        options={{
          headerShown: false,
          header: null,
        }}
      />

      <Stack.Screen
        name="Details"
        component={Details}
        options={{
          headerShown: false,
          header: null,
        }}
      />

      <Stack.Screen
        name="BlockedUser"
        component={BlockedUser}
        options={{
          headerShown: false,
          header: null,
        }}
      />

      <Stack.Screen
        name="ManageCurrentSubscription"
        component={ManageCurrentSubscription}
        options={{
          headerShown: false,
          header: null,
        }}
      />

      <Stack.Screen
        name="ContinueToCancel"
        component={ContinueToCancel}
        options={{
          headerShown: false,
          header: null,
        }}
      />

      <Stack.Screen
        name="CancelSubscriptionFinal"
        component={CancelSubscriptionFinal}
         options={{
          headerShown: false,
          header: null,
        }}
      />

      <Stack.Screen
        name="ChangePassword"
        component={ChangePassword}
         options={{
          headerShown: false,
          header: null,
        }}
      />

      <Stack.Screen
        name="ForgotPasswords"
        component={ForgotPasswords}
         options={{
          headerShown: false,
          header: null,
        }}
      />

    <Stack.Screen
        name="TierMemberPermision"
        component={TierMemberPermision}
         options={{
          headerShown: false,
          header: null,
        }}
      />

      <Stack.Screen
        name="DeleteAccount"
        component={DeleteAccount}
         options={{
          headerShown: false,
          header: null,
        }}
      />

    <Stack.Screen
        name="InviteFriends"
        component={InviteFriends}
         options={{
          headerShown: false,
          header: null,
        }}
      />

    <Stack.Screen
        name="Subscription"
        component={Subscription}
         options={{
          headerShown: false,
          header: null,
        }}
      />
       <Stack.Screen
        name="SubscriptionDetails"
        component={SubscriptionDetails}
         options={{
          headerShown: false,
          header: null,
        }}
      />
     
      
    </Stack.Navigator>
  );
}
export default function App() {
  const loading = useSelector(state => state.loader.loading);
  const [isDarkTheme, setIsDarkTheme] = React.useState(false);

  const CustomDefaultTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: theme.WHITE,
      text: theme.BLACK,
      card: theme.BACKGROUND_VARAINT_7,
      primary: theme.BACKGROUND_VARAINT_7,
      notification: theme.WHITE,
      backgrounds:theme.BUTTON_BACKGROUD,
      lineSeparator :theme.LIGHT_GRAY,
    },
  };

  const CustomDarkTheme = {
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
      background: theme.BACKGROUND_PRIMARY_DARK,
      text: theme.WHITE,
      card: theme.BACKGROUND_PRIMARY_DARK,
      primary: theme.BLACK_VARAINT_3,
      notification: theme.BLACK,
      backgrounds:theme.BLACK,
      lineSeparator :theme.WHITE,
    },
  };

  // const ToggalFunction=useMemo(()=>({
  //   toggleTheme: () => {
  //     setIsDarkTheme( isDarkTheme => !isDarkTheme );
  //   }),[]);
  const colorScheme = Appearance.getColorScheme();
  return (
    <>
      <SafeAreaView style={styles.navigationContainer}>
        <NavigationContainer
          theme={colorScheme === 'dark' ? CustomDarkTheme : CustomDefaultTheme}>
          <NavStack />
        </NavigationContainer>
        <FlashMessage
          renderFlashMessageIcon={customRenderFlashMessageIcon}
          titleStyle={{marginRight: 20}}
        />
        <FullScreenLoader loading={loading} />
      </SafeAreaView>
    </>
  );
}
