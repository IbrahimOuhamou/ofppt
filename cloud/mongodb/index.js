// بسم الله الرحمن الرحيم
// la ilaha illa Allah Mohammed Rassoul Allah

const express = require('express');
const app = express();
const port = 3000;

const mongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/';
const dbName = 'alhamdo-li-allah';
const collectionName1 = 'equipes';

//const collectionName2 = 'joueur';
//const client = new mongoClient.MongoClient(url,(err,client) => { Mydb=client.db('collectionName1');});
//
// let mydb = mongoClient.connect(url, (err,client) => { 
//     if(err) { console.error(err); }
//     console.log("بسم الله الرحمن الرحيم");
//     mydb=client.db(collectionName1);
//     console.log("connection established");
// });

mongoClient.connect(
    url,
    (err,client) => { 
        console.log('alhamdo li ALlah connected to db');
    })
    .then(
        client => mydb = client.db(dbName),
            app.get("/equipes", async (req, res) => {
                const items = await mydb.collection(collectionName1).find({}).toArray();
                res.json(items);
            }),

            app.get("/equipes:id", async (req, res) => {
                const id = Number(req.params.id);
                const items = await mydb.collection(collectionName1).find({id:id}).toArray();
                res.json(items);
            })
        )
    )

app.get('/', (req, res) => {
    console.log("بسم الله الرحمن الرحيم");
    res.status(200).send('بسم الله الرحمن الرحيم');
});

app.listen(port, () => { console.log("بسم الله الرحمن الرحيم\nport:", port) });
