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
  }

]



export const TaskProvider = ({ children }:{children:React.ReactNode}) => {
  const [tasks, setTasks] = useState<Task[]>(TestList);
  const [chosenCat, setChosenCat] = useState<string>("Geral");

  return (
    <TaskContext.Provider
      value={{
        tasks,
        setTasks,
        chosenCat,
        setChosenCat
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};