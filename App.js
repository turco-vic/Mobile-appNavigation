import React from "react";
import { NavigationContainer } from "@react-navigation/native";
//import Drawer2 from "./navigation/DrawerNavigator";
//import Stack2 from "./navigation/StackNavigator";
import Tab2 from "./navigation/TabNavigator";

export default function App() {
    return (
        <NavigationContainer>
            <Tab2 />
        </NavigationContainer>
    );
}
