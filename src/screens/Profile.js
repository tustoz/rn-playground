import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ScrollView,
  View,
  Text,
  LogBox
} from 'react-native';
import {Icon, Avatar, Image} from 'react-native-elements';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import colors from '../constants/colors';
import Post from './Post';
import Tags from './Tags';

const TopTab = createMaterialTopTabNavigator();

const Header = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={styles.logo}>maxi aditya</Text>
          <Icon
            name="angle-down"
            type="font-awesome"
            color={colors.black}
            style={{marginHorizontal: 15, marginVertical: 5}}
          />
        </View>
      </TouchableOpacity>
      {/* <TouchableOpacity>
        <Icon name="home" type="font-awesome" color={colors.black} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Icon name="commenting-o" type="font-awesome" color={colors.black} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Icon name="compass" type="font-awesome" color={colors.black} />
      </TouchableOpacity> */}
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <TouchableOpacity>
          <Icon
            name="plus-square-o"
            type="font-awesome"
            color={colors.black}
            style={{marginHorizontal: 15, marginVertical: 5}}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon
            name="bars"
            type="font-awesome"
            color={colors.black}
            style={{marginHorizontal: 15, marginVertical: 5}}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const Status = () => {
  return (
    <View>
      <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
        <View style={styles.status}>
          <View>
            <Avatar
              size="large"
              rounded
              icon={{name: 'user-circle-o', type: 'font-awesome'}}
              onPress={() => console.log('Works!')}
              activeOpacity={0.7}
              containerStyle={styles.avatar}
            />
            <Text style={styles.textstats}>Opinion</Text>
          </View>
          <View>
            <Avatar
              size="large"
              rounded
              icon={{name: 'user-circle-o', type: 'font-awesome'}}
              onPress={() => console.log('Works!')}
              activeOpacity={0.7}
              containerStyle={styles.avatar}
            />
            <Text style={styles.textstats}>QnA</Text>
          </View>
          <View>
            <Avatar
              size="large"
              rounded
              icon={{name: 'user-circle-o', type: 'font-awesome'}}
              onPress={() => console.log('Works!')}
              activeOpacity={0.7}
              containerStyle={styles.avatar}
            />
            <Text style={styles.textstats}>Photography</Text>
          </View>
          <View>
            <Avatar
              size="large"
              rounded
              icon={{name: 'user-circle-o', type: 'font-awesome'}}
              onPress={() => console.log('Works!')}
              activeOpacity={0.7}
              containerStyle={styles.avatar}
            />
            <Text style={styles.textstats}>Netflix</Text>
          </View>
          <View>
            <Avatar
              size="large"
              rounded
              icon={{name: 'user-circle-o', type: 'font-awesome'}}
              onPress={() => console.log('Works!')}
              activeOpacity={0.7}
              containerStyle={styles.avatar}
            />
            <Text style={styles.textstats}>Ngoding</Text>
          </View>
          <View>
            <Avatar
              size="large"
              rounded
              icon={{name: 'plus', type: 'font-awesome'}}
              onPress={() => console.log('Works!')}
              activeOpacity={0.7}
              containerStyle={styles.avatar}
            />
            <Text style={styles.textstats}>Baru</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const Info = () => {
  return (
    <View style={styles.content}>
      <View style={styles.box}>
        <Avatar
          size="large"
          rounded
          source={{
            uri:
              'https://instagram.fcgk12-1.fna.fbcdn.net/v/t51.2885-19/s150x150/148635043_431148951662816_3992073723301908277_n.jpg?tp=1&_nc_ht=instagram.fcgk12-1.fna.fbcdn.net&_nc_ohc=BPGOW3Hg7WEAX9AMU9m&edm=ABfd0MgAAAAA&ccb=7-4&oh=8cc1cfccf4dbe1de3c41b1219382beac&oe=60AC2DC7&_nc_sid=7bff83',
          }}
        />
        <View style={styles.column}>
          <Text style={styles.count}>10</Text>
          <Text style={styles.text}>Postingan</Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.count}>298</Text>
          <Text style={styles.text}>Pengikut</Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.count}>184</Text>
          <Text style={styles.text}>Mengikuti</Text>
        </View>
      </View>
      <View style={styles.info}>
        <Text style={styles.title}>tustoz</Text>
        <Text style={styles.text}>Kreator Video</Text>
        <Text style={styles.text}>💻 Coding, Tech, Education</Text>
        <Text style={styles.text}>👨‍💻 Mobile Dev - @orqa.id</Text>
        <Text style={styles.text}>✉️ Business inquiries: @nimkyu</Text>
      </View>
      <View style={styles.btngroup}>
        <View style={styles.btnone}>
          <Text style={styles.btntext}>Edit Profil</Text>
        </View>
        <View style={styles.row}>
          <View style={styles.btntwo}>
            <Text style={styles.btntext}>Promosi</Text>
          </View>
          <View style={styles.btntwo}>
            <Text style={styles.btntext}>Insight</Text>
          </View>
          <View style={styles.btntwo}>
            <Text style={styles.btntext}>Kontak</Text>
          </View>
        </View>
      </View>
      <View></View>
    </View>
  );
};

const TopTabNavigator = () => {
  return (
    <TopTab.Navigator
      tabBarOptions={{
        showIcon: true,
        showLabel: false,
        indicatorStyle: {
          backgroundColor: 'transparent',
          borderBottomColor: colors.black,
          borderBottomWidth: 1
        },
      }}>
      <TopTab.Screen
        name="Post"
        component={Post}
        options={{
          tabBarIcon: () => (
            <Icon
              name="th"
              type="font-awesome"
              color={colors.black}
            />
          ),
        }}
      />
      <TopTab.Screen
        name="Tags"
        component={Tags}
        options={{
          tabBarIcon: () => (
            <Icon
              name="user-o"
              type="font-awesome"
              color={colors.black}
            />
          ),
        }}
      />
    </TopTab.Navigator>
  );
};

const Feed = () => {
  return (
    <SafeAreaView style={styles.page}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={colors.white}
        animated={true}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header />
        <Info />
        <Status />
        <TopTabNavigator />
      </ScrollView>
    </SafeAreaView>
  );
};

LogBox.ignoreLogs(['If you want to use']);

export default Feed;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  logo: {
    fontSize: 20,
    fontFamily: 'Poppins-Bold',
    fontWeight: '500',
    color: colors.black,
  },
  status: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 10,
    // borderTopWidth: 0.8,
    // borderBottomWidth: 0.8,
  },
  avatar: {flex: 5, backgroundColor: '#E5E5E5', marginHorizontal: 5},
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: 'center',
    borderTopWidth: 0.2,
  },
  text: {
    fontSize: 15,
    fontFamily: 'Poppins-Light',
    fontWeight: '500',
    color: colors.black,
    lineHeight: 18,
  },
  textstats: {
    fontSize: 14,
    fontFamily: 'Poppins-Light',
    fontWeight: '500',
    color: colors.black,
    lineHeight: 18,
    textAlign: 'center',
    marginTop: 5,
  },
  info: {
    paddingHorizontal: 20,
    marginTop: 10,
    marginBottom: 20,
  },
  btntext: {
    fontSize: 14,
    fontFamily: 'Poppins-SemiBold',
    fontWeight: '500',
    color: colors.black,
    textAlign: 'center',
    marginTop: 2
  },
  title: {
    fontSize: 16,
    fontFamily: 'Poppins-Bold',
    fontWeight: '500',
    color: colors.black,
  },
  count: {
    fontSize: 16,
    fontFamily: 'Poppins-Bold',
    fontWeight: '500',
    color: colors.black,
    textAlign: 'center',
    marginTop: 10,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: 'center',
  },
  column: {
    flexDirection: 'column',
  },
  box: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  btngroup: {
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },
  btnone: {
    width: '100%',
    borderRadius: 2,
    borderWidth: 0.5,
    justifyContent: 'center',
  },
  btntwo: {
    width: '32%',
    borderRadius: 2,
    borderWidth: 0.5,
    marginHorizontal: 4,
    marginVertical: 5,
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
