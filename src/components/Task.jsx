import styles from './Task.module.css'

export function Task() {
    return (
        <div className={styles.task}>
            
            <form className={styles.form}>
                <textarea
                    placeholder="Adicione uma nova tarefa"
                />
                <button className={styles.button}>
                    Criar
                </button>
            </form>

            
        </div>
    );
}