// بسم الله الرحمن الرحيم
// la ilaha illa Allah Mohammed rassoul Allah

console.log("بسم الله الرحمن الرحيم");

const livres = [
    {id: 10, titre: 'POO', auteur: 'RAMI', prix: 300},
    {id: 11, titre: 'JS ES6', auteur: 'FAMI', prix: 230},
    {id: 12, titre: 'Algorithme', auteur: 'KARIMI', prix: 330},
    {id: 13, titre: 'HTML& CSS', auteur: 'RAMI', prix: 340},
];

const titres = livres.map(function(livre) { return livre.titre });
console.log("1.", titres);

const titres_rami = livres.filter(function(livre) { return livre.auteur === 'RAMI' }).map(function(livre) { return livre.titre });
console.log("2.", titres_rami);

const livre_12 = livres.find(function(livre) { return livre.id === 12 });
console.log("3.", livre_12);

const prix_total = livres.reduce(function (total, livre) { return total + livre.prix }, 0);
console.log("4.", prix_total);

let mesLivres = [...livres];
console.log("5.", mesLivres);

