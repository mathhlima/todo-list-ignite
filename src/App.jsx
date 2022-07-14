import  styles from './App.module.css'
import { CreatedTasks } from './components/CreatedTasks'
import { Header } from './components/Header'
import { Task } from './components/Task'

function App() {
  

  return (
    
      <div className={styles.wrapper}>
        <Header />
        <Task />
      </div>
    
  )
}

export default App
