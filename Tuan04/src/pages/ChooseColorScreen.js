import { ScrollView } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";

// import phone from DetailScreen.js
import { phones } from './DetailScreen';
import { Image } from "react-native";
import { TouchableOpacity } from "react-native";
import { useState } from "react";

export const colors = [
    {
        id: 1,
        name: 'black',
        image: require('../../assets/color/black.png')
    },
    {
        id: 2,
        name: 'blue',
        image: require('../../assets/color/blue.png')
    },
    {
        id: 3,
        name: 'red',
        image: require('../../assets/color/red.png')
    },
    {
        id: 4,
        name: 'silver',
        image: require('../../assets/color/silver.png')
    }
];
export const ChooseColorScreen = ({ route, navigation }) => {
    const { phone} = route.params || {};
    const [phoneChoose, setPhoneChoose] = useState(phone);
    const currencyFormat = (num, cu) => {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') + " " + cu;
    }
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={{ flex: 1, paddingVertical: 30, flexDirection: 'row', justifyContent: 'center' }}>
                    <Image style={{ flex: 1, height: 200 }} resizeMode="contain" source={phoneChoose.image} />
                    <View style={{ flex: 1, justifyContent: 'space-between' }}>
                        <Text style={styles.textNormal}> {phoneChoose.name} </Text>
                        <Text style={styles.textNormal}> Màu: <Text style={{ fontWeight: 'bold' }} > {phoneChoose.color} </Text> </Text>
                        <Text style={styles.textNormal}> Cung cấp bởi <Text style={{ fontWeight: 'bold' }} > {phoneChoose.brand} </Text> </Text>
                        <Text style={[styles.textNormal, { fontWeight: 'bold' }]}> {currencyFormat(phoneChoose.price, 'đ')} </Text>
                    </View>


                </View>
                <View style={{flex: 1, justifyContent: 'flex-start'}}>
                    <Text style={[styles.textNormal, {marginBottom: 20}]}>
                        Chọn một màu bên dưới:
                    </Text>
 
                    <View style={{ flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }}>
                        {colors.map((color, index) => {
                            return (
                                <TouchableOpacity style={{margin: 10}} key={index} onPress={() => {
                                    const phone = phones.find(p => p.color === color.name);
                                    setPhoneChoose(phone)
                                }}>
                                    <Image source={color.image} />
                                </TouchableOpacity>
                            )
                        })}
                    </View>
                </View>

                <View style={{justifyContent: 'center', marginVertical: 100 }}>
                    <TouchableOpacity style={{ backgroundColor: '#4d6dc1', width: '100%', justifyContent: "space-between", paddingHorizontal: 20, paddingVertical: 10, flexDirection: 'row', borderRadius: 10, alignItems: 'center' }}
                        onPress={() => {
                            navigation.navigate({
                                name: 'detail',
                                params: { color: phoneChoose.color },
                                merge: true,
                            });
                        }}
                    >
                        <Text style={[styles.textNormal, { fontWeight: 'bold', textAlign: 'center', flex: 1, color: '#fff' }]}>
                            CHỌN MUA
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = {
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    textNormal: {
        fontSize: 18,
        fontFamily: 'Roboto',
        color: '#000'
    }
}