import React from 'react'
import './headerHome.css';
import { useNavigate } from 'react-router-dom';

const HeaderHome = ({data}) => {
  const navigate = useNavigate();

  const handleClick=()=>{
    
    navigate(`/home/progreso`)
  }


 
  return (
    <>
    <header className='headerHomeUsers'>
      <h1>JobLink</h1> 
      <nav>
        <ul>
          <li><a href="#">Ver Retos</a></li>
          <li><a href='#' onClick={handleClick}>Ver Progreso</a></li>
        </ul>
      </nav> 
    </header>
    </>
  )
}

export default HeaderHome
