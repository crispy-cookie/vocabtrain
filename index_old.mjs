#! /usr/bin/env node
'use_strict';

import path from 'path';
import express from 'express';
import { engine } from 'express-handlebars';
// import mongoose from 'mongoose';

const app = express();
const port = parseInt(process.argv[2]) ? parseInt(process.argv[2]) : 8080;

const staticPath = path.join(path.dirname(process.argv[1]), path.join('client', 'src'));
app.use(express.static(staticPath));

//app.use(express.json()) // for parsing application/json
//app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded and parsing incoming requests with URL-encoded payloads

import routes from './server/routes.mjs';
app.use('/', routes);

// Handlebars
app.engine('.html', engine({ extname: '.html' }));
app.set('view engine', '.html');
app.set('views', './server/views');

/*// MongoDB-Modell für die Protokolle erstellen
const Log = mongoose.model('Log', {
  method: String,
  url: String,
  status: Number,
  responseTime: Number,
});

// Morgan-Konfiguration für die Protokollierung in die Datenbank
app.use(morgan('combined', {
  stream: {
    write: (log) => {
      const logData = JSON.parse(log);
      const dbLog = new Log({
        method: logData.method,
        url: logData.url,
        status: logData.status,
        responseTime: logData.responseTime,
      });
      dbLog.save();
    },
  },
}));
*/

/*// Fehlerbehandlung
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Internal Server Error!')
});*/

/*app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.get('/index', (req, res) => {
  res.send('Hello World!');
});*/

app.get('/nn', (req, res) => {
  res.render('main');
});

app.get('/hello', (req, res) => {
  res.send('Hello World!');
});


app.listen(port, (err) => {
  if (err) console.log(err);
  console.log(`Bsp-App auf Port ${port} gestartet`);
  // console.log(staticPath);
});
