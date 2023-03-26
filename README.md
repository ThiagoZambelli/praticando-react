<img align="right" width="50%" style="margin-top:-20px" src="public/eu.png">

&nbsp;
&nbsp;

<div dsplay="inline-block">
 
 <h1 align="left">Bem-Vindo ao Projeto -> Praticando React </h1>
 <h2 align="left">Feito por : Thiago Zambelli</h2>
 
  <a href="https://www.linkedin.com/in/thiagozambelli">
    <img width="80px" src="https://i.ibb.co/RyZx12b/linkedin.png" alt="linkedin" style="vertical-align:top;">
  </a>
</div>

&nbsp;

----

&nbsp;

## Tecnologias Utilizadas:

&nbsp;

<img width="50px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" style="margin-left:5px"><img width="50px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" alt="JavaScrip" style="margin-left:5px" ><img width="50px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg" alt="CSS 3" style="margin-left:5px"><img width="50px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg" alt="HTML 5" style="margin-left:5px">

&nbsp;

----

&nbsp;

----
## O Que Foi Estudado:

&nbsp;

### Aula 1:
- Analisar Figma;
- Criar um projeto React;
- Identificar arquivos que podem ser removidos da base do projeto React;
- Configurar diretório utilizado no curso com o jsconfig.json;
- Criar componentes (Cabecalho e CabecalhoLink);
- Estilizar componentes com módulo CSS;
- Praticar a criação de componentes (Rodapé).

&nbsp;

### Aula 2:
- Criar novos componentes;
- Construir novas rotas;
- Compartilhar informações entre componentes com props e children;
- Importar dados de um arquivo json;
- Usar o método .map para listar componentes.

&nbsp;

### Aula 3:
- Criar contextos através da ContextAPI com o createContext;
- Permitir o uso de contextos nos elementos com o Provider e useContext;
- Construir hooks personalizados;
- Procurar valores dentro de um array com o método some;
- Remover itens de um array com o método splice e auxílio do indexOf;
- Instalar e usar a extensão React Context DevTool.

&nbsp;

----

&nbsp;


## Detalhe sobre `Index` Route:

    > Pode-se usar o `index` dentro do componente Route para determinar que esse é a rota index sem a necessidade de por `path="/"`

&nbsp;


## Detalhe sobre a criação do Card:

    > Na criação dos Cards havia 2 opçoes, passas como prop cada uma das propriedades de cada elemento JSON ou passar o elemento inteiro mas desmanchado :`

  - Possibilidade 1:

    ~~~JavaScript
     {videos.map((e) => {
                    return <Card
                        key={e.id}
                        id={e.id}
                        titulo={e.titulo}
                        capa={e.capa}
                    />
      })}
    ~~~

  - Possibilidade 2:
  
    ~~~JavaScript
     {videos.map((e) => {
                    return <Card
                        key={e.id}
                        {...e}
                    />
      })}
    ~~~


&nbsp;


## Detalhe sobre a criação de Contexto:

    > A cominicação no React é de elemento pai para filho apenas. Para que aja uma counicação fora desse escopo é utilizado a criação de contexto.    
  - #### Essa criação foi feita no `src/contextos/Favoritos.js`

  - ### Criação do Context:

    ~~~JavaScript
     import { createContext, useState } from "react";

      export const FavoritosContext = createContext();
      FavoritosContext.displayName = "Favoritos";

      export default function FavoritosProvider({children}){
      const [favoritos, setFavoritos] = useState([]);

      return(
        <FavoritosContext.Provider
            value={{favoritos, setFavoritos}}>
                {children}
            </FavoritosContext.Provider>
        )
      }
    ~~~
