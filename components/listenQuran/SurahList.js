import React, {useEffect, useRef} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Animated,
} from 'react-native';
import Header from '../Header/header';
import {useDispatch, useSelector} from 'react-redux';
import {listenquranaction} from '../../redux/actions/listenquran';

const SurahList = ({navigation}) => {
  const dispatch = useDispatch();
  const {loading,listenqurandata} = useSelector(state => state.listenquranreducer);

  useEffect(() => {
    dispatch(listenquranaction());
  }, []);

  console.log(listenqurandata);

  const goback = () => {
    navigation.goBack();
  };

  const scrollY = useRef(new Animated.Value(0)).current;

  const SPACING = 20
  const ITEM_SIZE = 50 + SPACING * 3;
  


  return (
    <View style={{alignItems: 'center'}}>
      <Header
        pressfunc={goback}
        title="Surah Lists"
        iconone="arrow-back"
        icontwo="search"
      />
      {/* {loading && (
        <SkeletonPlaceholder speed={1500} backgroundColor='#431aa1' highlightColor='white'>
       <View style={{ alignItems: "center" }}>

        <View style={{ width: 250, height: 85, borderRadius: 5,marginVertical:15 }} />
        <View style={{ width: 250, height: 85, borderRadius: 5,marginVertical:15 }} />
        <View style={{ width: 250, height: 85, borderRadius: 5,marginVertical:15 }} />
        <View style={{ width: 250, height: 85, borderRadius: 5,marginVertical:15 }} />
        <View style={{ width: 250, height: 85, borderRadius: 5,marginVertical:15 }} />
        <View style={{ width: 250, height: 85, borderRadius: 5,marginVertical:15 }} />
      
      </View>
      </SkeletonPlaceholder>
      )} */}
      
      {!loading && (
        <Animated.FlatList
        style={{width: '100%'}}
        contentContainerStyle={{padding:SPACING}}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {useNativeDriver: true},
        )}
        data={listenqurandata}
        keyExtractor={item => item.id}
        renderItem={({item, index}) => {
          const inputRange = [
            -1,
            0,
            ITEM_SIZE * index,
            ITEM_SIZE * (index + 2),
          ];
          const opacityinputRange = [
            -1,
            0,
            ITEM_SIZE * index,
            ITEM_SIZE * (index + 1),
          ];

          const scale = scrollY.interpolate({
            inputRange,
            outputRange: [1, 1, 1, 0],
          });


          const opacity = scrollY.interpolate({
            inputRange:opacityinputRange,
            outputRange: [1, 1, 1, 0],
          });


          return (
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() =>
                navigation.navigate('SuratAudio', {
                  id: item.id,
                  arbiname: item.name_arabic,
                  englishname: item.name_simple,
                })
              }>
              <Animated.View
                style={{
                  width: '90%',
                  padding: 20,
                  borderRadius: 5,
                  marginVertical: 10,
                  marginHorizontal: 18,
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  shadowColor: '#000',
                  flexDirection: 'row',
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 10,
                  },
                  shadowOpacity: 0.3,
                  shadowRadius: 20,
                  opacity,
                  elevation: 4,
                  transform:[{scale}]
                }}>
                <View style={{alignItems: 'center', flexDirection: 'row'}}>
                  <View style={styles.circle}>
                    <Text>{item.id}</Text>
                  </View>
                  <View style={{marginHorizontal: 10}}>
                    <Text style={styles.text1}>{item.name_simple}</Text>
                    <Text style={styles.text2}>
                      {item.translated_name.name}
                    </Text>
                  </View>
                </View>
                <View>
                  <Text style={styles.text1}>{item.name_arabic}</Text>
                </View>
              </Animated.View>
             </TouchableOpacity>
          );
        }}
      />
      )}
      
    </View>
  );
};

export default SurahList;

const styles = StyleSheet.create({
  renderitem: {
    width: '90%',
    padding: 20,
    borderRadius: 5,
    marginVertical: 10,
    marginHorizontal: 18,
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: '#000',
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.3,
    shadowRadius: 20,

    elevation: 4,
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

  text1: {
    fontSize: 18,
    color: '#431aa1',
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  text2: {
    color: '#b9a2d8',
    fontSize: 16,
  },
  textnum: {
    color: '#431aa1',
    fontSize: 16,
  },
});
