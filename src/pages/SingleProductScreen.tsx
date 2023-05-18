import React, {useState} from 'react';
import {Image, Text, View} from 'react-native';
import HeroSection from '../components/GlobalComponent/HeroSection';
import {ScrollView} from 'react-native-gesture-handler';
import useFetch from '../hooks/useFetch';
import {api_url, consumer_key, consumer_secret} from '../helper/env';
import {SearchBar} from 'react-native-screens';
import DropDownPicker from 'react-native-dropdown-picker';
import {Button, CheckBox} from '@rneui/base';

export const SingleProductScreen = ({route, navigation}: any) => {
  const {data} = route.params;

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'},
  ]);

  const [checked, setChecked] = React.useState(true);
  const toggleCheckbox = () => setChecked(!checked);

  // const {data: variations} = useFetch(
  //   `${api_url}/products/27069/variations?consumer_key=${consumer_key}&consumer_secret=${consumer_secret}`,
  // );
  const {data: getData} = useFetch(
    `${api_url}/products/27069?consumer_key=${consumer_key}&consumer_secret=${consumer_secret}`,
  );

  const variants = getData?.attributes;
  console.log('#######', variants);

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
              <>
                <Text className="text-[20px] font-FontBold">{item?.name}</Text>
                <View className="flex flex-row flex-wrap">
                  {item?.options?.map((option: any, index: number) => (
                    <CheckBox checked={false} title={option} />
                  ))}
                </View>
              </>
            ))}
          </View>
        </View>
        <View className="bg-primaryColor flex justify-center items-center py-[20px] mx-[15px] rounded-[5px]">
          <Text className="font-FontNormal text-white text-[18px]">
            Add To Cart
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};
