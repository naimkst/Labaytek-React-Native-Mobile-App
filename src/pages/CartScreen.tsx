import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import {COLORS} from '../helper/color';
import {useNavigation} from '@react-navigation/native';

const CartScreen = () => {
  const navigation: any = useNavigation();
  return (
    <View className="bg-white h-full px-3 flex justify-between pb-[60px]">
      <View>
        <View className="flex flex-row justify-between items-center">
          <View>
            <Icon name="left" size={30} color={COLORS.primaryColor} />
          </View>
          <View>
            <Text className="text-[24px] font-FontBold text-primaryBlack">
              Cart
            </Text>
          </View>
          <View>
            <Icon name="ellipsis1" size={50} color={COLORS.primaryColor} />
          </View>
        </View>

        <View className="flex flex-row justify-between items-center mt-5">
          <View className="flex flex-row items-center space-x-3">
            <View>
              <Image
                style={{
                  resizeMode: 'cover',
                  height: 100,
                  width: 100,
                  borderRadius: 10,
                }}
                source={{
                  uri: 'https://photo-cdn2.icons8.com/uIqoIG8TCHQmWJ0rWS91sKGICd-oSF4sasbCzQ0_qYA/rs:fit:576:384/czM6Ly9pY29uczgu/bW9vc2UtcHJvZC5l/eHRlcm5hbC9hMmE0/Mi8zNWY2NTBmNGEz/OWE0ZTE5YWYwYTRl/OTEwZjg5ODY2My5q/cGc.webp',
                }}
              />
            </View>
            <View>
              <Text className="text-[20px] font-FontBold text-primaryBlack">
                Warm Ziper Table
              </Text>
              <Text className="text-[20px] font-FontBold text-primaryColor">
                $300
              </Text>

              <View className="flex flex-row items-center mt-[10px]">
                <View className="border-[1px] border-gray-300 h-[20px] w-[20px] rounded-[3px] flex justify-center items-center">
                  <Text className="font-FontNormal text-[22px] text-primaryColor leading-[21px]">
                    -
                  </Text>
                </View>

                <Text className="text-[16px] font-FontBold text-primaryBlack px-2">
                  1
                </Text>
                <View className="border-[1px] border-gray-300 h-[20px] w-[20px] rounded-[3px] flex justify-center items-center">
                  <Text className="font-FontNormal text-[22px] text-primaryColor leading-[20px]  ">
                    +
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View className="flex items-center ">
            <Icon name="delete" size={20} color={COLORS.primaryColor} />
          </View>
        </View>

        <View className="flex flex-row justify-between items-center mt-5">
          <View className="flex flex-row items-center space-x-3">
            <View>
              <Image
                style={{
                  resizeMode: 'cover',
                  height: 100,
                  width: 100,
                  borderRadius: 10,
                }}
                source={{
                  uri: 'https://photo-cdn2.icons8.com/ulJy-nhmNxvKPRiPjs3gMgYKDv4jknZ0PhPFJdfcKkw/rs:fit:576:410/czM6Ly9pY29uczgu/bW9vc2UtcHJvZC5h/c3NldHMvYXNzZXRz/L3NhdGEvb3JpZ2lu/YWwvMzMvZGVkMWY4/ODEtMzlkMS00YmJm/LWJhYzktMGZmMGMz/MWYxNmQ3LmpwZw.webp',
                }}
              />
            </View>
            <View>
              <Text className="text-[20px] font-FontBold text-primaryBlack">
                Family Daining Table
              </Text>
              <Text className="text-[20px] font-FontBold text-primaryColor">
                $380
              </Text>

              <View className="flex flex-row items-center mt-[10px]">
                <View className="border-[1px] border-gray-300 h-[20px] w-[20px] rounded-[3px] flex justify-center items-center">
                  <Text className="font-FontNormal text-[22px] text-primaryColor leading-[21px]">
                    -
                  </Text>
                </View>

                <Text className="text-[16px] font-FontBold text-primaryBlack px-2">
                  1
                </Text>
                <View className="border-[1px] border-gray-300 h-[20px] w-[20px] rounded-[3px] flex justify-center items-center">
                  <Text className="font-FontNormal text-[22px] text-primaryColor leading-[20px]  ">
                    +
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View className="flex items-center ">
            <Icon name="delete" size={20} color={COLORS.primaryColor} />
          </View>
        </View>

        <View className="flex flex-row justify-between items-center mt-5">
          <View className="flex flex-row items-center space-x-3">
            <View>
              <Image
                style={{
                  resizeMode: 'cover',
                  height: 100,
                  width: 100,
                  borderRadius: 10,
                }}
                source={{
                  uri: 'https://photo-cdn2.icons8.com/LIq3bt0c7wNCrSxz_LkVk1CoNgDeBAkHMeLZiG0nsm0/rs:fit:576:384/czM6Ly9pY29uczgu/bW9vc2UtcHJvZC5h/c3NldHMvYXNzZXRz/L3NhdGEvb3JpZ2lu/YWwvNzMyLzRmOGIz/NDc2LWQyNGEtNDE2/Yi04YzkyLTQwMzFi/MjJiMThhNi5qcGc.webp',
                }}
              />
            </View>
            <View>
              <Text className="text-[20px] font-FontBold text-primaryBlack">
                Living room sofa
              </Text>
              <Text className="text-[20px] font-FontBold text-primaryColor">
                $280
              </Text>

              <View className="flex flex-row items-center mt-[10px]">
                <View className="border-[1px] border-gray-300 h-[20px] w-[20px] rounded-[3px] flex justify-center items-center">
                  <Text className="font-FontNormal text-[22px] text-primaryColor leading-[21px]">
                    -
                  </Text>
                </View>

                <Text className="text-[16px] font-FontBold text-primaryBlack px-2">
                  1
                </Text>
                <View className="border-[1px] border-gray-300 h-[20px] w-[20px] rounded-[3px] flex justify-center items-center">
                  <Text className="font-FontNormal text-[22px] text-primaryColor leading-[20px]  ">
                    +
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View className="flex items-center ">
            <Icon name="delete" size={20} color={COLORS.primaryColor} />
          </View>
        </View>

        <View className="flex flex-row justify-between items-center mt-5">
          <View className="flex flex-row items-center space-x-3">
            <View>
              <Image
                style={{
                  resizeMode: 'cover',
                  height: 100,
                  width: 100,
                  borderRadius: 10,
                }}
                source={{
                  uri: 'https://photo-cdn2.icons8.com/ZQuFSZ5EMHOxtAmVo3asOX4HGdV2mN5ADX9CYic1o0Y/rs:fit:576:384/czM6Ly9pY29uczgu/bW9vc2UtcHJvZC5h/c3NldHMvYXNzZXRz/L3NhdGEvb3JpZ2lu/YWwvODg5LzIxNmFk/NTcyLWFhNTgtNDBj/Yi1hM2UzLTFmOWJk/ZDZhMDFmNy5qcGc.webp',
                }}
              />
            </View>
            <View>
              <Text className="text-[20px] font-FontBold text-primaryBlack">
                Book Shelf with Drawer
              </Text>
              <Text className="text-[20px] font-FontBold text-primaryColor">
                $180
              </Text>

              <View className="flex flex-row items-center mt-[10px]">
                <View className="border-[1px] border-gray-300 h-[20px] w-[20px] rounded-[3px] flex justify-center items-center">
                  <Text className="font-FontNormal text-[22px] text-primaryColor leading-[21px]">
                    -
                  </Text>
                </View>

                <Text className="text-[16px] font-FontBold text-primaryBlack px-2">
                  1
                </Text>
                <View className="border-[1px] border-gray-300 h-[20px] w-[20px] rounded-[3px] flex justify-center items-center">
                  <Text className="font-FontNormal text-[22px] text-primaryColor leading-[20px]  ">
                    +
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View className="flex items-center ">
            <Icon name="delete" size={20} color={COLORS.primaryColor} />
          </View>
        </View>

        <View className="flex flex-row justify-between items-center mt-5">
          <View className="flex flex-row items-center space-x-3">
            <View>
              <Image
                style={{
                  resizeMode: 'cover',
                  height: 100,
                  width: 100,
                  borderRadius: 10,
                }}
                source={{
                  uri: 'https://photo-cdn2.icons8.com/uIqoIG8TCHQmWJ0rWS91sKGICd-oSF4sasbCzQ0_qYA/rs:fit:576:384/czM6Ly9pY29uczgu/bW9vc2UtcHJvZC5l/eHRlcm5hbC9hMmE0/Mi8zNWY2NTBmNGEz/OWE0ZTE5YWYwYTRl/OTEwZjg5ODY2My5q/cGc.webp',
                }}
              />
            </View>
            <View>
              <Text className="text-[20px] font-FontBold text-primaryBlack">
                Warm Ziper Table
              </Text>
              <Text className="text-[20px] font-FontBold text-primaryColor">
                $300
              </Text>

              <View className="flex flex-row items-center mt-[10px]">
                <View className="border-[1px] border-gray-300 h-[20px] w-[20px] rounded-[3px] flex justify-center items-center">
                  <Text className="font-FontNormal text-[22px] text-primaryColor leading-[21px]">
                    -
                  </Text>
                </View>

                <Text className="text-[16px] font-FontBold text-primaryBlack px-2">
                  1
                </Text>
                <View className="border-[1px] border-gray-300 h-[20px] w-[20px] rounded-[3px] flex justify-center items-center">
                  <Text className="font-FontNormal text-[22px] text-primaryColor leading-[20px]  ">
                    +
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View className="flex items-center ">
            <Icon name="delete" size={20} color={COLORS.primaryColor} />
          </View>
        </View>
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate('Checkout')}
        className="w-full bg-primaryColor rounded-[3px] py-4 text-center flex justify-center items-center">
        <Text className="text-[18px] text-white font-FontNormal">Checkout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CartScreen;
