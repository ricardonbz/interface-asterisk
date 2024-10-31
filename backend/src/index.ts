import express, { Request, Response } from 'express'; //  Request, Response typescript
import connectToDatabase from './db';
import cors from 'cors'; // Importando o CORS

const app = express();
const PORT = 3000;

// Adicionando o middleware para analisar JSON
app.use(express.json());
app.use(cors()); // Habilitando CORS:  ele controla quais domínios podem acessar os recursos de um servidor.

app.get('/api/test-connection', async (req: Request, res: Response) => {
  try {
    const message = await connectToDatabase();
    res.status(200).json({ message });
  } catch (error) {
    console.error("Erro ao conectar ao banco de dados:", error); // Log do erro
    const errorMessage = (error as Error).message;
    res.status(500).json({ error: errorMessage });
  }
});

// Iniciando o servidor
app.listen(PORT, () => {
  console.log(`Backend rodando em http://localhost:${PORT}`);
});
