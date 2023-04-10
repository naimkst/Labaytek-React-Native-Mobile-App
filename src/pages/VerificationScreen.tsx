import React, {useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';

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
    borderColor: '#EBE9E9',
    textAlign: 'center',
    borderRadius: 10,
  },
  focusCell: {
    borderColor: '#FAA419',
  },
});

const CELL_COUNT = 4;

export const VerificationScreen = ({navigation}: any) => {
  const [value, setValue] = useState('');
  const ref: any = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  return (
    <View className="flex flex-col items-center justify-between py-[40px] h-full bg-white">
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
          value={value}
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
            className="font-FontNormal bg-primaryColor w-[90%] py-[20px] flex items-center text-center justify-center text-white text-[20px] left-0 overflow-hidden"
            style={{borderRadius: 10}}
            onPress={() => navigation.navigate('Home')}>
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
