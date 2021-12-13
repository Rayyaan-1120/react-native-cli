import React, {useEffect, useLayoutEffect, useState} from 'react';
import {StyleSheet, Text, View, ActivityIndicator, Image,FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Icontwo from 'react-native-vector-icons/Ionicons';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import LinearGradient from 'react-native-linear-gradient';
import {getsuratdata} from '../../redux/actions/getsuratdata'
import { useSelector,useDispatch } from 'react-redux';
import Tabi from '../Tab';
import Surahs from '../surahs';
import Header from '../Header/header';



const Home = ({navigation}) => {
  const dispatch = useDispatch()
  const {suratdata,loading,error} = useSelector(state => state.getsuratdatareducer)
  const [userdoc, setuserdoc] = useState({});

  const id = auth().currentUser.uid;

  useLayoutEffect(() => {
    const unsubscribe = () => {
      firestore()
        .collection('users')
        .doc(id)
        .onSnapshot(doc => setuserdoc(doc.data()));
    };
    return unsubscribe;
  });

  useEffect(() => {
    dispatch(getsuratdata())
  },[dispatch])


  const signingout = () => {
    auth()
      .signOut()
      .then(() => console.log('signed out'))
      .catch(err => alert(err.message));
    navigation.navigate('Login');
  };

  
  return (
    // <ScrollView style={styles.scroll}>
    <>
      <Header pressfunc={signingout} title="Quran App" iconone="menu" icontwo="search"/>
     
      <View style={styles.namediv}>
        <View>
          <Text style={styles.salam}>Assalamualaikum</Text>
        </View>
        <View>
          <Text style={styles.name}>{userdoc.Name}</Text>
        </View>
      </View>
      <View style={{alignItems: 'center'}}>
        <LinearGradient
          colors={['#565197', '#565197']}
          style={styles.linearGradient}
          start={{x: 0.0, y: 0.8}}
          end={{x: 0.5, y: 1.0}}>
          <View>
            <View style={{alignItems:'center',justifyContent:'space-between',flexDirection:'row',width:100}}>
              <Icontwo name="book" size={22} color="#fff"/>
              <Text style={styles.textsmall}>Last read</Text>
            </View>
            <Text style={styles.textbold}>Surah Fatiah</Text>
            <Text style={styles.textbold}>Ayat: 1</Text>
          </View>
          <View>
            <Image
              source={require('../../images/startpagetwo.png')}
              style={{width: 120, height: 120, resizeMode: 'contain'}}
            />
          </View>
        </LinearGradient>
       
      </View>
       <View style={{marginTop:8}}> 
          
          {loading && <ActivityIndicator size="large" color="#431aa1"/>}

          {!loading && (
            <FlatList
              data={suratdata}
              renderItem={({item}) => <Surahs item={item} navigation={navigation}/>}
              keyExtractor={(item) => item.number}
            />
          )}
         </View>
      </>
    // </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
  },

  linearGradient: {
    width: '90%',
    height: 120,
    alignItems:'center',
    flexDirection:'row',
    justifyContent:'space-between',
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },

  
  namediv: {
    padding: 10,
    width: '100%',
    marginHorizontal:10

  },
  salam: {
    color: '#b9a2d8',
    fontSize: 18,
    fontWeight: 'bold',
  },
  name: {
    color: '#260f68',
    fontSize: 27,
    marginVertical: 3,
    fontWeight: 'bold',
  },

  textsmall:{
    fontSize:17,
    color: '#b9a2d8',
    marginVertical: 10,

  },
  textbold:{
    color: '#b9a2d8',
    fontSize: 20,
    fontWeight: 'bold',
  },
  tabcontainer: {
    backgroundColor: 'red',
    width: '90%',
    alignItems: 'center',
    height: 500,
    borderRadius:5,
    marginVertical:10
  },
});
