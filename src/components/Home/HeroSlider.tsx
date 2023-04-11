import React, {useState} from 'react';
import {Dimensions, Image, Text, View} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {COLORS} from '../../helper/color';

export const HeroSlider = () => {
  const {width} = Dimensions.get('window');
  const [currentIndex, setCurrentIndex] = useState(0);

  const onPaginationSelectedIndex = (index: any) => {
    setCurrentIndex(index);
  };
  const items = [
    {
      image: require('../../assets/images/slider1.jpg'),
      title: 'title1',
      text: 'text1',
    },
    {
      image: require('../../assets/images/slider2.jpg'),
      title: 'title2',
      text: 'text2',
    },
    {
      image: require('../../assets/images/slider3.jpg'),
      title: 'title3',
      text: 'text3',
    },
    {
      image: require('../../assets/images/slider4.jpg'),
      title: 'title4',
      text: 'text4',
    },
    {
      image: require('../../assets/images/slider5.jpg'),
      title: 'title4',
      text: 'text4',
    },
  ];

  return (
    <View className="relative">
      <Carousel
        layout={'default'}
        data={items}
        sliderWidth={width}
        itemWidth={width}
        pagingEnabled={true}
        autoplay={true}
        autoplayDelay={5000}
        autoplayInterval={5000}
        onSnapToItem={onPaginationSelectedIndex}
        loop={true}
        renderItem={({item, index}) => {
          return (
            <View
              className="w-full"
              style={{
                height: 200,
                width: width,
                padding: 0,
              }}>
              <Image
                style={{height: 200, width: '100%', resizeMode: 'stretch'}}
                source={item.image}
              />
            </View>
          );
        }}
      />
      <View className="absolute -bottom-5 left-0 right-0 m-auto">
        <Pagination
          dotsLength={items.length}
          activeDotIndex={currentIndex}
          dotStyle={{
            width: 20,
            height: 10,
            borderRadius: 5,
            marginHorizontal: 0,
            backgroundColor: COLORS.primaryColor,
          }}
          inactiveDotStyle={{
            backgroundColor: 'rgba(255, 255, 255, 0.92)',
          }}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
        />
      </View>
    </View>
  );
};
