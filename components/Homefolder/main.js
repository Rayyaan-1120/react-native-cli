import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './Home';
import Mainsurah from './Mainsurah';

const Main = () => {

  const Stack = createNativeStackNavigator();


    return (
        <Stack.Navigator initialRouteName="Displaysurahs">
            <Stack.Screen name="Displaysurahs" component={Home} options={{headerShown:false}}/>
            <Stack.Screen name="Mainsurah" component={Mainsurah} options={{headerShown:false}}/>
        </Stack.Navigator>
    )
}

export default Main

