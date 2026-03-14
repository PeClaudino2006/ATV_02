import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import path from 'path';
import shoppingRoutes from './routes/shoppingRoutes';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../src/public')));

app.use('/api', shoppingRoutes);

mongoose.connect('mongodb://localhost:27017/shopping-list')
    .then(() => {
        console.log('Conectado ao MongoDB');
        app.listen(PORT, () => console.log(`Servidor rodando em http://localhost:${PORT}`));
  })
  .catch((err) => console.error('Erro ao conectar ao MongoDB:', err));
