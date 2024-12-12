import { Stack } from "expo-router";
import { TaskProvider } from "../context/TaskContext";

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
        </TaskProvider>
    );
}
