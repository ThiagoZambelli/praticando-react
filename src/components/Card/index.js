import React from 'react'
import style from './Card.module.css'
import favoritar from './favoritar.png';
import desFavoritar from './desFavoritar.png';
import { useFavoritoContext } from 'contextos/Favoritos';
import { Link } from 'react-router-dom';

function Card({ id, capa, titulo }) {
  const { favorito, adicionarFavorito } = useFavoritoContext();
  const ehFavorito = favorito.some((fav) => fav.id === id);
  const icone = !ehFavorito ? desFavoritar : favoritar;

  return (
    <div className={style.container}>
      <Link className={style.link} to={`/${id}`}>
        <img
          src={capa}
          alt={titulo}
          className={style.capa}
        />
        <h2>{titulo}</h2>
      </Link>
      <img
        src={icone}
        alt='Icone de Favorito'
        className={style.favoritar}
        onClick={() => {
          adicionarFavorito({ id, capa, titulo})
        }}
      />

    </div>
  )
}

export default Card