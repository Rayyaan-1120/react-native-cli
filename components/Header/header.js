import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';


const Header = ({pressfunc,title,iconone,icontwo}) => {
    return (
        <View style={styles.header}>
        <View style={styles.title}>
          <Icon name={iconone} size={30} color={'#b9a2d8'} onPress={pressfunc} />
          <Text style={styles.titletext}>{title}</Text>
        </View>
        <View>
          <Icon name={icontwo} size={30} color={'#b9a2d8'} />
        </View>
      </View>
    )
}

export default Header

const styles = StyleSheet.create({

    header: {
        width: '100%',
        padding: 10,
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        flexDirection: 'row',
        // backgroundColor: 'red',
      },

      title: {
        width: '40%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      },

      titletext: {
        fontSize: 20,
        color: '#431aa1',
        fontWeight: 'bold',
      },
    

})
