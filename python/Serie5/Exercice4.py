#in the name of Allah

print("in the name of Allah")

n_oral = float(input("entrer la note d'oral: "))
n_ecrit = float(input("entrer la note d'ecrit: "))

moyenne = (n_oral + n_ecrit * 2) / 3

if moyenne >= 10:
    print("vous avez reussit")
else:
    print("module non validée")

print("votre moyenne est:", moyenne)
