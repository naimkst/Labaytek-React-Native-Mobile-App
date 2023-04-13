import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import {COLORS} from '../helper/color';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Alert} from 'react-native';
import {
  getHash,
  removeListener,
  startOtpListener,
  useOtpVerify,
} from 'react-native-otp-verify';
import {useRoute} from '@react-navigation/native';

const styles = StyleSheet.create({
  root: {flex: 1, padding: 20},
  title: {textAlign: 'center', fontSize: 30},
  codeFieldRoot: {marginTop: 20},
  cell: {
    width: 70,
    height: 50,
    lineHeight: 48,
    fontSize: 24,
    marginHorizontal: 5,
    borderWidth: 1,
    borderColor: COLORS.grey,
    textAlign: 'center',
    borderRadius: 10,
  },
  focusCell: {
    borderColor: COLORS.primaryColor,
  },
});

const CELL_COUNT = 4;

export const VerificationScreen = ({navigation}: any) => {
  const [value, setValue] = useState('');
  const [getOtp, setOtp] = useState<any>('');
  const [getHashs, setHash] = useState('');
  const [getMessage, setMessage] = useState('');
  const route = useRoute();
  const ref: any = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const verfiryCode = async () => {
    let user = await AsyncStorage.getItem('code');
    if (user === value ? value : getOtp ? getOtp : '') {
      AsyncStorage.setItem('isLogin', JSON.stringify('true'));
      navigation.navigate('Home');
    } else {
      Alert.alert(
        'Code Not Verified',
        'Please enter the correct code',
        [{text: 'OK', onPress: () => console.log('OK Pressed')}],
        {cancelable: false},
      );
    }
  };
  const {hash, otp, message, timeoutError, stopListener, startListener} =
    useOtpVerify({numberOfDigits: 4});

  console.log('hash', hash, otp, message, timeoutError);

  const text = message;
  const fourDigitRegex = /\b\d{4}\b/g;
  //@ts-ignore
  const codes = text?.match(fourDigitRegex)[0];

  console.log(otp, 'OTP####');
  console.log(message, 'Read message####');
  console.log(route, 'toure message####');
  useEffect(() => {
    setOtp(otp);
  }, [message, otp, getOtp, startListener, stopListener, route]);

  return (
    <View className="flex flex-col items-center justify-between py-[40px] h-full bg-white pb-[65px]">
      <View className="text-center">
        <Image
          className="w-[280px] h-[250px]"
          source={{
            uri: 'https://ouch-cdn2.icons8.com/-M8jScxbO1gY_nCg8EiikkUSU7icfakodLt7J3iwPCk/rs:fit:256:256/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvNjE2/L2VjZTMxY2Y4LWIx/MDctNGM0NC1iNzFm/LTQzOGZiNTlhZTRk/OC5zdmc.png',
          }}
        />
      </View>

      <View className="text-center">
        <Text className="font-FontBold uppercase text-[30px] text-center mb-2 text-primaryBlack">
          Verification
        </Text>
        <Text className="font-FontLight text-[14px] text-center px-[50px] text-primaryBlack">
          Please enter the 4 digit code sent to your phone number
        </Text>
      </View>

      <View className="flex flex-col items-center justify-center">
        <CodeField
          ref={ref}
          {...props}
          value={getOtp}
          autoFocus={true}
          onChangeText={setValue}
          cellCount={CELL_COUNT}
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          renderCell={({index, symbol, isFocused}) => (
            <Text
              key={index}
              className="border-primaryColor border-[1px]"
              style={[styles.cell, isFocused && styles.focusCell]}
              onLayout={getCellOnLayoutHandler(index)}>
              {symbol || (isFocused ? <Cursor /> : null)}
            </Text>
          )}
        />
      </View>

      <View className="w-full">
        <View className="flex justify-center items-center">
          <Text
            onPress={() => verfiryCode()}
            className="font-FontNormal bg-primaryColor w-[90%] py-[20px] flex items-center text-center justify-center text-white text-[20px] left-0 overflow-hidden"
            style={{borderRadius: 10}}
            // onPress={() => navigation.navigate('Home')}
          >
            Verify Code
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
