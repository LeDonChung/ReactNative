import React from 'react';
import { View, Text, Image, Button, TouchableOpacity, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import IonIcon from 'react-native-vector-icons/Ionicons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome6';

export const LoginScreenMode2AScreen = () => {
    const navigation = useNavigation();

    return (
        <>
            <View
                style={{
                    flex: 1,
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignContent: 'center',
                    backgroundColor: '#FBCB00'
                }}>
                <LinearGradient
                // Background Linear Gradient
                colors={['#FBCB00', '#FBCB00']}
                style={{
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    top: 0,
                    height: '100%'
                }}
            />
                <View style={{ flex: 1, padding: 20 }}>
                    <View style={{ flex: 4, justifyContent: 'center', alignItems: 'flex-start' }}>
                        <Text style={{ fontSize: 30, fontFamily: 'Roboto', fontWeight: 'bold', textAlign: 'center', color: '#000' }}>
                            LOGIN
                        </Text>
                    </View>
                    <View style={{ flex: 4 }}>
                        <View style={{borderRadius: 10, flex: 1}}>
                            <TextInput style={{borderWidth: 1, borderColor: '#fff', padding: 10, fontSize: 16, paddingStart: 60, fontFamily: 'Roboto', textAlign: 'left', color: '#000'}} placeholder='Name'/>
                            <FontAwesomeIcon name='user' size={24} color='#000' style={{position: 'absolute', left: 15, top: 12}}/>
                        </View>
                        <View style={{borderRadius: 5, flex: 1}}>
                            <TextInput style={{borderWidth: 1, borderColor: '#fff', paddingVertical: 10, paddingStart: 60, fontSize: 16, fontFamily: 'Roboto', textAlign: 'left', color: '#000'}} placeholder='Password'/>
                            <IonIcon name='eye' size={30} color='#000' style={{position: 'absolute', right: 15, top: 10}}/>
                            <IonIcon name='lock-closed' size={24} color='#000' style={{position: 'absolute', left: 15, top: 12}}/>
                        </View>
                        <View style={{flex: 2, justifyContent: 'center'}} >
                            <TouchableOpacity style={{overflow: 'hidden', backgroundColor: '#000', paddingHorizontal: 15, paddingVertical: 10, borderRadius: 5, marginTop: 10 }} onPress={() => {}}>
                                <Text style={{ fontSize: 18, fontFamily: 'Roboto', fontWeight: '700', textAlign: 'center', color:'#fff' }}> LOGIN </Text>
                            </TouchableOpacity>
                        </View>
                    </View> 
                    <View style={{ flex: 4 }}>
                        <Text  onPress={() => navigation.navigate('register')} style={{ fontSize: 18, fontFamily: 'Roboto', fontWeight: '700', textAlign: 'center', color:'#000' }}>CREATE ACCOUNT</Text>
                    </View>
                </View>

            </View>

        </>
    )

}