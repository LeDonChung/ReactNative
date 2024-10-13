import { Image, StyleSheet, Text, View } from "react-native"
import React from "react"
import IconAS from "react-native-vector-icons/AntDesign"
import { TouchableOpacity } from "react-native"
export const DonusItem = ({ item, onAddToCard, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={{ flex: 1, flexDirection: 'row', backgroundColor: '#f4dddd', padding: 10, borderRadius: 20,  marginVertical: 5}}>
            <View style={{ width: 100, height: 100, borderRadius: 20 }}>
                <Image source={{uri: item.imageUrl}} resizeMode="contain" style={{ height: 100, width: 100 }} />
            </View>
            <View style={{flex: 1, marginHorizontal: 20, alignItems: 'flex-start', justifyContent: 'space-around'}}>
                <Text style={[styles.textNomal, {fontWeight: 'bold', fontSize: 17}]} numberOfLines={1}>{item.title}</Text>
                <Text style={[styles.textNomal, {fontWeight: 'bold', color: '#0000008A'}]} numberOfLines={1}> {item.description}</Text> 
                <Text style={[styles.textNomal, {fontWeight: 'bold', fontSize: 17}]}>${item.price}</Text>
            </View>
            <View style={{margin: -10}} >
                <TouchableOpacity onPress={onAddToCard(item)} style={{padding: 10, backgroundColor: '#f1b000', borderTopLeftRadius: 60, borderTopRightRadius: 20, borderBottomLeftRadius: 20, borderBottomRightRadius: 20 , marginTop: 'auto'}}>
                    <IconAS name="plus" size={24} color={"#fff"}/>
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    )
} 

const styles = StyleSheet.create({
    textNomal: {
        fontFamily: "Roboto",
        color: '#000',
        fontSize: 16
    }
})