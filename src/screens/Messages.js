import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ScrollView,
  View,
  Text,
  FlatList,
  Image
} from 'react-native';
import {Icon, Avatar} from 'react-native-elements';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {useNavigation} from '@react-navigation/core';
import colors from '../constants/colors';
import Requests from './Requests';
import General from './General';
import Primary from './Primary';

const Header = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <View
          style={{flexDirection: 'row', alignItems: 'center', marginRight: 30}}>
          <Text style={styles.logo}>maxi aditya</Text>
          <Icon
            name="angle-down"
            type="font-awesome"
            color={colors.black}
            style={{marginHorizontal: 15, marginVertical: 5}}
          />
        </View>
      </TouchableOpacity>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <TouchableOpacity>
          <Icon
            name="external-link"
            type="font-awesome"
            color={colors.black}
            style={{marginHorizontal: 15, marginVertical: 5}}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const TopTab = createMaterialTopTabNavigator();

const TopTabNavigator = () => {
  return (
    <TopTab.Navigator
      tabBarOptions={{
        indicatorStyle: {
          backgroundColor: 'transparent',
          borderBottomColor: colors.black,
          borderBottomWidth: 1,
        },
      }}>
      <TopTab.Screen
        name="Primary"
        title="Primary"
        component={Primary}
        options={{
          tabBarIcon: () => (
            <Icon name="th" type="font-awesome" color={colors.black} />
          ),
        }}
      />
      <TopTab.Screen
        name="General"
        title="General"
        component={General}
        options={{
          tabBarIcon: () => (
            <Icon name="user-o" type="font-awesome" color={colors.black} />
          ),
        }}
      />
      <TopTab.Screen
        name="Request"
        title="Request"
        component={Requests}
        options={{
          tabBarIcon: () => (
            <Icon name="user-o" type="font-awesome" color={colors.black} />
          ),
        }}
      />
    </TopTab.Navigator>
  );
};

const Messages = () => {
  return (
    <SafeAreaView style={styles.page}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={colors.white}
        animated={true}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header />
        <TopTabNavigator />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Messages;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingHorizontal: 10,
    paddingVertical: 10,
    alignItems: 'center',
    borderBottomColor: 'grey',
    borderBottomWidth: 0.5,
  },
  logo: {
    fontSize: 20,
    fontFamily: 'Poppins-Bold',
    fontWeight: '500',
    color: colors.black,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: 'center',
  },
});
