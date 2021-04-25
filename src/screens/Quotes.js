import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import colors from '../constants/colors';

const User = () => {
  const [quotes, setQuotes] = useState([]);
  const [author, setAuthor] = useState([]);

  async function randomQuote() {
    const response = await fetch('https://api.quotable.io/random');
    const data = await response.json();
    setQuotes(data.content);
    setAuthor(data.author);
  }

  useEffect(() => {
    randomQuote();
  }, []);

  return (
    <SafeAreaView style={styles.page}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={colors.white}
        animated={true}
      />
      <View>
        <Text style={styles.logo}>Random Quotes</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.text}>{quotes}</Text>
        <Text style={styles.text}>- {author}</Text>
      </View>
      <TouchableOpacity onPress={randomQuote}>
        <View style={styles.button}>
          <Text style={styles.btntext}>Generate</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default User;

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
    height: 175,
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
    marginTop: 20,
    marginBottom: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    paddingHorizontal: 25,
  },
  text: {
    fontSize: 16,
    fontFamily: 'Poppins-Light',
    fontStyle: 'normal',
    fontWeight: '600',
    color: colors.black,
    lineHeight: 24,
  },
  button: {
    width: '90%',
    height: 50,
    backgroundColor: colors.blue,
    borderRadius: 10,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
    alignSelf: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  btntext: {
    fontSize: 16,
    fontFamily: 'Poppins-Light',
    fontStyle: 'normal',
    fontWeight: '600',
    color: colors.white,
    lineHeight: 25,
    textAlign: 'center',
  },
});
