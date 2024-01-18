#! /usr/bin/env node
'use_strict';
import express from 'express';
const router = express.Router();

import path from 'path';
/* Fix __dirname in ES6 */
/*import {fileURLToPath} from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);*/

/*const app = express();
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true }));*/

// app.use(express.static(staticPath));

// const staticPath = path.join(path.dirname(process.argv[1]), path.join('client', 'dist'));

// const staticPath = '../../client/src'; 
const staticPath = path.join(path.dirname(process.argv[1]), path.join('client', 'src'));

/*router.get('/hello', (req, res) => {
  res.send('Hello World!');
});*/

// Gemeinsame Callback-Funktion für verschiedene Pfade
const commonHandler = (req, res) => {
  // Verarbeite die Anfrage hier
  res.sendFile(staticPath + '/index.html');
};
// Definiere die verschiedenen Pfade
router.get(['/', '/index', '/index.html', '/index.php', '/start'], commonHandler);

/*router.get('/', (req, res) => {
  res.sendFile(staticPath + '/index.html');
});

router.get('/index', (req, res) => {
  res.sendFile(staticPath + '/index.html');
});*/

router.get('/kontakt', (req, res) => {
  res.sendFile(staticPath + '/index.html');
});

router.get('/impressum', (req, res) => {
  res.sendFile(staticPath + '/impressum.html');
});

router.get('/datenschutz', (req, res) => {
  res.sendFile(staticPath + '/datenschutz.html');
});

router.get('/w', (req, res) => {
  res.render('main', {layout : 'index'});
});
router.get('/nn', (req, res) => {
  res.render('main');
});
router.get('/dbcom', (req, res) => {
  res.sendFile(staticPath + '/dbcom.html');
});

router.post('/api/data', (req, res) => {
  const receivedData = req.body;
  // console.log(req);
  console.log('Daten empfangen:');
  console.log(receivedData);
  if (!receivedData) {
    res.sendStatus(500);
  } else {
    res.json({ message: 'Daten empfangen und verarbeitet.' });
  }
});

/*
router.get('/guestlist', async (req,res)=>{
  const eventId = req.query.event ;
  if(!eventId){
    res.sendStatus(406);
  }
  try {
    const objId = mongoose.Types.ObjectId(eventId.toString());
    if (!(await Events.exists({ _id: objId }))) {
      res.sendStatus(404);
    } else {
      res.sendFile(staticPath + '/html/guestlist.html');
    }
  }
  catch (err) {
    res.sendStatus(404);
  }
});
*/
/*
router.post('/shorten', async (req, res) => {
  const longUrl = req.body.longUrl;
  const timestamp = new Date();
  const randomValue = generateRandomValue();

  // console.log(`!! req.body is...${longUrl}`);
  res.status(200);
  /*
  UrlLibrary.create([
    { short_url: randomValue, long_url: 'company', timestamp: timestamp }
  ])
  .then((randomValue) => {
    res.status(200).json(randomValue);
  })
  .catch((err) => {
    console.error(err);
    res.status(500).send('Internal Server Error');
  })*/
/*});*/

export default router;
