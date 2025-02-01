// بسم الله الرحمن الرحيم
// la ilaha illa Allah Mohammed Rassoul Allah

const express = require('express');
const app = express();
const port = 3800;

const mongoClient = require('mongodb').MongoClient;
const url = 'mongodb://127.0.0.1:27017';
const dbName = 'bismi_allah_db';
const collectionName1 = 'bismi_allah';

//const collectionName2 = 'joueur';
//const client = new mongoClient.MongoClient(url,(err,client) => { Mydb=client.db('collectionName1');});

let mydb = mongoClient.connect(url,(err,client) => { 
    if(err) { console.error(err); }
    console.log("بسم الله الرحمن الرحيم");
    mydb=client.db(collectionName1);
    console.log("connection established");
});

app.get('/', (req, res) => {
    console.log("بسم الله الرحمن الرحيم");
    res.status(200);
});

app.listen(port, () => { console.log("بسم الله الرحمن الرحيم\nport:", port) });
