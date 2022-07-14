import styles from './Content.module.css';
import { Trash } from 'phosphor-react'

export function Content({task, onDeleteTask}) {
    
    function handleDeleteTask() {
        onDeleteTask();
        console.log(event.target.value, 'delete task')
    }

    return (
        <div className={styles.content}>
            <p>{task}</p>
            
            <button onClick={handleDeleteTask} title="Deletar task">
                <Trash size={25} />
            </button>
            
        </div>
    );
}