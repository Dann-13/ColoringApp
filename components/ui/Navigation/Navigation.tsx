import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import AntDesign from '@expo/vector-icons/AntDesign';
import { createStackNavigator } from '@react-navigation/stack';
//Screens
import HomeScreen from '../../../Screens/HomeScreen'
import FavoritosScreen from '../../../Screens/FavoritosScreen'
import YourImage from '../../../Screens/YourImage';
import ColoringStack from '../../Coloring/ColoringStack';
const HomeStackNavigation = createStackNavigator();
function HomeStack() {
    return (
        <HomeStackNavigation.Navigator initialRouteName='HomeScreen'>
            <HomeStackNavigation.Screen name="HomeScreen" component={HomeScreen}  options={{headerShown:false}}/>
            <HomeStackNavigation.Screen name="Coloring" component={ColoringStack} options={{ title: 'Colorear' }} />
        </HomeStackNavigation.Navigator>
    );
}

const Tab = createBottomTabNavigator();


function MyTabs() {
    return (
        <Tab.Navigator initialRouteName='Home' screenOptions={{ tabBarActiveTintColor: "purple" }}>
            <Tab.Screen name='Home' component={
                HomeStack
            } options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color, size }) => (
                    <AntDesign name="home" size={size} color={color} />
                ),
                headerShown: false
            }}></Tab.Screen>
            <Tab.Screen name='Favoritos' component={FavoritosScreen} options={{
                tabBarLabel: 'Favoritos',
                tabBarIcon: ({ color, size }) => (
                    <AntDesign name="staro" size={24} color={color} />
                ),
                headerShown: false
            }}></Tab.Screen>
            <Tab.Screen name='YourImage' component={YourImage} options={{
                tabBarLabel: 'Tus Imagenes',
                tabBarIcon: ({ color, size }) => (
                    <AntDesign name="save" size={24} color={color} />
                ),
                headerShown: false
            }}></Tab.Screen>
        </Tab.Navigator>
    )
}

export default function Navigation() {
    return (
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    )
}