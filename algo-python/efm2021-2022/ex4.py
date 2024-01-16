#in the name of Allah

print('in the name of Allah')

Notes = {'Tome':[8, 10, 12], 'Mila':[10, 9], 'Alex':[], 'Lina':[12, 10, 8]}

Notes['Tom'] = Notes.pop('Tome')

Notes['Alex'] = [13, 7]

print(Notes.keys())
print(Notes.values())

for nom in Notes:
    print(nom, ':', Notes[nom])

max_moyenne = 0
max_nom = ''

for nom in Notes:
    somme = 0
    for note in Notes[nom]:
        somme += note
    moyenne = somme / len(Notes[nom])
    
    if moyenne > max_moyenne:
        max_moyenne = moyenne
        max_nom = nom

print(max_nom, 'a le max moyyene:', max_moyenne)

