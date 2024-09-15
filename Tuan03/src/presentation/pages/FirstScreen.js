import React from 'react';
import { View, Text, Image, Button, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
export const FirstScreen = () => {
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
                <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center' }}>
                    <Image source={require('../../../assets/eclipse8.png')} />
                </View>
                <View style={{ flex: 1 }}>
                    <Text style={{ fontSize: 20, fontFamily: 'Roboto', fontWeight: '700', textAlign: 'center' }}> GROW {'\n'} YOUR BUSINESS </Text>
                </View>
                <View style={{ flex: 1 }}>
                    <Text style={{ fontSize: 15, fontFamily: 'Roboto', fontWeight: '700', textAlign: 'center' }}> We will help you to grow your business using
                        online server </Text>
                </View>
                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                    <TouchableOpacity style={{ overflow: 'hidden', backgroundColor: '#E3C000', paddingHorizontal: 15, paddingVertical: 10, borderRadius: 5 }} onPress={() => navigation.navigate('login')}>
                        <Text style={{ fontSize: 15, fontFamily: 'Roboto', fontWeight: '700', textAlign: 'center' }}> LOGIN </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ overflow: 'hidden', backgroundColor: '#E3C000', paddingHorizontal: 15, paddingVertical: 10, borderRadius: 10 }} onPress={() => navigation.navigate('register')}>
                        <Text style={{ fontSize: 15, fontFamily: 'Roboto', fontWeight: '700', textAlign: 'center' }}> SIGN UP </Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 1 }}>
                    <Text style={{ fontSize: 15, fontFamily: 'Roboto', fontWeight: '700', textAlign: 'center' }}> HOW TO WORK
                    </Text>
                </View>
            </View>
        </View>
    );
};