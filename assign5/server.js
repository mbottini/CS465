const express = require('express');
const path = require('path');
const app = express();
const port = 8080;

app.use(express.urlencoded());

app.get('/', (req, res) => res.sendFile(path.join(__dirname + '/index.html')));
app.get('/styles.css', (req, res) => res.sendFile(path.join(__dirname + '/styles.css')));
app.get('/script.js', (req, res) => res.sendFile(path.join(__dirname + '/script.js')));
app.post('/submit', (req, res) => res.send(`
<p>name: ${req.body.name}</p>
<p>email: ${req.body.email}</p>
<p>comment: ${req.body.comments}</p>`));

app.listen(port);