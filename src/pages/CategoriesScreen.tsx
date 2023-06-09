import {
  Image,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import React from 'react';
import {SearchSection} from '../components/GlobalComponent/SearchBar';
import HeroSection from '../components/GlobalComponent/HeroSection';
import {api_url, consumer_key, consumer_secret} from '../helper/env';
import useFetch from '../hooks/useFetch';
import Loader from '../components/GlobalComponent/Loader';
import {useNavigation} from '@react-navigation/native';

const CategoriesScreen = () => {
  const navigation: any = useNavigation();
  const [search, setSearch] = React.useState('');
  const {data, loading, error} = useFetch(
    `${api_url}/products/categories?per_page=50&consumer_key=${consumer_key}&consumer_secret=${consumer_secret}&search=${search}`,
  );

  if (search ? false : loading) {
    return <Loader />;
  } else {
    return (
      <ScrollView className="bg-white mb-[50px]">
        <SafeAreaView>
          <HeroSection title="Categories" />
          <View>
            <SearchSection setSearch={setSearch} />
          </View>
          <View className="mt-[10px] px-[5px] flex flex-row flex-wrap">
            {data?.map((category: any, index: any) => (
              <View key={`cat${index}`} className="w-[50%] p-[5px] mb-[20px]">
                <View>
                  <Text className="text-[20px] font-FontBold text-primaryBlack text-center pb-2">
                    {category?.name}
                  </Text>
                  <Image
                    style={{resizeMode: 'cover'}}
                    source={{
                      uri: category?.image?.src
                        ? category?.image?.src
                        : 'https://photo-cdn2.icons8.com/-fEalJLBvu-lIO4QOjsCJ_2ea96VEyk7WmQqSrrsrTo/rs:fit:576:384/czM6Ly9pY29uczgu/bW9vc2UtcHJvZC5h/c3NldHMvYXNzZXRz/L3NhdGEvb3JpZ2lu/YWwvMjgwLzllZGU1/ZTAyLTFiNDEtNGFi/Ni1iYTlmLTZiOGU0/ZjdmN2UyNi5qcGc.webp',
                    }}
                    className="w-full h-[150px]"
                  />
                </View>
                <View className="pt-[5px] flex gap-[5px]">
                  <View>
                    {data?.children?.map((subcategory: any, index: number) => (
                      <Text key={subcategory.id} className="font-FontNormal">
                        {subcategory.name}
                      </Text>
                    ))}
                  </View>
                  {data
                    ?.filter(
                      (subcategory: any) => subcategory.parent === category.id,
                    )
                    .map((subcategory: any) => (
                      <Text
                        onPress={() =>
                          navigation.navigate('Product', {
                            catId: subcategory.id,
                          })
                        }
                        key={subcategory.id}
                        className="font-FontNormal">
                        {subcategory.name}
                      </Text>
                    ))}
                  <Text
                    onPress={() =>
                      navigation.navigate('SubCategory', {catId: category.id})
                    }
                    className="font-FontBold text-primaryBlack">
                    See All {category?.name}
                  </Text>
                </View>
              </View>
            ))}
          </View>
        </SafeAreaView>
      </ScrollView>
    );
  }
};

export default CategoriesScreen;

const styles = StyleSheet.create({});
