import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ScrollView,
  View,
  Text,
} from 'react-native';
import {Icon, Avatar} from 'react-native-elements';
import {TouchableOpacity} from 'react-native-gesture-handler';
import colors from '../constants/colors';

const Header = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.logo}>Instagram</Text>
      </View>
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
            name="heart-o"
            type="font-awesome"
            color={colors.black}
            style={{marginHorizontal: 10, marginVertical: 5}}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Messages', { screen: 'Messages' })}>
          <Icon
            name="messenger"
            type="fontisto"
            color={colors.black}
            style={{marginHorizontal: 5, marginVertical: 5}}
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
          <Avatar
            size="large"
            rounded
            icon={{name: 'user-circle-o', type: 'font-awesome'}}
            onPress={() => console.log('Works!')}
            activeOpacity={0.7}
            containerStyle={styles.avatar}
          />
          <Avatar
            size="large"
            rounded
            icon={{name: 'user-circle-o', type: 'font-awesome'}}
            onPress={() => console.log('Works!')}
            activeOpacity={0.7}
            containerStyle={styles.avatar}
          />
          <Avatar
            size="large"
            rounded
            icon={{name: 'user-circle-o', type: 'font-awesome'}}
            onPress={() => console.log('Works!')}
            activeOpacity={0.7}
            containerStyle={styles.avatar}
          />
          <Avatar
            size="large"
            rounded
            icon={{name: 'user-circle-o', type: 'font-awesome'}}
            onPress={() => console.log('Works!')}
            activeOpacity={0.7}
            containerStyle={styles.avatar}
          />
          <Avatar
            size="large"
            rounded
            icon={{name: 'user-circle-o', type: 'font-awesome'}}
            onPress={() => console.log('Works!')}
            activeOpacity={0.7}
            containerStyle={styles.avatar}
          />
          <Avatar
            size="large"
            rounded
            icon={{name: 'user-circle-o', type: 'font-awesome'}}
            onPress={() => console.log('Works!')}
            activeOpacity={0.7}
            containerStyle={styles.avatar}
          />
          <Avatar
            size="large"
            rounded
            icon={{name: 'user-circle-o', type: 'font-awesome'}}
            onPress={() => console.log('Works!')}
            activeOpacity={0.7}
            containerStyle={styles.avatar}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const Timeline = () => {
  return (
    <View>
      <View style={styles.header}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity>
            <Avatar
              size="small"
              rounded
              source={{
                uri:
                  'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.title}> maxi aditya</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <Icon name="ellipsis-h" type="font-awesome" color={colors.black} />
        </TouchableOpacity>
      </View>
      {/* <Image source={{uri: image}} style={{width: 100, height: 100}} /> */}
      <View
        style={{width: '100%', height: 300, backgroundColor: '#E5E5E5'}}></View>
      <View>
        <View style={styles.footer}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              alignItems: 'center',
            }}>
            <TouchableOpacity>
              <Icon
                name="heart-o"
                type="font-awesome"
                color={colors.black}
                style={{marginRight: 8}}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon
                name="comment-o"
                type="font-awesome"
                color={colors.black}
                style={{marginHorizontal: 8}}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon
                name="paper-plane-o"
                type="font-awesome"
                color={colors.black}
                style={{marginHorizontal: 8}}
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity>
            <Icon name="bookmark-o" type="font-awesome" color={colors.black} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            paddingHorizontal: 15,
            paddingVertical: 5,
            alignItems: 'center',
          }}>
          <Avatar
            size="small"
            rounded
            source={{
              uri:
                'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
            }}
          />
          <Text style={styles.text}> Liked by </Text>
          <Text style={styles.title}>maxi.aditya </Text>
          <Text style={styles.text}> and </Text>
          <Text style={styles.title}>179,690 others</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            paddingHorizontal: 17,
            paddingVertical: 5,
            flexWrap: 'wrap',
            paddingBottom: 20,
          }}>
          <Text style={styles.title}>maxi aditya</Text>
          <Text style={styles.text}>
            [BREAKING NEWS] KRI Nanggala was found at a depth of 838 meters by
            KRI Rigel and MV Rescue Singapore. TNI Commander Marshal Hadi
            Tjahjanto confirmed that all 53 crew members of the KRI Nanggala
            submarine had passed away. This claim is obtained from the findings
            of submarine imagery and debris by the SAR team.
          </Text>
        </View>
      </View>
    </View>
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
        <Status />
        <Timeline />
        <Timeline />
        <Timeline />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Feed;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: 'center',
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
  },
  text: {
    fontSize: 14,
    fontFamily: 'Poppins-Light',
    fontWeight: '500',
    color: colors.black,
    marginTop: 5,
  },
  title: {
    fontSize: 14,
    fontFamily: 'Poppins-Bold',
    fontWeight: '500',
    color: colors.black,
    marginTop: 5,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: 'center',
  },
});
