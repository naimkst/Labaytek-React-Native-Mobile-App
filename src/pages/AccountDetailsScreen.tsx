import {
  View,
  Text,
  ScrollView,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import HeroSection from '../components/GlobalComponent/HeroSection';

const AccountDetailsScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleNameChange = (text: any) => {
    setName(text);
  };

  const handleEmailChange = (text: any) => {
    setEmail(text);
  };

  const handleSubmit = () => {
    // Perform form submission logic here
    console.log('Name:', name);
    console.log('Email:', email);
  };

  return (
    <ScrollView className="bg-white mb-[60px]">
      <HeroSection title="Account Details" url="Profile" />

      <View className="px-3 py-3">
        <View>
          <TextInput
            placeholder="Enter First Name"
            onChangeText={handleNameChange}
            value={name}
            className="border-[1px] border-gray-200 w-full flex justify-center items-center py-5 rounded-[3px] mb-3 px-3"
          />
          <TextInput
            placeholder="Enter Last Name"
            onChangeText={handleNameChange}
            value={name}
            className="border-[1px] border-gray-200 w-full flex justify-center items-center py-5 rounded-[3px] mb-3 px-3"
          />
          <TextInput
            placeholder="Enter Display Name"
            onChangeText={handleEmailChange}
            value={email}
            className="border-[1px] border-gray-200 w-full flex justify-center items-center py-5 rounded-[3px] mb-3 px-3"
          />
          <TextInput
            placeholder="Enter Phone Number"
            onChangeText={handleEmailChange}
            value={email}
            className="border-[1px] border-gray-200 w-full flex justify-center items-center py-5 rounded-[3px] mb-3 px-3"
          />
          <TextInput
            placeholder="Enter your email"
            onChangeText={handleEmailChange}
            value={email}
            keyboardType="email-address"
            className="border-[1px] border-gray-200 w-full flex justify-center items-center py-5 rounded-[3px] mb-3 px-3"
          />

          <TextInput
            placeholder="Current Password"
            onChangeText={handleEmailChange}
            value={email}
            keyboardType="email-address"
            className="border-[1px] border-gray-200 w-full flex justify-center items-center py-5 rounded-[3px] mb-3 px-3"
          />

          <TextInput
            placeholder="New Password"
            onChangeText={handleEmailChange}
            value={email}
            keyboardType="email-address"
            className="border-[1px] border-gray-200 w-full flex justify-center items-center py-5 rounded-[3px] mb-3 px-3"
          />

          <TextInput
            placeholder="Confirm Password"
            onChangeText={handleEmailChange}
            value={email}
            keyboardType="email-address"
            className="border-[1px] border-gray-200 w-full flex justify-center items-center py-5 rounded-[3px] mb-3 px-3"
          />
          <TouchableOpacity
            className="flex justify-center bg-primaryColor py-5 rounded-[3px] mb-3"
            onPress={handleSubmit}>
            <Text className="text-center font-FontBold text-white text-[15px]">
              SAVE CHANGES
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default AccountDetailsScreen;
