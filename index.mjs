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

const server = app.listen(8080, () => {
  console.log(`App gestartet auf Port ${server.address().port}`);
  console.log(server.address());
});
