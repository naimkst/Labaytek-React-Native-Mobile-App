import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import React from 'react';
import HeroSection from '../components/GlobalComponent/HeroSection';
import Icon from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import Octicons from 'react-native-vector-icons/Octicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {COLORS} from '../helper/color';
import {Image} from '@rneui/base';
import {useNavigation} from '@react-navigation/native';

const ProfileScreen = ({navigation}: any) => {
  return (
    <ScrollView className="bg-white">
      <View>
        <HeroSection title="Profile" />
      </View>

      <View className="px-3 mt-[30px] flex flex-row w-full flex-1">
        <Image
          style={{width: 80, height: 80, borderRadius: 50}}
          source={{
            uri: 'https://ouch-cdn2.icons8.com/vRb__blCuVEL9shoam8eicUf0y8VRMM5v8KKXaRs7dI/rs:fit:256:224/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvNTE5/Lzk0M2MyMjM3LWRh/ZmYtNDk0MC1iMDQ3/LWQ2Nzk0NzY5NjBh/ZC5zdmc.png',
          }}
        />
        <View className="w-full flex-1">
          <Text className="text-secondaryGray font-FontBold text-[20px] mb-2">
            Hello, User
          </Text>
          <Text className="text-secondaryGray font-FontLight text-[15px]">
            From your account dashboard you can view your recent orders, manage
            your shipping and billing addresses and edit your password and
            account
          </Text>
        </View>
      </View>

      <View className="px-3 mt-[30px] mb-[60px]">
        <View className="flex flex-row justify-between items-center flex-wrap">
          <TouchableOpacity
            onPress={() => navigation.navigate('Quotes')}
            className="border-[1px] border-gray-200 w-[48.5%] flex justify-center items-center py-5 rounded-[3px] mb-3">
            <Icon name="quote" size={30} color={COLORS.primaryColor} />
            <Text className="font-FontBold mt-1 text-secondaryGray text-[16px]">
              Quotes
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('Order')}
            className="border-[1px] border-gray-200 w-[48.5%] flex justify-center items-center py-5 rounded-[3px] mb-3">
            <Feather name="truck" size={30} color={COLORS.primaryColor} />
            <Text className="font-FontBold mt-1 text-secondaryGray text-[16px]">
              Orders
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('Address')}
            className="border-[1px] border-gray-200 w-[48.5%] flex justify-center items-center py-5 rounded-[3px] mb-3">
            <Octicons name="location" size={30} color={COLORS.primaryColor} />
            <Text className="font-FontBold mt-1 text-secondaryGray text-[16px]">
              Address
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('Payment')}
            className="border-[1px] border-gray-200 w-[48.5%] flex justify-center items-center py-5 rounded-[3px] mb-3">
            <FontAwesome5
              name="money-check"
              size={30}
              color={COLORS.primaryColor}
            />
            <Text className="font-FontBold mt-1 text-secondaryGray text-[16px]">
              Payment Method
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('AccountDetails')}
            className="border-[1px] border-gray-200 w-[48.5%] flex justify-center items-center py-5 rounded-[3px] mb-3">
            <MaterialCommunityIcons
              name="badge-account-horizontal-outline"
              size={30}
              color={COLORS.primaryColor}
            />
            <Text className="font-FontBold mt-1 text-secondaryGray text-[16px]">
              Acount Details
            </Text>
          </TouchableOpacity>
          {/* <TouchableOpacity className="border-[1px] border-gray-200 w-[48.5%] flex justify-center items-center py-5 rounded-[3px] mb-3">
            <MaterialCommunityIcons
              name="ticket-account"
              size={30}
              color={COLORS.primaryColor}
            />
            <Text className="font-FontBold mt-1 text-secondaryGray text-[16px]">
              My Tickets
            </Text>
          </TouchableOpacity>
          <TouchableOpacity className="border-[1px] border-gray-200 w-[48.5%] flex justify-center items-center py-5 rounded-[3px] mb-3">
            <MaterialCommunityIcons
              name="ticket-confirmation"
              size={30}
              color={COLORS.primaryColor}
            />
            <Text className="font-FontBold mt-1 text-secondaryGray text-[16px]">
              Submit Ticket
            </Text>
          </TouchableOpacity> */}
          <TouchableOpacity
            onPress={() => navigation.navigate('MyCoupon')}
            className="border-[1px] border-gray-200 w-[48.5%] flex justify-center items-center py-5 rounded-[3px] mb-3">
            <MaterialCommunityIcons
              name="ticket-percent-outline"
              size={30}
              color={COLORS.primaryColor}
            />
            <Text className="font-FontBold mt-1 text-secondaryGray text-[16px]">
              My Coupons
            </Text>
          </TouchableOpacity>
          <TouchableOpacity className="border-[1px] border-gray-200 w-[48.5%] flex justify-center items-center py-5 rounded-[3px] mb-3">
            <SimpleLineIcons
              name="logout"
              size={30}
              color={COLORS.primaryColor}
            />
            <Text className="font-FontBold mt-1 text-secondaryGray text-[16px]">
              Logout
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;
