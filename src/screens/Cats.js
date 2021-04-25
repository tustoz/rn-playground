import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  Image,
  StatusBar,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import colors from '../constants/colors';

const Cats = () => {
  const [image, setImage] = useState();

  async function randomCat() {
    const response = await fetch('https://aws.random.cat/meow');
    const data = await response.json();
    setImage(data.file);
  }

  useEffect(() => {
    randomCat();
  }, []);

  return (
    <SafeAreaView style={styles.page}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={colors.white}
        animated={true}
      />
      <View>
        <Text style={styles.logo}>Random Cats</Text>
      </View>
      <View style={styles.box}>
        <Image
          source={{uri: image}}
          style={{width: '100%', height: '100%', borderRadius: 10}}
          PlaceholderContent={<ActivityIndicator color={colors.rose} size="large" />}
        />
      </View>
      <TouchableOpacity onPress={randomCat}>
        <View style={styles.button}>
          <Text style={styles.btntext}>Generate</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Cats;

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
    height: 400,
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
    paddingVertical: 25,
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
