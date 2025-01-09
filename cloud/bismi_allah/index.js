// بسم الله الرحمن الرحيم
// la ilaha illa Allah Mohammed Rassoul Allah

const express = require("express");
const app = express();
const port = 3600;
const liste = require("./equips.json");

app.get('/equips/', (req, res) => {
    res.json(liste);
});

app.get('/', (req, res) => {
    res.send('بسم الله الرحمن الرحيم');
})

app.listen(port, () => console.log("بسم الله الرحمن الرحيم\nlistening on on port: ", port));

