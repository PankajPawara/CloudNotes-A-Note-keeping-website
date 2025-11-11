require("dotenv").config();
const DB_Connect = require('./db');
const express = require('express');
const cors = require('cors');

const app = express();

// Connect DB
DB_Connect();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/note'));

// Dynamic port for Render
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Cloud Notes is live on port ${port}`);
});
