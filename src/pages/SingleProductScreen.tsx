import React, {useEffect, useState} from 'react';
import {Image, Text, View, ScrollView, ImageBackground} from 'react-native';
import HeroSection from '../components/GlobalComponent/HeroSection';
import useFetch from '../hooks/useFetch';
import {api_url, consumer_key, consumer_secret, store_url} from '../helper/env';
import {SearchBar} from 'react-native-screens';
import {Button, CheckBox} from '@rneui/base';
import {SelectList} from 'react-native-dropdown-select-list';
import usePost from '../hooks/usePost';
import Icon from 'react-native-vector-icons/AntDesign';
import {COLORS} from '../helper/color';

export const SingleProductScreen = ({route, navigation}: any) => {
  const {data} = route.params;
  const [selected, setSelected] = React.useState('');
  const [verient, setVariation] = useState<any>([]);
  const [quantity, setQuantity] = useState(1);

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
    <ScrollView className="bg-white mb-[50px] h-[100vh] relative">
      <ImageBackground
        source={{uri: data?.images[0]?.src}}
        imageStyle={{
          resizeMode: 'cover',
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          width: '100%',
        }}
        className="h-[32.4vh]">
        <View className="flex flex-row justify-between items-center mx-3 pt-[15px]">
          <View className="pt-[20px]">
            <Icon name="left" size={30} color={COLORS.primaryColor} />
          </View>
          <View>
            <Icon name="shoppingcart" size={30} color={COLORS.primaryColor} />
          </View>
        </View>
      </ImageBackground>

      <View className="h-[65vh] bg-white rounded-[45px] -mt-[45px] px-[20px] py-[40px]">
        <Text className="font-FontNormal text-[22px] text-primaryBlack">
          {data?.name}
        </Text>
        <View className="flex flex-row space-x-1 mt-[5px]">
          <Image
            className="h-[20px] w-[20px]"
            resizeMode="contain"
            source={{
              uri: 'https://ouch-cdn2.icons8.com/xQQX3M3o37Wm3Wx-qtqWhHtt2EzJ2J8vmvCTYgddVPc/rs:fit:256:256/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNTM3/Lzc3NjE1NjlmLWI0/YzYtNDg2OS05Yzkw/LWUzOTExZjU3YTIy/ZC5wbmc.png',
            }}
          />
          <Image
            className="h-[20px] w-[20px]"
            resizeMode="contain"
            source={{
              uri: 'https://ouch-cdn2.icons8.com/xQQX3M3o37Wm3Wx-qtqWhHtt2EzJ2J8vmvCTYgddVPc/rs:fit:256:256/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNTM3/Lzc3NjE1NjlmLWI0/YzYtNDg2OS05Yzkw/LWUzOTExZjU3YTIy/ZC5wbmc.png',
            }}
          />
          <Image
            className="h-[20px] w-[20px]"
            resizeMode="contain"
            source={{
              uri: 'https://ouch-cdn2.icons8.com/xQQX3M3o37Wm3Wx-qtqWhHtt2EzJ2J8vmvCTYgddVPc/rs:fit:256:256/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNTM3/Lzc3NjE1NjlmLWI0/YzYtNDg2OS05Yzkw/LWUzOTExZjU3YTIy/ZC5wbmc.png',
            }}
          />
          <Image
            className="h-[20px] w-[20px]"
            resizeMode="contain"
            source={{
              uri: 'https://ouch-cdn2.icons8.com/xQQX3M3o37Wm3Wx-qtqWhHtt2EzJ2J8vmvCTYgddVPc/rs:fit:256:256/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNTM3/Lzc3NjE1NjlmLWI0/YzYtNDg2OS05Yzkw/LWUzOTExZjU3YTIy/ZC5wbmc.png',
            }}
          />
          <Image
            className="h-[20px] w-[20px]"
            resizeMode="contain"
            source={{
              uri: 'https://ouch-cdn2.icons8.com/xQQX3M3o37Wm3Wx-qtqWhHtt2EzJ2J8vmvCTYgddVPc/rs:fit:256:256/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNTM3/Lzc3NjE1NjlmLWI0/YzYtNDg2OS05Yzkw/LWUzOTExZjU3YTIy/ZC5wbmc.png',
            }}
          />
        </View>

        <View className="mt-5">
          <Text className="font-FontNormal text-primaryBlack text-[20px]">
            Color
          </Text>

          <View className="mt-2 flex flex-row space-x-2">
            <Image
              className="h-[25px] w-[25px] rounded-full"
              resizeMode="cover"
              source={{
                uri: 'https://ouch-cdn2.icons8.com/ufargMfHwNlJyrzt_EDEMmmvV_AGKHLVEt4I8zuhBvs/rs:fit:256:189/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvMzAy/LzA4ZmI4N2JlLTRi/NTgtNGEyNC04Yjk0/LTdhNjg2NmQ4OTI5/MC5zdmc.png',
              }}
            />
            <Image
              className="h-[25px] w-[25px] rounded-full"
              resizeMode="cover"
              source={{
                uri: 'https://ouch-cdn2.icons8.com/O0lRA7u4IEFm8Zmq5H9Cn_lfB9nF4pdjrOyTaS7aqPc/rs:fit:256:256/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvNjgy/L2FjMThmZGRlLTBj/OGYtNDRiNi1hYzU5/LWJlMzNmOTI3Zjkw/YS5zdmc.png',
              }}
            />
            <Image
              className="h-[25px] w-[25px] rounded-full"
              resizeMode="cover"
              source={{
                uri: 'https://ouch-cdn2.icons8.com/K9ZuEAW__WF-5VmRoA19CNt7HldQHHsv7hVmIZZTtzs/rs:fit:256:194/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvNDkw/LzhlMmY4M2MzLTc3/OTMtNDU1YS1hZDM4/LTAyODUxNGZlN2Vj/ZS5zdmc.png',
              }}
            />
            <Image
              className="h-[25px] w-[25px] rounded-full"
              resizeMode="cover"
              source={{
                uri: 'https://ouch-cdn2.icons8.com/ufargMfHwNlJyrzt_EDEMmmvV_AGKHLVEt4I8zuhBvs/rs:fit:256:189/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvMzAy/LzA4ZmI4N2JlLTRi/NTgtNGEyNC04Yjk0/LTdhNjg2NmQ4OTI5/MC5zdmc.png',
              }}
            />
          </View>

          <View className="flex flex-row justify-between items-center mt-4">
            <View className="flex flex-row items-center border-[1px] border-gray-300 rounded-lg px-[10px]">
              <Text
                onPress={() => setQuantity(quantity == 1 ? 1 : quantity - 1)}
                className="text-[32px] font-FontNormal mr-2 text-primaryBlack -mt-[4px]">
                -
              </Text>
              <Text className="text-[22px] font-FontBold ml-2 text-primaryBlack">
                {quantity}
              </Text>
              <Text
                onPress={() => setQuantity(quantity + 1)}
                className="text-[25px] font-FontNormal ml-2 text-primaryBlack -mt-[4px]">
                +
              </Text>
            </View>

            <Text className="text-[25px] font-FontBold ml-2 text-primaryBlack">
              ${40 * quantity}
            </Text>
          </View>

          <View className="mt-[40px]">
            <Text className="font-FontNormal text-primaryBlack text-[20px]">
              Product Description
            </Text>

            <Text className="mt-[15px] font-FontLight text-primaryBlack/70 text-[17px] leading-[22px]">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable.
            </Text>
          </View>
        </View>
      </View>

      {/* <View className=" mb-[60px]">
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
      </View> */}

      <View className="absolute w-full px-3 bottom-3">
        <View className="flex flex-row justify-between items-center mt-[25px]">
          <View className="w-[55px] h-[55px] border-[1px] p-[2px] flex justify-center items-center border-gray-300 rounded-[8px]">
            <Icon name="heart" size={30} color="red" />
          </View>
          <Text className="w-[200px] bg-primaryColor text-center py-5 font-FontNormal text-white rounded-[10px]">
            Add To Cart
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};
