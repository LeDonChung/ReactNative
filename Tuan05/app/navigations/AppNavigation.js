import { NavigationContainer } from "@react-navigation/native"
import { StartScreen } from "../pages/StartScreen"

import { createStackNavigator } from '@react-navigation/stack';
import { ProductScreen1 } from "../pages/ProductScreen1";
import { ProductScreen2 } from "../pages/ProductScreen2";

const Stack = createStackNavigator();


export const AppNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="start" component={StartScreen} />
                <Stack.Screen name="ProductScreen1" component={ProductScreen1} />
                <Stack.Screen name="ProductScreen2" component={ProductScreen2} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
