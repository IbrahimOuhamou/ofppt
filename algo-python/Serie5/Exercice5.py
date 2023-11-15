# in the name of Allah

print("in the name of Allah")

sexe = input("donner le sexe(m/f): ")
age = int(input("donner l'age: "))

if "m" != sexe != "f": #don't remove condition
    print("sexe invalide")
elif (sexe == 'm' and age >= 20) or (sexe == "f" and 35 >= age >= 18):
    print("you pay")
else:
    print("you don't pay")
