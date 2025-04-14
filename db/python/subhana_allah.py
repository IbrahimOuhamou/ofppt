# بسم الله الرحمن الرحيم
# la ilaha illa Allah Mohammed Rassoul Allah
print('بسم الله الرحمن الرحيم')

from pymongo import MongoClient

client = MongoClient()

db = client['subhana-allah']

print(db, '\n')

result = db.adkar.find()

for i in result:
    print(i['name'])
print()

result = db.adkar.find({'name': 'subhana-Allah'})

if len(list(result)) == 0:
    print("inserting dikr with name 'subhana-Allah'")
    db.adkar.insert_one({'name': 'subhana-Allah'})
else:
    print('adkar with name "subhana-Allah":')
    for i in result:
        print(i['name'])

# result = db.adkar.find({}).sort()

