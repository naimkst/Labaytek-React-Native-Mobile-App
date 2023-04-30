import {View, Text, Image} from 'react-native';
import React from 'react';

const CategoryGrid = ({data, index}: any) => {
  console.log(data);

  return (
    <View
      key={index}
      className="flex items-center justify-start bg-gray-100/70 rounded-[10px] flex-row px-[10px] py-[10px] mb-[15px]">
      <View>
        <Image
          style={{resizeMode: 'contain'}}
          className="w-[100px] p-0 h-[100px] mr-[15px]"
          source={{
            uri: data?.image?.src
              ? data?.image?.src
              : 'https://ouch-cdn2.icons8.com/Couu-ZozA6dkhSDCDrrKyh4JjR69LQnnKzLw8xCBp-A/rs:fit:256:256/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvODY0/LzQ2YzMzNDNkLTc0/ZjQtNGEzNi1iNmY2/LTdjOGE2ZTkyNzVm/YS5wbmc.png',
          }}
        />
      </View>
      <Text className="mt-2 text-[22px] font-FontBold text-primaryBlack">
        {data?.name}
      </Text>
    </View>
  );
};

export default CategoryGrid;
