import { Text, View, Image, TouchableOpacity, ScrollView, TextInput, Alert } from "react-native";
import { StyleSheet } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import Category from "@/src/components/category";
import Task from "@/src/components/task";
import { Fontisto } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { TaskContext } from "@/src/context/TaskContext";
import { useContext } from "react";

type task = {
    id: number,
    text: string,
    status: boolean,
    category: string
}

function creator() {
    Alert.alert("Desenvolvido por Ramon! Aproveite! 👨🏻‍💻")
}

export default function Index() {
    const { chosenCat, filteredTasks, editing, NewText, setNewText, createNewTask, saveEdit } = useContext(TaskContext)

    return (
        <>
            <View >
                <TouchableOpacity style={styles.main} onPress={() => creator()}>
                    <Image style={styles.logo} source={require("../../../assets/images/icon.png")} />
                    <Text style={styles.title}>Task List</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.categories}>
                <View style={styles.categoriesLine}>
                    <Category name="Geral" icon={"notes"} category={chosenCat} />
                    <Category name="Mercado" icon={"shopping-cart"} category={chosenCat} />
                    <Category name="Filmes" icon={"movie"} category={chosenCat} />

                </View>
                <View style={styles.categoriesLine}>
                    <Category name="Música" icon={"music-note"} category={chosenCat} />
                    <Category name="Contas" icon={"money-off"} category={chosenCat} />
                    <Category name="Livros" icon={"library-books"} category={chosenCat} />
                </View>
                <View style={styles.categoriesLine}>
                    <Category name="Trabalho" icon={"work"} category={chosenCat} />
                    <Category name="Estudos" icon={"school"} category={chosenCat} />
                    <Category name="Agenda" icon={"calendar-month"} category={chosenCat} />
                </View>
            </View>

            <ScrollView style={styles.ScrollView}>
                <View style={styles.container}>

                    {filteredTasks?.map((item: task) => {
                        return <Task key={item.id} id={item.id} text={item.text} status={item.status} category={item.category} />
                    })
                    }

                </View>
            </ScrollView>

            <View style={editing === false ? styles.bottom : styles.bottomEdit}>

                <TextInput style={styles.taskInput}
                    placeholder="Escreva o item"
                    onChangeText={(e) => setNewText(e)}
                    value={NewText} />
                {editing !== false ? (
                    <TouchableOpacity
                        style={styles.saveSign}
                        onPress={() => saveEdit()}
                    >
                        <Fontisto name="save" size={24} color="#20bbb5" />
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity
                        style={styles.plusSign}
                        onPress={() => createNewTask()}
                    >
                        <Text style={styles.plusSignText}>+</Text>
                    </TouchableOpacity>
                )}
            </View>

        </>
    )
}

const styles = StyleSheet.create({
    title: {
        color: "white",
        fontSize: 25,
        fontWeight: "bold",
    },

    main: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        padding: 10

    },
    logo: {
        width: 45,
        height: 45
    },
    categories: {
        display: "flex",
        width: "100%",
        flexDirection: "column",
        alignItems: "center",
        margin: "auto"
    },
    categoriesLine: {
        display: "flex",
        flexDirection: "row",
    },
    ScrollView: {

        marginTop: 10,
        backgroundColor: "#3c3c3c",
        paddingBottom: 20
    },
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 10,
        paddingBottom: 120
    },

    bottom: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#1b1b1b",
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
        backgroundColor: "#065855",
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
        padding: 12,
        margin: 15,
        borderRadius: 50,
        fontSize: 16,
    },

    plusSign: {
        width: 60,
        height: 60,
        textAlign: "center",
        alignItems: "center",
        backgroundColor: "#00a39d",
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
        color: "white",
    }
})
