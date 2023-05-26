import React from 'react';
import {Text, View, SafeAreaView, ScrollView} from 'react-native';
import {HeroSlider} from '../components/Home/HeroSlider';
import {CategorySlider} from '../components/Home/CategorySlider';
import {DeveliverySection} from '../components/Home/DeveliverySection';
import {SelectedSection} from '../components/Home/SelectedSection';
import {SearchSection} from '../components/GlobalComponent/SearchBar';
import {OnSaleSection} from '../components/Home/OnSaleSection';
import useFetch from '../hooks/useFetch';
import {api_url, consumer_key, consumer_secret} from '../helper/env';
import Loader from '../components/GlobalComponent/Loader';

export const HomeScreen = () => {
  const {
    data: deliveryData,
    loading: deliveryLoading,
    error: deliveryError,
  } = useFetch(
    `${api_url}/products?category=2323&consumer_key=${consumer_key}&consumer_secret=${consumer_secret}`,
  );

  const {
    data: forYouData,
    loading: forYouLoading,
    error: forYouError,
  } = useFetch(
    `${api_url}/products/categories?consumer_key=${consumer_key}&consumer_secret=${consumer_secret}`,
  );

  const {
    data: onSaleData,
    loading: onSaleLoading,
    error: onSaleError,
  } = useFetch(
    `${api_url}/products?category=665&consumer_key=${consumer_key}&consumer_secret=${consumer_secret}`,
  );

  if (deliveryLoading && forYouLoading && onSaleLoading) {
    return <Loader />;
  } else {
    return (
      <SafeAreaView>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View className="mb-[65px]">
            <HeroSlider />
            <SearchSection />
            <CategorySlider />
            <DeveliverySection data={deliveryData} />
            <SelectedSection data={forYouData} />
            <OnSaleSection data={onSaleData} />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
};
