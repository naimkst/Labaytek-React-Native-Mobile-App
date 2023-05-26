import {CheckBox} from '@rneui/themed';
import React from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

export const CheckoutScreen = () => {
  const [checked, setChecked] = React.useState(0);
  return (
    <View className="px-[10px] pt-[10px]">
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
    </View>
  );
};
