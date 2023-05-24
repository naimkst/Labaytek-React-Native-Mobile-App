import React from 'react';
import {Image, Text, View, ScrollView} from 'react-native';
import {COLORS} from '../../helper/color';
import {getPrice} from '../../helper/functions';

export const ProductGrid = ({data}: any) => {
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <View className="flex flex-row gap-[15px] max-w-full px-[10px]">
        {data?.map((item: any, index: any) => (
          <View
            key={item.id}
            className="bg-white p-[10px] rounded-[5px] w-[48%]">
            <Image
              style={{resizeMode: 'cover'}}
              className="overflow-hidden w-full p-0 m-0 h-[140px] mb-2"
              source={{
                uri: item.images[0].src,
              }}
            />
            <Text className="mt-2 text-[18px] font-FontBold text-primaryBlack">
              {item.name}
            </Text>

            <View className="mt-[16px] flex flex-row justify-between items-center">
              <Text className="text-[18px] font-FontBold text-primaryBlack">
                {getPrice(item.price_html)}
                {item.price}
              </Text>
              <Image
                style={{resizeMode: 'contain', tintColor: COLORS.primaryColor}}
                className=" w-[28px] h-[28px] p-0 m-0 mb-2"
                source={require('../../assets/images/bag.png')}
              />
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};
