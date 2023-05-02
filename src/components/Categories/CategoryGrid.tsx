import {View, Text, Image} from 'react-native';
import React from 'react';

const CategoryGrid = ({data, index}: any) => {
  console.log(data);

  return (
    <View className="w-[50%] p-[5px] mb-[20px]">
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
        <Text className="font-FontNormal">Sofa</Text>
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
