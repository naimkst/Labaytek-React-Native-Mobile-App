import React from 'react';
import {Image, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {COLORS} from '../../helper/color';

export const ProductGrid = () => {
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <View className="flex flex-row gap-[15px] max-w-full px-[10px]">
        <View className="bg-white p-[10px] rounded-[5px] w-[48%]">
          <Image
            style={{resizeMode: 'cover'}}
            className="overflow-hidden w-full p-0 m-0 h-[140px] mb-2"
            source={require('../../assets/images/product1.jpg')}
          />
          <Text className="mt-2 text-[18px] font-FontBold text-primaryBlack">
            Amos Chair
          </Text>
          <Text className="mt-2 text-[15px] font-FontLight text-primaryBlack">
            A modren chair on traditional design
          </Text>
          <View className="mt-[16px] flex flex-row justify-between items-center">
            <Text className="mt-2 text-[18px] font-FontBold text-primaryBlack">
              $ 200
            </Text>
            <Image
              style={{resizeMode: 'contain', tintColor: COLORS.primaryColor}}
              className=" w-[28px] h-[28px] p-0 m-0 mb-2"
              source={require('../../assets/images/bag.png')}
            />
          </View>
        </View>
        <View className="bg-white p-[10px] rounded-[5px] w-[48%]">
          <Image
            style={{resizeMode: 'cover'}}
            className="overflow-hidden w-full p-0 m-0 h-[140px] mb-2"
            source={require('../../assets/images/product1.jpg')}
          />
          <Text className="mt-2 text-[18px] font-FontBold text-primaryBlack">
            Amos Chair
          </Text>
          <Text className="mt-2 text-[15px] font-FontLight text-primaryBlack">
            A modren chair on traditional design
          </Text>
          <View className="mt-[16px] flex flex-row justify-between items-center">
            <Text className="mt-2 text-[18px] font-FontBold text-primaryBlack">
              $ 200
            </Text>
            <Image
              style={{resizeMode: 'contain', tintColor: COLORS.primaryColor}}
              className=" w-[28px] h-[28px] p-0 m-0 mb-2"
              source={require('../../assets/images/bag.png')}
            />
          </View>
        </View>
        <View className="bg-white p-[10px] rounded-[5px] w-[48%]">
          <Image
            style={{resizeMode: 'cover'}}
            className="overflow-hidden w-full p-0 m-0 h-[140px] mb-2"
            source={require('../../assets/images/product1.jpg')}
          />
          <Text className="mt-2 text-[18px] font-FontBold text-primaryBlack">
            Amos Chair
          </Text>
          <Text className="mt-2 text-[15px] font-FontLight text-primaryBlack">
            A modren chair on traditional design
          </Text>
          <View className="mt-[16px] flex flex-row justify-between items-center">
            <Text className="mt-2 text-[18px] font-FontBold text-primaryBlack">
              $ 200
            </Text>
            <Image
              style={{resizeMode: 'contain', tintColor: COLORS.primaryColor}}
              className=" w-[28px] h-[28px] p-0 m-0 mb-2"
              source={require('../../assets/images/bag.png')}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
