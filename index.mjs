#! /usr/bin/env node
'use_strict';

import { engine } from 'express-handlebars';
import express from 'express';
import path from 'path';
const app = express();
import routes from './server/routes.mjs';

/* // CSS Praeprozessor SASS
import sassMiddleware from 'node-sass-middleware';
app.use(sassMiddleware({
  src: path.join(path.dirname(process.argv[1]), 'sass'),
  dest: path.join(path.dirname(process.argv[1]), 'client/dist/css'),
  outputStyle: 'compressed',
  prefix: '/css'
}));
*/

app.engine('.html', engine({ extname: '.html' }));
app.set('view engine', '.html');
app.set('views', './server/views');

app.use(express.static(path.join(path.dirname(process.argv[1]), path.join('client', 'src'))));
app.use(routes);

app.get('/hello', (req, res) => {
  console.log('ExpressJS funktioniert!');
  res.send('ExpressJS says Hello World!');
});

import mongoose from 'mongoose';
import { mongoDB, collectionName } from './server/connect2db.mjs';

connect2db(mongoDB).catch((err) => console.log(err));
async function connect2db(mongoDB) {
  await mongoose.connect(mongoDB);
  console.log("Connected to MongoDB");
}

/*
// MongoDB-Modell für die Protokolle erstellen
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
}));*/

// Fehlerbehandlung
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Internal Server Error!')
});

const server = app.listen(8080, () => {
  console.log(`App gestartet auf Port ${server.address().port}`);
  console.log(server.address());
});
