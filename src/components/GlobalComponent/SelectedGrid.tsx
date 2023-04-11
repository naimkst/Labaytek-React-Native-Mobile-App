import React from 'react';
import {Image, Text, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';

const data = [
  {
    image: require('../../assets/images/product01.png'),
    title: 'Oulu Dining Chair',
  },
  {
    image: require('../../assets/images/product1.jpg'),
    title: 'Jada Arm Chair',
  },
  {
    image: require('../../assets/images/product03.png'),
    title: 'Froge Towel Rack',
  },
  {
    image: require('../../assets/images/product04.png'),
    title: 'High waist trousers',
  },
];

export const SelectedGrid = () => {
  return (
    <View
      className="max-w-[100%]"
      style={{
        marginHorizontal: 10,
      }}>
      <View
        className=""
        style={{
          flex: 1,
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
        }}>
        {data?.map((item: any, index: number) => (
          <View
            key={`selected${index}`}
            style={{
              backgroundColor: '#fff',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              width: '48%',
              gap: 10,
              padding: 10,
              borderRadius: 10,
              marginBottom: 15,
            }}>
            <Image
              style={{
                borderRadius: 10,
              }}
              className=" w-[65px] h-[65px]"
              source={item.image}
            />
            <View
              style={{
                maxWidth: '70%',
                paddingRight: 20,
              }}>
              <Text className="text-[17px] font-FontNormal text-primaryBlack">
                {item.title}
              </Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};
