import React, {useEffect} from 'react';
import LottieView from 'lottie-react-native';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Splash = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const value = AsyncStorage.getItem('Splash');
    if (value === null || value !== 'true') {
      setTimeout(() => {
        navigation.replace('Home');
      }, 3000);
    } else {
      setTimeout(() => {
        navigation.replace('Home');
      }, 3000);
    }
  }, []);

  return (
    <LottieView source={require('../animation/animation.json')} autoPlay />
  );
};

export default Splash;
