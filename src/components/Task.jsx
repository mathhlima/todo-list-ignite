import styles from './Task.module.css'
import { PlusCircle } from 'phosphor-react'

export function Task() {
    return (
        <div className={styles.task}>
            
            <form className={styles.form}>
                <textarea
                    placeholder="Adicione uma nova tarefa"
                />
                <button className={styles.button}>
                    <strong>Criar</strong>
                    <PlusCircle size={20} />
                </button>
            </form>

            
        </div>
    );
}