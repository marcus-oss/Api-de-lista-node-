// Importa o Express e o Controller
const express = require('express');
const contatoController = require('../controllers/contatoController');

// Cria o roteador
const router = express.Router();

// Define as rotas e associa às funções do controller
router.post('/contatos', contatoController.adicionarContato);
router.get('/contatos', contatoController.listarContatos);
router.patch('/contatos/:id', contatoController.atualizarContato);
router.delete('/contatos/:id', contatoController.excluirContato);

// Exporta o roteador
module.exports = router;
