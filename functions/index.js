const functions = require('firebase-functions');

const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: false }));

app.get('/', async (req, res) => {
  return console.log(req.body);
});

exports.helloWorld = functions.https.onRequest(app);
