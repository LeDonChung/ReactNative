import React from 'react';
import { View, Text, Image, Button, TouchableOpacity, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import IonIcon from 'react-native-vector-icons/Ionicons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome6';

export const LoginXMEyeScreen = () => {
    const navigation = useNavigation();

    return (
        <>
            <View
                style={{
                    flex: 1,
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignContent: 'center',
                    backgroundColor: '#fff'
                }}>

                <View style={{ flex: 1, padding: 20 }}>
                    <View style={{ flex: 4, justifyContent: 'center', alignItems: 'center' }}>
                        <Image source={require('../../../assets/eye.png')} style={{ width: 250, height: 250 }} />
                    </View>
                    <View style={{ flex: 4 }}>
                    <View
                            style={{
                                flex: 1,
                                flexDirection: "row",
                                width: "100%",
                                height: 54,
                                borderBottomWidth: 1,
                                borderColor: "#C4C4C4",
                                alignItems: "center",
                            }}
                        >
                            <FontAwesomeIcon name='user' size={24} color='#386ffc'/>
                            <TextInput style={{ fontSize: 18, paddingLeft: 15 }} placeholder='Please input username'/>
                        </View>
                        <View
                            style={{
                                flex: 1,
                                flexDirection: "row",
                                width: "100%",
                                height: 54,
                                borderBottomWidth: 1,
                                borderColor: "#C4C4C4",
                                alignItems: "center",
                            }}
                        >
                            <IonIcon name='lock-closed' size={24} color='#386ffc'/>
                            <TextInput style={{ fontSize: 18, paddingLeft: 15 }} placeholder='Please input password'/>
                        </View>
                        <View style={{flex: 2, justifyContent: 'center'}} >
                            <TouchableOpacity style={{overflow: 'hidden', backgroundColor: '#386ffc', paddingHorizontal: 15, paddingVertical: 10, borderRadius: 5, marginTop: 10 }} onPress={() => {}}>
                                <Text style={{ fontSize: 18, fontFamily: 'Roboto', fontWeight: '700', textAlign: 'center', color:'#fff' }}> LOGIN </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ fontSize: 18, fontFamily: 'Roboto', fontWeight: 'regular', textAlign: 'center', color:'#000' }} onPress={() => navigation.navigate('register')}>Register</Text>
                            <Text style={{ fontSize: 18, fontFamily: 'Roboto', fontWeight: 'regular', textAlign: 'center', color:'#000' }} onPress={() => navigation.navigate('forgetPassword')}>Forget Password</Text>
                        </View>
                    </View>
                    <View style={{ flex: 4 }}>
                        <Text style={{ flex: 1, fontSize: 18, fontFamily: 'Roboto', fontWeight: 'regular', textAlign: 'center', color:'#000' }}>Other Login Methods</Text>
                        <View style={{flex: 4, flexDirection: 'row', justifyContent: 'space-between'}}>
                            <Image source={require('../../../assets/1.png')} style={{ width: 80, height: 80 }} />
                            <Image source={require('../../../assets/2.png')} style={{ width: 80, height: 80 }} />
                            <Image source={require('../../../assets/3.png')} style={{ width: 80, height: 80 }} />
                        </View>
                    </View>
                </View>

            </View>

        </>
    )

}