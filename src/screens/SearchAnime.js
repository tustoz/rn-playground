import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  StatusBar,
  TouchableOpacity,
  Image,
  Linking,
} from 'react-native';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import colors from '../constants/colors';

const SearchAnime = () => {
  const [keywords, setKeywords] = useState('Shingeki');
  const [title, setTitle] = useState([]);
  const [url, setUrl] = useState([]);
  const [image, setImage] = useState();
  const [airing, setAir] = useState();
  const [synopsis, setSynopsis] = useState([]);
  const [type, setType] = useState([]);
  const [eps, setEps] = useState([]);
  const [score, setScore] = useState([]);

  async function Anime() {
    const response = await fetch(
      `https://api.jikan.moe/v3/search/anime?q=${keywords}&limit=1`,
    );
    const data = await response.json();
    setTitle(data.results[0].title);
    setUrl(data.results[0].url);
    setImage(data.results[0].image_url);
    setTitle(data.results[0].title);
    setAir(data.results[0].airing);
    setSynopsis(data.results[0].synopsis);
    setType(data.results[0].type);
    setEps(data.results[0].episodes);
    setScore(data.results[0].score);
  }

  useEffect(() => {
    Anime();
  }, []);

  return (
    <SafeAreaView style={styles.page}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={colors.white}
        animated={true}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
      <View>
          <Text style={styles.logo}>Search Anime</Text>
        </View>
        <View style={styles.boxinput}>
          <TextInput
            style={styles.textinput}
            placeholder="Enter your url"
            onChangeText={keywords => setKeywords(keywords)}
            value={keywords}
          />
        </View>
        <TouchableOpacity onPress={Anime}>
          <View style={styles.button}>
            <Text style={styles.btntext}>Search</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.box}>
          <Image
            source={{uri: image}}
            style={{width: '100%', height: 450, borderRadius: 10}}
          />
          <View style={{marginTop: 20}}>
            <Text style={styles.text}>Title: {title} </Text>
            <Text style={styles.text}>Synopsis: {synopsis} </Text>
            <Text style={styles.text}>Episodes: {eps} </Text>
            <Text style={styles.text}>Type: {type} </Text>
            <Text style={styles.text}>Score: {score} </Text>
            <Text style={styles.text}>Airing: {JSON.stringify(airing)}</Text>
            <TouchableOpacity onPress={() => Linking.openURL(url)}>
              <Text style={styles.text}>Url: {url} </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SearchAnime;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: 'center',
  },
  logo: {
    fontSize: 18,
    fontFamily: 'Poppins-Bold',
    color: colors.black,
    textAlign: 'center',
  },
  box: {
    width: '90%',
    height: 840,
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
    marginTop: 10,
    marginBottom: 50,
    alignSelf: 'center',
    paddingHorizontal: 25,
    paddingVertical: 20,
  },
  boxinput: {
    width: '90%',
    height: 50,
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
    marginVertical: 15,
    paddingHorizontal: 10,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
    fontFamily: 'Poppins-Light',
    fontStyle: 'normal',
    fontWeight: '600',
    color: colors.black,
    lineHeight: 24,
  },
  textinput: {
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
