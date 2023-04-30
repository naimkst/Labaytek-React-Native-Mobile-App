import {View, Text, ImageBackground} from 'react-native';
import React from 'react';

const HeroSection = ({title}: any) => {
  return (
    <ImageBackground
      source={{
        uri: 'https://ouch-cdn2.icons8.com/m7ag1u0Nf4zrttmAbhMl8Mg0DvUU8ndIm0S4p7QICfY/rs:fit:256:219/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvNDM1/L2U3ZmU4OWEyLTU2/YmItNGZlNi04NWQx/LWY4MDk3YmJiZmQ4/Zi5zdmc.png',
      }}
      resizeMode="stretch"
      className="">
      <View className="h-[120px] bg-gray-100/60  flex justify-center items-center">
        <Text className="text-[32px] font-FontBold text-primaryBlack">
          {title ? title : 'Title'}
        </Text>
      </View>
    </ImageBackground>
  );
};

export default HeroSection;
