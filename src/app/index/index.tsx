import { Text, View, Image, TouchableOpacity, ScrollView, TextInput } from "react-native";
import { StyleSheet } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import Category from "@/src/components/category";
import Task from "@/src/components/task";
import { Fontisto } from "@expo/vector-icons";

export default function Index() {
const edited = true;



    return (
        <>
            <View style={styles.main}><Image style={styles.logo} source={require("../../../assets/images/icon.png")} />
                <TouchableOpacity>
                    <AntDesign name="plus" size={30} color="#20bbb5" />
                </TouchableOpacity>
            </View>
            <View style={styles.categories}>
                <Category name="Geral" icon={"notes"} />
                <Category name="Mercado" icon={"shopping-cart"} />
                <Category name="Filmes" icon={"movie"} />
                <Category name="Música" icon={"music-note"} />
                <Category name="Contas" icon={"money-off"} />
                <Category name="Livros" icon={"library-books"} />
                <Category name="Trabalho" icon={"work"} />
                <Category name="Estudos" icon={"school"} />
                <Category name="Agenda" icon={"calendar-month"} />
            </View>

            <ScrollView style={styles.ScrollView}>
                <View style={styles.container}>
                    <Task id={10} text="hello there" status={true} category="hi" />
                    <Task id={10} text="hello there" status={true} category="hi" />
                    <Task id={10} text="hello there" status={true} category="hi" />
                    <Task id={10} text="hello there" status={true} category="hi" />
                    <Task id={10} text="hello there" status={true} category="hi" />
                    <Task id={10} text="hello there" status={true} category="hi" />
                    <Task id={10} text="hello there" status={true} category="hi" />
                    <Task id={10} text="hello there" status={true} category="hi" />
                    <Task id={10} text="hello there" status={true} category="hi" />
                    <Task id={10} text="hello there" status={true} category="hi" />
                    <Task id={10} text="hello there" status={true} category="hi" />
                    <Task id={10} text="hello there" status={true} category="hi" />
                    <Task id={10} text="hello there" status={true} category="hi" />
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
        marginBottom: 80,
        marginTop: 15,
    },
    container: {
        flex: 1,
        backgroundColor: "#353535",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 10,

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

- Footer with add task feature
- App title on top
- Make chosen list with special CSS 
- add task to the chosen list on top, as well as filter existant list



*/