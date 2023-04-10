import React, {useRef, useState} from 'react';
import {Image, Text, View} from 'react-native';
import PhoneInput from 'react-native-phone-number-input';
import {Button} from '../components/GlobalComponent/Button';

export const LoginScreen = ({navigation}: any) => {
  const [value, setValue] = useState('');
  const [formattedValue, setFormattedValue] = useState('');
  const phoneInput = useRef<PhoneInput>(null);

  const countryPickerProps = {
    countryCodes: ['KW', 'AE', 'OM', 'SA', 'QA', 'BH'],
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
            height: 70,
            borderRadius: 10,
            overflow: 'hidden',
            borderColor: '#E5E5E5',
            borderWidth: 1,
            backgroundColor: '#ffffff',
          }}
          onChangeFormattedText={text => {
            setFormattedValue(text);
          }}
          withDarkTheme
          withShadow
          autoFocus
        />
      </View>

      <View className="w-full">
        <View className="flex justify-center items-center">
          <Text
            className="font-FontNormal bg-primaryColor w-[90%] py-[20px] flex items-center text-center justify-center text-white text-[20px] left-0 overflow-hidden"
            style={{borderRadius: 10}}
            onPress={() => navigation.navigate('Verify')}>
            Request OTP
          </Text>
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
