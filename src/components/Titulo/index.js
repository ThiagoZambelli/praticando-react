import React from 'react'
import style from './Titulo.module.css';

function Titulo({children}) {
  return (
    <div className={style.titulo}>
        {children}
    </div>
  )
}

export default Titulo;