import { Text, View, Image, TouchableOpacity, ScrollView, TextInput } from "react-native";
import { StyleSheet } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import Category from "@/src/components/category";
import Task from "@/src/components/task";
import { Fontisto } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";

type task = {
    id: number,
    text: string,
    status: boolean,
    category: string
}

const TestList = [
    {
        id: 10,
        text: "string",
        status: true,
        category: "geral"
    },
    {
        id: 20,
        text: "hello",
        status: true,
        category: "geral"
    },
    {
        id: 180,
        text: "blue",
        status: true,
        category: "geral"
    },    {
        id: 18430,
        text: "red",
        status: true,
        category: "geral"
    },
    {
        id: 28460,
        text: "green",
        status: true,
        category: "geral"
    },
    {
        id: 184680,
        text: "yellow",
        status: true,
        category: "geral"
    },
    {
        id: 165818430,
        text: "purple",
        status: true,
        category: "geral"
    },
    {
        id: 28684460,
        text: "black",
        status: true,
        category: "geral"
    },
    {
        id: 184638180,
        text: "brown",
        status: true,
        category: "geral"
    },

]





export default function Index() {
    const [taskList, setTaskList] = useState<task[]>()
    const [task, setTask] = useState<task[]>()
    const [category, setCategory] = useState<string>("Geral")
    const edited = false;

    return (
        <>
            <View style={styles.main}><Image style={styles.logo} source={require("../../../assets/images/icon.png")} />
                <TouchableOpacity>
                    <AntDesign name="plus" size={30} color="#20bbb5" />
                </TouchableOpacity>
            </View>
            <View style={styles.categories}>
                <Category name="Geral" icon={"notes"} category={category}/>
                <Category name="Mercado" icon={"shopping-cart"} category={category}/>
                <Category name="Filmes" icon={"movie"} category={category}/>
                <Category name="Música" icon={"music-note"} category={category}/>
                <Category name="Contas" icon={"money-off"} category={category}/>
                <Category name="Livros" icon={"library-books"} category={category}/>
                <Category name="Trabalho" icon={"work"} category={category}/>
                <Category name="Estudos" icon={"school"} category={category}/>
                <Category name="Agenda" icon={"calendar-month"} category={category}/>
            </View>

            <ScrollView style={styles.ScrollView}>
                <View style={styles.container}>

                    {TestList.map((item: task) => {
                            return <Task key={item.id} id={item.id} text={item.text} status={item.status} category={item.category}/>
                        })
                    }

                </View>
            </ScrollView>


            <View style={edited !== null ? styles.bottom : styles.bottomEdit}>
                <TextInput
                    style={styles.taskInput}
                    placeholder="Type your task"
                /*                     value={newTask}
                                    onChangeText={(e) => setNewTask(e)} */
                />
                {/*We need to use this TouchableOpacity component to handle press events*/}

                {edited !== null ? (
                    <TouchableOpacity
                        style={styles.saveSign}

                    >
                        <Fontisto name="save" size={24} color="#20bbb5" />
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity
                        style={styles.plusSign}

                    >
                        <Text style={styles.plusSignText}>+</Text>
                    </TouchableOpacity>
                )}
            </View>

        </>
    )
}

const styles = StyleSheet.create({
    main: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        padding: 10

    },
    logo: {
        width: 50,
        height: 50
    },
    categories: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap"
    },
    ScrollView: {

        marginTop: 10,
        backgroundColor: "#3c3c3c",
        paddingBottom:20
    },
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 10,
        paddingBottom:120
    },

    bottom: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#222222",
        paddingRight: 25,
        paddingLeft: 25,
        position: "absolute",
        bottom: 0,
    },
    bottomEdit: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "blue",
        paddingRight: 25,
        paddingLeft: 25,
        position: "absolute",
        bottom: 0,
    },

    taskInput: {
        width: "60%",
        textAlign: "center",
        alignItems: "center",
        backgroundColor: "white",
        padding: 10,
        margin: 15,
        borderRadius: 50,
        fontSize: 15,
    },

    plusSign: {
        width: 60,
        height: 60,
        textAlign: "center",
        alignItems: "center",
        backgroundColor: "white",
        padding: 3,
        margin: 15,
        borderRadius: 50,
    },

    saveSign: {
        width: 60,
        height: 60,
        textAlign: "center",
        alignItems: "center",
        backgroundColor: "white",
        padding: 15,
        margin: 15,
        borderRadius: 50,
    },

    plusSignText: {
        fontSize: 37,
        color: "blue",
    }
})



/*

TASKS:

- App title on top
- Make chosen list with special CSS 
- add task to the chosen list on top, as well as filter existant list



*/