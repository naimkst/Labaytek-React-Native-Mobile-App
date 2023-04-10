import React from 'react';
import {Text, View} from 'react-native';

export const Button = ({text}: any) => {
  return (
    <View className="flex justify-center items-center">
      <Text
        className="font-FontNormal bg-primaryColor w-[90%] py-[20px] flex items-center text-center justify-center text-white text-[20px] left-0 overflow-hidden"
        style={{borderRadius: 10}}>
        {text}
      </Text>
    </View>
  );
};
