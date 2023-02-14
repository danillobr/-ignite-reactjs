import { PencilLine } from 'phosphor-react';

import styles from './Sidebar.module.css';

export function Sidebar(){
    return (
        <aside className={styles.sidebar}>
            <img
                className={styles.cover}
                src="https://lafrikileria.com/blog/wp-content/uploads/2021/07/one-piece-logo-640x360.jpg"
            />
        
            <div className={styles.profile}>

                <img
                    className={styles.avatar} 
                    src = "https://www.shutterstock.com/image-vector/one-piece-character-luffy-nika-260nw-2210725005.jpg"
                
                />            
                <strong>Nika o Deus do Sol</strong>
                <span>Pirata</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20} />
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    );
}