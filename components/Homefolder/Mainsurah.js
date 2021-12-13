import React,{useEffect,useRef,useState} from 'react';
import {StyleSheet, Text, View,FlatList,ActivityIndicator} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Divider} from 'react-native-elements';
import {useDispatch,useSelector} from 'react-redux'
import {getsinglesurat} from '../../redux/actions/getsinglesurat'
import RBSheet from "react-native-raw-bottom-sheet";
// import Sound from 'react-native-sound'
import Slider from '../Slider';
import Header from '../Header/header';

const Mainsurah = ({navigation, route}) => {

    const [audio,setaudio] = useState('')
    const dispatch = useDispatch()
    const rbsheetref = useRef()
    const {singlesuratAR,loading} = useSelector(state => state.getsuratsingledatareducer)

  const {
    number,
    englishName,
    englishNameTranslation,
    name,
    revelationType,
    numberOfAyahs,
  } = route.params.item;

  useEffect(() => {
     dispatch(getsinglesurat(number))
  },[dispatch])


  // Sound.setCategory('Playback')

  // const audiosound = new Sound(`${audio}`,null,(error) => {
  //   if(error){
  //     console.log('failed to load the sound ')
  //     return
  //   }

  //   console.log('audio has been loaded successfully')
  //   console.log(audiosound.getDuration())
  //   audiosound.getCurrentTime((seconds,isplaying) => {
  //     console.log(seconds,isplaying)
  //   })
  //   audiosound.setVolume(1)


  // }) 

  const goback = () => {
    navigation.goBack()
  }

  // console.log(audio)


  return (
    <>
    <Header pressfunc={goback} title={englishName} iconone="arrow-back" icontwo="search"/>
      <View style={{alignItems: 'center'}}>
        <View style={styles.displaydiv}>
          <View>
            <Text style={styles.text1}>{name}</Text>
          </View>
          <View>
            <Text style={styles.text2}>{englishNameTranslation}</Text>
          </View>
          <Divider
            orientation="horizontal"
            width={1}
            color="#fff"
            style={{width: '90%', marginHorizontal: 18, marginVertical: 5}}
          />
          <View>
            <Text style={styles.text3}>
              {revelationType} / {numberOfAyahs} Verses
            </Text>
          </View>
          <View>
            <Text style={styles.text4}>
              بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
            </Text>
          </View>
        </View>

        {loading && <ActivityIndicator size="large"/>}


<FlatList 
style={{width:"100%"}}
data={singlesuratAR}
renderItem={({item}) => {
   return <View
    style={{
      width: '100%',
      marginVertical: 10,
    }}>
    <View style={styles.iconsdiv}>
      <View>
        <View style={styles.circle}><Text>{item.numberInSurah}</Text></View>
      </View>
      <View style={{flexDirection:'row'}}>
        <Icon name="play" size={30} color="#431aa1" onPress={() => rbsheetref.current.open()}/>
        <Icon name="bookmark-outline" size={30} color="#431aa1" onPress={() => {
          // setaudio(`${item.audio}`)
          // rbsheetref.current.open()
          // audiosound.play(() => audiosound.release())
        }}/>
      </View>
    </View>
    <View style={{marginVertical:10,width:'100%',padding:10}}>
        <Text style={styles.ayat}>{item.text}</Text>
        {/* <Text style={styles.engayat}>Some english text will be placed here</Text> */}
    </View>
  </View>
}}
keyExtractor={(item) => item.number}

/>
       
      </View>

      <RBSheet
      ref={rbsheetref}
      closeOnDragDown={true}
      closeOnPressMask={true}
      height={150}
      animationType="slide"
      >
       <View>
         <Slider 
        //  maxlength={audiosound.getDuration()}
        //  pause={audiosound.pause}

         />
       </View>
      </RBSheet>
    </>
  );
};

export default Mainsurah;

const styles = StyleSheet.create({
  
  displaydiv: {
    width: '90%',
    // height: 150,
    alignItems: 'center',
    justifyContent: 'center',
    // paddingLeft: 15,
    // paddingRight: 15,
    padding: 15,
    borderRadius: 5,
    backgroundColor: '#565197',
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
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text2: {
    color: '#fff',
    fontSize: 18,
  },
  text3: {
    color: '#fff',
    fontSize: 14,
    marginBottom: 15,
  },
  text4: {
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
  },
  iconsdiv: {
    padding: 8,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#b9a2d8',
    borderRadius: 5,
  },

  circle: {
    width: 30,
    height: 30,
    borderRadius: 50,
    borderWidth: 4,
    borderColor: '#431aa1',
    alignItems: 'center',
    justifyContent: 'center',
  },

  ayat:{
      textAlign:"center",
      fontSize:20,
      color:"#431aa1"
  },
  engayat:{
    textAlign:"left",
    fontSize:18,
    color:"#431aa1",
    marginTop:8
  }
});
