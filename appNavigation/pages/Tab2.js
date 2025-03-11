import React from "react";
import { View, Text } from "react-native";

export default function Tab2() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Página Tab</Text>
        </View>
    );
}

const styles = {
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "lightgreen",
    },
    title: {
        fontSize: 30,
    },
};
