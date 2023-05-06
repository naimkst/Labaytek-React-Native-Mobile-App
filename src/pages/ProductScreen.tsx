import {Image, StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import {SearchSection} from '../components/GlobalComponent/SearchBar';
import HeroSection from '../components/GlobalComponent/HeroSection';
import CategoryGrid from '../components/Categories/CategoryGrid';
import {api_url, consumer_key, consumer_secret} from '../helper/env';
import useFetch from '../hooks/useFetch';
import Loader from '../components/GlobalComponent/Loader';
import SubCategoryScreen from './SubCategoryScreen';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';
import {COLORS} from '../helper/color';

const ProductScreen = () => {
  const navigation: any = useNavigation();
  const [isSiderBar, setIsSiderBar] = React.useState(false);
  const {width, height} = Dimensions.get('window');

  const [search, setSearch] = React.useState('');
  const {data, loading, error} = useFetch(
    `${api_url}/products/categories?per_page=50&consumer_key=${consumer_key}&consumer_secret=${consumer_secret}&search=${search}`,
  );
  console.log(height);

  if (search ? false : false) {
    return <Loader />;
  } else {
    return (
      <ScrollView className="bg-white mb-[50px]">
        <SafeAreaView>
          <View className="relative h-[100vh]">
            <HeroSection title={'Products'} />

            {/* Filter */}

            <View className="flex flex-row items-center justify-between mx-w-[100%] px-[0px]">
              <View className="w-[90%]">
                <SearchSection setSearch={setSearch} />
              </View>
              <View className="w-full">
                <Icon
                  name="filter"
                  size={30}
                  onPress={() => setIsSiderBar(!isSiderBar)}
                />
              </View>
            </View>

            {/* Filter Section */}

            {isSiderBar && (
              <View className="absolute top-0 bottom-0 left-0 bg-black/60 flex-1 right-0">
                <View className="relative w-[85%] p-[30px] top-0 bottom-0 left-0 bg-white flex-1 right-0">
                  <View className="absolute -right-5 top-8 bg-white rounded-full p-[5] border-[1px] border-[#e9e9e9]">
                    <Icon
                      name="left"
                      size={35}
                      color={'#5b5b5b'}
                      onPress={() => setIsSiderBar(!isSiderBar)}
                    />
                  </View>
                  <View className="mb-[30px]">
                    <Text className="font-FontBold text-primaryBlack text-[27px] mb-[20px]">
                      Delivery
                    </Text>
                    <Text className="text-[16px] font-FontNormal mb-[10px]">
                      Filter
                    </Text>
                    <Text className="text-[16px] font-FontNormal mb-[10px]">
                      Filter
                    </Text>
                    <Text className="text-[16px] font-FontNormal mb-[10px]">
                      Filter
                    </Text>
                  </View>

                  <View className="mb-[30px]">
                    <Text className="font-FontBold text-primaryBlack text-[27px] mb-[20px]">
                      Price
                    </Text>
                    <Text className="text-[16px] font-FontNormal mb-[10px]">
                      Filter
                    </Text>
                    <Text className="text-[16px] font-FontNormal mb-[10px]">
                      Filter
                    </Text>
                    <Text className="text-[16px] font-FontNormal mb-[10px]">
                      Filter
                    </Text>
                  </View>

                  <View className="mb-[30px]">
                    <Text className="font-FontBold text-primaryBlack text-[27px] mb-[20px]">
                      Color
                    </Text>
                    <Text className="text-[16px] font-FontNormal mb-[10px]">
                      Filter
                    </Text>
                    <Text className="text-[16px] font-FontNormal mb-[10px]">
                      Filter
                    </Text>
                    <Text className="text-[16px] font-FontNormal mb-[10px]">
                      Filter
                    </Text>
                  </View>

                  <View className="mb-[30px]">
                    <Text className="font-FontBold text-primaryBlack text-[27px] mb-[20px]">
                      Style
                    </Text>
                    <Text className="text-[16px] font-FontNormal mb-[10px]">
                      Filter
                    </Text>
                    <Text className="text-[16px] font-FontNormal mb-[10px]">
                      Filter
                    </Text>
                    <Text className="text-[16px] font-FontNormal mb-[10px]">
                      Filter
                    </Text>
                  </View>
                </View>
              </View>
            )}

            {/* Products Grid */}

            <View></View>
          </View>
        </SafeAreaView>
      </ScrollView>
    );
  }
};

export default ProductScreen;

const styles = StyleSheet.create({});
