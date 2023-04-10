import React from 'react';
import {Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {HeroSlider} from '../components/Home/HeroSlider';
import {SearchSection} from '../components/SearchBar';

export const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View>
        <HeroSlider />
        <SearchSection />
      </View>
    </SafeAreaView>
  );
};
