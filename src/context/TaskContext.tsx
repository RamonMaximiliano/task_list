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


export const TaskProvider = ({ children }:{children:React.ReactNode}) => {
  const [tasks, setTasks] = useState<Task[]>(TestList);

  return (
    <TaskContext.Provider
      value={{
        tasks,
        setTasks
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};