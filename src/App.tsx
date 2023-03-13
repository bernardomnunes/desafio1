import { ChangeEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import plusButton from "./assets/plusButton.svg";
import taskImage from "./assets/taskImage.svg";

import { Header } from "./components/Header";

import styles from "./App.module.css";
import { Task } from "./components/Task";

export interface Tasks {
  id: string;
  content: string;
  isCompleted: boolean;
}

export function App() {
  const [tasks, setTasks] = useState<Tasks[]>([]);
  const [inputValue, setInputValue] = useState("");

  const tasksQuantity = tasks.length;
  const completedTasksQuantity = tasks.filter(
    (task) => task.isCompleted
  ).length;

  function handleInputValue(event: ChangeEvent<HTMLInputElement>) {
    setInputValue(event.target.value);
  }

  function handleSubmitTask(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setTasks((state) => {
      return [
        ...state,
        { id: uuidv4(), content: inputValue, isCompleted: false },
      ];
    });

    setInputValue("");
  }

  function toggleTaskCompleted(taskId: string) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
        };
      }
      return task;
    });

    setTasks(newTasks);
  }

  function deleteTask(taskId: string) {
    const newTasks = tasks.filter((task) => {
      return taskId !== task.id;
    });

    setTasks(newTasks);
  }

  return (
    <>
      <Header />

      <form onSubmit={handleSubmitTask} className={styles.inputContainer}>
        <input
          type="text"
          placeholder="Adicione uma nova tarefa"
          onChange={handleInputValue}
          value={inputValue}
          required
        />
        <button>
          Criar
          <img src={plusButton} />
        </button>
      </form>

      <div className={styles.viewerTasks}>
        <div className={styles.createdTask}>
          <strong>Tarefas criadas</strong>
          <span>{tasksQuantity}</span>
        </div>
        <div className={styles.concludedTask}>
          <strong>Concluídas</strong>
          <span>
            {completedTasksQuantity} de {tasksQuantity}
          </span>
        </div>
      </div>

      {tasksQuantity === 0 ? (
        <div className={styles.tasksContainer}>
          <img src={taskImage} alt="Imagem do task" />

          <strong>Você ainda não tem tarefas cadastradas</strong>
          <span>Crie tarefas e organize seus itens a fazer</span>
        </div>
      ) : (
        tasks.map((task) => {
          return (
            <Task
              key={task.id}
              task={task}
              onToggleTaskCompleted={toggleTaskCompleted}
              onDeleteTask={deleteTask}
            />
          );
        })
      )}
    </>
  );
}
