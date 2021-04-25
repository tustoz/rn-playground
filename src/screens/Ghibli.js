import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import colors from '../constants/colors';

const Ghibli = () => {
  const [title, setTitle] = useState([]);
  const [originalTitle, setOri] = useState([]);
  const [desc, setDesc] = useState([]);
  const [director, setDir] = useState([]);
  const [pro, setPro] = useState([]);
  const [release, setRelease] = useState([]);
  const [score, setScore] = useState([]);

  async function randomQuote() {
    let random = Math.floor(Math.random() * 21);
    const response = await fetch('https://ghibliapi.herokuapp.com/films');
    const data = await response.json();
    setTitle(data[random].title);
    setOri(data[random].original_title);
    setDesc(data[random].description);
    setDir(data[random].director);
    setPro(data[random].producer);
    setRelease(data[random].release_date);
    setScore(data[random].rt_score);
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
        <Text style={styles.logo}>Ghibli Films</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.box}>
          <Text style={styles.text}>Title: {title} </Text>
          <Text style={styles.text}>Original Title: {originalTitle}</Text>
          <Text style={styles.text}>Description: {desc}</Text>
          <Text style={styles.text}>Director: {director}</Text>
          <Text style={styles.text}>Producer: {pro}</Text>
          <Text style={styles.text}>Release: {release}</Text>
          <Text style={styles.text}>Score: {score}</Text>
        </View>
        <TouchableOpacity onPress={randomQuote}>
          <View style={styles.button}>
            <Text style={styles.btntext}>Generate</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Ghibli;

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
    height: 625,
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
    paddingHorizontal: 25,
    paddingVertical: 20,
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
