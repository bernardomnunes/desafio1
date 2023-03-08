import { ChangeEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import plusButton from "../assets/plusButton.svg";

import styles from "./InputTask.module.css";

interface Tasks {
  id: string;
  content: string;
  isCompleted: boolean;
}

export function InputTask() {
  const [tasks, setTasks] = useState<Tasks[]>([]);
  const [inputValue, setInputValue] = useState("");

  function handleInputValue(event: ChangeEvent<HTMLInputElement>) {
    setInputValue(event.target.value);
  }

  function handleSubmitTask() {
    setTasks([
      ...tasks,
      { id: uuidv4(), content: inputValue, isCompleted: false },
    ]);

    setInputValue("");
  }

  return (
    <div className={styles.inputContainer}>
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        onChange={handleInputValue}
        value={inputValue}
      />
      <button onClick={handleSubmitTask}>
        Criar
        <img src={plusButton} />
      </button>
    </div>
  );
}
