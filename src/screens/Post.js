import React from 'react';
import {Image, TouchableHighlight, LogBox, FlatList} from 'react-native';

const Post = () => {
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
      numColumns={3}
      data={data}
      scrollEnabled={true}
      renderItem={({item}) => {
        return (
          <TouchableHighlight>
            <Image
              source={{uri: item.photo}}
              style={{
                width: 132,
                height: 132,
              }}
            />
          </TouchableHighlight>
        );
      }}
      keyExtractor={item => item.name}
    />
  );
};

LogBox.ignoreLogs(['VirtualizedLists should never be nested']);

export default Post;
