// Importa os pacotes
const express = require('express');
const cors = require('cors');
require('dotenv').config(); // Carrega as variáveis do .env

// Importa as rotas
const contatoRoutes = require('./routes/contatoRoutes');

// Inicializa o Express
const app = express();

// --- Middlewares ---
// Habilita o CORS para permitir requisições de outras origens
app.use(cors());
// Permite que o Express entenda requisições com corpo em formato JSON
app.use(express.json());

// --- Rotas ---
// Diz para a aplicação usar as rotas definidas no arquivo contatoRoutes
app.use('/api', contatoRoutes); // Prefixo /api para todas as rotas de contatos

// Define a porta a partir do arquivo .env ou usa 3000 como padrão
const PORT = process.env.API_PORT || 3000;

// Inicia o servidor e o faz "escutar" na porta definida
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
