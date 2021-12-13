import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import SurahList from './SurahList'
import SuratAudio from './SuratAudio'
import {createStackNavigator} from '@react-navigation/stack'

const MainListen = () => {

    const Stack = createStackNavigator() 

    return (
        <Stack.Navigator>
            <Stack.Screen name="SurahList" component={SurahList} options={{headerShown:false}}/>
            <Stack.Screen name="SuratAudio" component={SuratAudio} options={{headerShown:false}}/>
        </Stack.Navigator>
    )
}

export default MainListen

const styles = StyleSheet.create({})
