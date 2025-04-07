بسم الله الرحمن الرحيم
la ilaha illa Allah Mohammed Rassoul Allah

# Exercice 1
1. use students
    db.students.insertOne({
        "nom": "Larav",
        "prénom": "Ahmed",
        "âge": 24,
        "email": "example@no-reply.com",
        "cours": [
            "Mathematique",
            "Informatique",
            "Algorithmique",
        ],
    })

2. db.students.insertMany([{
        "nom": "Larav2",
        "prénom": "Ahmed2",
        "âge": 25,
        "email": "example2@no-reply.com",
        "cours": [
            "Mathematique",
            "Algorithmique",
        ],
    },
    {
        "nom": "Larav3",
        "prénom": "Ahmed3",
        "âge": 26,
        "email": "example3@no-reply.com",
        "cours": [
            "Informatique",
            "Algorithmique"
        ]
    },{
        "nom": "Larav3",
        "prénom": "Ahmed3",
        "âge": 21,
        "email": "example4@no-reply.com",
        "cours": [
            "Mathematique",
            "Algorithmique"
        ]
    }])

3. db.students.insertMany([{
        "nom": "Larav2",
        "prénom": "Ahmed2",
        "âge": 25,
        "email": "example2@no-reply.com",
        "cours": [
            "Mathematique",
            "Algorithmique"
        ]
    },
    {
        "nom": "Larav3",
        "prénom": "Ahmed3",
        "âge": 21,
        "email": "example4@no-reply.com",
        "cours": [
            "Mathematique",
            "Algorithmique"
        ]
    }])

4.  db.students.insertOne({
        "nom": "Larav",
        "prénom": "Ahmed",
        "âge": 24,
        "email": "example@no-reply.com",
        "cours": [
            "Mathematique",
            "Informatique",
            "Algorithmique",
        ],
        "addresse": {
            "ville": "Rabat",
            "rue": "lhihatinat",
            "10020"
        }
    })


# Exercice 2

1. db.students.find({})
2. db.students.find({"nom": "Larav"})
3. db.students.find({"âge": { $gt: 20 }})
4. db.students.find({"cours": "Mathématiques"})
5. db.students.find({}).sort({"âge": 1})

# Exercice 3

1. db.students.find({}, {"nom": 1, "prénom": 1})
2. db.students.find({}, {"_id": 0})
3. db.students.find({}, {"email": 1, "cours": 1})
4. db.students.find({"adresse": { $exists: true }}, {"nom": "Larav", "adresse.ville": 1})
5. db.students.find({"adresse.ville": "Rabat", "âge": {$gt: 20}})

# Exercice 4

1. db.students.find({$and: [{"âge": {$gte: 18}}, {"âge": {$lte: 25}}]})
// AI ( '2.' )
2. db.students.find({"name": "/^L/i"})
3. db.students.find({$and: [{"cours": "c1"}, {"cours": "c2"]})
4. db.students.find({$xor: [{"cours": "c1"}, {"cours": "c2"]})
5. db.students.find({"adresse.ville": "Rabat". "age": {$gt: 20}})

# Exercice 5

1. db.students.updateOne({"nom": "Larav"}, {$set: {"nom": "Lava"}})


