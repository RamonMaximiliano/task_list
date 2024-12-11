import { Text, View, Image, TouchableOpacity } from "react-native";
import { StyleSheet } from 'react-native';
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";

type props = {
    name:string,
    icon: keyof typeof MaterialIcons.glyphMap;
    category:string
}

export default function Category(props:props) {

    return (
        <>
                <TouchableOpacity style={styles.main}>      
                <MaterialIcons name={props.icon} size={30} color="white" />

                    <Text style={styles.text}>{props.name}</Text>
                </TouchableOpacity>
        </>
    )
}

const styles = StyleSheet.create({
    main: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "30%",
        padding: 8,
        margin:5,
        marginTop:5,
        color:"white",
        backgroundColor:"#5e5e5e",
        borderRadius:2

    },
    selected: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "30%",
        padding: 8,
        margin:5,
        marginTop:5,
        color:"white",
        backgroundColor:"yellow",
        borderRadius:2
    },

    text: {
        fontSize: 16,
        color:"white"
    }
})
