const express = require("express");
const app = express();
const PORT = 4003;
const mongoose = require("mongoose");
const Produit = require("./produit");
const jwt = require("jsonwebtoken");
const isauthentificate = require("./isAuthentificated");
mongoose.connect("mongodb://127.0.0.1:27017/DB201");
app.use(express.json());
app.post("/produit/ajout",isauthentificate, async (req, res) => {
  let { nom, description, prix } = req.body;
  const newProduit = new Produit({
    nom,
    description,
    prix
  });
  newProduit.save().then(res.json({ message: nom + " ajouté à la BD" }));
});
app.get("/produit/liste", async (req, res) => {
  const produits = await Produit.find();
  res.json(produits);
});
app.get("/produit/acheter", async (req, res) => {
  const produits = await Produit.find({id: { $in: req.body.ids }});
  res.json(produits);
});
app.listen(PORT, () => {
  console.log(`Produit-Service at ${PORT}`);
});