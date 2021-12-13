import React,{useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Divider,Tab,TabView} from 'react-native-elements'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Surahs from './surahs';
import Ayat from './sajdaayah/sajdaayah';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Home from './Homefolder/Home';
import Icon from 'react-native-vector-icons/AntDesign'
import Main from './Homefolder/main';
import Icontwo from 'react-native-vector-icons/FontAwesome5'
import MainListen from './listenQuran';

const Tabi = () => {

  const Tab = createMaterialBottomTabNavigator();

  return (
    <Tab.Navigator initialRouteName="Home" activeColor="#260f68" barStyle={{backgroundColor:"#f2f2f2",}}>
      <Tab.Screen name="Home" component={Main} options={{ tabBarLabel: 'Home',tabBarIcon:({color}) => (
        <Icon name="home" color={color} size={26}/>
      ) }}/>
      <Tab.Screen name="Ayat" component={Ayat} options={{ tabBarLabel: 'Sajda Ayah',tabBarIcon:({color}) => (
        <Icontwo name="pray" color={color} size={26}/>
      ) }}/>
      <Tab.Screen name="Mainlisten" component={MainListen} options={{ tabBarLabel: 'Listen Quran',tabBarIcon:({color}) => (
        <Icontwo name="assistive-listening-systems" color={color} size={26}/>
      ) }}/>
    </Tab.Navigator>
  );
};

export default Tabi;

const styles = StyleSheet.create({
  

  tabs:{
      flexDirection:'row',
      width:'100%',
      alignItems:'center',
      justifyContent:'space-between',
      padding:10
  }
});
