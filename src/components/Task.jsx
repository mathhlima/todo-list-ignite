import { useState } from 'react';
import styles from './Task.module.css'
import { PlusCircle } from 'phosphor-react'
import { Trash } from 'phosphor-react'
import {Content} from '../components/Content';

export function Task() {

    const [tasks, setTasks] = useState([
    ])

    const [newTask, setNewTask] = useState('');


    function handleCreateNewTask() {
        event.preventDefault();
        setTasks([...tasks, newTask])
        setNewTask('');
    }

    function handleNewTaskChange() {
        event.target.setCustomValidity('')
        setNewTask(event.target.value)

    }

    function deleteTask(taskToDelete) {
        console.log(taskToDelete, 'task to delete')
        const tasksWithoutDeletedOne = tasks.filter(task => {
            return task !== taskToDelete
        })

        setNewTask(tasksWithoutDeletedOne);
    }

    return (
        <div className={styles.task}>


            <div className={styles.newTask}>
                <form onSubmit={handleCreateNewTask} className={styles.form}>
                    <textarea
                        name="task"
                        placeholder="Adicione uma nova tarefa"
                        onChange={handleNewTaskChange}
                        value={newTask}
                    />
                    <button type="submit" disabled={newTask.length === 0} className={styles.button}>
                        <strong>Criar</strong>
                        <PlusCircle size={20} />
                    </button>
                </form>
            </div>



            <div className={styles.createdTask}>
                <div className={styles.summary}>
                    <strong className={styles.created}>Tarefas criadas 0</strong>
                    <strong className={styles.finished}>Concluídas 0</strong>
                </div>

                <div className={styles.content}>


                    {tasks.map(task => {
                        return <Content key={task} task={task} onDeleteTask={deleteTask}/>
                    })}
                    
                </div>


            </div>

        </div>




    );
}