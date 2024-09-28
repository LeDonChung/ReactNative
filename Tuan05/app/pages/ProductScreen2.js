import { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import IconF from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/Feather';
import axios from 'axios';
import { TouchableOpacity } from 'react-native';
import { ProductComponentMode02 } from '../components/ProductComponentMode02';
import { TextInput } from 'react-native-gesture-handler';
export const ProductScreen2 = ({navigation}) => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        axios({
            method: 'get',
            url: `https://66f386bd71c84d805878f8e0.mockapi.io/api/products`,
        }).then((response) => {
            console.log(response.data)
            setProducts(response.data);
        });
    }, [])
    const currencyFormat = (num, cu) => {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') + " " + cu;
    }
    return (

        <View style={styles.container}>
            <View style={{ backgroundColor: '#1BA9FF', flexDirection: 'row', height: 80, justifyContent: 'flex-start', alignItems: 'center' }}>
                <TouchableOpacity style={{ flex: 1,paddingHorizontal: 10 }} onPress={() => navigation.goBack()}>
                    <Icon name='arrow-left' size={30} color='#fff' />
                </TouchableOpacity>
                <View style={{flex: 5, flexDirection: 'row', backgroundColor: '#fff', alignItems: 'center'}}>
                    <IconF name='search' size={24} color='#000' style={{ paddingHorizontal: 10 }} />
                    <TextInput placeholder='Dây cáp usb' style={{fbackgroundColor: '#fff', width: 200, height: 40, paddingStart: 10 }} />
                </View>
                <Icon name='shopping-cart' size={30} color='#fff' style={{ flex: 1, paddingStart: 10, marginLeft: 'auto' }} />
            </View>
            <View style={{ height: 800, paddingBottom: 20 }}>
                <Text style={{ fontSize: 16, fontWeight: 'regular', fontFamily: 'Roboto', color: '#000', padding: 20 }}>
                    Bạn có thắc mắc với sản phẩm vừa xem đừng ngại chát với shop!
                </Text>
                <FlatList
                    numColumns={2}
                    data={products}
                    renderItem={({ item }) => <ProductComponentMode02 name={item.name} image={item.image} discount={item.discount} price={currencyFormat(item.price, 'đ')} comment={item.comment} star={item.star} />}
                    keyExtractor={item => item.id}
                />
            </View >
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e5e5e5'
    },
});
