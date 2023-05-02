import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import {SearchSection} from '../components/GlobalComponent/SearchBar';
import HeroSection from '../components/GlobalComponent/HeroSection';
import CategoryGrid from '../components/Categories/CategoryGrid';
import {api_url, consumer_key, consumer_secret} from '../helper/env';
import useFetch from '../hooks/useFetch';
import Loader from '../components/GlobalComponent/Loader';

const CategoriesScreen = () => {
  const {data, loading, error} = useFetch(
    `${api_url}/products/categories?per_page=100&consumer_key=${consumer_key}&consumer_secret=${consumer_secret}`,
  );

  if (loading) {
    return <Loader />;
  } else {
    return (
      <ScrollView className="bg-white mb-[50px]">
        <SafeAreaView>
          <HeroSection title="Categories" />
          <View>
            <SearchSection />
          </View>
          <View className="mt-[10px] px-[5px] flex flex-row flex-wrap">
            {data?.map((item: any, index: any) => (
              <CategoryGrid data={item} index={index} />
            ))}
          </View>
        </SafeAreaView>
      </ScrollView>
    );
  }
};

export default CategoriesScreen;

const styles = StyleSheet.create({});
