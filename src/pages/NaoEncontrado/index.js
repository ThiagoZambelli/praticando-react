import style from './NaoEncontrado.module.css'

import React from 'react'

function NaoEncontrado() {
  return (
    <section className={style.container}>
        <h2>Ops!</h2>
        <p>Pagina não ecncontrada.</p>
    </section>
  )
}

export default NaoEncontrado