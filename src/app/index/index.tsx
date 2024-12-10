import { Text, View, Image, TouchableOpacity } from "react-native";
import { StyleSheet } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import Category from "@/src/components/category";

export default function Index() {
    return (
        <>
            <View style={styles.main}><Image style={styles.logo} source={require("../../../assets/images/icon.png")} />
                <TouchableOpacity>      
                    <AntDesign name="plus" size={30} color="#20bbb5" />
                </TouchableOpacity>
            </View>
            <View style={styles.categories}>
                 <Category name="Geral" icon={"notes"}/>
                 <Category name="Mercado" icon={"shopping-cart"}/>
                 <Category name="Filmes" icon={"movie"}/>
                 <Category name="Música" icon={"music-note"}/>
                 <Category name="Contas" icon={"money-off"}/>
                 <Category name="Livros" icon={"library-books"}/>
                 <Category name="Trabalho" icon={"work"}/>
                 <Category name="Estudos" icon={"school"}/>
                 <Category name="Agenda" icon={"calendar-month"}/>
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
        flexWrap:"wrap"
    }
})



/*

TASKS:

- Component task
- Task list container
- Footer with add task feature
- App title on top

*/