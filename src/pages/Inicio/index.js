import Banner from 'components/Banner';
import Card from 'components/Card';
import Titulo from 'components/Titulo';
import { useEffect, useState } from 'react';
import styles from './Inicio.module.css';


function Inicio() {
    const [videos, setVideos] = useState([]);

    useEffect(() =>{
        fetch('https://my-json-server.typicode.com/ThiagoZambelli/praticando-react-api/videos')
        .then(resposta => resposta.json())
        .then(dados =>{
            setVideos(dados)
        })
    }, [])

    return (
        <>
            <Banner imagem={"home"} />
            <Titulo>
                <h1>Um lugar para guardar seus vídeos e filmes!</h1>
            </Titulo>
            <section className={styles.cardsContainer}>
                {/* Poderia ter sido passado como prop o elemento einteiro ficando <Card {...e} key={e.id} /> */}
                {videos.map((e) => {
                    return <Card
                        key={e.id}
                        id={e.id}
                        titulo={e.titulo}
                        capa={e.capa}
                    />
                })}
            </section>
        </>

    )
}

export default Inicio;