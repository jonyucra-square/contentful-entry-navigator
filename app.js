const express = require('express');
const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'supportcenter_development'
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("MySql Connected...")
});

const app = express();

app.listen('3001', () => {
  console.log("server started on port 3001");
});

app.get('/externalId/:contentful_token', (req, res) => {

  console.log("Receiving Request For External Id...");
  let sql = `SELECT * FROM articles WHERE contentful_token="${req.params.contentful_token}";`;
  db.query(sql, (err, result) => {
    let externalId = `${result[0].external_id}`;
    res.header('Access-Control-Allow-Origin', "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    const body = {
      "externalId" : externalId
    }
    res.send(body);
  });

});

app.get('/contentfulToken/:external_id', (req, res) => {

  console.log("Receiving Request For Token...");
  let sql = `SELECT * FROM articles WHERE external_id="${req.params.external_id}";`;
  db.query(sql, (err, result) => {
    let contentfulToken = `${result[0].contentful_token}`;
    res.header('Access-Control-Allow-Origin', "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    const body = {
      "contentfulToken" : contentfulToken
    }
    res.send(body);
  });

});
