import React from 'react'
import { Link } from 'react-router-dom';
import style from "./Footer.module.css";
import eu from "./eu.png";

function Footer() {
  return (
    <footer className={style.footer}>
        <p>
            Feito por:        
        </p>
        <Link className={style.link} to={'https://www.linkedin.com/in/thiagozambelli'}>Thiago Zambelli</Link>
        <img src={eu} alt="A mini versão do criador" />
    </footer>
  )
}

export default Footer