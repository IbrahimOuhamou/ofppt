const express = require("express");
const app = express();
const PORT = 4004;
const mongoose = require("mongoose");
const axios = require("axios");
const Commande = require("./commande");
const jwt = require("jsonwebtoken");
const isauthentificate = require("./isAuthentificated");
mongoose.connect("mongodb://127.0.0.1:27017/DB201");
app.use(express.json());
function f1(produits)
{ var montant = 0;
  axios.get("http://localhost:4003/produit/acheter", { "ids": produits }, {
  headers: {'Content-Type': 'application/json' }
  }).then(response => {
    for(x of response)
    { montant += x.prix }
  })
 return montant;
}
app.post("/commande/ajout",isauthentificate, async (req, res) => {
  let { produits, email } = req.body;
  const newCommande = new Commande({
    produits:produits,
    email:email,
    montant: f1(produits)
  });
  newCommande.save().then(res.json({ message:  "Commande ajoutée à la BD" }));
});
app.listen(PORT, () => {
  console.log(`Commande-Service at ${PORT}`);
});