// بسم الله الرحمن الرحيم
// la ilaha illa Allah Mohammed rassoul Allah

class Produit {
    constructor(libelle, prix_ht) {
        this.libelle = libelle;
        this.prix_ht = prix_ht;
    }

    pttc(taux_tva) {
        return this.prix_ht + taux_tva * this.prix_ht;
    }

    afficher(taux_tva) {
        return '<' + this.libelle + ', ' + this.pttc(taux_tva) + '>';
    }
}

class ProduitEnRemise extends Produit {
    constructor(libelle, prix_ht, remise) {
        super(libelle, prix_ht);
        this.remise = remise;
    }

    pttc(taux_tva) {
        return this.prix_ht * (1 - this.remise) * (1 + taux_tva);
    }
}

let produit_a = new Produit('A', 1000);
let produit_b = new Produit('B', 2000);

console.log(produit_a.afficher(0.2));
console.log(produit_b.afficher(0.07));

let produit_c = new ProduitEnRemise('C', 3000, .3);
console.log(produit_c.afficher(0.2));

