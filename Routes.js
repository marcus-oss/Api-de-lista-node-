const express = require('express');
const contatoController = require('../controllers/contatoController');

const router = express.Router();

/**
 * @route   POST /api/contatos
 * @desc    Adicionar um novo contato na api
 * @access  Public
 */
router.post('/contatos', contatoController.adicionarContato);

/**
 * @route GET /api/listar contatos 
 * @desc   listar um contato existente 
 * @access  Public
 */
router.get('/contatos', contatoController.listarContatos);

/**
 * @route Patch /api/atualizarContato 
 * @desc    Atualizar um contato existente por   id 
 * @access  Public
 */
router.patch('/contatos/:id', contatoController.atualizarContato);

/**
 * @route   DELETE /api/excluirContato 
 * @desc    excluir um contato por id 
 * @access  Public
 */
router.delete('/contatos/:id', contatoController.excluirContato);

module.exports = router;
