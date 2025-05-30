const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// API to insert thought
app.post('/submit', (req, res) => {
  const { thought } = req.body;
  const sql = 'INSERT INTO thoughts (thought) VALUES (?)';
  db.query(sql, [thought], (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: 'Thought submitted successfully.' });
  });
});

// API to fetch latest thought
app.get('/latest', (req, res) => {
  const sql = 'SELECT thought FROM thoughts ORDER BY date DESC LIMIT 1';
  db.query(sql, (err, results) => {
    if (err) return res.status(500).json({ error: err });
    const thought = results[0] ? results[0].thought : '';
    res.json({ thought });
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

