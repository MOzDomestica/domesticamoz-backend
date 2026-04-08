const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/healthz', (req, res) => {
  res.json({ status: 'ok', app: 'DomesticaMoz', version: '1.0.0' });
});

app.post('/api/auth/login', (req, res) => {
  const { phone } = req.body;
  if (!phone) return res.status(400).json({ message: 'Número obrigatório' });
  console.log('Login pedido para:', phone);
  res.json({ message: 'Código enviado por SMS!', phone });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('DomesticaMoz API running on port ' + PORT);
});
