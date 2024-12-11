import { Text, View, Image, TouchableOpacity } from "react-native";
import { StyleSheet } from 'react-native';
import FontAwesome from "@expo/vector-icons/FontAwesome";
import React from "react";
// @ts-ignore
import DoubleClick from 'react-native-double-tap';


type task ={
    id:number,
    text:string,
    status:boolean,
    category:string
}


export default function Task(props:task) {
    return (
        <>
    <DoubleClick timeout={1000}>
      <View         style={props.status ? styles.taskContainerGreen : styles.taskContainerBlue}>
        <View >
          <TouchableOpacity>
          <FontAwesome name="pencil-square-o" size={28} color="white" />

          </TouchableOpacity>
        </View>

        <View>
          <Text style={styles.text}>{props.text}</Text>
        </View>
        <TouchableOpacity >
        <FontAwesome name="trash-o" size={28} color="white" />
        </TouchableOpacity>
      </View>
    </DoubleClick>
        </>
    )
}


const styles = StyleSheet.create({

  taskContainerBlue: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#00a39d",
    color: "white",
    width: 300,
    padding: 10,
    margin: 10,
    borderRadius: 5,
    alignItems:"center"
  },

  taskContainerGreen: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#00a39d",
    color: "white",
    width: 300,
    padding: 10,
    margin: 10,
    borderRadius: 5,

  },
  text:{
    color: "white",
    fontSize:18,
  }

})