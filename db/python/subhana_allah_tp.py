# بسم الله الرحمن الرحيم
# la ilaha illa Allah Mohammed Rassoul Allah
print('بسم الله الرحمن الرحيم')

from pymongo import MongoClient

# Connexion à MongoDB
client = MongoClient()
print("Connexion à MongoDB réussie!")

# Vérifiez les bases de données existantes
print("Bases de données existantes:")
for db_name in client.list_database_names():
    print(f" - {db_name}")

# Création/Connexion à une base de données
db = client['ecole']
print("\nBase de données 'ecole' sélectionnée")

# Création d'une collection
stagiaires_collection = db['stagiaires']
print("Collection 'stagiaires' créée/sélectionnée")

# Suppression des données existantes pour éviter les duplications
stagiaires_collection.delete_many({})
print("\nNettoyage de la collection effectué")

# Insertion d'un document unique
stagiaire1 = {
    "nom": "Dubois",
    "prenom": "Marie",
    "age": 22,
	"option": "Mobile",
	"notes": {
	    "python": 16,
	    "mongodb": 14
	}
}
resultat = stagiaires_collection.insert_one(stagiaire1)
print(f"Document inséré avec l'ID: {resultat.inserted_id}")

# Insertion de plusieurs documents
stagiaires = [
    {
	    "nom": "Martin",
	    "prenom": "Thomas",
	    "age": 24,
	    "option": "Web",
	    "notes": {
	        "python": 15,
	        "mongodb": 17
	    }
	},
	{
	    "nom": "Petit",
	    "prenom": "Julie",
	    "age": 21,
	    "option": "Mobile",
	    "notes": {
	        "python": 18,
	        "mongodb": 13
	    }
	},
	    {
	    "nom": "Leroy",
	    "prenom": "Alexandre",
	    "age": 23,
	    "option": "Data",
	    "notes": {
	        "python": 19,
	        "mongodb": 18
	    }
	},
	{
	    "nom": "Robert",
	    "prenom": "Sophie",
	    "age": 22,
	    "option": "Web",
	    "notes": {
	        "python": 14,
	        "mongodb": 16
	    }
	}
]

resultat = stagiaires_collection.insert_many(stagiaires)
print(f"Nombre de documents insérés: {len(resultat.inserted_ids)}")

#####        4

print("##############       Partie 4       ################")

print('1. ')
resultat = stagiaires_collection.find({}, {'nom': 1, 'prenom': 1, '_id': 0})
print('le nom et prenom du stagiaires: ')
for i in resultat:
    print(i)
print()


