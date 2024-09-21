import { useEffect, useState } from "react";
import { SafeAreaView } from "react-native";
import { TouchableOpacity } from "react-native";
import { Image } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";
export const phones = [
    {
        id: 1,
        name: 'Điện Thoại Vsmart Joy 3 - Hàng chính hãng',
        price: 1990000,
        discount: 0.1,
        color: 'black',
        brand: 'Vsmart',
        star: 4,
        review: 100,
        image: require('../../assets/phone/vs_black.png')
    },
    {
        id: 2,
        name: 'Điện Thoại Vsmart Joy 3 - Hàng chính hãng',
        price: 1990000,
        discount: 0.1,
        color: 'blue',
        brand: 'Vsmart',
        star: 4,
        review: 100,
        image: require('../../assets/phone/vs_blue.png')
    },
    {
        id: 3,
        name: 'Điện Thoại Vsmart Joy 3 - Hàng chính hãng',
        price: 1990000,
        discount: 0.1,
        color: 'red',
        brand: 'Vsmart',
        star: 4,
        review: 100,
        image: require('../../assets/phone/vs_red.png')
    },
    {
        id: 4,
        name: 'Điện Thoại Vsmart Joy 3 - Hàng chính hãng',
        price: 1990000,
        discount: 0.1,
        color: 'silver',
        brand: 'Vsmart',
        star: 4,
        review: 100,
        image: require('../../assets/phone/vs_silver.png')
    }
]
export const DetailScreen = ({ route, navigation }) => {
    const [phone, setPhone] = useState(phones[0]);
    const currencyFormat = (num, cu) => {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') + " " + cu;
    }
    const showChooseColorScreen = () => {
        navigation.navigate('chooseColor', { phone: phone});
    }
    const chooseColor = (color) => {
        setPhone(phones.find(p => p.color === color));
    }
    useEffect(() => {
        if(route.params?.color){
            chooseColor(route.params.color);
        }
    }, [[route.params?.color]]);

    return (
        <View style={styles.container}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Image resizeMode="contain" source={phone.image} />
            </View>
            <View style={{ flex: 1 }}>
                <View style={{ flex: 6, alignItems: 'flex-start', justifyContent: 'space-around' }}>
                    <Text style={[styles.textNormal, { fontWeight: 'medium' }]}> {phone.name} </Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            {
                                Array(phone.star).fill().map((_, i) => {
                                    return <Image style={{ marginRight: 10 }} source={require('../../assets/star.png')} />
                                })
                            }
                        </View>
                        <Text style={[styles.textNormal, { flex: 1 }]}>{`(Xem ${phone.review} đánh giá)`}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={[styles.textNormal, { fontWeight: 'bold', fontSize: 20, marginRight: 20 }]}>{currencyFormat((phone.price - phone.price * phone.discount), 'đ')}</Text>
                        <Text style={[styles.textNormal, { textDecorationLine: 'line-through' }]}>{`${currencyFormat(phone.price, 'đ')}`}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={[styles.textNormal, { color: '#FA0000', fontWeight: 'bold' }]}> Ở ĐÂU RẺ HƠN HOÀN TIỀN </Text>
                        <Image source={require('../../assets/question.png')} />
                    </View>
                    <TouchableOpacity style={{ width: '100%', justifyContent: "space-between", paddingHorizontal: 20, paddingVertical: 5, flexDirection: 'row', borderWidth: 1, borderRadius: 10, alignItems: 'center', borderColor: '#000' }}>
                        <Text style={[styles.textNormal, { fontWeight: 'medium', textAlign: 'center', flex: 1 }]} onPress={() => showChooseColorScreen()}>
                            4 MÀU-CHỌN MÀU
                        </Text>
                        <Image source={require('../../assets/arrow-right.png')} />
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 7, justifyContent: 'center' }}>
                    <TouchableOpacity style={{ backgroundColor: '#EE0A0A', width: '100%', justifyContent: "space-between", paddingHorizontal: 20, paddingVertical: 10, flexDirection: 'row', borderRadius: 10, alignItems: 'center' }}>
                        <Text style={[styles.textNormal, { fontWeight: 'bold', textAlign: 'center', flex: 1, color: '#fff' }]}>
                            CHỌN MUA
                        </Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    )
}

const styles = {
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        paddingHorizontal: 20
    },
    textNormal: {
        fontSize: 18,
        fontFamily: 'Roboto',
        color: '#000'
    }
}