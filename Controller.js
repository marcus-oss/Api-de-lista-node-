// Importa a conexão com o banco de dados
const db = require('../config/db');

const validarNome = (nome) => {
  if (!nome) return false;
  const palavras = nome.trim().split(/\s+/); 
  if (palavras.length < 2) {
    return false; 
  }
  
  return palavras.every(palavra => palavra.length >= 3);
};


exports.adicionarContato = async (req, res) => {
  const { nome, telefone } = req.body;
  if (!validarNome(nome)) {
    return res.status(400).json({ mensagem: "O nome é inválido. Deve conter pelo menos duas palavras, cada uma com no mínimo 3 letras." });
  }
  if (!telefone) {
    return res.status(400).json({ mensagem: "O telefone é obrigatório." });
  }

  try {
    
    const [resultado] = await db.query(
      'INSERT INTO contatos (nome, telefone) VALUES (?, ?)',
      [nome, telefone]
    );
    
    
    res.status(201).json({
      id: resultado.insertId,
      nome,
      telefone
    });
  } catch (erro) {
    console.error('Erro ao adicionar contato:', erro);
    res.status(500).json({ mensagem: 'Erro interno do servidor' });
  }
};

exports.listarContatos = async (req, res) => {
  try {
    const [contatos] = await db.query('SELECT * FROM contatos ORDER BY nome ASC');
    res.status(200).json(contatos);
  } catch (erro) {
    console.error('Erro ao listar contatos:', erro);
    res.status(500).json({ mensagem: 'Erro interno do servidor' });
  }
};

exports.atualizarContato = async (req, res) => {
  const { id } = req.params;
  const { nome, telefone } = req.body;

  
  if (nome && !validarNome(nome)) {
    return res.status(400).json({ mensagem: "O nome é inválido. Deve conter pelo menos duas palavras, cada uma com no mínimo 3 letras." });
  }
  
  try {
    
    const [[contatoAtual]] = await db.query('SELECT * FROM contatos WHERE id = ?', [id]);

    if (!contatoAtual) {
        return res.status(404).json({ mensagem: 'Contato não encontrado.' });
    }

    
    const nomeFinal = nome || contatoAtual.nome;
    const telefoneFinal = telefone || contatoAtual.telefone;

    
    await db.query(
      'UPDATE contatos SET nome = ?, telefone = ? WHERE id = ?',
      [nomeFinal, telefoneFinal, id]
    );

    
    res.status(200).json({
      id: parseInt(id),
      nome: nomeFinal,
      telefone: telefoneFinal
    });

  } catch (erro) {
    console.error('Erro ao atualizar contato:', erro);
    res.status(500).json({ mensagem: 'Erro interno do servidor' });
  }
};

exports.excluirContato = async (req, res) => {
  const { id } = req.params;

  try {
    const [resultado] = await db.query('DELETE FROM contatos WHERE id = ?', [id]);

    if (resultado.affectedRows === 0) {
      return res.status(404).json({ mensagem: 'Contato não encontrado.' });
    }

    res.status(204).send();
    
  } catch (erro) {
    console.error('Erro ao excluir contato:', erro);
    res.status(500).json({ mensagem: 'Erro interno do servidor' });
  }
};
