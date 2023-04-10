import React from 'react';
import {Text, View} from 'react-native';
import {ProductGrid} from '../GlobalComponent/ProductGrid';

export const DeveliverySection = () => {
  return (
    <View>
      <View className="flex flex-row justify-between px-[10px] mt-[20px]">
        <Text className="font-FontBold text-[18px] text-primaryBlack">
          Ready for Delivery
        </Text>
        <Text className="font-FontBold text-[16px] text-primaryColor">
          View All
        </Text>
      </View>

      <View className="mt-[20px]">
        <ProductGrid />
      </View>
    </View>
  );
};
