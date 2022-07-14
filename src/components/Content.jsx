import styles from './Content.module.css';
import { Trash } from 'phosphor-react'

export function Content({task, onDeleteTask}) {
    
    function handleDeleteTask() {
        onDeleteTask();
    }

    return (
        <div className={styles.content}>
            <p>{task}</p>
            
            <button onClick={handleDeleteTask}>
                <Trash size={25} />
            </button>
            
        </div>
    );
}