// بسم الله الرحمن الرحيم
// la ilaha illa Allah Mohammed Rassoul Allah
const mongoose = require("mongoose");
const ProduitSchema = mongoose.Schema({
nom:String,
description:String,
prix:Number,
created_at: {type: Date,default: Date.now()}
});
module.exports = Produit = mongoose.model("produit", ProduitSchema,"produit" );
