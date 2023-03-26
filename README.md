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

### Aula 4:
- Criar rotas dinâmicas;
- Enviar parâmetros via URL;
- Receber parâmetros com o hook useParams;
- Planejar rotas para URLs não existentes;
- Construir rotas aninhadas.

&nbsp;

### Aula 5:
- Fazer upload de um protótipo de API no Github;
- Hospedar o protótipo de API no My Json Server;
- Consumir APIs com o FetchAPI;
- Executar o deploy do projeto.

&nbsp;

----

&nbsp;

## Criação de um fake server json e consumo do mesmo pela aplicação:

### Foi feito um `Fake server json`:
    > Para a criação do mesmo foi feito um novo repositorio no GitHub com o nome <NomeDoProjeto>-api com um arquivo db.json com os dados do dataBase. Em segui foi passado peli 'MyJson Server' com a url `https://my-json-server.typicode.com/<Nome do meu perfil GitHub>/<Nome do repositorio da api>`

&nbsp;

### No projeto:
    > No projeto o import dos Videos do arquivo .json local foi bstituido por um `useEffect` que fez a requisição

~~~JavaScript
     const [videos, setVideos] = useState([]);

    useEffect(() =>{
        fetch('https://my-json-server.typicode.com/ThiagoZambelli/praticando-react-api/videos')
        .then(resposta => resposta.json())
        .then(dados =>{
            setVideos(dados)
        })
    }, [])
~~~

- > O segundo parametro com [ ], foi usado pra determinar quando o useEffect executaria a rquisição, ou seja, somente quando o Array estivesse vazio, fazendo com que seja apenas uma requisição.


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

&nbsp;


## Detalhe sobre a criação da pagina de Não Encontrado:

    > Todo path que ja não tiver uma rota específica vai car nessa pagina graças a:


  - ### Criação de uma rota com o path = *
  ~~~JavaScript
    <Routes>
      {/* pode-se usar o 'index' dentro do componente Route para determinar que esse é a rota index sem a necessidade de por path="/" */}
      <Route index element={<Inicio />} />  
      <Route path="/Favoritos" element={<Favoritos />} />
      <Route path="/:id" element={<Player /> } />
      <Route path="*" element={<NaoEncontrado />}   />
    </Routes>
  ~~~

  - ### Criação de um if na rota de player para que tudo que não esteja na lista de videos seja direcionado para pagina de Não Encontrado:

   ~~~JavaScript
     if(!video){
        return <NaoEncontrado />
    }
  ~~~

&nbsp;


## Detalhe sobre a de uma pagina base:

    > os componentes de Cabeçalho, Banner e Footer eram compartilhados por todas as paginas. Por esse motigo foi criado uma Pagina base com todos esses elementos e atribuido a ela a rota de "/". Assim todas as paginas carregadas dentro dela teriam os elementos compartilhados:

- #### Nas Rotas:
   ~~~JavaScript
     <Routes>
        <Route path="/" element={<PaginaBase />}>
          {/* pode-se usar o 'index' dentro do componente Route para determinar que esse é a rota index sem a necessidade de por path="/" */}
            <Route index element={<Inicio />} />
            <Route path="Favoritos" element={<Favoritos />} />
            <Route path=":id" element={<Player />} />
            <Route path="*" element={<NaoEncontrado />} />
        </Route>
      </Routes>
  ~~~

- #### Na Pagina Base:

~~~JavaScript

  <main>
    <Cabecalho />
    <FavoritosProvider>
        <Container>
            <Outlet />
        </Container>
    </FavoritosProvider>
    <Footer />
  </main>

  ~~~