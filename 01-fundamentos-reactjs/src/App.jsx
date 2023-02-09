import { Header } from "./components/Header";
import {Post} from "./Post";

import './styles.css'

export function App() {
  return (
    <div>
      <Header />

      <Post
        author= "Danillo Rodrigues" 
        con
        tent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, laudantium esse nesciunt nemo fugiat asperiores ullam earum atque magnam explicabo, odit deleniti repudiandae quidem expedita eveniet, a eum. Exercitationem, optio."
      />
      <Post
        author= "Gabriel Buzzi" 
        content="Um novo post show de bola"
      />
    </div>
  )
}
