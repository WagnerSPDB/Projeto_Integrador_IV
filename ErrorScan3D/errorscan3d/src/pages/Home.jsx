import React from 'react'
import NavBar from '../components/NavBar'
import '../styles/Home.scss'
import snake from '../assets/snake.png';
import circle from '../assets/circle1.png'



function Home() {
  return (
    <div className='home-fundo' >

      <NavBar />
      <div className='home'>
        <div className='home-container1'>
          <div className='container1-conteudo'>
            <p className='container1-titulo'>
              Bem-vindo ao ErrorScan3D
            </p>
            <p className='container1-texto'>
              Esta aplicação foi desenvolvida para ajudar você a identificar problemas em impressões 3D de forma rápida e precisa.
            </p>
            <img src={snake} alt="" className='container1-img' />
          </div>

        </div>
        <div className='posicao-img'>
          <div className='home-container2'>
            <p className='container2-texto'>
              Envie uma imagem, visualize os resultados e otimize seus processos de fabricação!
            </p>
            <img src={circle} alt="" className='container2-img' />
          </div>
        </div>



      </div>
    </div>
  )
}

export default Home
