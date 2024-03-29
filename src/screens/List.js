import React from 'react';
import {Icon} from 'react-native-elements';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import colors from '../constants/colors';

const Box = ({onPress, title}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.box}>
        <Text style={styles.text}>{title}</Text>
        <Icon name="chevron-right" size={30} color={colors.blue} />
      </View>
    </TouchableOpacity>
  );
};
const List = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.page}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={colors.white}
        animated={true}
      />
      <View>
        <Text style={styles.logo}>Screen List</Text>
      </View>
      <Box title="Splash" onPress={() => navigation.navigate('Splash')} />
      <Box
        title="Contact List"
        onPress={() => navigation.navigate('Contacts')}
      />
      <Box
        title="Random Quotes"
        onPress={() => navigation.navigate('Quotes')}
      />
      <Box title="Random Cats" onPress={() => navigation.navigate('Cats')} />
      <Box title="Search Anime" onPress={() => navigation.navigate('Anime')} />
      <Box title="Covid Info" onPress={() => navigation.navigate('Covid')} />
      <Box
        title="Random Ghibli Films"
        onPress={() => navigation.navigate('Ghibli')}
      />
      <Box
        title="[Social Media] Signup"
        onPress={() => navigation.navigate('Signup')}
      />
      <Box
        title="[Social Media] Login"
        onPress={() => navigation.navigate('Login')}
      />
      <Box
        title="[Social Media] Feed"
        onPress={() => navigation.navigate('BottomTabs')}
      />
      <Box
        title="[Social Media] Profile"
        onPress={() => navigation.navigate('Profile')}
      />
      <Box
        title="[Social Media] Messages"
        onPress={() => navigation.navigate('Messages')}
      />
      <Box
        title="[Firebase Auth] Anonymous"
        onPress={() => navigation.navigate('Anonymous')}
      />
      <Box
        title="[Firebase Auth] Email & Password"
        onPress={() => navigation.navigate('EmailPass')}
      />
      <Box
        title="[Firebase Auth] Google"
        onPress={() => navigation.navigate('Google')}
      />
      <Box
        title="[Firebase Auth] Phone"
        onPress={() => navigation.navigate('Phone')}
      />
      <Box
        title="[Firebase Auth] Admob"
        onPress={() => navigation.navigate('Admob')}
      />
    </SafeAreaView>
  );
};

export default List;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  box: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 25,
  },
  logo: {
    fontSize: 18,
    fontFamily: 'Poppins-Bold',
    color: colors.black,
    textAlign: 'center',
  },
  text: {
    fontSize: 18,
    fontFamily: 'Poppins-Light',
    color: colors.blue,
    textAlign: 'left',
    paddingVertical: 5,
  },
});
