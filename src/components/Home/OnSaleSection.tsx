import React from 'react';
import {Text, View} from 'react-native';
import {SelectedGrid} from '../GlobalComponent/SelectedGrid';
import {OnSaleGrid} from '../GlobalComponent/OnSaleGrid';
import Icon from 'react-native-vector-icons/AntDesign';

export const OnSaleSection = ({data}: any) => {
  return (
    <View>
      <View className="flex flex-row justify-between px-[10px] mt-[30px]">
        <Text className="font-FontBold text-[18px] text-primaryBlack">
          On Sale
        </Text>
        <Text className="font-FontBold text-[16px] text-primaryColor">
          View All
        </Text>
      </View>

      <View className="mt-[20px]">
        <OnSaleGrid data={data} />
      </View>
      {/* 
      <View>
        <Icon name="stepforward" size={30} color="#900" />
      </View> */}
    </View>
  );
};
