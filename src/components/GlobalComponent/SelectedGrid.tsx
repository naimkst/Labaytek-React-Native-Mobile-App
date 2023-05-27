import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {COLORS} from '../../helper/color';
import {useNavigation} from '@react-navigation/native';

export const SelectedGrid = ({data}: any) => {
  const navigation: any = useNavigation();
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
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('Product', {
                catId: item.id,
              })
            }
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
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};
