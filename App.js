import React from 'react';
import 'react-native-gesture-handler'
import {View, Text} from 'react-native';
import Frontpage from './components/helloworld';
import Signup from './components/Signup';
import Home from './components/Homefolder/Home';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './components/Login';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import {store} from './redux/store/store'
import Tabi from './components/Tab'

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
    <SafeAreaProvider>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Frontscreen"
          component={Frontpage}
          options={{headerShown: false}}
        />
        {/* <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
          
        /> */}
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{headerShown: false}}
          
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
          
        />
        <Stack.Screen
          name="Tab"
          component={Tabi}
          options={{headerShown: false}}
          
        />
      </Stack.Navigator>
    </NavigationContainer>
    </SafeAreaProvider>
    </Provider>
  );
}
