# Maison — Front-end

O **Maison** é uma aplicação web de gerenciamento de reservas, desenvolvida com React e integrada a uma API própria.

O projeto foi criado para colocar em prática conceitos de desenvolvimento Front-end, consumo de API e integração com Back-end e banco de dados.

## Tecnologias utilizadas

- React
- Vite
- JavaScript
- CSS Modules
- Axios
- React Hooks
- API REST

## Funcionalidades

- Visualização de reservas
- Busca de reservas
- Integração com API
- Consumo de dados através do Axios
- Interface responsiva
- Comunicação com o Back-end

## Integração com a API

O Front-end realiza requisições HTTP para a API do Maison utilizando Axios.

Exemplo:

```javascript
const resposta = await axios.get(`${import.meta.env.VITE_API_URL}/reservas`);
```

## Executando o projeto

Clone o repositório:

```bash
git clone URL_DO_REPOSITORIO
```

Entre na pasta do projeto:

```bash
cd maison-front
```

Instale as dependências:

```bash
npm install
```

Execute o projeto:

```bash
npm run dev
```

## Projeto

Este projeto foi desenvolvido para fins de estudo e portfólio, com foco em desenvolvimento Front-end e integração entre Front-end, API e banco de dados.

Desenvolvido por **Maria Albarado**.
