import { useEffect, useReducer, useState } from "react"
import { FlatList, Image, StyleSheet, TouchableHighlight } from "react-native"
import { Text, TextInput, View } from "react-native"
import { ScrollView } from "react-native-gesture-handler"
import { SafeAreaView } from "react-native-safe-area-context"
import IconF from "react-native-vector-icons/Feather"
import IconAS from "react-native-vector-icons/AntDesign"
import { TouchableOpacity } from "react-native"

const countReducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { count: state.count < 10 ? state.count + 1: state.count }
        case 'decrement':
            return { count: state.count > 1 ? state.count - 1: state.count }
        default:
            return state
    }
}

export const DetailPortraitScreen = ({ route, navigation }) => {
    const { data } = route.params
    const [state, dispatch] = useReducer(countReducer, { count: 1 })
    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            horizontal={false}
        >
            <SafeAreaView style={styles.container}>
                <View style={{ height: 450, alignItems: 'center', justifyContent: 'center' }}>
                <Image source={{uri: data.imageUrl}} resizeMode="contain" style={{ height: 450, width: '100%' }} />
                </View>
                <View>
                    <View>
                        <Text style={[styles.textNomal, { fontWeight: 'bold', fontSize: 20 }]} numberOfLines={1}>{data.title}</Text>
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginVertical: 20 }}>
                            <Text style={[styles.textNomal, { fontWeight: 'bold', color: '#0000008A', marginRight: 30 }]} numberOfLines={1}> {data.description}</Text>
                            <Text style={[styles.textNomal, { fontWeight: 'bold', fontSize: 17 }]}>${data.price}</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 20 }}>
                        <View style={{ flexDirection: 'row', alignItems: "flex-start" }}>
                            <IconF name="clock" size={24} color={"#000"} />

                            <Text style={[styles.textNomal, { fontWeight: 'bold', color: '#0000008A', paddingHorizontal: 10, lineHeight: 25 }]}>Delivery in {'\n'}
                                <Text style={{ color: '#000' }}>{data.minutes} minutes</Text>
                            </Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <TouchableOpacity style={{ padding: 5, backgroundColor: '#f1b000', borderRadius: 10 }} onPress={() => dispatch({type: 'decrement'})}>
                                <IconAS name="minus" size={24} color={"#fff"} />
                            </TouchableOpacity>
                            <Text style={[styles.textNomal, { fontWeight: 'bold', color: '#000', textAlign: 'center', marginHorizontal: 10, fontSize: 17 }]}>{state.count}</Text>
                            <TouchableOpacity style={{ padding: 5, backgroundColor: '#f1b000', borderRadius: 10 }} onPress={() => dispatch({type: 'increment'})}>
                                <IconAS name="plus" size={24} color={"#fff"} />
                            </TouchableOpacity>
                        </View>

                    </View>
                    <View>
                        <Text style={[styles.textNomal, { fontWeight: 'bold', fontSize: 20 }]}>Restaurants info</Text>
                        <Text style={[styles.textNomal, { fontWeight: '0000008A', fontSize: 17, fontWeight: 'medium', marginVertical: 15 }]}>
                            {data.info}
                        </Text>
                    </View>
                    <View style={{padding: 30}}>
                        <TouchableOpacity style={{ padding: 15, backgroundColor: '#f1b000', borderRadius: 10 }}>
                            <Text style={[styles.textNomal, { fontWeight: 'bold', fontSize: 20, textAlign: 'center', color: '#fff' }]}>Add to cart</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 15,
        backgroundColor: '#fff',
    },
    textNomal: {
        fontFamily: "Roboto",
        color: '#000',
        fontSize: 16
    }
})