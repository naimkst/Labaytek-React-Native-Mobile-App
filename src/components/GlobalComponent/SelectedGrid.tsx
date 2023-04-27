import React from 'react';
import {Image, Text, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {COLORS} from '../../helper/color';

export const SelectedGrid = ({data}: any) => {
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
        {data?.slice(0, 6)?.map((item: any, index: number) => (
          <View
            key={`selected${index}`}
            style={{
              backgroundColor: COLORS.white,
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              width: '48%',
              gap: 10,
              padding: 10,
              borderRadius: 10,
              marginBottom: 15,
            }}>
            {item?.image?.src ? (
              <Image
                style={{
                  borderRadius: 10,
                }}
                className=" w-[65px] h-[65px]"
                source={{
                  uri: item?.image?.src,
                }}
              />
            ) : (
              <Image
                style={{
                  borderRadius: 10,
                }}
                className=" w-[65px] h-[65px]"
                source={require('../../assets/images/product04.png')}
              />
            )}

            <View
              style={{
                maxWidth: '70%',
                paddingRight: 20,
              }}>
              <Text className="text-[17px] font-FontNormal text-primaryBlack">
                {item.name}
              </Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};
