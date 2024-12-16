import { Stack } from "expo-router";
import { TaskProvider } from "../context/TaskContext";
import Toast from 'react-native-toast-message';

/*
no expo router file based router, o context tem que estar wrapped em volta do Layout file conforme abaixo
*/

export default function Layout() {
    return (
        <TaskProvider>
        <Stack 
            screenOptions={{
                headerShown: false,
                contentStyle: { backgroundColor: "black" }
            }} 
        />
        <Toast />
        </TaskProvider>
        
    );
}
