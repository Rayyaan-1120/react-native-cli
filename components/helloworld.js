/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import React,{useEffect} from 'react';
import { View, Text,StyleSheet,TouchableOpacity,Image } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const Frontpage = ({navigation}) => {

   
    return (
        <View style={styles.maindiv}>
            <View style={styles.headingdiv}>
                <Text style={styles.textone}>
                    Quran App
                </Text>
                <Text style={styles.texttwo}>
                    Learn Quran and Recite once Everyday
                </Text>
            </View>
            <View style={styles.imagediv}>
                <Image source={require('../images/img1.jpg')} style={{width:320,height:320,borderRadius:10,margin:'auto',resizeMode:'cover'}}/>
                <TouchableOpacity style={styles.btn} onPress={() => navigation.push('Tab')}>
                    <Text style={styles.btntext}>
                        get started
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
   
    maindiv:{
        // flex:1,
        height:'100%',
        backgroundColor:'#faf8fc'
    },
    headingdiv:{
        width:'100%',
        marginTop:60,
        alignItems:'center',
        justifyContent:'center'
    },

    textone:{
       color:'#431aa1',
       fontSize:35,
       textAlign:'center',
       fontWeight:'bold'
    },
    texttwo:{
        width:'80%',
        textAlign:'center',
        fontSize:20,
        color:'#b9a2d8',
        marginTop:11
    },
    imagediv:{
      width:'100%',
      alignItems:'center',
      marginTop:11

    },
    btn:{
        width:150,
        height:40,
        borderRadius:20,
        backgroundColor:'#F9B190',
        alignItems:'center',
        justifyContent:'center',
        position:'absolute',
        bottom:-12
    },

    btntext:{
       fontSize:16,
       color:'#fff',

    }
    

});

export default Frontpage
