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

app.get('/externalId', (req, res) => {

  console.log("Receiving Request...");
  let sql = 'SELECT * FROM articles WHERE contentful_token="7vDv2ArVDONdFlfaFc3wh3";';
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
