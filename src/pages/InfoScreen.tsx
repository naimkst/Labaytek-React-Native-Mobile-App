import React from 'react';
import {Image, Text, View} from 'react-native';

export const InfoScreen = ({navigation}: any) => {
  return (
    <View className="flex justify-between h-full py-5 bg-white px-[15px]">
      <View className="">
        <View className="flex justify-center items-center gap-2">
          <Image source={require('../assets/images/Newlogo.jpg')} />
          <Text className="font-FontBold text-[25px]">Stay In the know</Text>
        </View>
      </View>

      <View className="w-full">
        <View className="flex flex-row items-center gap-3 mb-[40px]">
          <Image
            className="w-[30px] h-[30px]"
            source={require('../assets/images/order.png')}
          />
          <Text className="font-FontLight text-[18px] text-primaryBlack">
            Order online all you need
          </Text>
        </View>

        <View className="flex flex-row items-center gap-3 mb-[40px]">
          <Image
            className="w-[30px] h-[30px]"
            source={require('../assets/images/tracking.png')}
          />
          <Text className="font-FontLight text-[18px] text-primaryBlack">
            Keep track of your orders
          </Text>
        </View>

        <View className="flex flex-row items-center gap-3 mb-[40px]">
          <Image
            className="w-[30px] h-[30px]"
            source={require('../assets/images/chat.png')}
          />
          <Text className="font-FontLight text-[18px] text-primaryBlack">
            Chat with us
          </Text>
        </View>

        <View className="flex flex-row items-center gap-3 pr-[40px]">
          <Image
            className="w-[30px] h-[30px]"
            source={require('../assets/images/heart.png')}
          />
          <Text className="font-FontLight text-[18px] text-primaryBlack">
            Customize your furniture to fit your home space and design
          </Text>
        </View>
      </View>

      <View className="flex justify-center items-center">
        <Text
          className="font-FontNormal bg-primaryColor w-[90%] py-[20px] flex items-center text-center justify-center text-white text-[20px] left-0 overflow-hidden"
          style={{borderRadius: 10}}
          onPress={() => navigation.navigate('Login')}>
          GET STATED
        </Text>
      </View>
    </View>
  );
};
