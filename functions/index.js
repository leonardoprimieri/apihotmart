const functions = require('firebase-functions');

const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: false }));

app.get('/asd', async (req, res) => {
  return res.json({
    name: 'Leonardo',
    age: 19,
    job: 'FrontEnd Developer',
  });
});

exports.helloWorld = functions.https.onRequest(app);
