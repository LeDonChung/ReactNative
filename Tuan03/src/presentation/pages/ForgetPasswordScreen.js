import React from 'react';
import { View, Text, Image, Button, TouchableOpacity, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import Fontisto from 'react-native-vector-icons/Fontisto';

export const ForgetPasswordScreen = () => {
    const navigation = useNavigation();
    return (
        <View
            style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
                alignContent: 'center',
                backgroundColor: '#00CCF9'
            }}>
            <LinearGradient
                // Background Linear Gradient
                colors={['#C7F4F6', '#D1F4F6', '#E5F4F5', '#37D6F8', '#00CCF9']}
                style={{
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    top: 0,
                    height: '130%'
                }}
            />
            <View style={{ flex: 1, padding: 20 }}>
                <View style={{ flex: 3, alignItems: 'center', justifyContent: 'center' }}>
                    <Image source={require('../../../assets/lock.png')} />
                </View>
                <View style={{ flex: 2 }}>
                    <Text style={{ fontSize: 20, fontFamily: 'Roboto', fontWeight: '700', textAlign: 'center' }}> FORGET {'\n'} PASSWORD </Text>
                </View>
                <View style={{ flex: 1 }}>
                    <Text style={{ fontSize: 15, fontFamily: 'Roboto', fontWeight: '700', textAlign: 'center' }}> Provide your account's email for which you want to reset your password </Text>
                </View>
                <View style={{ flex: 1 }}>
                    <View style={{ borderRadius: 5, flex: 1 }}>
                        <TextInput style={{ backgroundColor: '#c4c4c4', paddingVertical: 10, paddingStart: 55, fontSize: 16, fontFamily: 'Roboto', textAlign: 'left', color: '#000' }} placeholder='Email' />
                        <Fontisto name='email' size={30} color='#000' style={{ position: 'absolute', left: 15, top: 8 }} />
                    </View>
                </View>
                <View style={{ flex: 3, flexDirection: 'row', alignItems: 'center' }}>
                    <TouchableOpacity style={{ flex: 1, overflow: 'hidden', backgroundColor: '#E3C000', paddingHorizontal: 15, paddingVertical: 10, borderRadius: 5 }} onPress={() => navigation.navigate('login')}>
                        <Text style={{ fontSize: 15, fontFamily: 'Roboto', fontWeight: '700', textAlign: 'center' }}> NEXT </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};