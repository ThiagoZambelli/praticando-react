import style from './Container.module.css';

import React from 'react'

function Container({children}) {
  return (
    <section className={style.container} >
        {children}
    </section>
  )
}

export default Container