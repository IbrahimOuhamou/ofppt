// بسم الله الرحمن الرحيم
// la ilaha illa Allah Mohammed rassoul Allah

function Produit(libelle, prix_ht) {
    this.libelle = libelle;
    this.prix_ht = prix_ht;

    pttc(taux_tva) {
        return this.prix_ht + taux_tva * this.prix_ht;
    }

    afficher(taux_tva) {
        return '<' + this.libelle + ', ' + this.pttc(taux_tva) + '>';
    }
}

ProduitEnRemise(libelle, prix_ht, remise) {
    this.remise = remise;

    pttc(taux_tva) {
        return this.prix_ht * (1 - this.remise) * (1 + taux_tva);
    }
}

let produit_a = Produit('A', 1000);
let produit_b = Produit('B', 2000);

console.log(produit_a.afficher(0.2));
console.log(produit_b.afficher(0.07));

let produit_c = ProduitEnRemise('C', 3000, .3);
console.log(produit_c.afficher(0.2));

