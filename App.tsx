import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StartScreen} from './src/pages/StartScreen';
import {HomeScreen} from './src/pages/HomeScreen';
import {InfoScreen} from './src/pages/InfoScreen';
import {LoginScreen} from './src/pages/LoginScreen';
import {VerificationScreen} from './src/pages/VerificationScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/AntDesign';
import {COLORS} from './src/helper/color';
import CategoriesScreen from './src/pages/CategoriesScreen';
import SubCategoryScreen from './src/pages/SubCategoryScreen';
import ProductScreen from './src/pages/ProductScreen';
import {SingleProductScreen} from './src/pages/SingleProductScreen';
import {ThemeProvider} from '@rneui/themed';

const Stack = createNativeStackNavigator();
const App: any = () => {
  const Tab = createBottomTabNavigator();

  return (
    <ThemeProvider>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="CategoriesScreen"
          screenOptions={({route}: any) => ({
            tabBarIcon: ({focused, color, size}) => {
              let iconName = '';
              if (route.name === 'Home') {
                iconName = focused ? 'home' : 'home';
              } else if (route.name === 'Start') {
                iconName = focused ? 'windowso' : 'windowso';
              } else if (route.name === 'Info') {
                iconName = focused ? 'shoppingcart' : 'shoppingcart';
              } else if (route.name === 'Login') {
                iconName = focused ? 'user' : 'user';
              } else if (route.name === 'Verify') {
                iconName = focused ? 'login' : 'login';
              }
              return <Icon name={iconName} size={30} color={color} />;
            },
            tabBarStyle: {
              position: 'absolute',
              height: 50,
              shadowColor: 'transparent',
            },
            activeTintColor: COLORS.primaryColor,
            inactiveTintColor: COLORS.secondaryGray,
            showLabel: false,
            style: {
              backgroundColor: 'red',
              height: 80,
              paddingBottom: 20,
              paddingTop: 10,
            },
          })}
          //@ts-ignore
        >
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{headerShown: false}}
          />
          <Tab.Screen
            name="Start"
            component={StartScreen}
            options={{headerShown: false, tabBarStyle: {display: 'none'}}}
          />
          <Tab.Screen
            name="Info"
            component={InfoScreen}
            options={{headerShown: false, tabBarStyle: {display: 'none'}}}
          />

          <Tab.Screen
            name="Login"
            component={LoginScreen}
            options={{headerShown: false, tabBarStyle: {display: 'none'}}}
          />
          <Tab.Screen
            name="Verify"
            component={VerificationScreen}
            options={{headerShown: false, tabBarButton: () => null}}
          />
          <Tab.Screen
            name="Category"
            component={CategoriesScreen}
            options={{headerShown: false, tabBarButton: () => null}}
          />
          <Tab.Screen
            name="SubCategory"
            component={SubCategoryScreen}
            options={{headerShown: false, tabBarButton: () => null}}
          />
          <Tab.Screen
            name="Product"
            component={ProductScreen}
            options={{headerShown: false, tabBarButton: () => null}}
          />
          <Tab.Screen
            name="SingleProduct"
            component={SingleProductScreen}
            options={{headerShown: false, tabBarButton: () => null}}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
