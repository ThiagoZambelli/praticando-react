import Banner from 'components/Banner';
import Card from 'components/Card';
import Titulo from 'components/Titulo';
import { useFavoritoContext } from 'contextos/Favoritos';
import React from 'react'
import styles from './Favorito.module.css';

function Favoritos() {
  const {favorito} = useFavoritoContext();

  return (
    <>
            <Banner imagem={"favoritos"} />
            <Titulo>
                <h1>Meus Favoritos</h1>
            </Titulo>
            <section className={styles.cardsContainer}>
              {favorito.map((fav) => {
                    return <Card
                        key={fav.id}
                        {...fav}
                    />
                })}               
            </section>
        </>
  )
}

export default Favoritos