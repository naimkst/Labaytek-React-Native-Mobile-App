import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import HeroSection from '../components/GlobalComponent/HeroSection';

const PaymentScreen = () => {
  return (
    <ScrollView className="bg-white">
      <HeroSection title="Payment" url="Profile" />

      <View className="px-3 py-3">
        <View>
          <View className="flex flex-row items-center gap-2 mb-2 justify-center">
            <Text className="text-[20px] font-FontBold text-secondaryGray">
              No saved methods found.
            </Text>
          </View>
          <Text className="bg-primaryColor flex w-[50%] m-auto text-center py-2 rounded-[3px] font-FontBold text-white">
            ADD PAYMENT METHOD
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default PaymentScreen;
