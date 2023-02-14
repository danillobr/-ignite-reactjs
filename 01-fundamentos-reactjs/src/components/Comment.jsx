import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';

export function Comment(){
    return (
        <div className={styles.comment}>
            <img 
                src="https://i1.sndcdn.com/artworks-2HUFT0g70vKshPTQ-akDLSw-t500x500.jpg"
            />
            <div className={styles.CommentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Vismoke Sanji</strong>
                            <time title="13 de Fevereiro às 23:57h" dateTime='2023-02-13 23:57:39'>Cerca de 1h atrás</time>
                        </div>

                        <button title="Deletar comentário">
                            <Trash size={20} />
                        </button>

                    </header>

                    <p>Muito bom Devon, parabéns!! 👏👏</p>
                </div>           

                <footer>
                    <button>
                        <ThumbsUp size={20} />
                        Aplaudir <span>9</span>
                    </button> 
                </footer>
            </div>
        </div>
    );
}