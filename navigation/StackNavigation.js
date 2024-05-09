import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home, AddMode } from "../screens";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={Home} options={{title: 'Home'}}/>
                <Stack.Screen name="AddMode" component={AddMode} options={{title: 'Mode'}} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default StackNavigation;