const { engine } = require('express-handlebars');
const express = require('express');
const path = require('path');
const routes = require('./server/routes.js')

const app = express();

app.engine('.html', engine({ extname: '.html' }));
app.set('view engine', '.html');
app.set('views', './server/views');

//app.use(express.static(path.join(__dirname, 'client')));
// app.use(routes);

app.get('/', (req, res) => {
  res.render('main');
});

const server = app.listen(8080, () => {
  console.log(`Server started at port ${server.address().port}`);
});
