import React from "react";
import { NativeScreenContainer } from "react-native-screens";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./pages/Home";
import Detail from "./pages/Detail";

const Stack = createNativeStackNavigator();

function Routes(){
    <NativeScreenContainer>
        <Stack.Navigator>
            <Stack.Screen 
            name="Home"
            component={Home}
            options={{headerShoun: false}}
            />
            <Stack.Screen 
            name="Detail"
            component={Detail}
            />
        </Stack.Navigator>
    </NativeScreenContainer>

}

export default Routes;