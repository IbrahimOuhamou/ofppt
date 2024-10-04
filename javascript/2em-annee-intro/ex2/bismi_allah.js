// بسم الله الرحمن الرحيم
// la ilaha illa Allah Mohammed rassoul Allah

console.log("بسم الله الرحمن الرحيم");

const personnes = [
    { nom: "Rami", age: 33, estMember: true },
    { nom: "Fatihi", age: 24, estMember: false },
    { nom: "Chackib", age: 45, estMember: true },
    { nom: "Mounir", age: 37, estMember: false },
];

const membres = personnes.filter(function(personne){return personne.estMember}).map(function(obj){return obj.nom});

console.log(membres);

