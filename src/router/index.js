import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icon, Avatar} from 'react-native-elements';

//screens
import Splash from '../screens/Splash';
import Quotes from '../screens/Quotes';
import Cats from '../screens/Cats';
import Ghibli from '../screens/Ghibli';
import SearchAnime from '../screens/SearchAnime';
import SearchCovid from '../screens/SearchCovid';
import Contacts from '../screens/Contacts';
import Login from '../screens/Login';
import List from '../screens/List';
import Explore from '../screens/Explore';
import Post from '../screens/Post';
import Shop from '../screens/Shop';
import Profile from '../screens/Profile';
import Feed from '../screens/Feed';
import colors from '../constants/colors';
import Tags from '../screens/Tags';
import Messages from '../screens/Messages';
import Primary from '../screens/Primary';
import General from '../screens/General';
import Requests from '../screens/Requests';
import EmailPass from '../screens/EmailPass';
import Anonymous from '../screens/Anonymous';
import Google from '../screens/Google';
import Phone from '../screens/Phone';
import Admob from '../screens/Admob';
import Signup from '../screens/Signup';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      tabBarOptions={{
        activeTintColor: colors.black,
        showLabel: false,
        style: {height: 55},
      }}>
      <Tab.Screen
        name="Feed"
        component={Feed}
        options={{
          tabBarIcon: () => <Icon name="home" color={colors.black} size={30} />,
        }}
      />
      <Tab.Screen
        name="Explore"
        component={Explore}
        options={{
          tabBarIcon: () => (
            <Icon name="search" color={colors.black} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="Post"
        component={Post}
        options={{
          tabBarIcon: () => (
            <Icon
              name="plus-square-o"
              type="font-awesome"
              color={colors.black}
              size={30}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Shop"
        component={Shop}
        options={{
          tabBarIcon: () => (
            <Icon name="shopping-bag" color={colors.black} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: () => (
            <Avatar
              size="small"
              rounded
              source={{
                uri:
                  'https://instagram.fcgk12-1.fna.fbcdn.net/v/t51.2885-19/s150x150/148635043_431148951662816_3992073723301908277_n.jpg?tp=1&_nc_ht=instagram.fcgk12-1.fna.fbcdn.net&_nc_ohc=BPGOW3Hg7WEAX9AMU9m&edm=ABfd0MgAAAAA&ccb=7-4&oh=8cc1cfccf4dbe1de3c41b1219382beac&oe=60AC2DC7&_nc_sid=7bff83',
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="List" headerMode="none">
      <Stack.Screen name="BottomTabs" component={BottomTabs} />
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="List" component={List} />
      <Stack.Screen name="Quotes" component={Quotes} />
      <Stack.Screen name="Cats" component={Cats} />
      <Stack.Screen name="Anime" component={SearchAnime} />
      <Stack.Screen name="Covid" component={SearchCovid} />
      <Stack.Screen name="Ghibli" component={Ghibli} />
      <Stack.Screen name="Contacts" component={Contacts} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Tags" component={Tags} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Messages" component={Messages} />
      <Stack.Screen name="Primary" component={Primary} />
      <Stack.Screen name="General" component={General} />
      <Stack.Screen name="Request" component={Requests} />
      <Stack.Screen name="Anonymous" component={Anonymous} />
      <Stack.Screen name="EmailPass" component={EmailPass} />
      <Stack.Screen name="Google" component={Google} />
      <Stack.Screen name="Phone" component={Phone} />
      <Stack.Screen name="Admob" component={Admob} />
    </Stack.Navigator>
  );
};

export default Router;
