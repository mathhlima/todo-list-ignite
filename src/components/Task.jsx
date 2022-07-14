import { useState } from 'react';
import styles from './Task.module.css'
import { PlusCircle } from 'phosphor-react'
import { Trash } from 'phosphor-react'

export function Task() {

    const [tasks, setTasks] = useState([
        'teste'
    ])

    const [newTask, setNewTask] = useState('');



    function handleCreateNewTask() {
        event.preventDefault();
        //console.log(event.target.value)
    }

    function handleNewTaskChange() {
        setNewTask(event.target.value)

    }

    return (
        <div className={styles.task}>


            <div className={styles.newTask}>
                <form onSubmit={handleCreateNewTask} className={styles.form}>
                    <textarea
                        name="task"
                        placeholder="Adicione uma nova tarefa"
                        onChange={handleNewTaskChange}
                    />
                    <button className={styles.button}>
                        <strong>Criar</strong>
                        <PlusCircle size={20} />
                    </button>
                </form>
            </div>



            <div className={styles.createdTask}>
                <div className={styles.summary}>
                    <strong className={styles.created}>Tarefas criadas 0 </strong>
                    <strong className={styles.finished}>Concluídas 0 </strong>
                </div>

                <div className={styles.content}>


                    {tasks}
                    <Trash />
                </div>


            </div>

        </div>




    );
}