import React from 'react';
import {Image, Text, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';

export const SearchSection = () => {
  return (
    <View className="w-[95%] m-auto mt-[15px] overflow-hidden p-2">
      <View className="flex flex-row items-center gap-2 border-[1px] border-secondaryGray/40 rounded-full h-[50px] pb-[7px]">
        <Image
          className="w-[30px] h-[30px] text-black"
          source={require('../../assets/images/search.png')}
        />
        <TextInput
          placeholder="Serch products here.."
          className="w-full h-[40px] focus:text-secondaryBlack focus:outline-none placeholder:font-FontNormal"
          selectionColor="#FAA419"
        />
      </View>
    </View>
  );
};
