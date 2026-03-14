# Lista de Compras — CRUD

Aplicação fullstack para gerenciamento de uma lista de compras, com backend em Node.js/TypeScript e frontend em HTML puro.

---

## Tecnologias

- **TypeScript** — tipagem estática
- **Node.js + Express** — servidor HTTP e rotas da API
- **MongoDB + Mongoose** — banco de dados NoSQL
- **CORS + Body-Parser** — middlewares HTTP
- **ts-node** — execução direta de TypeScript

---

## Estrutura do Projeto

```
atv5crud/
├── src/
│   ├── controllers/
│   │   └── shoppingController.ts
│   ├── models/
│   │   └── shoppingModel.ts
│   ├── routes/
│   │   └── shoppingRoutes.ts
│   ├── public/
│   │   └── index.html
│   └── server.ts
├── tsconfig.json
└── package.json
```

---

## Pré-requisitos

- Node.js instalado
- MongoDB rodando localmente na porta `27017`
- Banco de dados `shopping-list` com a collection `shoppingitems`

---

## Como rodar

```bash
# Instalar dependências
npm install

# Iniciar o servidor
npm start
```

Acesse em: [http://localhost:3000](http://localhost:3000)

---

## Endpoints da API

| Método | Rota | Descrição |
|--------|------|-----------|
| GET | `/api/items` | Lista todos os itens |
| POST | `/api/items` | Cria um novo item |
| PUT | `/api/items/:id` | Atualiza um item |
| DELETE | `/api/items/:id` | Remove um item |

---

## Funcionalidades

- Adicionar produto com nome e valor
- Listar todos os produtos cadastrados
- Editar nome e valor de um produto
- Excluir produto da lista
