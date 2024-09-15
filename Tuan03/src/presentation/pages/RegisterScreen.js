import React from 'react';
import { View, Text, Image, Button, TouchableOpacity, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import IonIcon from 'react-native-vector-icons/Ionicons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
export const RegisterScreen = () => {
    const navigation = useNavigation();

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
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 20, fontFamily: 'Roboto', fontWeight: 'bold', textAlign: 'center', color: '#000' }}>
                            REGISTER
                        </Text>
                    </View>
                    <View style={{ flex: 7 }}>
                    <View style={{borderRadius: 10, flex: 1}}>
                            <TextInput style={{backgroundColor: '#c9e0d0', padding: 10, fontSize: 16, fontFamily: 'Roboto', textAlign: 'left', color: '#000'}} placeholder='Name'/>
                        </View>
                        <View style={{borderRadius: 10, flex: 1}}>
                            <TextInput style={{backgroundColor: '#c9e0d0', padding: 10, fontSize: 16, fontFamily: 'Roboto', textAlign: 'left', color: '#000'}} placeholder='Phone'/>
                        </View>
                        <View style={{borderRadius: 10, flex: 1}}>
                            <TextInput style={{backgroundColor: '#c9e0d0', padding: 10, fontSize: 16, fontFamily: 'Roboto', textAlign: 'left', color: '#000'}} placeholder='Email'/>
                        </View>
                        <View style={{borderRadius: 5, flex: 1}}>
                            <TextInput style={{backgroundColor: '#c9e0d0', padding: 10, fontSize: 16, fontFamily: 'Roboto', textAlign: 'left', color: '#000'}} placeholder='Password'/>
                            <IonIcon name='eye' size={30} color='#000' style={{position: 'absolute', right: 15, top: 10}}/>
                        </View>
                        <View style={{borderRadius: 10, flex: 1}}>
                            <TextInput style={{backgroundColor: '#c9e0d0', padding: 10, fontSize: 16, fontFamily: 'Roboto', textAlign: 'left', color: '#000'}} placeholder='Birthday'/>
                        </View>
                        <View style={{flex: 2, justifyContent: 'center'}} >
                            <TouchableOpacity style={{overflow: 'hidden', backgroundColor: '#c34e3b', paddingHorizontal: 15, paddingVertical: 10, borderRadius: 5, marginTop: 10 }} onPress={() => {}}>
                                <Text style={{ fontSize: 16, fontFamily: 'Roboto', fontWeight: '700', textAlign: 'center', color:'#fff' }}> LOGIN </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ flex: 2 }}>


                    </View>
                </View>

            </View>

        </>
    )
}