import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  LogBox,
} from 'react-native';
import colors from '../constants/colors';
import {FlatList, ScrollView} from 'react-native-gesture-handler';

const Box = () => {
  const data = [
    {
      name: 'Miyah Myles',
      email: 'miyah.myles@gmail.com',
      position: 'Data Entry Clerk',
      photo:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6',
    },
    {
      name: 'June Cha',
      email: 'june.cha@gmail.com',
      position: 'Sales Manager',
      photo: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
    {
      name: 'Iida Niskanen',
      email: 'iida.niskanen@gmail.com',
      position: 'Sales Manager',
      photo: 'https://randomuser.me/api/portraits/women/68.jpg',
    },
    {
      name: 'Renee Sims',
      email: 'renee.sims@gmail.com',
      position: 'Medical Assistant',
      photo: 'https://randomuser.me/api/portraits/women/65.jpg',
    },
    {
      name: 'Jonathan Nu\u00f1ez',
      email: 'jonathan.nu\u00f1ez@gmail.com',
      position: 'Clerical',
      photo: 'https://randomuser.me/api/portraits/men/43.jpg',
    },
    {
      name: 'Sasha Ho',
      email: 'sasha.ho@gmail.com',
      position: 'Administrative Assistant',
      photo:
        'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?h=350&auto=compress&cs=tinysrgb',
    },
    {
      name: 'Abdullah Hadley',
      email: 'abdullah.hadley@gmail.com',
      position: 'Marketing',
      photo:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=a72ca28288878f8404a795f39642a46f',
    },
    {
      name: 'Thomas Stock',
      email: 'thomas.stock@gmail.com',
      position: 'Product Designer',
      photo:
        'https://tinyfac.es/data/avatars/B0298C36-9751-48EF-BE15-80FB9CD11143-500w.jpeg',
    },
    {
      name: 'Veeti Seppanen',
      email: 'veeti.seppanen@gmail.com',
      position: 'Product Designer',
      photo: 'https://randomuser.me/api/portraits/men/97.jpg',
    },
    {
      name: 'Bonnie Riley',
      email: 'bonnie.riley@gmail.com',
      position: 'Marketing',
      photo: 'https://randomuser.me/api/portraits/women/26.jpg',
    },
  ];

  return (
    <FlatList
      data={data}
      scrollEnabled={true}
      renderItem={({item}) => {
        return (
          <TouchableHighlight>
            <View style={styles.box}>
              <View>
                <Image
                  source={{uri: item.photo}}
                  style={{
                    width: 60,
                    height: 60,
                    borderRadius: 30,
                    marginVertical: 20,
                    marginLeft: 20,
                  }}
                />
              </View>
              <View
                style={{
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  alignContent: 'flex-start',
                  alignItems: 'flex-start',
                }}>
                <Text style={styles.title}>{item.name}</Text>
                <Text style={styles.text}>{item.position}</Text>
              </View>
              <View>
                <TouchableOpacity
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginHorizontal: 20,
                  }}>
                  <Text style={{color: 'green'}}>Call</Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableHighlight>
        );
      }}
      keyExtractor={item => item.name}
    />
  );
};
const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Contacts</Text>
      <View style={styles.items}>
        <Box />
      </View>
    </View>
  );
};
const Contacts = () => {
  return (
    <SafeAreaView style={styles.page}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={colors.white}
        animated={true}
      />
      <ScrollView>
        <Header />
      </ScrollView>
    </SafeAreaView>
  );
};

LogBox.ignoreLogs(['VirtualizedLists should never be nested']);

export default Contacts;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  items: {
    flexDirection: 'row',
    flexWrap: 'wrap',
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
    height: 100,
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
    marginVertical: 10,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontFamily: 'Poppins-Light',
    fontStyle: 'normal',
    fontWeight: '500',
    color: colors.black,
    lineHeight: 25,
  },
  text: {
    fontSize: 16,
    fontFamily: 'Poppins-Light',
    fontStyle: 'normal',
    fontWeight: '600',
    color: colors.black,
    lineHeight: 20,
  },
});
