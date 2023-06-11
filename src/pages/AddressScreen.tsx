import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import HeroSection from '../components/GlobalComponent/HeroSection';

const AddressScreen = () => {
  return (
    <ScrollView className="bg-white">
      <HeroSection title="Address" url="Profile" />

      <View className="px-3 py-3">
        <View>
          <View className="flex flex-row items-center gap-2 mb-2">
            <Text className="text-[20px] font-FontBold text-secondaryGray">
              Billing Address
            </Text>
            <Text className="text-[14px] font-FontLight text-primaryColor">
              Edit
            </Text>
          </View>
          <Text>ISLAM METWALLI MITRAS SALMIYA HAWALLI 20000</Text>
        </View>

        <View className="mt-[40px]">
          <View className="flex flex-row items-center gap-2">
            <Text className="text-[20px] font-FontBold text-secondaryGray mb-2">
              Shipping Address
            </Text>
            <Text className="text-[14px] font-FontLight text-primaryColor">
              Edit
            </Text>
          </View>
          <Text>HAWALLI 20000</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default AddressScreen;
