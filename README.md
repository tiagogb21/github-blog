# GitHub Blog - Desafio Ignite

Este projeto foi desenvolvido como parte do Desafio 03 da trilha de ReactJS do Ignite da Rocketseat. O objetivo foi criar um blog pessoal consumindo a API do GitHub, onde os posts são representados pelas issues de um repositório, com funcionalidades de listagem, filtragem e exibição detalhada.

## 💻 Funcionalidades

Exibição dos dados do perfil do GitHub, como imagem, nome e seguidores.
Listagem de issues do repositório com título e resumo do conteúdo.
Filtro de busca para facilitar a localização de posts específicos.
Exibição detalhada de um post completo (issue) em uma página dedicada.

## 🚀 Tecnologias Utilizadas

* ReactJS: Biblioteca JavaScript para criação de interfaces de usuário.
* Vite: Ferramenta de build rápida para desenvolvimento frontend.
* TypeScript: Superset de JavaScript que adiciona tipagem estática.
* Axios: Cliente HTTP para realizar requisições à API do GitHub.
* React Hook Form: Biblioteca para manipulação de formulários.
* React Router DOM: Gerenciamento de rotas e navegação.
* React Markdown: Utilizado para renderizar conteúdo de markdown das issues.

## 🛠️ Como Executar o Projeto

Clone o repositório:
```bash
git clone https://github.com/seu-usuario/github-blog.git
```
Acesse a pasta do projeto:
```bash
cd github-blog
```
Instale as dependências:
```bash
npm install
# ou
yarn install
```

Configure suas variáveis de ambiente:

Crie um arquivo .env.local com sua chave do GitHub, caso queira mais requisições por minuto:

```bash
VITE_GITHUB_TOKEN=your-token
```
Execute o projeto:
```bash
npm run dev
# ou
yarn dev
```

Acesse o projeto em http://localhost:3000.

## 📚 Layout

O layout do projeto foi baseado no design fornecido no Figma. Para acessá-lo, clique aqui.

## 📄 Licença

Este projeto está sob a licença MIT. Para mais detalhes, veja o arquivo LICENSE.