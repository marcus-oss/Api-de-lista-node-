const express = require('express');
const contatoController = require('../controllers/contatoController');

const router = express.Router();

router.post('/contatos', contatoController.adicionarContato);
router.get('/contatos', contatoController.listarContatos);
router.patch('/contatos/:id', contatoController.atualizarContato);
router.delete('/contatos/:id', contatoController.excluirContato);

module.exports = router;
