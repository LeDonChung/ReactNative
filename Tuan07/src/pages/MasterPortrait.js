import { useEffect, useState } from "react"
import { FlatList, StyleSheet, TouchableHighlight } from "react-native"
import { Text, TextInput, View } from "react-native"
import { ScrollView } from "react-native-gesture-handler"
import { SafeAreaView } from "react-native-safe-area-context"
import IconF from "react-native-vector-icons/Feather"
import { DonusItem } from "../components/DonusItem"
import useApi from "../hook/useApi"
const collections = [
    {
        id: 1,
        title: 'Donus'
    },
    {
        id: 2,
        title: 'Pink Donus'
    },
    {
        id: 3,
        title: 'Float'
    },

    {
        id: 4,
        title: 'Right'
    },
    {
        id: 5,
        title: 'Blue Donus'
    },
]

const donusInit = [

]

export const MasterPortraitScreen = ({navigation}) => {
    const { data, setData, fetchDataByCollectId } = useApi('https://6457b5721a4c152cf98861de.mockapi.io/api/ck/donus')
    const [search, setSearch] = useState('')
    const [collect, setCollect] = useState(collections[0])
    const addToCard = (item) => {
        console.log(item)
    }
    useEffect(() => {
        fetchDataByCollectId(collect.id)
    }, [collect])
    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            horizontal={false}
        >
            <SafeAreaView style={styles.container}>

                <View>
                    <View>
                        <Text style={[styles.textNomal, { color: '#595959', fontWeight: 'bold' }]}>Welcome, Jala!</Text>
                        <Text style={[styles.textNomal, { marginVertical: 10, fontWeight: 'bold', fontSize: 18 }]}>Choice you Best food</Text>
                        <View style={{ marginVertical: 10, flex: 1, width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                            <TextInput
                                style={[styles.textNomal, { flex: 1, paddingHorizontal: 10, paddingVertical: 15, borderWidth: 1, borderColor: '#595959', borderRadius: 5 }]}
                                value={search}
                                onChangeText={search}
                                placeholder="Search food"
                            />
                            <TouchableHighlight style={{ marginLeft: 10, padding: 10, backgroundColor: '#f1b000', borderRadius: 5 }}>
                                <IconF name="search" size={30} />
                            </TouchableHighlight>
                        </View>
                    </View>
                    <View style={{ marginVertical: 20 }}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            <View style={{ flex: 1, flexDirection: "row", justifyContent: 'flex-start' }}>
                                {collections.map((item) => {
                                    return (
                                        <TouchableHighlight
                                            onPress={() => { setCollect(item) }}
                                            key={item.id} style={{ padding: 10, backgroundColor: collect.id == item.id ? '#f1b000' : '#f5f5f5', borderWidth: 1, borderColor: '#595959', borderRadius: 5, marginRight: 15 }}>
                                            <Text style={[styles.textNomal, { fontWeight: 'bold' }]}>{item.title}</Text>
                                        </TouchableHighlight>
                                    )
                                })}
                            </View>
                        </ScrollView>
                    </View>


                    <View>
                        {data.map((item) => {
                            return <DonusItem key={item.id} item={item} onAddToCard={addToCard} onPress={() => navigation.navigate('detail', {data: item})}/>
                        })}
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
        backgroundColor: '#fff'
    },
    textNomal: {
        fontFamily: "Roboto",
        color: '#000',
        fontSize: 16
    }
})