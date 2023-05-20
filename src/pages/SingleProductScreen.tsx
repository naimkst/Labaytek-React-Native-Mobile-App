import React, {useEffect, useState} from 'react';
import {Image, Text, View} from 'react-native';
import HeroSection from '../components/GlobalComponent/HeroSection';
import {ScrollView} from 'react-native-gesture-handler';
import useFetch from '../hooks/useFetch';
import {api_url, consumer_key, consumer_secret, store_url} from '../helper/env';
import {SearchBar} from 'react-native-screens';
import {Button, CheckBox} from '@rneui/base';
import {SelectList} from 'react-native-dropdown-select-list';
import usePost from '../hooks/usePost';

export const SingleProductScreen = ({route, navigation}: any) => {
  const {data} = route.params;
  const [selected, setSelected] = React.useState('');
  const [verient, setVariation] = useState<any>([]);

  let lists = [{}];

  const {data: getData} = useFetch(
    `${api_url}/products/${data?.id}?consumer_key=${consumer_key}&consumer_secret=${consumer_secret}`,
  );

  const addCartData = async () => {
    const saveData = await fetch(
      `${store_url}/cart/add-item?consumer_key=${consumer_key}&consumer_secret=${consumer_secret}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: 52378,
          quantity: 1,
          variation: verient,
        }),
      },
    );

    console.log('addCart', saveData);
  };

  const variants = getData?.attributes;
  function convertToSlug(value: any) {
    return value
      .toLowerCase()
      .replace(/ /g, '-')
      .replace(/[^\w-]+/g, '');
  }

  variants?.map((item: any, index: number) => {
    item?.options?.map((option: any, index: number) => {
      lists.push({key: String(option), value: option});
    });
  });

  const setData = (item: any) => {
    const data: any = [];
    item?.map((option: any, index: number) => {
      data.push({key: String(option), value: option});
    });
    return data;
  };

  const getSeletData = (attribute: any, value: any) => {
    const newData = {
      attribute: `pa_${convertToSlug(attribute)}`,
      value: value,
    };
    setVariation([...verient, newData]);
    if (verient?.length == 2) {
      const uniqueVariations = verient.reduce(
        (accumulator: any, variation: any) => {
          if (
            !accumulator.find((v: any) => v.attribute === variation.attribute)
          ) {
            accumulator.push(variation);
          }
          return accumulator;
        },
        [],
      );
      setVariation(uniqueVariations);
      console.log(uniqueVariations, '######');
    }
  };
  console.log('verient', verient);

  return (
    <ScrollView className="bg-white h-full">
      <View className=" mb-[60px]">
        <View>
          <HeroSection title={data?.name} />
        </View>
        <View className="mx-[10px]">
          <Image
            style={{
              width: '100%',
              height: 200,
              resizeMode: 'contain',
            }}
            className="w-full h-[200px]"
            source={{
              uri: data?.images[0]?.src,
            }}
          />
        </View>
        <View>
          <Text className="text-[25px] font-FontNormal text-primaryBlack mt-3 text-center">
            {data?.name}
          </Text>

          <Text className="text-[18px] font-FontNormal text-primaryBlack mt-3 ">
            {data?.description}
          </Text>

          <View
            style={{
              flex: 1,
              paddingHorizontal: 15,
            }}>
            {variants?.map((item: any, index: number) => (
              <View className="">
                <View className="w-full">
                  <Text className="text-[14px] font-FontBold mb-[10px]">
                    {item?.name} {convertToSlug(item?.name)}
                  </Text>
                  <View className="mb-[10px]">
                    <SelectList
                      setSelected={(val: any) => {
                        setSelected(val);
                        getSeletData(item?.name, val);
                      }}
                      data={setData(item?.options)}
                      save="value"
                    />
                  </View>
                </View>
              </View>
            ))}
          </View>
        </View>
        <View className="bg-primaryColor flex justify-center items-center py-[20px] mx-[15px] rounded-[5px] mt-[20px]">
          <Text
            onPress={() => addCartData()}
            className="font-FontNormal text-white text-[18px]">
            Add To Cart
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};
