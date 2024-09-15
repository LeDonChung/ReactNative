import React, { useState } from 'react';
import { View, Text, Image, Button, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import IonIcon from 'react-native-vector-icons/Ionicons';
export const RegisterScreen = () => {
    const navigation = useNavigation();
    const [checked, setChecked] = useState(0);
    var gender = ['Male', 'Female'];
    return (
        <>
            <View
                style={{
                    flex: 1,
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignContent: 'center',
                    backgroundColor: '#d8efde'
                }}>
                <View style={{ flex: 1, padding: 20 }}>
                    <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 20, fontFamily: 'Roboto', fontWeight: 'bold', textAlign: 'center', color: '#000' }}>
                            REGISTER
                        </Text>
                    </View>
                    <View style={{ flex: 6 }}>
                        <View style={{ borderRadius: 10, flex: 1 }}>
                            <TextInput style={{ backgroundColor: '#c9e0d0', padding: 10, fontSize: 16, fontFamily: 'Roboto', textAlign: 'left', color: '#000' }} placeholder='Name' />
                        </View>
                        <View style={{ borderRadius: 10, flex: 1 }}>
                            <TextInput style={{ backgroundColor: '#c9e0d0', padding: 10, fontSize: 16, fontFamily: 'Roboto', textAlign: 'left', color: '#000' }} placeholder='Phone' />
                        </View>
                        <View style={{ borderRadius: 10, flex: 1 }}>
                            <TextInput style={{ backgroundColor: '#c9e0d0', padding: 10, fontSize: 16, fontFamily: 'Roboto', textAlign: 'left', color: '#000' }} placeholder='Email' />
                        </View>
                        <View style={{ borderRadius: 5, flex: 1 }}>
                            <TextInput style={{ backgroundColor: '#c9e0d0', padding: 10, fontSize: 16, fontFamily: 'Roboto', textAlign: 'left', color: '#000' }} placeholder='Password' />
                            <IonIcon name='eye' size={30} color='#000' style={{ position: 'absolute', right: 15, top: 10 }} />
                        </View>
                        <View style={{ borderRadius: 10, flex: 1 }}>
                            <TextInput style={{ backgroundColor: '#c9e0d0', padding: 10, fontSize: 16, fontFamily: 'Roboto', textAlign: 'left', color: '#000' }} placeholder='Birthday' />
                        </View>

                        <View style={{ flex: 1 }}>
                            <View style={styles.btn}>
                                {gender.map((gender, key) => {
                                    return (
                                        <View key={gender}>
                                            {/* // Nếu checked === key thì hiển thị radio-button-on, ngược lại hiển thị radio-button-off */}
                                            {checked === key ?
                                                (

                                                    <TouchableOpacity style={styles.btn}>
                                                        <IonIcon name='radio-button-on' size={20} color='#000' />
                                                        <Text style={{ fontSize: 16, fontFamily: 'Roboto', textAlign: 'left', color: '#000', marginLeft: 10 }}>{gender}</Text>
                                                    </TouchableOpacity>
                                                ) : (
                                                    <TouchableOpacity
                                                        onPress={() => {
                                                            setChecked(key);
                                                        }}
                                                        style={styles.btn}>
                                                        <IonIcon name='radio-button-off' size={20} color='#000' />
                                                        <Text style={{ fontSize: 16, fontFamily: 'Roboto', textAlign: 'left', color: '#000', marginLeft: 10 }}>{gender}</Text>
                                                    </TouchableOpacity>
                                                )}
                                        </View>
                                    );
                                })}
                            </View>
                        </View>
                    </View>
                    <View style={{ flex: 2 }}>
                        <View style={{ flex: 1, justifyContent: 'center' }} >
                            <TouchableOpacity style={{ overflow: 'hidden', backgroundColor: '#c34e3b', paddingHorizontal: 15, paddingVertical: 10, borderRadius: 5, marginTop: 10 }} onPress={() => { }}>
                                <Text style={{ fontSize: 16, fontFamily: 'Roboto', fontWeight: '700', textAlign: 'center', color: '#fff' }} onPress={() => navigation.navigate('verificationCode')}> REGISTER </Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <Text style={{ fontSize: 16, fontFamily: 'Roboto', fontWeight: 'regular', textAlign: 'center', color: '#000' }}>When you agree to terms and conditions</Text>
                        </View>
                    </View>
                </View>

            </View>

        </>
    )
}

const styles = StyleSheet.create({
    radio: {
        flexDirection: 'row',
    },
    img: {
        height: 20,
        width: 20,
        marginHorizontal: 5,
    },
    btn: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 30
    },
});