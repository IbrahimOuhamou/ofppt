بسم الله الرحمن الرحيم
la ilaha illa Allah Mohammed Rassoul Allah

# Exercice 1
1. use students
    db.students.insertOne({
        "name": "Larav",
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
        "name": "Larav2",
        "prénom": "Ahmed2",
        "âge": 25,
        "email": "example2@no-reply.com",
        "cours": [
            "Mathematique",
            "Algorithmique",
        ],
    },
    {
        "name": "Larav3",
        "prénom": "Ahmed3",
        "âge": 26,
        "email": "example3@no-reply.com",
        "cours": [
            "Informatique",
            "Algorithmique"
        ]
    },{
        "name": "Larav3",
        "prénom": "Ahmed3",
        "âge": 21,
        "email": "example4@no-reply.com",
        "cours": [
            "Mathematique",
            "Algorithmique"
        ]
    }])

3. db.students.insertMany([{
        "name": "Larav2",
        "prénom": "Ahmed2",
        "âge": 25,
        "email": "example2@no-reply.com",
        "cours": [
            "Mathematique",
            "Algorithmique"
        ]
    },
    {
        "name": "Larav3",
        "prénom": "Ahmed3",
        "âge": 21,
        "email": "example4@no-reply.com",
        "cours": [
            "Mathematique",
            "Algorithmique"
        ]
    }])

4.  db.students.insertOne({
        "name": "Larav",
        "prénom": "Ahmed",
        "âge": 24,
        "email": "example@no-reply.com",
        "cours": [
            "Mathematique",
            "Informatique",
            "Algorithmique",
        ],
        "addresse": {
            ""
        }
    })


# Exercice 2

1. db.students.find({})
2. db.students.find({"name": "Larav"})
3. db.students.find({"âge": { $gt: 20 }})
4. db.students.find({"cours": "Mathématiques"})
5. db.students.find({}).sort({"âge": 1})


