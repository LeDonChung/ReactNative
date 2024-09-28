import { useEffect, useState } from 'react';
import { FlatList, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import axios from 'axios';
import { TouchableOpacity } from 'react-native';
import { ProductComponentMode01 } from '../components/ProductComponentMode01';
export const ProductScreen1 = ({ navigation }) => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        axios({
            method: 'get',
            url: `https://66f386bd71c84d805878f8e0.mockapi.io/api/products`,
        }).then((response) => {
            console.log(response.data)
            setProducts(response.data)
        });
    }, [])
    return (
        <View style={styles.container}>
            <View style={{ backgroundColor: '#1BA9FF', flexDirection: 'row', height: 80, justifyContent: 'space-between', alignItems: 'center' }}>
                <TouchableOpacity style={{ paddingHorizontal: 10 }} onPress={() => navigation.goBack()}>
                    <Icon name='arrow-left' size={30} color='#fff' />
                </TouchableOpacity>
                <Text style={{ fontSize: 20, fontWeight: 'regular', fontFamily: 'Roboto', color: '#fff' }}>Chat</Text>
                <Icon name='shopping-cart' size={30} color='#fff' style={{ paddingHorizontal: 10 }} />
            </View>
            <View style={{ height: 800, paddingBottom: 20 }}>
                <Text style={{ fontSize: 16, fontWeight: 'regular', fontFamily: 'Roboto', color: '#000', padding: 20 }}>
                    Bạn có thắc mắc với sản phẩm vừa xem đừng ngại chát với shop!
                </Text>
                <FlatList
                    data={products}
                    renderItem={({ item }) => <ProductComponentMode01 name={item.name} image={item.image} shop={item.shop} />}
                    keyExtractor={item => item.id}
                />
            </View >
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e5e5e5',
    },
});
