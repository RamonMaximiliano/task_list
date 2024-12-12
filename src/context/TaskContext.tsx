import React, { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from 'react-native';

/*atento as tipagens do context abaixo, funciona pra react norma e next JS*/

export const TaskContext = createContext({} as any);

export type Task = {
  id: number,
  text: string,
  status: boolean,
  category:string
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

export const TaskProvider = ({ children }:{children:React.ReactNode}) => {
  const [tasks, setTasks] = useState<Task[]>(TestList);
  const [NewTask, setNewTask] = useState<Task>();
  const [NewText, setNewText] = useState<string>("Novo item");
  const [filteredTasks, setFilteredTasks] = useState<Task[]>();
  const [chosenCat, setChosenCat] = useState<string>("Geral");

  const [edited, setEdited] = useState(null);

  useEffect(()=>{
    const filteredList = tasks.filter((item)=>{
      return item.category === chosenCat
    })
    setFilteredTasks(filteredList)
  },[chosenCat])


function createNewTask(){
  const generateId = () => Date.now();



  const BrandNewTask = {
    id: Number(generateId()),
    text: NewText,
    status: false,
    category:chosenCat
  }
  setNewTask(BrandNewTask)
}


  return (
    <TaskContext.Provider
      value={{
        tasks,
        setTasks,
        chosenCat,
        setChosenCat,
        filteredTasks,
        edited,
        setEdited,
        NewText, 
        setNewText,
        createNewTask
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};