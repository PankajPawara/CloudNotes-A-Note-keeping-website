const DB_Connect = require('./db');

DB_Connect();
const express = require('express')
const app = express()
const port = 5000

app.use(express.json())
//Available routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/note'))

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`)
})
