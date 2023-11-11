# Origin Films

## Descrição da Aplicação

A "Origin Films" é uma aplicação construída para fins de portfólio, que consome uma API de filmes disponibilizada pelo TMDB.

### Principais Recursos

- Listagem de filmes
- Possibilidade de trocar os filmes por categoria

## Instalação

1. Faça o clone do projeto em sua máquina.
2. Execute `npm i` ou `yarn` para instalar as dependências.
3. Inicie o Metro com `yarn start` ou `npm start`.
4. Execute a aplicação com `npm run android` ou `yarn android` para Android, ou `npm run ios` ou `yarn ios` para iOS.

### Configuração

- Crie uma conta no site [The Movie Database (TMDb)](https://www.themoviedb.org/).
- Copie sua chave de API.
- Cole a chave no campo `TMDB_ACCESS_TOKEN` do arquivo `.env` na raiz do projeto.

## Uso

Certifique-se de ter configurado a chave de API do TMDb no arquivo `.env`. Em seguida, siga os passos abaixo:

1. Inicie o Metro com `yarn start` ou `npm start`.
2. Execute a aplicação com `npm run android` ou `yarn android` para Android, ou `npm run ios` ou `yarn ios` para iOS.

## Estrutura do Projeto

- `src/`: Código-fonte da aplicação.
- `src/components/`: Componentes reutilizáveis.
- `src/screens/`: Telas da aplicação.
- `src/hooks/`: Hooks personalizados.
- `src/types/`: Tipagem geral do projeto.
- `src/theme/`: Configurações de tema do projeto.
- `src/config/`: Arquivos de configurações do projeto.
- `src/utils/`: Arquivos de utilidades no geral.
- ...

## Tecnologias Utilizadas

- React Native
- React Query para requisições à API e gerenciamento de estado das listas de filmes e categorias
- Native Base para estilização e montagem de componentes
- React-native-vector-icons para exibição de ícones
- TypeScript

## Licença

N/A (Não se aplica no momento).

## Contato

Para dúvidas ou problemas, entre em contato pelo e-mail: pedrosodredev@gmail.com.
