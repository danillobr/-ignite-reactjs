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
      avatarUrl: 'https://media.cdnws.com//_i/136023/p%7B1000%7D-54071/47/71/10-choses-savoir-usopp-boutique-one-piece-1.jpeg',
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
                key={post.id}
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
