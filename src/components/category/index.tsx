import { Text, View, Image, Pressable } from "react-native";
import { StyleSheet } from 'react-native';
import { MaterialIcons } from "@expo/vector-icons";


type props = {
    name:string,
    icon: keyof typeof MaterialIcons.glyphMap;
}

export default function Category(props:props) {
    return (
        <>
                <Pressable style={styles.main}>      
                <MaterialIcons name={props.icon} size={30} color="white" />

                    <Text style={styles.text}>{props.name}</Text>
                </Pressable>
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
        marginTop:20,
        color:"white",
        backgroundColor:"#5e5e5e",
        borderRadius:2

    },
    text: {
        fontSize: 16,
        color:"white"
    }
})
