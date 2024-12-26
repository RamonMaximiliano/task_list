import { Text, View, Image, TouchableOpacity } from "react-native";
import { StyleSheet, Dimensions  } from 'react-native';
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import React from "react";
import { TaskContext } from "@/src/context/TaskContext";
import { useContext } from "react";

type props = {
    name:string,
    icon: keyof typeof MaterialIcons.glyphMap;
    category:string
}

//usando o dimensions para fazer a fonte escalavel conforme tamanho da tela

const { width: screenWidth } = Dimensions.get('window');
 
export default function Category(props:props) {
        const { tasks, setNewText, chosenCat, setChosenCat, editing, setEditing } = useContext(TaskContext)

        function changeCat(){
            setChosenCat(String(props.name))
            setEditing(false)
            setNewText("")
        }

    return (
        <>
                <TouchableOpacity style={props.name === chosenCat ? styles.selected : styles.main} onPress={()=>changeCat()}>      
                <MaterialIcons name={props.icon} size={screenWidth * 0.08} color="white" />

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
        backgroundColor:"#00a39d",
        borderRadius:2
    },

    text: {
        fontSize: screenWidth * 0.041,
        color:"white"
    }
})
