import Image from "next/image"

import {useKeenSlider} from 'keen-slider/react'


import { HomeContainer, Product } from "../styles/pages/home"

import camiseta1 from '../assets/camisetas/01.png'
import camiseta2 from '../assets/camisetas/02.png'
import camiseta3 from '../assets/camisetas/03.png'
import camiseta4 from '../assets/camisetas/04.png'

import 'keen-slider/keen-slider.min.css'

export default function Home() {
  const [slidRef] = useKeenSlider({
    slides:{
      perView: 3,
      spacing: 48,
    }
  })
  return (
    <HomeContainer ref={slidRef} className="keen-slider"> 
      <Product className="keen-slider__slide">
        <Image src={camiseta1} width={520} height={480} alt="" />

        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={camiseta2} width={520} height={480} alt="" />

        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={camiseta3} width={520} height={480} alt="" />

        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={camiseta4} width={520} height={480} alt="" />

        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
    </HomeContainer>
  )
}