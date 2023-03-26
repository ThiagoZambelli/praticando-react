import React from 'react'
import style from './Card.module.css'
import favoritar from './favoritar.png';
import desFavoritar from './desFavoritar.png';

function Card({capa,titulo}) {
  return (
    <div className={style.container}>
        <img
            src={capa}
            alt={titulo}
            className={style.capa}
        />
        <h2>{titulo}</h2>
        <img
            src={desFavoritar}
            alt='Icone de Favorito'
            className={style.favoritar}
        />
        
    </div>
  )
}

export default Card