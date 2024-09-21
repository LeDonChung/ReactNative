import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { DetailScreen } from "../pages/DetailScreen";
import { ChooseColorScreen } from "../pages/ChooseColorScreen";

const Stack = createStackNavigator();
export const AppNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name='detail' component={DetailScreen} />
                <Stack.Screen name='chooseColor' component={ChooseColorScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}