import React, {useRef, useState} from 'react';
import {Image, Text, View} from 'react-native';
import PhoneInput from 'react-native-phone-number-input';
import {Button} from '../components/GlobalComponent/Button';
import {COLORS} from '../helper/color';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const LoginScreen = ({navigation}: any) => {
  const [value, setValue] = useState('');
  const [formattedValue, setFormattedValue] = useState('');
  const phoneInput = useRef<PhoneInput>(null);

  const countryPickerProps = {
    countryCodes: ['KW', 'AE', 'OM', 'SA', 'QA', 'BH', 'BD'],
  };

  const fetchOtp = async () => {
    console.log('formattedValue', formattedValue);
    const min = 1000;
    const max = 9999;
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

    AsyncStorage.setItem('code', JSON.stringify(randomNumber));
    let user = await AsyncStorage.getItem('code');
    console.log('randomNumber', user);

    try {
      let response = await fetch('https://72ff-103-178-242-6.ngrok-free.app', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          phone: formattedValue,
          code: randomNumber,
        }),
      });
      let responseJson = await response.json();
      console.log('responseJson', responseJson);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View className="flex flex-col items-center justify-between py-[40px] h-full bg-white">
      <View className="text-center">
        <Image
          className="w-[280px] h-[200px]"
          source={{
            uri: 'https://ouch-cdn2.icons8.com/dkxPLC8Cm_rBsjx2uLNClFYWu3g1HNCwF2Wi--PJGfw/rs:fit:256:256/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvMjUz/L2M4ZmRiYTZkLWMw/M2YtNDk0Yy1hY2Fl/LTE3Y2Q2OWNkNDYw/Ni5zdmc.png',
          }}
        />
      </View>

      <View className="text-center">
        <Text className="font-FontBold uppercase text-[30px] text-center mb-2 text-primaryBlack">
          Register
        </Text>
        <Text className="font-FontLight text-[14px] text-center px-[50px] text-primaryBlack">
          Enter your phone number to continue, we will send you OTP to verify.
        </Text>
      </View>

      <View className="flex flex-col items-center justify-center">
        <PhoneInput
          ref={phoneInput}
          countryPickerProps={countryPickerProps}
          defaultValue={value}
          defaultCode="KW"
          layout="first"
          onChangeText={text => {
            setValue(text);
          }}
          containerStyle={{
            width: '90%',
            height: 85,
            borderRadius: 10,
            overflow: 'hidden',
            borderColor: COLORS.grey,
            borderWidth: 1,
            backgroundColor: COLORS.white,
          }}
          onChangeFormattedText={text => {
            setFormattedValue(text);
          }}
          withDarkTheme
          withShadow
          autoFocus
        />

        {!value && (
          <Text
            style={{
              marginTop: 5,
              color: 'red',
              fontFamily: 'FontNormal',
              marginBottom: 15,
            }}>
            Please enter your phone number
          </Text>
        )}
      </View>

      <View className="w-full">
        <View className="flex justify-center items-center">
          {value ? (
            <Text
              className={`${
                !value ? 'bg-primaryColor/40' : 'bg-primaryColor'
              } font-FontNormal  w-[90%] py-[20px] flex items-center text-center justify-center text-white text-[20px] left-0 overflow-hidden`}
              style={{borderRadius: 10}}
              onPress={() => {
                fetchOtp();
                navigation.navigate('Verify');
              }}>
              Request OTP
            </Text>
          ) : (
            <Text
              className={`${
                !value ? 'bg-primaryColor/40' : 'bg-primaryColor'
              } font-FontNormal  w-[90%] py-[20px] flex items-center text-center justify-center text-white text-[20px] left-0 overflow-hidden`}
              style={{borderRadius: 10}}>
              Request OTP
            </Text>
          )}
        </View>

        <View className="flex flex-row gap-1 mt-5 text-center items-center justify-center">
          <Text className="font-FontLight text-center">
            Already have an account?
          </Text>
          <Text className="font-FontNormal text-center">Login</Text>
        </View>
      </View>
    </View>
  );
};
