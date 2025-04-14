# بسم الله الرحمن الرحيم
# la ilaha illa Allah Mohammed Rassoul Allah
print('بسم الله الرحمن الرحيم')

from pymongo import MongoClient

# Connexion à MongoDB
client = MongoClient()
print("Connexion à MongoDB réussie!")

# Création/Connexion à une base de données
db = client['ecole']
print("\nBase de données 'ecole' sélectionnée")

# Création d'une collection
stagiaires_collection = db['stagiaires']

#####        4

def findPrint(query, projection, title):
    print(title)
    resultat = stagiaires_collection.find(query, projection)
    for i in resultat:
        print(i)
    print()

print("##############       Partie 4       ################")

print('1.')
findPrint({}, {'nom': 1, 'prenom': 1}, 'le nom et prenom du stagiaires: ')

print('2.')
findPrint({'option': 'Mobile'}, {}, 'le nom et prenom du stagiaires de l\'option "Mobile": ')

print('3.')
findPrint({}, {'nom': 1, 'prenom': 1, 'option': 1, '_id': 0}, 'le nom et prenom du stagiaires et option: ')

print('4.')
findPrint({'age': {'$gt': 22}}, {'nom': 1, 'prenom': 1}, 'le nom et prenom du stagiaires ages plus de 22 ans: ')

print('5.')
findPrint({'notes.python': {'$gt': 15}}, {}, 'Stagiares avec note.python > 15:')

print('6.')
findPrint({'notes.mongodb': {'$gt': 15}}, {}, 'Stagiares avec note.mongodb > 15:')

print("##############       Partie 5       ################")

print('1.')
findPrint({'notes.mongodb': {'$gt': 15}, 'option': 'Web'}, {}, 'Stagiares en option "Web" avec note.mongodb > 15:')

print('2.')
print('Stagiaire plus age:')
resultat = stagiaires_collection.find({}, {}).sort({'age': -1}).limit(1)
for i in resultat:
    print(i)
print()

print('3.')
resultat = stagiaires_collection.find({}, {})
num_stagiaires = 0
avg = 0
for i in resultat:
    avg += i['notes']['python']
    num_stagiaires += 1
avg = avg / num_stagiaires
print('Moyenne des notes Python est:', avg)

print('4.')
stagiaires_collection.update_one({'nom': 'Dubois', 'prenom': 'Marie'}, {'$set': {'notes.mongodb': 16}})
findPrint({'nom': 'Dubois', 'prenom': 'Marie'}, {}, 'Nouveau note:')


stagiaires_collection.update_one({'nom': 'Dubois', 'prenom': 'Marie'}, {'$set': {'notes.mongodb': 14}})
