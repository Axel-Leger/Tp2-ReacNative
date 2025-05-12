// server.js
import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3001;

app.use(cors());

const usuariosValidos = ['maxi', 'tati', 'mauri', 'anto'];

app.get('/validar/:nombre', (req, res) => {
  const { nombre } = req.params;
  const valido = usuariosValidos.includes(nombre.toLowerCase());
  res.json({ nombre, valido });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
