import {
  View,
  Text,
  ScrollView,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import HeroSection from '../components/GlobalComponent/HeroSection';

const MyCouponsScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleNameChange = (text: any) => {
    setName(text);
  };

  const handleEmailChange = (text: any) => {
    setEmail(text);
  };

  const handleSubmit = () => {
    // Perform form submission logic here
    console.log('Name:', name);
    console.log('Email:', email);
  };

  return (
    <ScrollView className="bg-white mb-[60px]">
      <HeroSection title="My Coupons" url="Profile" />

      <View className="px-3 py-3">
        <View>
          <View className="flex flex-row items-center gap-2 mb-2 justify-center">
            <Text className="text-[20px] font-FontBold text-secondaryGray text-center">
              Sorry, you don't have any available coupons
            </Text>
          </View>
        </View>

        <View className="mt-[30px]">
          <View className="flex flex-row items-center gap-2 mb-2 justify-center">
            <Text className="text-[20px] font-FontBold text-secondaryGray text-center">
              Used Coupons
            </Text>
          </View>

          <Text className="text-center">
            Sorry, you don't have any used coupons
          </Text>
        </View>

        <View className="mt-[30px]">
          <View className="flex flex-row items-center gap-2 mb-2 justify-center">
            <Text className="text-[20px] font-FontBold text-secondaryGray text-center">
              Expired Coupons
            </Text>
          </View>

          <View className="h-[120px] w-[75%] m-auto flex justify-center items-center bg-primaryColor mt-3 relative">
            <Text className="text-center text-white font-FontNormal text-[18px]">
              ramadankareem
            </Text>

            <View className="">
              <Text className="text-[16px] text-white font-FontBold">
                30% off
              </Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default MyCouponsScreen;
