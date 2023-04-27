import React from 'react';
import {Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {HeroSlider} from '../components/Home/HeroSlider';
import {CategorySlider} from '../components/Home/CategorySlider';
import {DeveliverySection} from '../components/Home/DeveliverySection';
import {ScrollView} from 'react-native-gesture-handler';
import {SelectedSection} from '../components/Home/SelectedSection';
import {SearchSection} from '../components/GlobalComponent/SearchBar';
import {OnSaleSection} from '../components/Home/OnSaleSection';
import useFetch from '../hooks/useFetch';
import {api_url, consumer_key, consumer_secret} from '../helper/env';

export const HomeScreen = () => {
  // const {data, loading, error} = useFetch(
  //   `${api_url}/products/categories?consumer_key=${consumer_key}&consumer_secret=${consumer_secret}`,
  // );

  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="mb-[65px]">
          <HeroSlider />
          <SearchSection />
          <CategorySlider />
          <DeveliverySection />
          <SelectedSection />
          <OnSaleSection />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
