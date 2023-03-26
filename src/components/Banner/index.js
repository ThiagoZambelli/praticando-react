import React from 'react'
import style from "./Banner.module.css";

function Banner({imagem}) {
  return (
    <div
        className={style.banner}
        style={{backgroundImage:`url('/assets/banner-${imagem}.png')`}}
    >
        
    </div>
  )
}

export default Banner;