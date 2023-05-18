import {
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
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
import {getPrice} from '../helper/functions';

const ProductScreen = ({route}: any) => {
  const {catId} = route.params;
  const navigation: any = useNavigation();
  const [isSiderBar, setIsSiderBar] = React.useState(false);
  const {width, height} = Dimensions.get('window');
  const [search, setSearch] = React.useState('');
  const [filterAttribute, setFilterAttribute] = React.useState<any>('');
  const [filterTerm, setFilterTerm] = React.useState<any>('');

  const {data, loading, error} = useFetch(
    `${api_url}/products?attribute=${filterAttribute}&attribute_term=${filterTerm}&category=${catId}&consumer_key=${consumer_key}&consumer_secret=${consumer_secret}&search=${search}`,
  );

  const {data: filterData} = useFetch(
    `${api_url}/products/attributes?&consumer_key=${consumer_key}&consumer_secret=${consumer_secret}&search=${search}`,
  );

  const {
    data: colorFilter,
    loading: colorLoading,
    error: filterEorro,
  } = useFetch(
    `${api_url}/products/attributes/35/terms?&consumer_key=${consumer_key}&consumer_secret=${consumer_secret}&search=${search}`,
  );
  const {
    data: deleveryFilter,
    loading: delivaryLoading,
    error: delevaryEorro,
  } = useFetch(
    `${api_url}/products/attributes/36/terms?&consumer_key=${consumer_key}&consumer_secret=${consumer_secret}&search=${search}`,
  );
  const {
    data: designFilter,
    loading: designLoading,
    error: designEorro,
  } = useFetch(
    `${api_url}/products/attributes/57/terms?&consumer_key=${consumer_key}&consumer_secret=${consumer_secret}&search=${search}`,
  );

  const {
    data: sizeFilter,
    loading: sizeLoading,
    error: sizeEorro,
  } = useFetch(
    `${api_url}/products/attributes/20/terms?&consumer_key=${consumer_key}&consumer_secret=${consumer_secret}&search=${search}`,
  );

  if (search ? false : loading) {
    return <Loader />;
  } else {
    return (
      <>
        <ScrollView className="bg-white mb-[50px]">
          <SafeAreaView>
            <View className="relative ">
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

              {/* Products Grid */}

              <View className="flex flex-row flex-wrap relative mb-[60px]">
                {data?.map((item: any, index: number) => (
                  <View
                    className={`w-[50%] ${
                      index % 2 == 0
                        ? 'pl-[10px] pr-[5px]'
                        : 'pl-[5px] pr-[10px]'
                    }  mb-[20px]`}>
                    <View>
                      <TouchableOpacity
                        onPress={() =>
                          navigation.navigate('SingleProduct', {data: item})
                        }>
                        <Image
                          style={{
                            width: '100%',
                            height: 200,
                            resizeMode: 'cover',
                          }}
                          className="w-full h-[200px]"
                          source={{
                            uri: item.images[0].src
                              ? item.images[0].src
                              : 'https://photo-cdn2.icons8.com/-fEalJLBvu-lIO4QOjsCJ_2ea96VEyk7WmQqSrrsrTo/rs:fit:576:384/czM6Ly9pY29uczgu/bW9vc2UtcHJvZC5h/c3NldHMvYXNzZXRz/L3NhdGEvb3JpZ2lu/YWwvMjgwLzllZGU1/ZTAyLTFiNDEtNGFi/Ni1iYTlmLTZiOGU0/ZjdmN2UyNi5qcGc.webp',
                          }}
                        />
                      </TouchableOpacity>
                    </View>
                    <View>
                      <Text
                        onPress={() =>
                          navigation.navigate('SingleProduct', {data: item})
                        }
                        className="font-FontBold text-primaryBlack text-[18px] leading-[20px] py-[7px]">
                        {item.name}
                      </Text>
                      <View className="flex flex-row justify-between items-center">
                        <Text className="font-FontBold text-primaryBlack text-[18px] py-[7px]">
                          {getPrice(item.price_html)}
                          {item.price}
                        </Text>
                        <View className="bg-primaryBlack flex p-[7px] rounded-full items-center w-[35px] h-[35px]">
                          <Icon name="shoppingcart" size={22} color={'#fff'} />
                        </View>
                      </View>
                    </View>
                  </View>
                ))}

                {data?.length == 0 && (
                  <View className="w-full py-[50%] flex items-center justify-center">
                    <Text className="text-center font-FontBold text-[20px] ">
                      No Product Found!
                    </Text>
                    {setFilterAttribute && setFilterTerm && (
                      <Text
                        onPress={() => {
                          setFilterAttribute('');
                          setFilterTerm('');
                          setSearch('');
                        }}
                        className="bg-primaryColor py-3 px-5 rounded-[3px] text-white font-FontNormal text-[20px] mt-2">
                        Clear Filters
                      </Text>
                    )}
                  </View>
                )}
              </View>
            </View>
          </SafeAreaView>
        </ScrollView>

        {isSiderBar && (
          <View className="absolute top-0 bottom-0 left-0 bg-black/60 flex-1 right-0 z-50">
            <View className="relative w-[85%] p-[30px] top-0 bottom-0 left-0 bg-white flex-1 right-0 z-50">
              <View className="absolute -right-5 top-8 bg-white rounded-full p-[5] border-[1px] border-[#e9e9e9]">
                <Icon
                  name="left"
                  size={35}
                  color={'#5b5b5b'}
                  onPress={() => setIsSiderBar(!isSiderBar)}
                />
              </View>
              <ScrollView>
                <View className="mb-[30px]">
                  <Text className="font-FontBold text-primaryBlack text-[27px] mb-[20px]">
                    Delivery
                  </Text>
                  {deleveryFilter?.map((item: any, index: any) => (
                    <Text
                      onPress={() => {
                        setFilterAttribute('pa_delivery');
                        setFilterTerm(item?.id);
                        setIsSiderBar(!isSiderBar);
                      }}
                      className="text-[16px] font-FontNormal mb-[10px]">
                      {item?.name}
                      {item?.id}
                    </Text>
                  ))}
                </View>

                <View className="mb-[30px]">
                  <Text className="font-FontBold text-primaryBlack text-[27px] mb-[20px]">
                    Size
                  </Text>
                  {sizeFilter?.map((item: any, index: any) => (
                    <Text
                      onPress={() => {
                        setFilterAttribute('pa_bed-size');
                        setFilterTerm(item?.id);
                        setIsSiderBar(!isSiderBar);
                      }}
                      className="text-[16px] font-FontNormal mb-[10px]">
                      {item?.name} {item?.id}
                    </Text>
                  ))}
                </View>

                <View className="mb-[30px]">
                  <Text className="font-FontBold text-primaryBlack text-[27px] mb-[20px]">
                    Color
                  </Text>

                  {colorFilter?.map((item: any, index: any) => (
                    <Text
                      onPress={() => {
                        setFilterAttribute('pa_bases-color');
                        setFilterTerm(item?.id);
                        setIsSiderBar(!isSiderBar);
                      }}
                      className="text-[16px] font-FontNormal mb-[10px]">
                      {item?.name}
                    </Text>
                  ))}
                </View>

                <View className="mb-[30px]">
                  <Text className="font-FontBold text-primaryBlack text-[27px] mb-[20px]">
                    Style
                  </Text>
                  {designFilter?.map((item: any, index: any) => (
                    <Text
                      onPress={() => {
                        setFilterAttribute('pa_base');
                        setFilterTerm(item?.id);
                        setIsSiderBar(!isSiderBar);
                      }}
                      className="text-[16px] font-FontNormal mb-[10px]">
                      {item?.name}
                    </Text>
                  ))}
                  {/* 
                  {filterData?.map((item: any, index: any) => (
                    <Text
                      onPress={() => {
                        setFilterAttribute('pa_base');
                        setFilterTerm(item?.id);
                        setIsSiderBar(!isSiderBar);
                      }}
                      className="text-[16px] font-FontNormal mb-[10px]">
                      {item?.name} {item?.id}
                      {item?.slug}
                    </Text>
                  ))} */}
                </View>
              </ScrollView>
            </View>
          </View>
        )}
      </>
    );
  }
};

export default ProductScreen;

const styles = StyleSheet.create({});
