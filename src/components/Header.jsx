import styles from './Header.module.css';
import Logo from '../assets/Logo.svg'

export function Header() {
    return (
        
        <div className={styles.header}>
           
           <img className={styles.logo} src={Logo} alt="" />
        </div>
    )
}