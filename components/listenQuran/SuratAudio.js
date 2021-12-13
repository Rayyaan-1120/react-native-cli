import React, {useState,useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import Icon from 'react-native-vector-icons/Ionicons';
// import Sound from 'react-native-sound';

const SuratAudio = ({route}) => {
  const [audioprops, setaudioprops] = useState({
    playstate: 'paused',
    duration: 0,
    playseconds: 0,
  });
  // const [slideredit, setslideredit] = useState(false);

  // Sound.setCategory('Playback');

  const checknum = num => {
    if (num < 10) {
      return `00${num}`;
    }
    if (num >= 10) {
      return `0${num}`;
    }
    if (num >= 100) {
      return num;
    }
  };

//   let audiosound;

//   audiosound = new Sound(
//     `https://download.quranicaudio.com/quran/abdullaah_3awwaad_al-juhaynee//${checknum(
//       id
//     )}.mp3`,
//     null,
//     error => {
//       if (error) {
//         console.log(error);
//         setaudioprops({...audioprops, playstate: 'paused'});
//       }else{
//         console.log('audio has been loaded successfully');
//         console.log(`https://download.quranicaudio.com/quran/abdullaah_3awwaad_al-juhaynee//${checknum(
//           id
//         )}.mp3`)
//         console.log(audiosound.getCurrentTime((seconds,isplaying) => {
//           console.log(seconds,isplaying)
//         }))
//         console.log(audiosound.getDuration())
       
//         setaudioprops({
//           ...audioprops,
//           playstate: 'playing',
//           duration: audiosound.getDuration(),
//         });

//       }
     
//         audiosound.setVolume(1);
//         audiosound.play(() => audiosound.release())
//     },
//   );

//   const soundcompletion = success => {
  
//       if (success) {
//         console.log('audio has been finished playing');
//       audiosound.release()
//       }
//       // } else {
//       //   alert('playback failed due to audio decoding errors');
//       // }
//       setaudioprops({...audioprops,playstate: 'paused', playseconds: 0});
//       audiosound.setCurrentTime(0);

//   };

//   const playaudio =  () => {
 
//     console.log('--------------------------')
    
//     if(audiosound){
//     audiosound.play(soundcompletion)
//       console.log('==================================')
//       setaudioprops({...audioprops, playstate: 'playing'});

//       // console.log(audiosound.getCurrentTime((seconds,isplaying) => {
//       //   console.log(seconds,isplaying)
//       // }))

// audiosound.getCurrentTime((seconds, isplaying) => {
//       // console.log(seconds)
//       setaudioprops({...audioprops, playseconds: seconds});
//     });

//      }
     
      
//   };

//   const slidereditstart = () => {
//     setslideredit(true);
//   };
//   const slidereditend = () => {
//     setslideredit(false);
//   };

//   const onsliderediting = value => {
//     if (audiosound) {
//       audiosound.setCurrentTime(value);
//       setaudioprops({...audioprops, playseconds: value});
//     }
//   };

//   const pause = () => {
//     if (audiosound) {
//       audiosound.pause();
//     }
//     setaudioprops({...audioprops, playstate: 'paused'});
//   };

//   const getAudioTimeString = seconds => {
//     const h = parseInt(seconds / (60 * 60));
//     const m = parseInt((seconds % (60 * 60)) / 60);
//     const s = parseInt(seconds % 60);

//     return (
//       (h < 10 ? '0' + h : h) +
//       ':' +
//       (m < 10 ? '0' + m : m) +
//       ':' +
//       (s < 10 ? '0' + s : s)
//     );
//   };

//   const currenttimestring = getAudioTimeString(audioprops.playseconds);
//   const durationtimestring = getAudioTimeString(audioprops.duration);

  const {id, arbiname, englishname} = route.params;

 
//   console.log(audioprops)

  return (
    <View
      style={{
        alignItems: 'center',
        backgroundColor: '#f2f2f2',
        justifyContent: 'center',
        flex: 1,
      }}>
      <Text style={styles.textstyle}>{arbiname}</Text>
      <Text style={styles.textstyle}>{englishname}</Text>
      <View style={{alignItems: 'center', flexDirection: 'row'}}>
        {/* <Text style={styles.texttime}>{currenttimestring}</Text> */}
        <MultiSlider
          sliderLength={230}
          containerStyle={{
            height: 30,
          }}
          markerStyle={{
            backgroundColor: '#431aa1',
          }}
          selectedStyle={{
            backgroundColor: '#431aa1',
          }}
          // values={[audioprops.playseconds]}
        //   max={audioprops.duration}
        />
        {/* <Text style={styles.texttime}>{durationtimestring}</Text> */}
      </View>
      <View style={styles.iconsdiv}>
        <View>
          <Icon name="play-back" size={25} color="#222" />
        </View>
        {/* <View>
          {audioprops.playstate == 'playing' ? (
            <Icon
              name="pause"
              size={25}
              color="#222"
              onPress={pause}
            />
          ) : (
            <Icon name="play" size={25} color="#222" onPress={playaudio} />
          )}
        </View> */}
        <View>
          <Icon name="play-forward" size={25} color="#222" />
        </View>
      </View>
    </View>
  );
};

export default SuratAudio;

const styles = StyleSheet.create({
  iconsdiv: {
    padding: 10,
    marginVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
  },
  textstyle: {
    marginVertical: 6,
    fontSize: 30,
    padding: 5,
    color: '#431aa1',
    fontWeight: 'bold',
  },
  texttime: {
    fontSize: 18,
    color: '#431aa1',
    marginHorizontal: 15,
    fontWeight: 'bold',
  },
});
