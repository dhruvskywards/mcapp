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
import FavouriteScreen from '../screens/Auth/FavouriteScreen';
import ProfileScreen from '../screens/Auth/ProfileScreen';
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
import StoryLayout from '../screens/Auth/HomeScreen/StoryLayout';
import AddStoryFlow from '../screens/Auth/HomeScreen/AddStoryFlow/mainpage';
import EditPhoto from '../screens/Auth/HomeScreen/AddStoryFlow/EditPhoto';
import PostStoryForm from '../screens/Auth/HomeScreen/AddStoryFlow/PostStoryForm';
import UserProfileGallery from '../components/UserProfileGallery';
import UserProfileMusic from '../components/UserProfileMusic';
import UserProfileLink from '../components/UserProfileLink';
import UserProfileCalender from '../components/UserProfileCalender';
import SocialLinks from '../components/SocialLinks';
import ChatSetting from "../components/ChatSettings";
import AdTrack from "../components/AdTrack";
import ContestPerformerResult from "../screens/Auth/HomeScreen/LiveStreame/ContestPerformerResult";
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const ProfileStack = createStackNavigator();
const Story = createStackNavigator();

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
        component={AddStoryFlow}
        initialParams={{ContentType: 'post'}}
        options={{
          tabBarVisible: false,
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
        name="ProfileScreen"
        component={ProfileScreen}
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

function StoryFlow() {
  return (
    <Story.Navigator
      initialRouteName="AddStoryFlow"
      screenOptions={{
        headerMode: 'screen',
        //headerShown: false,
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <Story.Screen
        name="AddStoryFlow"
        component={AddStoryFlow}
        options={{
          headerShown: false,
          header: null,
        }}
      />
    </Story.Navigator>
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
        name="StoryFlow"
        component={AddStoryFlow}
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
        name="StoryLayout"
        component={StoryLayout}
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
        name="EditPhoto"
        component={EditPhoto}
        options={{
          headerShown: false,
          header: null,
        }}
      />
      <Story.Screen
        name="PostStoryForm"
        component={PostStoryForm}
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
        name="UserProfileGallery"
        component={UserProfileGallery}
        options={{
          headerShown: false,
          header: null,
        }}
      />
      <Stack.Screen
        name="UserProfileMusic"
        component={UserProfileMusic}
        options={{
          headerShown: false,
          header: null,
        }}
      />
      <Stack.Screen
        name="UserProfileLink"
        component={UserProfileLink}
        options={{
          headerShown: false,
          header: null,
        }}
      />
      <Stack.Screen
        name="SocialLinks"
        component={SocialLinks}
        options={{
          headerShown: false,
          header: null,
        }}
      />
      <Stack.Screen
        name="UserProfileCalender"
        component={UserProfileCalender}
        options={{
          headerShown: false,
          header: null,
        }}
      />
      <Stack.Screen
        name="ChatSetting"
        component={ChatSetting}
        options={{
          headerShown: false,
          header: null,
        }}
      />
      <Stack.Screen
        name="ContestPerformerResult"
        component={ContestPerformerResult}
        options={{
          headerShown: false,
          header: null,
        }}
      />
      <Stack.Screen
        name="AdTrack"
        component={AdTrack}
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
