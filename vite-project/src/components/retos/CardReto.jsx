import React from 'react'

const CardReto = ({description,dificultad,empresa,id, onClick}) => {

    const handleButton = (evento)=>{
        onClick(evento)
    }
  return (
    <>
       <li key={id}>
              <h3>{empresa?.nombre}</h3>
              <p>{description}</p>
              <p>{dificultad}</p>
              <a href={`./retoSolucion/${id}`} className="comenzar-reto" onClick={handleButton} >Comenzar Reto</a>
        </li>
    </>
  )
}

export default CardReto
