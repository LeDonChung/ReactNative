import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { MasterPortraitScreen } from "../pages/MasterPortrait";
import { DetailPortraitScreen } from "../pages/DetailPortrait";

const Stack = createStackNavigator();

export const AppNavigation = () => {
    return (
        <>
            <NavigationContainer>
                <Stack.Navigator  screenOptions={{headerShown: false, cardStyle: {flex: 1}}}>
                    <Stack.Screen name="master" component={MasterPortraitScreen} />
                    <Stack.Screen name="detail" component={DetailPortraitScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    )
}

