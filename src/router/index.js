import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Splash from '../screens/Splash';
import Quotes from '../screens/Quotes';
import Cats from '../screens/Cats';
import Ghibli from '../screens/Ghibli';
import SearchAnime from '../screens/SearchAnime';
import SearchCovid from '../screens/SearchCovid';
import Contacts from '../screens/Contacts';
import Login from '../screens/Login';
import List from '../screens/List';
import Home from '../screens/Home';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="List" headerMode="none">
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="List" component={List} />
      <Stack.Screen name="Quotes" component={Quotes} />
      <Stack.Screen name="Cats" component={Cats} />
      <Stack.Screen name="Anime" component={SearchAnime} />
      <Stack.Screen name="Covid" component={SearchCovid} />
      <Stack.Screen name="Ghibli" component={Ghibli} />
      <Stack.Screen name="Contacts" component={Contacts} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export default Router;
