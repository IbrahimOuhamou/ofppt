// بسم الله الرحمن الرحيم
// la ilaha illa Allah Mohammed Rassoul Allah

const express = require("express");
const app = express();
const port = 9000;
const liste = require("./joueurs.json");
app.use(express.json());

app.get('/joueur/by-id/:id', (req, res) => {
    res.status(200).json(liste.find(x=>x.id==req.params.id));
});

app.post('/new', (req, res) => {
    liste.push(req.body);
    res.status(200).json({
        status: 200,
        message: "alhamdo li Allah",
    });
});

app.put('/update', (req, res) => {
    const element = liste.find(x => x.id === req.body.id);
    element.nom = req.body.nom;
    element.age = req.body.age;
    element.equipe_id = req.body.equipe_id;
    res.status(200).json({
        status: 200,
        message: "alhamdo li Allah",
    });
});

app.delete('/joueur/by-id/:id', (req, res) => {
    const element_to_delete = liste.find(x => x.id === req.body.id);
    const index = liste.indexOf(element_to_delete);
    liste.splice(index, 1);
    res.status(200).json({
        status: 200,
        message: "alhamdo li Allah",
    });
});

app.listen(port, () => console.log("بسم الله الرحمن الرحيم\nlistening on on port: ", port));

