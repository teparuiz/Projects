"use client";
import { useState, createContext, useContext } from "react";
import {v4 as uuid }from 'uuid'

export const TaskContext = createContext();

export const useTasks = () => {
  const context = useContext(TaskContext);
  if (!context) throw new Error("useTask must used within provider");
  return context;
};

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "my first task",
      description: "some task",
    },
    { id: 2, title: "my second task", description: "some task" },
    { id: 3, title: "my third task", description: "some task" },
  ]);

  const createTask = (title, description) => {
    setTasks([...tasks, { title, description, id: uuid() }]);
  };
  return (
    <TaskContext.Provider value={{ tasks, createTask }}>{children}</TaskContext.Provider>
  );
};
