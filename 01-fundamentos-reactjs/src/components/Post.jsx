import styles from './Post.module.css'

export function Post(){
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img 
                        className={styles.avatar}
                        src="https://i.pinimg.com/originals/c7/91/4f/c7914fe9d034a01769502de04c4a0e9b.jpg"
                    />
                    <div className={styles.authorInfo}>
                        <strong> Roronoa Zoro </strong>
                        <span> Pirata </span>
                    </div>
                </div>

                <time title="13 de Fevereiro às 23:57h" dateTime='2023-02-13 23:57:39'>Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p> Fala galeraa 👋 </p>
                <p> Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀 </p>
                <p>👉 <a href="#"> jane.design/doctorcare </a></p>
                <p>
                    <a href="#"> #novoprojeto </a>
                    <a href="#"> #nlw </a>
                    <a href="#"> #rocketseat </a>             
                </p>
            </div>
        </article>
    );
}