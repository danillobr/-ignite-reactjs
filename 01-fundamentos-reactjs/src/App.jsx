import { Header } from "./components/Header";
import {Post} from "./Post";
import {Sidebar} from "./components/Sidebar";

import styles from './App.module.css';

import './global.css'


export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}> 
        <Sidebar />
        <main>   
          <Post
            author= "Danillo Rodrigues" 
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, laudantium esse nesciunt nemo fugiat asperiores ullam earum atque magnam explicabo, odit deleniti repudiandae quidem expedita eveniet, a eum. Exercitationem, optio."
          />
          <Post
            author= "Gabriel Buzzi" 
            content="Um novo post show de bola"
          />
        </main>
      </div>     
    </div>
  )
}
