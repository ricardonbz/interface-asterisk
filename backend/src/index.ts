// src/index.ts

import express, { Request, Response } from 'express';

// Criação de um app Express
const app = express();
const port = 3000;

// Middleware para entender o corpo das requisições como JSON
app.use(express.json());

// Rota de teste
app.get('/', (req: Request, res: Response) => {
  res.send('Olá, mundo! Este é um servidor em TypeScript!');
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
