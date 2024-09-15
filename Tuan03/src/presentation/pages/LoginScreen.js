import React from 'react';
import { View, Text, Image, Button, TouchableOpacity, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import IonIcon from 'react-native-vector-icons/Ionicons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
export const LoginScreen = () => {
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
                <View style={{ flex: 2, padding: 20 }}>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 20, fontFamily: 'Roboto', fontWeight: 'bold', textAlign: 'center', color: '#000' }}>
                            LOGIN
                        </Text>
                    </View>
                    <View style={{ flex: 2 }}>
                        <View style={{borderRadius: 10, flex: 1}}>
                            <TextInput style={{backgroundColor: '#c9e0d0', padding: 10, fontSize: 16, fontFamily: 'Roboto', textAlign: 'left', color: '#000'}} placeholder='Email'/>
                        </View>
                        <View style={{borderRadius: 5, flex: 1}}>
                            <TextInput style={{backgroundColor: '#c9e0d0', padding: 10, fontSize: 16, fontFamily: 'Roboto', textAlign: 'left', color: '#000'}} placeholder='Password'/>
                            <IonIcon name='eye' size={30} color='#000' style={{position: 'absolute', right: 15, top: 10}}/>
                        </View>
                        <View style={{flex: 2, justifyContent: 'center'}} >
                            <TouchableOpacity style={{overflow: 'hidden', backgroundColor: '#c34e3b', paddingHorizontal: 15, paddingVertical: 10, borderRadius: 5, marginTop: 10 }} onPress={() => {}}>
                                <Text style={{ fontSize: 16, fontFamily: 'Roboto', fontWeight: '700', textAlign: 'center', color:'#fff' }}> LOGIN </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ flex: 2 }}>
                        <View style={{flex: 1, alignItems: 'center', justifyContent: 'space-around'}}>
                            <Text style={{ fontSize: 16, fontFamily: 'Roboto', fontWeight: 'regular', textAlign: 'center', color:'#000' }}>When you agree to terms and conditions</Text>
                            <Text style={{ fontSize: 16, fontFamily: 'Roboto', fontWeight: 'regular', textAlign: 'center', color:'#6c3ef6' }} onPress={() => navigation.navigate('forgetPassword')}>Forgot your password</Text>
                            <Text style={{ fontSize: 16, fontFamily: 'Roboto', fontWeight: 'regular', textAlign: 'center', color:'#000' }}>Or login with</Text>
                        </View>
                        <View style={{flex: 2, alignItems: 'flex-start', flexDirection: 'row', marginTop: 20}}>
                            <TouchableOpacity style={{flex: 1, backgroundColor: '#275a8d'}}>
                                <FontAwesomeIcon name='facebook' size={30} color='#fff' style={{textAlign: 'center', padding: 5}}/>
                            </TouchableOpacity>
                            <TouchableOpacity style={{flex: 1, backgroundColor: '#1593c5'}}>
                                <FontAwesomeIcon name='pinterest' size={30} color='#fff' style={{textAlign: 'center', padding: 5}}/>
                            </TouchableOpacity>
                            <TouchableOpacity style={{flex: 1, backgroundColor: '#d8efde', borderWidth: 1, borderLeftWidth: 0, borderColor: '#0e88d3'}}>
                                <FontAwesomeIcon name='google' size={30} color='#c85538ff' style={{textAlign: 'center', padding: 5}}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

            </View>

        </>
    )
}