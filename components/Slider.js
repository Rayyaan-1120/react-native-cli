import React,{useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import MultiSlider from '@ptomasroos/react-native-multi-slider'
import Icon from 'react-native-vector-icons/Ionicons'

const Slider = ({maxlength,pause}) => {

    const [value,setvalue] = useState(0)

    return (
        <View style={styles.container}>
            <MultiSlider
            onValuesChange={(value) => setvalue(value)}
            sliderLength={300}
            values={[value]}
            min={0}
            max={maxlength}
            />
            <View style={styles.iconsdiv}>
                <Icon name="play-back" size={25} color="#222"/>
                <Icon name="pause" size={25} color="#222" onPress={() => pause()}/>
                <Icon name="play-forward" size={25} color="#222"/>
            </View>
        </View>
    )
}

export default Slider

const styles = StyleSheet.create({
    container:{
        alignItems:"center",
        height:'100%',
        width:"100%",
        backgroundColor:"red",
        justifyContent:'center'
    },
    iconsdiv:{
        padding:10,
        marginVertical:5,
        flexDirection:"row",
        alignItems:'center',
        justifyContent:"space-between",
        width:'70%'
    }
})
