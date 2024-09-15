import React from 'react';
import { View, Text, Image, Button, TouchableOpacity, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
export const VerificationCodeScreen = () => {
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
                    <Text style={{ fontSize: 60, fontFamily: 'Roboto', fontWeight: '800', textAlign: 'center', color: '#000' }}>
                        CODE
                    </Text>
                </View>
                <View style={{ flex: 2 }}>
                    <Text style={{ fontSize: 20, fontFamily: 'Roboto', fontWeight: '700', textAlign: 'center' }}> VERIFICATION </Text>
                </View> 
                <View style={{ flex: 1 }}>
                    <Text style={{ fontSize: 15, fontFamily: 'Roboto', fontWeight: '700', textAlign: 'center' }}> Enter ontime password sent on {'\n'} ++849092605798 </Text>
                </View>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    {[1, 2, 3, 4, 5, 6].map((item, index) => {
                        return (
                            <>
                                <View style={{
                                    flex: 1,
                                    borderColor: '#000',
                                    borderWidth: 1,
                                    width: 60,
                                    height: 60,
                                }}>
                                    <TextInput style={{ flex: 1, fontSize: 30, fontFamily: 'Roboto', fontWeight: '700', textAlign: 'center' }} />
                                </View>
                            
                            </>
                        )
                    })}
                </View>
                <View style={{ flex: 3, flexDirection: 'row', alignItems: 'center' }}>
                    <TouchableOpacity style={{ flex: 1, overflow: 'hidden', backgroundColor: '#E3C000', paddingHorizontal: 15, paddingVertical: 10, borderRadius: 5 }} onPress={() => navigation.navigate('login')}>
                        <Text style={{ fontSize: 15, fontFamily: 'Roboto', fontWeight: '700', textAlign: 'center' }}> VERIFY CODE </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};