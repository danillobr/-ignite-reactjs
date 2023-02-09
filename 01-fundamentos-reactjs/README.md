<p align="center">
  <img src="../.github/capa-ignite-reactjs.png" alt="Ignite ReactJS">
</p>

<br>

<h1 align="center">
  Fundamentos do ReactJS
</h1>

<br>

### Introdução
1. Conceitos importantes do ReactJS que serão vistos:
   - Componentes;
   - Propriedades;
   - Estado;
   - Imutabilidade;
   - Hooks;
   - Fluxo de renderização;
   - Estilização;
   - TypeScript.
2. Projeto que será desenvolvido:
   - Ignite Feed;
   - Uma "abstração" de uma rede social;
   - Posts, comentários e aplaudir;
   - Style guide no Figma.

### Fundamentos do ReactJS
1. O que é?
   - Uma biblioteca front-end para construção de interfaces interativas;
   - Interfaces web, mobile, dispositivos de Smart TV, realidade virtual e etc.
2. Rendering Patterns (padrões de renderização):
   - Início da internet as páginas eram estáticas, apenas com arquivos HTML.
   - Server Side Rendering (SSR):
     - Back-end e front-end são uma única aplicação;
     - Servidor possui o back-end responsável pela construção do front-end;
     - Ao receber uma requisição do usuário, o servidor processa esta requisição, e devolve arquivos HTML, CSS e JS.
   - Single Page Applicartion (SPA):
     - Back-end e front-end são aplicações diferentes e separadas;
     - O back-end não é o responsável pela criação do front-end;
     - Back-end retorna dados em JSON a partir das requisições;
     - Ganhos de perfomance e manutenção dos projetos;
     - ReactJS, Angular, Vue, Svelte, Aurelia e etc.
3. Link útil:
   - [ReactJS](https://reactjs.org/)

### Bundlers e compilers
1. Compilers:
   - São compiladores de código;
   - Ferramentas de "conversão" de códigos em diversos outros formatos;
   - Babel converte a "sintaxe atual" do JavaScript em sintaxe que o navegador "entenda".
2. Bundlers:
   - Responsável por permitir a importação de módulos JavaScript, que estão em arquivos diferentes;
   - Webpack.
3. Outras alternativas que não usam compilers/bundlers:
   - Vite e Snowpack.
4. Links úteis:
   - [Babel](https://babeljs.io/)
   - [Webpack](https://webpack.js.org/)
   - [Vite](https://vitejs.dev/)

### Criando um projeto ReactJS
1. Links úteis:
   - [Gerenciador de versão do Node.js](https://github.com/tj/n)
   - [Iniciando com o Vite](https://vitejs.dev/guide/)
   - [Repositório do projeto](https://github.com/rocketseat-education/ignite-reactjs-01-fundamentos-react/commit/8da5cae)
2. Lista de comandos:
   - Criar um novo projeto:
     ```shell
     npm create vite@latest
     ```
   - Instalar as dependências:
     ```shell
     npm i
     ```
   - Executar:
     ```shell
     npm run dev
     ```

### Componentes
1. Definição:
   - Abordagem que permite desacoplar e reutilizar partes da interface da aplicação em diversos lugares no projeto;
   - Contribui para a manutenção do código;
   - Um componente é uma função que retorna um "elemento" em HTML;
   - JSX (JavaScript e XML) contém a sintaxe de arquivos HTML;
2. Default exports *vs* named exports:
   - Default exports define o nome do componente durante a sua importação;
   - Named exports define o nome do componente durante a sua exportação.

### Propriedades
1. Definição:
   - São informações que podem ser passadas para um componente.
2. Pontos importantes:
   - Dentro do contexto do ReactJS, um atributo de um componente é chamado de propriedade;
   - Com uso dos componentes é possível reaproveitar o HTML, a estilização e o funcionamento do mesmo com o JavaScript;
   - As propriedades alteram elementos visuais de um componente, sem perder a flexibilidade.

### CSS modules
1. Links úteis:
   - [CSS modules](https://github.com/css-modules/css-modules)
   - [Vite/CSS modules](https://vitejs.dev/guide/features.html#css-modules)
   - [Protótipo do Ignite Feed/Figma](https://www.figma.com/community/file/1113573231685349036)

### Componente: Avatar
1. Existem 2 momentos importantes para a criação de um componente:
   - Quando há repetição de determinadas estruturas (lógica) nas telas;
   - E quando é possível separar essas estruturas (lógica) de um componente maior, sem que este componente pare de funcionar.
2. Don't Repeat Yourself (DRY).
