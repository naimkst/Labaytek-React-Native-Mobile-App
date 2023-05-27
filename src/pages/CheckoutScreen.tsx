import {CheckBox} from '@rneui/themed';
import React from 'react';
import {Text, View} from 'react-native';
import {FullWindowOverlay} from 'react-native-screens';
import Icon from 'react-native-vector-icons/AntDesign';

export const CheckoutScreen = () => {
  const [checked, setChecked] = React.useState(0);
  return (
    <View
      className="px-[10px] pt-[10px] mb-[40px]"
      style={{
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-evenly',
      }}>
      <View>
        <Icon name="arrowleft" size={30} color="black" />
      </View>

      <View className="flex flex-row justify-between mt-[20px]">
        <Text className="text-[27px] font-FontBold text-primaryBlack">
          Amount
        </Text>
        <Text className="text-[27px] font-FontBold text-primaryBlack">
          $400
        </Text>
      </View>

      <View className="mt-[30px]">
        <Text className="text-[27px] font-FontBold text-primaryBlack">
          Pay With
        </Text>

        <View className="mt-[20px]">
          <CheckBox
            size={25}
            textStyle={{fontSize: 20, fontFamily: 'HirukoPro-Bold'}}
            containerStyle={{backgroundColor: 'transparent', borderWidth: 0}}
            title="Visa"
            checked={checked == 0 ? true : false}
            onPress={() => setChecked(0)}
          />

          <CheckBox
            size={25}
            textStyle={{fontSize: 20, fontFamily: 'HirukoPro-Bold'}}
            containerStyle={{backgroundColor: 'transparent', borderWidth: 0}}
            title="Default Credit Card"
            checked={checked == 1 ? true : false}
            onPress={() => setChecked(1)}
          />

          <CheckBox
            size={25}
            textStyle={{fontSize: 20, fontFamily: 'HirukoPro-Bold'}}
            containerStyle={{backgroundColor: 'transparent', borderWidth: 0}}
            title="KNET"
            checked={checked == 2 ? true : false}
            onPress={() => setChecked(2)}
          />

          <CheckBox
            size={25}
            textStyle={{fontSize: 20, fontFamily: 'HirukoPro-Bold'}}
            containerStyle={{backgroundColor: 'transparent', borderWidth: 0}}
            title="CASH"
            checked={checked == 3 ? true : false}
            onPress={() => setChecked(3)}
          />
        </View>
      </View>

      <View className="">
        <Text className="text-[27px] font-FontBold text-primaryBlack">
          Payment Summary
        </Text>
        <View className="mt-[20px] pb-[20px]">
          <View className="flex flex-row justify-between items-center mb-3">
            <Text className="font-FontNormal text-primaryBlack">
              Basket Total
            </Text>
            <Text className="font-FontNormal text-primaryBlack">KD 8.500</Text>
          </View>

          <View className="flex flex-row justify-between items-center mb-3">
            <Text className="font-FontNormal text-primaryBlack">
              Delivery Fee
            </Text>
            <Text className="font-FontNormal text-primaryBlack">KD 2.500</Text>
          </View>

          <View className="flex flex-row justify-between items-center mt-5">
            <Text className="font-FontBold text-primaryBlack text-[16px]">
              Total Amount
            </Text>
            <Text className="font-FontNormal text-primaryBlack">KD 2.500</Text>
          </View>

          <View className="mt-[30px]">
            <Text className="font-FontLight">
              By placing this order your agree to the Credit Card payment
            </Text>
            <Text>terms and conditions</Text>
          </View>
        </View>
      </View>

      <View className="bg-primaryColor flex justify-center items-center py-3 rounded-md ">
        <Text className="text-white font-FontNormal text-[15px]">
          Place Order
        </Text>
      </View>
    </View>
  );
};
