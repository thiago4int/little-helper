const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config(); // Carrega as variáveis de ambiente do arquivo .env

const app = express();
app.use(express.json()); // Middleware para analisar solicitações JSON

// Conexão ao MongoDB
const mongoUri = process.env.MONGO_URL;
if (!mongoUri) {
  console.error('MONGO_URL não está definida no arquivo .env');
  process.exit(1); // Encerra o processo com erro
}

mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Conectado ao MongoDB Atlas'))
  .catch((err) => {
    console.error('Erro ao conectar ao MongoDB Atlas:', err);
    process.exit(1); // Encerra o processo com erro
  });

// Rotas de eventos
const eventRoutes = require('./routes/events');
app.use('/api/events', eventRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
