import React,{useState,useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  KeyboardAvoidingView,
  TouchableOpacity,
  Image,
  TextInput
} from 'react-native';
import {styles} from './Signup';
import auth from '@react-native-firebase/auth'



const Login = ({navigation}) => {



    useEffect(() => {

        
            auth().onAuthStateChanged((user) => {
                if(user){
                    navigation.navigate('Frontscreen')
                }else{
                    navigation.navigate('Login')
                }
            })
       
    })


    const [email,setemail] = useState('')
    const [password,setpassword] = useState('')

    const login = () => {
        auth().signInWithEmailAndPassword(email,password).then(() => {
            navigation.navigate('Frontscreen')
        }).catch((err) => {
            alert(err)
        })
    }

  return (
    <ScrollView>
      <View style={styles.maindiv}>
          <KeyboardAvoidingView>
          <View style={styles.imagediv}>
            <TouchableOpacity activeOpacity={0.5}>
            <Image source={require('../images/startpagetwo.png')} style={{width:220,height:220,resizeMode:'contain'}}/>
            </TouchableOpacity>
            </View>
            <View style={styles.inputdivs}>
            <View>
                <Text style={styles.textstyle}>
                    Login
                </Text>
            </View>

            
            <View style={styles.inputsdiv}>
            <TextInput style={styles.input} placeholder="email" onChangeText={(value) => setemail(value)}/>
            </View>
            <View style={styles.inputsdiv}>
            <TextInput style={styles.input} placeholder="password" secureTextEntry onChangeText={(value) => setpassword(value)}/>
            </View>
           
            <View style={styles.inputsdiv}>
            <TouchableOpacity style={styles.btn} onPress={login}>
                <Text style={{color:'#fff',fontSize:20,textAlign:'center'}}>Login</Text>
            </TouchableOpacity>
            </View>
            <View>
            <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
            <Text style={{color:'#565197',fontSize:16}}>Need an account? Sign up!</Text>
            </TouchableOpacity>
            </View>
            </View>
          </KeyboardAvoidingView>
        
      </View>
    </ScrollView>
  );
};

export default Login;

