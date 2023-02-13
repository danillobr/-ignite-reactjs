import styles from './Sidebar.module.css';

export function Sidebar(){
    return (
        <aside className={styles.sidebar}>
            <img
                className={styles.cover}
                src="https://www.shutterstock.com/image-vector/one-piece-character-luffy-nika-260nw-2210725005.jpg"
            />
        
            <div className={styles.profile}>
                <strong>Nika</strong>
                <span>Pirata</span>
            </div>

            <footer>
                <a href="#">
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    );
}