const express = require("express");
const app = express();
const PORT = 4002;
const mongoose = require("mongoose");
const Utilisateur = require("./utilisateur");
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');

  mongoose.connect("mongodb://127.0.0.1:27017/DB201");

app.use(express.json());
app.post("/auth/ajoutuser", async (req, res) => {
    let { nom, email, mot_passe } = req.body;
    // On vérifie si le nouvel utilisateur est déjà inscrit avec la même adresse email ou pas
    const userExists = await Utilisateur.findOne({ "email":email });
     if (userExists) {
       return res.json({ message: "Cet utilisateur existe déjà" });
    } else {
      bcrypt.hash(mot_passe, 10, (err,hash) => {
          mot_passe=hash;
          const newUser = new Utilisateur({
            nom,
            email,
            mot_passe
          });
          newUser.save().then ( res.json({ message: nom +" ajouté à la BD" }));
        }
      );
    }}
  );
  app.post("/auth/login", async (req, res) => {
    const { email, mot_passe } = req.body;
    const utilisateur = await Utilisateur.findOne({ "email": email});
    if (!utilisateur) {
      return res.json({ message: "Utilisateur introuvable" });
    } else {
      bcrypt.compare(mot_passe, utilisateur.mot_passe).then(resultat => {
        if (!resultat) {
          return res.json({ message: "Mot de passe incorrect" });
        }
        else {
          jwt.sign(email, "secret", (err, token) => {
           return res.json({ token: token });
          });
        }
      });
    }
  });
  app.listen(PORT, () => {console.log(`Auth-Service at ${PORT}`);});