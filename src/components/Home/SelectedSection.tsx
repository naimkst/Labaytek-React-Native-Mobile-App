import React from 'react';
import {Text, View} from 'react-native';
import {SelectedGrid} from '../GlobalComponent/SelectedGrid';

export const SelectedSection = () => {
  return (
    <View>
      <View className="flex flex-row justify-between px-[10px] mt-[30px]">
        <Text className="font-FontBold text-[18px] text-primaryBlack">
          Selected For You
        </Text>
        <Text className="font-FontBold text-[16px] text-primaryColor">
          View All
        </Text>
      </View>

      <View className="mt-[20px]">
        <SelectedGrid />
      </View>
    </View>
  );
};
