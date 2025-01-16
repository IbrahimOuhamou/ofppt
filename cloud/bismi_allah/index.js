// بسم الله الرحمن الرحيم
// la ilaha illa Allah Mohammed Rassoul Allah

const express = require("express");
const app = express();
const port = 3600;
const liste = require("./equips.json");
app.use(express.json());

app.get('/equips/', (req, res) => {
    res.status(200).json(liste);
});

app.get('/equip/by-id/:id', (req, res) => {
    res.status(200).json(liste.find(x=>x.id==req.params.id));
});

app.get('/equip/by-country/:country', (req, res) => {
    res.status(200).json(liste.filter(x=>x.country==req.params.country));
});

app.get('/equip/by-name/:name', (req, res) => {
    res.status(200).json(liste.filter(x=>x.name==req.params.name));
});

app.post('/ajouter', (req, res) => {
    console.log("alhamdo li Allah req: '", req.body, "'");
    liste.push(req.body);
    res.status(200).json({
        status: 200,
        message: "alhamdo li Allah",
    });
});

app.put('/update', (req, res) => {
    const element = liste.find(x=>x.id===req.body.id);
    element.name = req.body.name;
    element.country = req.body.country;
    res.status(200).json({
        status: 200,
        message: "alhamdo li Allah",
    });
})

app.delete('/equip/by-id/:id', (req, res) => {
    const element_to_delelete = liste.find(x=>x.id===req.params.id);
    const index = liste.indexOf(element_to_delelete);
    liste.splice(index, 1);
    res.status(200).json({
        status: 200,
        message: "alhamdo li Allah",
    });
});

app.get('/', (req, res) => {
    res.send('بسم الله الرحمن الرحيم');
})

app.listen(port, () => console.log("بسم الله الرحمن الرحيم\nlistening on on port: ", port));

