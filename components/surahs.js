import React from 'react';
import {StyleSheet, Text, View,TouchableOpacity} from 'react-native';
import {Divider} from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

const Surahs = ({item,navigation}) => {

    // const navigation = useNavigation()

  return (
    <View>
              <TouchableOpacity onPress={() => navigation.navigate('Mainsurah',{
                  item
              })}>
            <View style={styles.row} >
                {/* <TouchableOpacity  style={{flexDirection:'row',justifyContent:'space-between'}}> */}
              <View style={{flexDirection:'row'}}>
                <View style={styles.circle}>
                  <Text style={styles.textnum}>{item.number}</Text>
                </View>
                <View style={styles.infodiv}>
                  <Text style={styles.text1}>{item.englishName}</Text>
                  <Text style={styles.text2}>
                    {item.revelationType} / {item.numberOfAyahs} Verses
                  </Text>
                </View>
              </View>
              <View>
              <View style={{alignItems: 'flex-end'}}>
                  <Text style={styles.text1}>{item.name}</Text>
                </View>
              </View>
              {/* </TouchableOpacity> */}

            </View>
            </TouchableOpacity>

            <Divider
              orientation="horizontal"
              style={{width: '90%', marginHorizontal: 18}}
            />
         
    </View>
  );
};

export default Surahs;

const styles = StyleSheet.create({
  row: {
    width: '90%',
    // height:50,
    marginHorizontal: 18,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between'
  },
  circle: {
    width: 40,
    height: 40,
    borderRadius: 50,
    borderWidth: 4,
    borderColor: '#431aa1',
    alignItems: 'center',
    justifyContent: 'center',
  },

  infodiv: {
    // padding:10,
    marginHorizontal: 15,
    
  },

  text1: {
    fontSize: 16,
    color: '#431aa1',
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  text2: {
    color: '#b9a2d8',
    fontSize: 14,
  },
  textnum: {
    color: '#431aa1',
    fontSize: 14,
  },
});
