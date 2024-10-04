// بسم الله الرحمن الرحيم
// la ilaha illa Allah Mohammed rassoul Allah

console.log("بسم الله الرحمن الرحيم");

const clients = [
    { nom: "Rami", montant: 4500 },
    { nom: "Fatihi", montant: 2300 },
    { nom: "Chackib", montant: 5500 },
    { nom: "Mounir", montant: 7700 },
];

const totalMontants = clients.reduce(function(total, client){return total *= client.montant}, 1);

console.log(totalMontants);

