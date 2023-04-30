import React from 'react';
import {Image, ScrollView, Text, View, TouchableOpacity} from 'react-native';
import {COLORS} from '../../helper/color';
import {useNavigation} from '@react-navigation/native';

export const CategorySlider = () => {
  const navigation: any = useNavigation();
  return (
    <ScrollView
      scrollEnabled
      horizontal={true}
      className="px-[10px] mt-2 "
      showsHorizontalScrollIndicator={false}>
      <View className="flex flex-row gap-2 mr-[20px]">
        <View className="flex flex-row gap-2 items-center bg-primaryColor pb-2 pt-1 rounded-full px-[20px]">
          <Text
            onPress={() => navigation.navigate('Category')}
            className="font-FontBold text-[18px] text-white">
            All Categories
          </Text>
          <Image
            className="w-[30px] h-[30px]"
            style={{tintColor: COLORS.white}}
            source={require('../../assets/images/category.png')}
          />
        </View>

        <View className="flex flex-row gap-2 items-center bg-[#7f2563]  pb-2 pt-1  rounded-full px-[20px]">
          <Text className="font-FontBold text-[18px] text-white">
            Quick Delivery
          </Text>
          <Image
            className="w-[30px] h-[30px]"
            style={{tintColor: COLORS.white}}
            source={require('../../assets/images/delivery.png')}
          />
        </View>

        <View className="flex flex-row gap-2 items-center bg-[#335384]  pb-2 pt-1  rounded-full px-[20px]">
          <Text className="font-FontBold text-[18px] text-white">
            Product Gellery
          </Text>
          <Image
            className="w-[30px] h-[30px]"
            style={{tintColor: COLORS.white}}
            source={require('../../assets/images/gallery.png')}
          />
        </View>
      </View>
    </ScrollView>
  );
};
