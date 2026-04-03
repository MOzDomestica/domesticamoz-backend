const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/healthz', (req, res) => {
  res.json({ status: 'ok', app: 'DomesticaMoz', version: '1.0.0' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('DomesticaMoz API running on port ' + PORT);
});
