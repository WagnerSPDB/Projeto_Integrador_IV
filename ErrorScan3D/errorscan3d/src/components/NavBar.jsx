import React from 'react'
import '../styles/NavBar.scss'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div className='navbar'>
      <Link to='/' className='link'>
        <div>
          ErrorScan3D
        </div>
      </Link>
      <div className='navbar-centro'>
      <Link to='/' className='link'>
        <div>
          Home
        </div>
      </Link>
      <Link to='/projects' className='link'>
        <div>
          Projetos
        </div>
      </Link>
      <Link to='/' className='link'>
        <div>
          Sobre nós
        </div>
      </Link>
      </div>
      <Link to='/upload' className='link'>
          <button className='link-botao' >
            Nova Imagem +
          </button>
      </Link>
    </div>
  )
}

export default NavBar
