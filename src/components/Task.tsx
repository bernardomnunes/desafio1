import { Trash } from "phosphor-react";

import { Tasks } from "../App";

import checkedImage from "../assets/checkedImage.svg";

import styles from "./Task.module.css";

interface TaskProps {
  task: Tasks;
  onToggleTaskCompleted: (taskId: string) => void;
  onDeleteTask: (taskId: string) => void;
}

export function Task({ task, onToggleTaskCompleted, onDeleteTask }: TaskProps) {
  return (
    <div className={styles.taskContainer}>
      <label>
        <input
          type="checkbox"
          checked={task.isCompleted}
          onChange={() => onToggleTaskCompleted(task.id)}
        />
        <p
          className={
            task.isCompleted
              ? styles.taskContentLineThrough
              : styles.taskContent
          }
        >
          {task.content}
        </p>
      </label>
      <button onClick={() => onDeleteTask(task.id)}>
        <Trash />
      </button>
    </div>
  );
}
