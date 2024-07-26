//import component

import { useState } from "react"
import { Tasks } from "./components/Tasks";
import { Header } from "./components/Header";

export interface TaskProps {
  id: string,
  title: string,
  isCompleted: boolean,
}

export function App() {

  const [tasks, setTasks] = useState<TaskProps[]>([]);

  function addTask (taskTitle: string) {
    setTasks([
      ...tasks,
      {
        id: crypto.randomUUID(),
        title: taskTitle,
        isCompleted: false
      }
    ])
  }

  function deleteTaskById (taskId: string) {
    const newTask = tasks.filter((task) => task.id !== taskId)
    setTasks(newTask);
  }

  function toggleTaskCompletedById (taskId: string) {
    const newTasks = tasks.map(task => {
      if (task.id === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
        }
      }
      return task;
    });
    setTasks(newTasks);
  }

  return (
    <>
      <Header onAddTask={addTask}/>
      <Tasks tasks={tasks} onDelete={deleteTaskById} onComplete={toggleTaskCompletedById}/>
    </>
  )
}