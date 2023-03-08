import { Header } from "./components/Header";
import { InputTask } from "./components/InputTask";

import styles from "./App.module.css";

function App() {
  return (
    <>
      <Header />
      <InputTask />

      <div className={styles.viewerTasks}>
        <div className={styles.createdTask}>
          <strong>Tarefas criadas</strong>
          <span>0</span>
        </div>
        <div className={styles.concludedTask}>
          <strong>Concluídas</strong>
          <span>0</span>
        </div>
      </div>
    </>
  );
}

export default App;
