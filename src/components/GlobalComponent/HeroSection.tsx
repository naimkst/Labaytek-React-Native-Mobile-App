import {View, Text, ImageBackground} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const HeroSection = ({title}: any) => {
  const navigation: any = useNavigation();
  return (
    <View className="h-[120px] bg-gray-100/60  flex justify-center items-center">
      <Text className="text-[32px] font-FontBold text-primaryBlack">
        {title ? title : 'Title'}
      </Text>
      <Text
        onPress={() => navigation.navigate('Home')}
        className="font-FontNormal">
        Home
      </Text>
    </View>
  );
};

export default HeroSection;
