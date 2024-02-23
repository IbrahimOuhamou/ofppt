#in the name of Allah

print("in the name of Allah")

import re

regex_nom = "^[A-Z]{1}[a-zA-Z0-9_.-]{2,9}$"
regex_tel = "(06|07)[0-9]{8}"
regex_email = "^[a-zA-Z]+[a-zA-Z0-9_.-]+@[a-zA-Z]+[a-zA-Z_.-]+\.[a-zA-Z]{1,3}$"
regex_age = "[\d]{1,3}"

nom = input("votre nom: ")

if re.search(regex_nom, nom):
    print("assalamo alaykom", nom)
else:
    print("assalamo alaykom utulisateur")

email = input("votre email: ")

if re.search(regex_email, email):
    print("votre email est:", email)
else:
    print("invalid email", email)


