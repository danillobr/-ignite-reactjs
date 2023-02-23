import { Header } from "./components/Header";
import {Post} from "./components/Post";
import {Sidebar} from "./components/Sidebar";

import styles from './App.module.css';

import './global.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://i.pinimg.com/originals/c7/91/4f/c7914fe9d034a01769502de04c4a0e9b.jpg',
      name: 'Roronoa Zoro',
      role: 'Pirata'
    },
    content: [
      {
        type: 'paragraph',
        content: 'Fala galeraa 👋'
      },

      {
        type: 'paragraph',
        content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'
      },

      {
        type: 'link',
        content: '👉 jane.design/doctorcare'
      }
        
      // <a href="#"> #novoprojeto </a>
      // <a href="#"> #nlw </a>
      // <a href="#"> #rocketseat </a>             
    ],
    publishedAt: new Date('2023-02-13 23:57:39'),
  },

  {
    id: 2,
    author: {
      avatarUrl: 'https://lh3.googleusercontent.com/Q3E9kTWwLlA4m-49ph6Vmz157mfnGUHIgUg1hicUuZQu7mUzclYag0G55DVAPKvGxXCcknerA4_Xv468rfZLQVgnKuMIy_p-sp16wwU',
      name: 'Usopp',
      role: 'Pirata'
    },
    content: [
      {
        type: 'paragraph',
        content: 'Fala galeraa 👋'
      },

      {
        type: 'paragraph',
        content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'
      },

      {
        type: 'link',
        content: '👉 jane.design/doctorcare'
      }
        
      // <a href="#"> #novoprojeto </a>
      // <a href="#"> #nlw </a>
      // <a href="#"> #rocketseat </a>             
    ],
    publishedAt: new Date('2023-02-16 11:54:22'),
  }
]

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}> 
        <Sidebar />
        <main>   
          {posts.map(post => {
            return (
              <Post 
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>     
    </div>
  )
}
