#in the name of Allah

print("in the name of Allah")

birthday = input("votre anne de naissance: ")
try:
    print("Tu as", 2024 - int(birthday), 'ans')
except:
    print("Erreur, vouillez entrer un nombre valid")


print("========================================")

a = int(input("entrer a: "))
b = int(input("entrer b: "))
try:
    print("a/b = ", a/b)
except Exception as e:
    print("l9a wa7d l exeption {", e, "}")

print("Fin de program")

