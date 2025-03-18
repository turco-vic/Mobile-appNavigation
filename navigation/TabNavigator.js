import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TabScreen from "../pages/TabScreen";
import Tab2 from "../pages/Tab2";
import Icon from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
    return (
        <Tab.Navigator initialRouteName="Tab Screen">
                <Tab.Screen 
                    name="Tab Screen" 
                    component={TabScreen} 
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Icon name="home" color={color} size={size} />
                        ),
                    }}
                />
            <Tab.Screen name="Tab2" component={Tab2} />
        </Tab.Navigator>
    );
}
