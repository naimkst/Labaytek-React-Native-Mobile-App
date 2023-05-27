import {CheckBox} from '@rneui/themed';
import React from 'react';
import {Text, TextInput, Touchable, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

export const CheckoutScreen = ({navigation}: any) => {
  const [checked, setChecked] = React.useState(0);
  const [showPayment, setShowPayment] = React.useState(false);
  return (
    <>
      <View
        className="px-[10px] pt-[10px] mb-[40px]"
        style={{
          display: 'flex',
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'space-evenly',
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <View>
            <Icon name="arrowleft" size={30} color="black" />
          </View>
        </TouchableOpacity>

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
              size={22}
              textStyle={{fontSize: 16, fontFamily: 'HirukoPro-Light'}}
              containerStyle={{
                backgroundColor: 'transparent',
                borderWidth: 0,
              }}
              title="Visa"
              checked={checked == 0 ? true : false}
              onPress={() => setChecked(0)}
            />

            <CheckBox
              size={22}
              textStyle={{fontSize: 16, fontFamily: ''}}
              containerStyle={{
                backgroundColor: 'transparent',
                borderWidth: 0,
              }}
              title="Default Credit Card"
              checked={checked == 1 ? true : false}
              onPress={() => setChecked(1)}
            />

            <CheckBox
              size={22}
              textStyle={{fontSize: 16, fontFamily: ''}}
              containerStyle={{
                backgroundColor: 'transparent',
                borderWidth: 0,
              }}
              title="KNET"
              checked={checked == 2 ? true : false}
              onPress={() => setChecked(2)}
            />

            <CheckBox
              size={22}
              textStyle={{fontSize: 16, fontFamily: ''}}
              containerStyle={{
                backgroundColor: 'transparent',
                borderWidth: 0,
              }}
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
              <Text className="font-FontNormal text-primaryBlack">
                KD 8.500
              </Text>
            </View>

            <View className="flex flex-row justify-between items-center mb-3">
              <Text className="font-FontNormal text-primaryBlack">
                Delivery Fee
              </Text>
              <Text className="font-FontNormal text-primaryBlack">
                KD 2.500
              </Text>
            </View>

            <View className="flex flex-row justify-between items-center mt-5">
              <Text className="font-FontBold text-primaryBlack text-[16px]">
                Total Amount
              </Text>
              <Text className="font-FontNormal text-primaryBlack">
                KD 2.500
              </Text>
            </View>

            <View className="mt-[30px]">
              <Text className="font-FontLight">
                By placing this order your agree to the Credit Card payment
              </Text>
              <Text>terms and conditions</Text>
            </View>
          </View>
        </View>

        <TouchableOpacity onPress={() => setShowPayment(true)}>
          <View className="bg-primaryColor flex justify-center items-center py-4 rounded-md ">
            <Text className="text-white font-FontNormal text-[15px]">
              Place Order
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      {showPayment && (
        <View className="absolute bg-black/30 h-[100%] w-full">
          <View className="h-[540px] bg-white flex absolute bottom-0 w-full rounded-[40px]">
            <View className="relative flex flex-col justify-between">
              <View>
                <View className="flex flex-row justify-between py-10 px-3 items-center">
                  <Text className="text-[20px] font-FontNormal text-primaryBlack">
                    Enter Card Details
                  </Text>
                  <Icon name="creditcard" size={30} color="black" />
                </View>

                <View className="px-3">
                  <View className="mb-3">
                    <TextInput
                      style={{
                        borderWidth: 1,
                        borderColor: '#E5E5E5',
                        padding: 10,
                        borderRadius: 5,
                        fontFamily: 'HirukoPro-Light',
                      }}
                      onChangeText={() => {}}
                      value=""
                      placeholder="Card Number"
                    />
                  </View>

                  <View className="flex flex-row">
                    <TextInput
                      style={{
                        borderWidth: 1,
                        borderColor: '#E5E5E5',
                        width: '49%',
                        padding: 10,
                        marginRight: 5,
                        borderRadius: 5,
                        fontFamily: 'HirukoPro-Light',
                      }}
                      onChangeText={() => {}}
                      value={''}
                      placeholder="Expire Date"
                      keyboardType="numeric"
                    />

                    <TextInput
                      style={{
                        borderWidth: 1,
                        borderColor: '#E5E5E5',
                        width: '49%',
                        padding: 10,
                        marginLeft: 5,
                        borderRadius: 5,
                        fontFamily: 'HirukoPro-Light',
                      }}
                      onChangeText={() => {}}
                      value={''}
                      placeholder="CSV"
                      keyboardType="numeric"
                    />
                  </View>
                </View>
              </View>

              <View className="px-3 mt-[20px]">
                <Text className="text-[22px] font-FontBold text-primaryBlack">
                  Payment Summary
                </Text>
                <View className="mt-[20px] pb-[20px]">
                  <View className="flex flex-row justify-between items-center mb-3">
                    <Text className="font-FontNormal text-primaryBlack">
                      Basket Total
                    </Text>
                    <Text className="font-FontNormal text-primaryBlack">
                      KD 8.500
                    </Text>
                  </View>

                  <View className="flex flex-row justify-between items-center mb-3">
                    <Text className="font-FontNormal text-primaryBlack">
                      Delivery Fee
                    </Text>
                    <Text className="font-FontNormal text-primaryBlack">
                      KD 2.500
                    </Text>
                  </View>

                  <View className="flex flex-row justify-between items-center mt-5">
                    <Text className="font-FontBold text-primaryBlack text-[16px]">
                      Total Amount
                    </Text>
                    <Text className="font-FontNormal text-primaryBlack">
                      KD 2.500
                    </Text>
                  </View>
                </View>
              </View>

              <View className="mt-[30px] flex flex-row justify-between px-3">
                <Text
                  onPress={() => setShowPayment(!showPayment)}
                  className="w-[48%] text-center py-3 font-FontNormal  text-[18px] border-primaryColor rounded-lg bg-primaryBlack text-white">
                  Cancel
                </Text>
                <Text className="w-[48%] text-center py-3 font-FontNormal  text-[18px] border-primaryColor rounded-lg bg-primaryColor text-white">
                  Pay
                </Text>
              </View>
            </View>
          </View>
        </View>
      )}
    </>
  );
};
