import React, {useState, useEffect} from 'react';
import {Input, Button, SocialIcon} from 'react-native-elements';
import {StyleSheet, SafeAreaView, View, Text, StatusBar} from 'react-native';
import auth from '@react-native-firebase/auth';
import colors from '../constants/colors';

const Signup = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPass] = useState('');

  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  const Logoff = () => {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));
  };

  const CreateUser = () => {
    auth()
      .createUserWithEmailAndPassword(
        email,
        password,
      )
      .then(() => {
        console.log('User account created & signed in!');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  };

  if (initializing) return null;

  if (!user) {
    return (
      <SafeAreaView style={styles.page}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor={colors.white}
          animated={true}
        />
        <View>
          <Text style={styles.logo}>Register</Text>
        </View>
        <View style={styles.box}>
          <Input
            label="Email Address"
            placeholder="Enter your email"
            leftIcon={{type: 'font-awesome', name: 'envelope'}}
            style={styles.input}
            errorStyle={{color: 'red'}}
            onChangeText={email => setEmail(email)}
            autoCorrect={false}
            autoCapitalize={false}
          />
          <Input
            label="Password"
            placeholder="Enter your password"
            leftIcon={{type: 'font-awesome', name: 'lock'}}
            style={styles.input}
            errorStyle={{color: 'red'}}
            onChangeText={password => setPass(password)}
            secureTextEntry={true}
            autoCorrect={false}
            autoCapitalize={false}
          />
          <Button title="Sign Up" onPress={CreateUser} />
          <Text
            style={{
              fontSize: 20,
              fontFamily: 'Poppins-Light',
              color: colors.black,
              alignSelf: 'center',
              marginVertical: 5,
            }}>
            OR
          </Text>
          <SocialIcon title="Sign Up With Facebook" button type="facebook" />
          <SocialIcon
            title="Sign Up With Instagram"
            button
            type="instagram"
            style={{backgroundColor: colors.rose}}
          />
        </View>
      </SafeAreaView>
    );
  }

  return (
    <View>
      <Text>Welcome {user.emailVerified}</Text>
      <Text>Email: {user.email}</Text>
      <Button title="Logoff User" onPress={Logoff} />
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  logo: {
    fontSize: 18,
    fontFamily: 'Poppins-Bold',
    color: colors.black,
    textAlign: 'center',
  },
  box: {
    width: '90%',
    height: 500,
    backgroundColor: colors.white,
    borderRadius: 10,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
    marginHorizontal: 5,
    marginTop: 50,
    marginBottom: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    paddingHorizontal: 25,
    paddingVertical: 25,
  },
});
