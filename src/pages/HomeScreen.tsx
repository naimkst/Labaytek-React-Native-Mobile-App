import React from 'react';
import {Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {HeroSlider} from '../components/Home/HeroSlider';
import {CategorySlider} from '../components/Home/CategorySlider';
import {DeveliverySection} from '../components/Home/DeveliverySection';
import {ScrollView} from 'react-native-gesture-handler';
import {SelectedSection} from '../components/Home/SelectedSection';
import {SearchSection} from '../components/GlobalComponent/SearchBar';

export const HomeScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <HeroSlider />
          <SearchSection />
          <CategorySlider />
          <DeveliverySection />
          <SelectedSection />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
