import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import React from 'react';
import {COLORS} from '../../helper/color';

export default function Loader() {
  return (
    <View className="absolute top-0 left-0 bg-white h-screen w-full z-50 overflow-hidden">
      <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size={70} color={COLORS.primaryColor} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});
