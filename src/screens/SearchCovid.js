import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import colors from '../constants/colors';

const SearchCovid = () => {
  const [keywords, setKeywords] = useState('id');
  const [country, setCountry] = useState();
  const [con, setCon] = useState([]);
  const [rec, setRec] = useState([]);
  const [die, setDie] = useState([]);
  const [update, setUp] = useState([]);

  async function Anime() {
    const response = await fetch(
      `https://www.trackcorona.live/api/countries/${keywords}`,
    );
    const data = await response.json();
    setCountry(data.data[0].location);
    setCon(data.data[0].confirmed);
    setRec(data.data[0].recovered);
    setDie(data.data[0].dead);
    setUp(data.data[0].updated);
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
          <Text style={styles.logo}>Covid</Text>
        </View>
        <View style={styles.boxinput}>
          <TextInput
            style={styles.textinput}
            placeholder="Enter country code"
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
          <Text style={styles.text}>Negara: {country} </Text>
          <Text style={styles.text}>Positif: {con} </Text>
          <Text style={styles.text}>Sembuh: {rec} </Text>
          <Text style={styles.text}>Meninggal: {die} </Text>
          <Text style={styles.text}>Update: {update} </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SearchCovid;

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
    height: 180,
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
