import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';

const HeroSection = ({title, url}: any) => {
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

      {url && (
        <TouchableOpacity
          onPress={() => navigation.navigate(url)}
          className="absolute top-2 left-2">
          <Feather name="arrow-left" size={40} color="black" />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default HeroSection;
