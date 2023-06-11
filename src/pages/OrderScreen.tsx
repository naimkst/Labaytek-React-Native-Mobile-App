import {ScrollView, Text, View} from 'react-native';
import React from 'react';
import HeroSection from '../components/GlobalComponent/HeroSection';

const OrderScreen = () => {
  return (
    <ScrollView className="bg-white">
      <HeroSection title="Order" url="Profile" />

      <View className="px-3 py-3">
        <View className="flex flex-row justify-start border-b-[1px] border-gray-200 mb-3">
          <Text className="flex flex-row font-FontBold text-secondaryGray pb-2 flex-1">
            Number
          </Text>
          <Text className="flex flex-row font-FontBold text-secondaryGray pb-2 flex-1">
            Date
          </Text>
          <Text className="flex flex-row font-FontBold text-secondaryGray pb-2 flex-1">
            Status
          </Text>
          <Text className="flex flex-row font-FontBold text-secondaryGray pb-2 flex-1">
            Total
          </Text>
          <Text className="flex flex-row font-FontBold text-secondaryGray pb-2 flex-1"></Text>
        </View>

        <View className="flex flex-row justify-between items-center mb-5">
          <Text className="flex flex-row font-FontLight text-secondaryGray flex-1">
            #232323
          </Text>
          <Text className="flex flex-row font-FontLight text-secondaryGray flex-1">
            May 12, 2021
          </Text>
          <Text className="flex flex-row font-FontLight text-secondaryGray flex-1">
            Completed
          </Text>
          <Text className="flex flex-row font-FontLight text-secondaryGray flex-1">
            1 Item
          </Text>
          <Text className="flex flex-row font-FontLight rounded-[3px] flex-1 text-center w-3">
            -$0.3 View
          </Text>
        </View>

        <View className="flex flex-row justify-between items-center mb-5">
          <Text className="flex flex-row font-FontLight text-secondaryGray flex-1">
            #232323
          </Text>
          <Text className="flex flex-row font-FontLight text-secondaryGray flex-1">
            May 12, 2021
          </Text>
          <Text className="flex flex-row font-FontLight text-secondaryGray flex-1">
            Completed
          </Text>
          <Text className="flex flex-row font-FontLight text-secondaryGray flex-1">
            1 Item
          </Text>
          <Text className="flex flex-row font-FontLight rounded-[3px] flex-1 text-center w-3">
            -$0.3 View
          </Text>
        </View>

        <View className="flex flex-row justify-between items-center mb-5">
          <Text className="flex flex-row font-FontLight text-secondaryGray flex-1">
            #232323
          </Text>
          <Text className="flex flex-row font-FontLight text-secondaryGray flex-1">
            May 12, 2021
          </Text>
          <Text className="flex flex-row font-FontLight text-secondaryGray flex-1">
            Completed
          </Text>
          <Text className="flex flex-row font-FontLight text-secondaryGray flex-1">
            1 Item
          </Text>
          <Text className="flex flex-row font-FontLight rounded-[3px] flex-1 text-center w-3">
            -$0.3 View
          </Text>
        </View>

        <View className="flex flex-row justify-between items-center mb-5">
          <Text className="flex flex-row font-FontLight text-secondaryGray flex-1">
            #232323
          </Text>
          <Text className="flex flex-row font-FontLight text-secondaryGray flex-1">
            May 12, 2021
          </Text>
          <Text className="flex flex-row font-FontLight text-secondaryGray flex-1">
            Refund
          </Text>
          <Text className="flex flex-row font-FontLight text-secondaryGray flex-1">
            1 Item
          </Text>
          <Text className="flex flex-row font-FontLight rounded-[3px] flex-1 text-center w-3">
            -$0.3 View
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default OrderScreen;
