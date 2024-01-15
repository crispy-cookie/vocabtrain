'use strict';

import express from 'express';
import path from 'path';

const app = express();
const port = parseInt(process.argv[2]) ? parseInt(process.argv[2]) : 8080;

app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.get('/index', (req, res) => {
  res.send('Hello World!');
});
app.get('/hello', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, (err) => {
  if (err) console.log(err);
  console.log(`Bsp-App auf Port ${port} gestartet`);
});
