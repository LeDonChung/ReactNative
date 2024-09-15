import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from '../pages/LoginScreen';
import { FirstScreen } from '../pages/FirstScreen';
import { ForgetPasswordScreen } from '../pages/ForgetPasswordScreen';
import { RegisterScreen } from '../pages/RegisterScreen';
import { VerificationCodeScreen } from '../pages/VerificationCodeScreen';
import { LoginScreenMode2AScreen } from '../pages/LoginScreenMode2A';
import { LoginXMEyeScreen } from '../pages/LoginXMEyeScreen';

const Stack = createStackNavigator();
export const AppNavigation = () => {
    return (
        <>
            <NavigationContainer>  
                <Stack.Navigator screenOptions={{headerShown: false}}>
                    <Stack.Screen name="first" component={FirstScreen} />
                    {/* <Stack.Screen name="login" component={LoginScreen} /> */}
                    {/* <Stack.Screen name="login" component={LoginScreenMode2AScreen} /> */}
                    <Stack.Screen name="login" component={LoginXMEyeScreen} />
                    <Stack.Screen name="forgetPassword" component={ForgetPasswordScreen} />
                    <Stack.Screen name="register" component={RegisterScreen} />
                    <Stack.Screen name="verificationCode" component={VerificationCodeScreen} />
                </Stack.Navigator>
            </NavigationContainer>

        </> 
    )
}