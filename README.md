# 🛍️ Mini E-commerce React

Este é um projeto de um e-commerce simples desenvolvido com **React**. Ele simula um carrinho de compras, onde é possível adicionar, atualizar e remover produtos.

## 🚀 Funcionalidades

- Listagem de produtos com imagem, nome e preço
- Seleção de quantidade antes de adicionar ao carrinho
- Carrinho de compras com:
  - Adição de itens
  - Atualização de quantidade
  - Remoção de produtos
  - Cálculo do total da compra
- Persistência do carrinho mesmo após recarregar a página
- Feedback visual ao adicionar produto ao carrinho

## 🧪 Tecnologias utilizadas

- React
- React Router
- JavaScript (ES6+)
- CSS
- JSON Server (para simular uma API)
- localStorage (para persistência do carrinho)

## 📦 Como rodar o projeto localmente

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/meu-ecommerce-react.git

   ```

2. Instale as dependências:

   ```bash
   npm install

   ```

3. Inicie o JSON Server:

   ```bash
   npx json-server --watch db.json --port 3001

   ```

4. Inicie a aplicação React:

   ```bash
   npm start

   ```
