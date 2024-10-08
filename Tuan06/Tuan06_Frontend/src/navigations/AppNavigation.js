import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { Screen_01 } from "../pages/Screen_01";
import { Screen_02 } from "../pages/Screen_02";
import { Screen_03 } from "../pages/Screen_03";

const Stack = createStackNavigator();

export const AppNavigation = () => {
    return (
        <>
            <NavigationContainer>
                <Stack.Navigator screenOptions={{headerShown: false}}>
                    <Stack.Screen name="screen1" component={Screen_01} />
                    <Stack.Screen name="screen2" component={Screen_02} />
                    <Stack.Screen name="screen3" component={Screen_03} />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    )
}

