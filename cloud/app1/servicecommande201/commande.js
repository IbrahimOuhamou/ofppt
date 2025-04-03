const mongoose = require("mongoose");
const CommandeSchema = mongoose.Schema({
produits:Array,
email:String,
montant:Number,
DateCommande: {type: Date,default: Date.now()}
});
module.exports = Commande = mongoose.model("commande", CommandeSchema,"commande" );