import React, {useState} from 'react';
import {Input, Button, SocialIcon} from 'react-native-elements';
import {StyleSheet, SafeAreaView, View, Text, StatusBar} from 'react-native';
import colors from '../constants/colors';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPass] = useState('');

  return (
    <SafeAreaView style={styles.page}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={colors.white}
        animated={true}
      />
      <View>
        <Text style={styles.logo}>Login</Text>
      </View>
      <View style={styles.box}>
        <Input
          label="Email Address"
          placeholder="Enter your email"
          leftIcon={{type: 'font-awesome', name: 'envelope'}}
          style={styles.input}
          errorStyle={{color: 'red'}}
          onChangeText={email => setEmail(email)}
        />
        <Input
          label="Password"
          placeholder="Enter your password"
          leftIcon={{type: 'font-awesome', name: 'lock'}}
          style={styles.input}
          errorStyle={{color: 'red'}}
          onChangeText={password => setPass(password)}
          secureTextEntry={true}
        />
        <Button title="Login" onPress={() => navigation.navigate('BottomTabs')} />
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
        <SocialIcon title="Sign In With Facebook" button type="facebook" />
        <SocialIcon
          title="Sign In With Instagram"
          button
          type="instagram"
          style={{backgroundColor: colors.rose}}
        />
      </View>
    </SafeAreaView>
  );
};

export default Login;

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
  input: {},
});
