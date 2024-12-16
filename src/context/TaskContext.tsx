import React, { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from 'react-native';

/*atento as tipagens do context abaixo, funciona pra react norma e next JS*/

export const TaskContext = createContext({} as any);

export type Task = {
  id: number,
  text: string,
  status: boolean,
  category: string
}

const TestList = [
  {
    id: 10,
    text: "teste",
    status: true,
    category: "Geral"
  },
  {
    id: 20,
    text: "hello",
    status: true,
    category: "Mercado"
  },
  {
    id: 86420,
    text: "pops",
    status: true,
    category: "Contas"
  },
  {
    id: 61820,
    text: "dude",
    status: true,
    category: "Filmes"
  },
  {
    id: 23810,
    text: "niece",
    status: true,
    category: "Agenda"
  }

]

export const TaskProvider = ({ children }: { children: React.ReactNode }) => {
  const [tasks, setTasks] = useState<Task[]>(TestList);
  const [NewTask, setNewTask] = useState<Task>();
  const [NewText, setNewText] = useState<string>("");
  const [filteredTasks, setFilteredTasks] = useState<Task[]>();
  const [chosenCat, setChosenCat] = useState<string>("Geral");
  const [editing, setEditing] = useState<boolean>(false);
  const [editID, setEditID] = useState<number>();

  // LOCAL FUNCTION - SAVE USERS IN LOCALSTORAGE*/
  function storeTasks(tasksList:Task[]){
    try {
      AsyncStorage.setItem("tasksList", JSON.stringify(tasksList));
    } catch (e) {
      Alert.alert("Failed to save users! ❌")
    }
  };

  //1° GET
  useEffect(() => {
    const filteredList = tasks.filter((item) => {
      return item.category === chosenCat
    })
    setFilteredTasks(filteredList)
  }, [chosenCat, tasks])

 // LOCAL FUNCTION - GET LIST FROM LOCALSTORAGE*/
 const getList = async () => {
  try {
    const tasksList = await AsyncStorage.getItem("tasksList");
    if (tasksList !== null) {
      setTasks(JSON.parse(tasksList));
    }
  } catch (e) {
    Alert.alert("Failed to get items! ❌")
  }
};

useEffect(() => {
  getList();
}, []);


  //2° SAVE
  function createNewTask() {
    const generateId = () => Date.now();

    const BrandNewTask = {
      id: Number(generateId()),
      text: NewText,
      status: false,
      category: chosenCat
    }
    setNewTask(BrandNewTask)

    if (filteredTasks && filteredTasks.find(item => item.text === NewText)) {
      Alert.alert("Este item já existe na lista! ❌");
    } else if (!NewText) {
      Alert.alert("Por favor digite um novo item! ✍️");
    } else {
      setTasks([...tasks, BrandNewTask])
      setNewText("")
      Alert.alert("Novo item criado! ✅");
      storeTasks([...tasks, BrandNewTask])
    }
  }
  

   //3° DELETE
  function deleteTask(id: number) {
    const deletedList = tasks.filter((item: Task) => {
      return item.id != id
    })
    setTasks(deletedList)
    Alert.alert("O item foi deletado! 🗑️");
    storeTasks(deletedList)
  }


   //4° UPDATE
  function saveEdit() {
    const editedList = tasks.map((task) =>
      task.id === editID ? { ...task, text: NewText } : task
    );
    setTasks(editedList)
    setEditing(false)
    setNewText("")
    Alert.alert("O item foi editado! 📝");
    storeTasks(editedList)
  }

  return (
    <TaskContext.Provider
      value={{
        chosenCat,
        setChosenCat,
        filteredTasks,
        editing,
        setEditing,
        NewText,
        setNewText,
        createNewTask,
        deleteTask,
        saveEdit,
        setEditID
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};