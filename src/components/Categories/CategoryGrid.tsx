import {View, Text, Image} from 'react-native';
import React from 'react';
import useFetch from '../../hooks/useFetch';
import {api_url, consumer_key, consumer_secret} from '../../helper/env';

const CategoryGrid = ({data, index}: any) => {
  const {
    data: subCat,
    loading,
    error,
  } = useFetch(
    `${api_url}/products/categories/${data?.parent}?consumer_key=${consumer_key}&consumer_secret=${consumer_secret}`,
  );
  console.log('################', data.children);

  return (
    <View key={`cat${index}`} className="w-[50%] p-[5px] mb-[20px]">
      <View>
        <Text className="text-[20px] font-FontBold text-primaryBlack text-center pb-2">
          {data?.name}
        </Text>
        <Image
          style={{resizeMode: 'cover'}}
          source={{
            uri: data?.image?.src
              ? data?.image?.src
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
        <Text className="font-FontNormal">Sofa</Text>
        <Text className="font-FontNormal">Sofa</Text>
        <Text className="font-FontNormal">Sofa</Text>
        <Text className="font-FontBold text-primaryBlack">
          See All Living Room
        </Text>
      </View>
    </View>
  );
};

export default CategoryGrid;
