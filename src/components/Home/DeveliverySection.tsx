import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {ProductGrid} from '../GlobalComponent/ProductGrid';

export const DeveliverySection = ({data}: any) => {
  const [getData, setData] = React.useState<any>([]);

  useEffect(() => {
    setData(data);
  }, [data]);
  return (
    <>
      <View>
        <View className="flex flex-row justify-between px-[10px] mt-[20px]">
          <Text className="font-FontBold text-[18px] text-primaryBlack">
            Ready for Delivery
          </Text>
          <Text className="font-FontBold text-[16px] text-primaryColor">
            View All
          </Text>
        </View>

        <View className="mt-[20px]">
          <ProductGrid data={getData} />
        </View>
      </View>
    </>
  );
};
