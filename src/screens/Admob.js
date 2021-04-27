import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import admob, {MaxAdContentRating} from '@react-native-firebase/admob';
import {
  InterstitialAd,
  RewardedAd,
  BannerAdSize,
  BannerAd,
  TestIds,
  AdEventType,
} from '@react-native-firebase/admob';

const adUnitId = __DEV__
  ? TestIds.INTERSTITIAL
  : 'ca-app-pub-8054536630125280/7322302038';

const interstitial = InterstitialAd.createForAdRequest(adUnitId, {
  requestNonPersonalizedAdsOnly: true,
  keywords: ['fashion', 'clothing'],
});

const Admob = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const eventListener = interstitial.onAdEvent(type => {
      if (type === AdEventType.LOADED) {
        setLoaded(true);
      }
      if (type === AdEventType.CLOSED) {
        setLoaded(false);
      }
    });

    interstitial.load();

    // Unsubscribe from events on unmount
    return () => {
      eventListener();
    };
  }, []);

  if (!loaded) {
    return null;
  }

  return (
    // <View>
    //   <BannerAd unitId={TestIds.BANNER} size={BannerAdSize.FULL_BANNER} />
    // </View>
    <Button
      title="Show Interstitial"
      onPress={() => {
        interstitial.show();
      }}
    />
  );
};

export default Admob;

const styles = StyleSheet.create({});
