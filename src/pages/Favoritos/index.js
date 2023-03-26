import Banner from 'components/Banner';
import Titulo from 'components/Titulo';
import React from 'react'
import styles from './Favorito.module.css';

function Favoritos() {
  return (
    <>
            <Banner imagem={"favoritos"} />
            <Titulo>
                <h1>Meus Favoritos</h1>
            </Titulo>
            <section className={styles.cardsContainer}>
               
            </section>
        </>
  )
}

export default Favoritos