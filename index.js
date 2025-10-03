const express = require('express');
const cors = require('cors');
require('dotenv').config(); 

const contatoRoutes = require('./routes/contatoRoutes');

const app = express()
 

app.use(cors());
app.use(express.json());


app.use('/api', contatoRoutes); 

const PORT = process.env.API_PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
