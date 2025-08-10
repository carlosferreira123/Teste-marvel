
Marvel Comics Collection 🦸‍♂️
Um projeto front-end desenvolvido em React com TypeScript que consome a API da Marvel para exibir quadrinhos, personagens e gerenciar um carrinho de compras.
Configuração Inicial
 Iniciei o projeto utilizando Vite com template TypeScript para maior eficiência
 Configurei o ambiente de desenvolvimento com:
 -Dependencias proposta pelo o projeto 

 Estruturação do Projeto:
 - Adotei uma arquitetura modular organizada em:
 - components/ para elementos reutilizáveis
 - pages/ para as rotas principais
 - services/ para integração com a API Marvel
 - store/ para gerenciamento de estado com Redux Toolkit

 Desenvolvimento Iterativo:
 - Implementei primeiro a listagem básica de quadrinhos
 - Adicionei progressivamente:
 - Paginação de resultados
 - Sistema de carrinho
 - Página de detalhes
 
 Gerenciamento de Tempo:
 - Priorizei as funcionalidades essenciais do escopo inicial

 Desafios Técnicos
 - Enfrentei problemas com a chave da API Marvel:




--------------------------------------------------------------------------------------------------------------------------------------------------------------

🚀 Tecnologias Utilizadas
React (Vite + TypeScript)

Redux Toolkit (Gerenciamento de estado global)

React Query (@tanstack/query) (Cache e requisições à API)

Styled Components (Estilização)

React Router (Navegação entre páginas)

API da Marvel (Dados dos quadrinhos)
--------------------------------------------------------------------------------------------------------------------------------------------------------------

✨ Funcionalidades
✔ Catálogo de Quadrinhos

Listagem dos quadrinhos mais recentes da Marvel

✔ Detalhes do Quadrinho

Página dedicada com informações como capa, descrição, preço e personagens envolvidos

✔ Carrinho de Compras

Adicionar/remover itens

Quantidade ajustável

Valor total calculado automaticamente

✔ Responsividade

Design adaptável para mobile e desktop

--------------------------------------------------------------------------------------------------------------------------------------------------------------

Estrutura do Prjeto 
src/
├── components/          # Componentes reutilizáveis da UI
├── data/                # Camada de abstração de dados
├── hooks/               # Custom Hooks
├── lib/                 # Utilitários e helpers
├── pages/               # Componentes de página
├── services/            # Comunicação com APIs externas
├── store/               # Configuração do Redux (estado global)
├── styles/              # Estilos globais e temas
├── types/               # Tipos TypeScript
└── utils/               # Funções utilitárias (opcional, pode ficar em lib)
├── App.tsx              # Configuração principal
└── main.tsx             # Ponto de entrada