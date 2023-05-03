import React from 'react';
import {Image, Text, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import {COLORS} from '../../helper/color';

export const SearchSection = ({setSearch}: any) => {
  return (
    <View className="max-w-[100%] m-auto pt-[20px] pb-[10px] pr-[10px] pl-[17px]">
      <View className="flex flex-row items-center  gap-2 border-[1px] border-secondaryGray/40 rounded-full h-[50px] pb-[7px]">
        <Image
          className="w-[30px] h-[30px] text-black"
          source={require('../../assets/images/search.png')}
        />
        <TextInput
          onChange={(e: any) => setSearch(e.nativeEvent.text)}
          placeholder="Serch products here.."
          className="w-full h-[40px] focus:text-secondaryBlack focus:outline-none placeholder:font-FontNormal"
          selectionColor={COLORS.primaryColor}
        />
      </View>
    </View>
  );
};
