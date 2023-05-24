import React from 'react';
import {Button, Image, Text, View, SafeAreaView} from 'react-native';

export const StartScreen: any = ({navigation}: any) => {
  return (
    <SafeAreaView className="bg-white">
      <View className="flex items-center justify-between h-full py-5">
        <View className="flex justify-center items-center gap-2">
          <Image source={require('../assets/images/Newlogo.jpg')} />
          <Text className="font-FontBold text-[23px]">
            IT'S ALL STARTS HERE
          </Text>
        </View>

        <Text
          className="font-FontNormal bg-primaryColor w-[90%] py-[20px] flex items-center text-center justify-center text-white text-[20px] left-0 overflow-hidden"
          style={{borderRadius: 10}}
          onPress={() => navigation.navigate('Info')}>
          GET STATED
        </Text>
      </View>
    </SafeAreaView>
  );
};
