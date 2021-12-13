import React,{useState,useEffect} from 'react'
import { StyleSheet, Text, View,FlatList,ActivityIndicator,TouchableOpacity } from 'react-native'
import {getsajdaayah} from '../../redux/actions/getsajdaayah'
import { useDispatch,useSelector } from 'react-redux'
import { Divider } from 'react-native-elements'
import Header from '../Header/header'

const Ayat = ({navigation}) => {

    const dispatch = useDispatch()
    const {sajdaayaharbi,loading,error} = useSelector(state => state.getsajdaayahdatareducer)

    useEffect(() => {
        dispatch(getsajdaayah())
    },[dispatch])


    const goback = () => {
       navigation.goBack()
    }
   

    return (
        <>
        <Header pressfunc={goback} title="Sajda Ayah" iconone="arrow-back" icontwo="search"/>
        <View style={{alignItems:'center'}}>
            
            <View style={styles.displaydiv}>
          <View>
            <Text style={styles.text1}>Sajda Ayahs in Quran</Text>
          </View>
          <Divider
            orientation="horizontal"
            width={1}
            color="#565197"
            style={{width: '90%', marginHorizontal: 18, marginVertical: 5}}
          />
          <View>
            <Text style={styles.text4}>
              بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
            </Text>
          </View>
        </View>

       {loading && <ActivityIndicator color="565197" size="large"/>}

        {!loading && (
            <FlatList 
         style={{width:'90%'}}
         data={sajdaayaharbi}
         keyExtractor={(item) => item.number}
         renderItem={({item}) => {
             return <View style={styles.displaydiv2}>
             <View>
               <Text style={styles.text6}>Ayat no {item.number}</Text>
             </View>
             <View>
               <Text style={styles.text2}>{item.surah.name}</Text>
             </View>
             <View>
               <Text style={styles.text2}>{item.surah.englishName}</Text>
             </View>
             <View>
               <Text style={styles.text2}>( {item.surah.englishNameTranslation} )</Text>
             </View>
             <View>
               <Text style={styles.text3}>
                 {item.surah.revelationType} / {item.surah.numberOfAyahs} Verses
               </Text>
             </View>
             <Divider
               orientation="horizontal"
               width={1}
               color="#fff"
               style={{width: '90%', marginHorizontal: 18, marginVertical: 5}}
             />
             <View>
               <Text style={styles.text5}>
                 {item.text}
               </Text>
             </View>
           </View>
         }}
        />
        )}
        

        </View>
        </>
    )
}



export default Ayat

const styles = StyleSheet.create({

    displaydiv: {
        width: '90%',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15,
        borderRadius: 5,
        backgroundColor: '#f2f2f2',
        marginVertical:10,
        shadowColor: '#000',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 7,
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,
    
        elevation: 15,
      },

      displaydiv2: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15,
        borderRadius: 5,
        backgroundColor: '#565197',
        marginVertical:10,
        shadowColor: '#000',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 7,
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,
    
        elevation: 15,
      },

     
    text1: {
        color: '#565197',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
      },
      text2: {
        color: '#fff',
        fontSize: 20,
      },
      text3: {
        color: '#fff',
        fontSize: 16,
        marginBottom: 15,
      },
      text4: {
        color: '#565197',
        fontSize: 25,
        fontWeight: 'bold',
      },
      text5:{
        color: '#fff',
        fontSize: 25,
        fontWeight: 'bold',
        textAlign:'center'
      },
      text6: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 6,
      },
})
